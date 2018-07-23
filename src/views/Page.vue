<template>
  <div id="page">
    <h3>{{ page.title }}</h3>
    <div class="credit">By {{ page.author.firstname }} {{ page.author.lastname }}. Last updated: <span v-html="returnDate(page.timestamps)"></span></div>
    <div id="post-body" v-html="page.body"></div>
  </div>
</template>

<script>
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
        $.getJSON(`https://www.theblog.io/service/v1/page/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/${this.$route.params.slug}/`, (response) => {
          this.page = response.page;
          $('#page').fadeIn('slow');
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
  display: none;
  padding: 50px;
  h1 {
    margin-top: 0;
  }
  img {
    max-width: 100%;
  }
}
</style>
