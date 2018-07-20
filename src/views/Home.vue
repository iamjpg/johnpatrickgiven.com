<template>
  <div class="home">
    <div class="item" v-for="(post, index) in allPosts.posts" v-bind:key="`post-${index}`">
      {{ post.title }}, written on <span v-html="returnDate(post.timestamps)"></span>
      <ul v-if="post.tags.length > 0">
        <li>Filed Under:</li>
        <li v-for="(tag, i) in post.tags" v-bind:key="`tag-${i}`">{{ tag }}</li>
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
        return moment(timestamps.created_at).format('MM/DD/YYYY');
      },
    }
  }
</script>

<style lang="scss">
  .home {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 4px;
  }
  .item {
    width: 100%;
    padding: 50px;
    box-sizing: border-box;
    background: #f5f5f5;
  }
  @media (max-width: 768px) {
    .home {
      grid-template-columns: 50% 50%;
    }
  }
  @media (max-width: 414px) {
    .home {
      grid-template-columns: 100%;
    }
  }
</style>
