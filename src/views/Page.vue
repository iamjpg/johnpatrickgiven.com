<template>
  <div id="page">
    <h1>{{ page.title }}</h1>
    <div class="credit">Last updated: <span v-html="returnDate(page.timestamps)"></span></div>
    <div id="post-body" v-html="page.body"></div>
  </div>
</template>

<script>
  import Helpers from '@/helpers/helpers'
  export default {
    data() {
      return {
        page: {
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
    mounted() {
      this.getPage();
    },
    methods: {
      getPage: function() {
        const self = this
        fetch(`https://www.theblog.io/service/v1/page/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/${this.$route.params.slug}/`).then(function(response) {
          return response.text()
        }).then(function(body) {
          const response = JSON.parse(body)
          self.page = response.page;
          Helpers.fadeIn(document.querySelector('#page'))
        })
      },
      returnDate: function(timestamps) {
        return moment(timestamps.updated_at).format('MM/DD/YYYY');
      }
    }
  }
</script>

<style lang="scss">
#page {
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
