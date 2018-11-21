<template>
  <div id="post">
    <back-btn />
    <h1>{{ post.title }}</h1>
    <div class="credit">Posted on <span v-html="returnDate(post.timestamps)"></span></div>
    <div id="post-body" v-html="post.body"></div>
  </div>
</template>

<script>
  import BackBtn from '@/components/BackBtn'
  import Helpers from '@/helpers/helpers'
  export default {
    data() {
      return {
        post: {
          title: "",
          preview: "",
          slug: "",
          body: "",
          included_medium: [ ],
          author: {
            username: "",
            firstname: "",
            lastname: ""
          },
          timestamps: {
            created_at: "",
            updated_at: "",
            published_date_override: null
          }
        }
      }
    },
    components: {
      'back-btn': BackBtn
    },
    mounted() {
      this.getPost();
    },
    methods: {
      getPost: function() {
        const self = this
        fetch(`https://www.theblog.io/service/v1/post/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/${this.$route.params.slug}/`).then(function(response) {
          return response.text()
        }).then(function(body) {
          const response = JSON.parse(body)
          self.post = response.post;
          Helpers.fadeIn(document.querySelector('#post'))
        })
      },
      returnDate: function(timestamps) {
        return window.moment(timestamps.created_at).format('MM/DD/YYYY');
      }
    }
  }
</script>

<style lang="scss">
#post {
  opacity: 0;
  padding: 40px;
  h1 {
    margin-top: 0;
    margin-bottom: 10px;
  }
  img {
    max-width: 100%;
  }
  .credit {
    font-size: 14px;
  }
}
</style>
