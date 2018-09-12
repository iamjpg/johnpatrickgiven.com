<template>
<section id="tags-container">
  <h3>Posts Tagged with {{ this.$route.params.tag }}</h3>
  <div class="post" v-for="(post, index) in allPosts.posts" v-bind:key="`post-${index}`" v-on:click="goToPost(post)">
    <router-link v-bind:to="`/post/${post.slug}`">{{ post.title }}, written on <span v-html="returnDate(post.timestamps)"></span></router-link>
    <ul v-if="post.tags.length > 0">
      <li>Filed Under:</li>
      <li v-for="(tag, i) in post.tags" v-bind:key="`tag-${i}`">{{ tag }}</li>
    </ul>
  </div>
</section>
</template>

<script>
export default {
  name: 'home',
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
  mounted() {
    this.returnPosts();
  },
  methods: {
    returnPosts: function() {
      const self = this;
      fetch(`https://www.theblog.io/service/v1/posts/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/tags/${this.$route.params.tag}/`).then(function(response) {
        return response.text()
      }).then(function(body) {
        const response = JSON.parse(body)
        self.allPosts = response;
        $('#tags-container').fadeIn('slow')
      })
    },
    animatePosts: function(elem) {
      elem.addClass('moved')
    },
    returnDate: function(timestamps) {
      return moment(timestamps.created_at).format('MM/DD/YYYY');
    },
    goToPost: function(post) {
      this.$router.push({
        name: 'post',
        params: {
          slug: post.slug
        }
      })
    }
  }
}
</script>

<style lang="scss">
#tags-container {
  display: none;
  padding: 50px;
  h1 {
    margin-top: 0;
  }
  img {
    max-width: 100%;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      display: inline-block;
      margin-right: 10px;
      font-size: 13px;
      background: #f5f5f5;
      border-radius: 3px;
      padding: 1px 5px;
    }
  }
}
</style>
