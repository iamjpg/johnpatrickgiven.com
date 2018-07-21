<template>
  <div class="home">
    <div class="item" v-for="(post, index) in allPosts.posts" v-bind:key="`post-${index}`" v-on:click="navigateToPost(post)">
      <h3>{{ post.title }}</h3>
      <p v-html="returnDate(post.timestamps)"></p>
      <p v-html="returnPreview(post)"></p>
      <ul v-if="post.tags.length > 0">
        <li v-for="(tag, i) in post.tags" v-bind:key="`tag-${i}`" v-on:click.stop="navigateToTagList(tag)">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    components: {

    },
    mounted() {
      this.returnPosts();
    },
    data() {
      return {
        allPosts: {
          blog: {
            name: '',
            uid: ''
          },
          tags: {
            all_tags: []
          },
          posts: [{
            author: {

            },
            title: '',
            included_medium: [],
            tags: [],
            preview: '',
            slug: '',
            timestamps: {
              created_at: '',
              published_date_override: '',
              updated_at: '',
            }
          }]
        }
      }
    },
    methods: {
      returnPosts: function() {
        const self = this;
        $.getJSON('https://www.theblog.io/service/v1/posts/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/all', function(response) {
          // console.log(JSON.parse(JSON.stringify(response)))
          self.allPosts = response;
          var time = 0;
          requestAnimationFrame(function() {
            $('.post').each(function(i, o) {
              setTimeout( function(){ self.animatePosts($(o)); }, time)
              time += 50;
            })
          })
        })
      },
      returnDate: function(timestamps) {
        return `Written on ${moment(timestamps.created_at).format('MM/DD/YYYY')}`;
      },
      returnPreview: function(post) {
        return post.preview.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
      },
      navigateToPost: function(post) {
        this.$router.push({ name: 'post', params: { slug: post.slug }})
      },
      navigateToTagList: function(tag) {
        console.log(tag)
      }
    }
  }
</script>

<style lang="scss">
  .home {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
  }
  .item {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    background: #f5f5f5;
    overflow: hidden;
    cursor: pointer;

    h3 {
      margin-top: 0;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      float: left;
      margin-right: 4px;
      background: #fff;
      padding: 3px 6px;
      border-radius: 3px;
      font-size: 16px;
      cursor: pointer;
    }

    li:hover {
      background: #f5f5f5;
      color: blue;
    }

  }
  @media (max-width: 768px) {
    .home {
      grid-template-columns: 100%;
    }
  }
  @media (max-width: 414px) {
    .home {
      grid-template-columns: 100%;
    }
  }
</style>
