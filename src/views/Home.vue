<template>
  <div class="home">
    <div class="item" v-for="(post, index) in allPosts.posts" v-bind:key="`post-${index}`" v-on:click="navigateToPost(post)">
      <h3>{{ post.title }}</h3>
      <p class="ts" v-html="returnDate(post.timestamps)"></p>
      <p v-html="returnPreview(post)"></p>
      <ul v-if="post.tags.length > 0">
        <li v-for="(tag, i) in post.tags" v-bind:key="`tag-${i}`" v-on:click.stop="navigateToTagList(tag)">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HomeStore from '@/data/HomeStore'
  window.HomeStore = HomeStore
  import debounce from 'debounce'
  import Helpers from '@/helpers/helpers'
  export default {
    name: 'home',
    components: {

    },
    mounted() {
      this.returnPosts();
      // this.endlessScrollInit();
      PubSub.subscribe('LOAD_MOAR', () => {
        this.getMoar();
      })
    },
    data() {
      return HomeStore
    },
    methods: {
      returnPosts: function(append=false) {
        console.log(0)
        const self = this;
        const elem = document.querySelector('.home')
        fetch(`https://www.theblog.io/service/v1/posts/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/all?page=${this.page}`).then(function(response) {
          return response.text()
        }).then(function(body) {
          console.log(body)
          const response = JSON.parse(body)
          console.log(1)
          if (!append) {
            self.allPosts = response;
            self.initialPostsReturned = true;
            Helpers.fadeIn(elem)
          } else {
            response.posts.forEach((o) => {
              self.allPosts.posts.push(o)
            })
          }
          // if IE11 - it hates everything about grid detection
          if (!!window.MSInputMethodContext && !!document.documentMode) {
            elem.style.display = 'block'
            elem.style.opacity = 1
          } else {
            elem.style.display = (CSS && CSS.supports && CSS.supports('display', 'grid')) ? 'grid' : 'block'
          }
          
        })
      },
      returnDate: function(timestamps) {
        return `Posted ${moment(timestamps.created_at).fromNow()}`;
      },
      returnPreview: function(post) {
        return post.preview.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
      },
      navigateToPost: function(post) {
        this.page = 1;
        requestAnimationFrame(() => { this.$router.push({ name: 'post', params: { slug: post.slug }}) })
      },
      getMoar: debounce(function() {
        this.page = this.page + 1;
        if (document.querySelectorAll('.item').length === this.allPosts.number_available) return false;
        this.returnPosts(true);
      }, 500, true)
    }
  }
</script>

<style lang="scss">
  .home {
    opacity: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    overflow-x: hidden;
    display: none;
  }
  .ts {
    margin-top: -24px;
    margin-bottom: 0;
    font-size: 14px;
  }
  .item {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    background: #e6e5e5;
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
      margin-bottom: 4px;
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
