<template>
<div id="app">
  <div id="nav">
    <a href="#" class="menu-toggle" v-on:click="toggleMenu()"> <span></span> <span></span> <span></span> </a>
  </div>
  <div id="menu">
    <h3><router-link to="/">Home</router-link></h3>
    <h3 v-for="(page, index) in pages" v-bind:key="`page-${index}`">
      <router-link v-bind:to="`/page/${page.slug}`">{{ page.title }}</router-link>
    </h3>
  </div>
  <main>
    <section id="info">
      <div class="tagline">
        <h1>John Patrick Given</h1>
        <h5>is a software developer living and working in Seattle, WA.</h5>
      </div>
    </section>
    <section id="content">
      <router-view/>
    </section>
  </main>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tags: {
          all_tags: []
        },
        pages: [{
          title: '',
          slug: ''
        }]
      }
    },
    mounted() {
      this.$router.afterEach(() => {
        this.toggleMenu(true)
      })
      this.getPages();
    },
    methods: {
      toggleMenu: function(force=false) {
        const nav = $('.menu-toggle')
        const menu = $('#menu')
        
        if (nav.hasClass('close') || force) {
          nav.removeClass('close')
          menu.removeClass('open')
        } else {
          nav.addClass('close')
          menu.addClass('open')
        }
      },
      getPages: function() {
       $.getJSON('https://www.theblog.io/service/v1/pages/74bf4cdf-7cea-42d4-b90a-849837332ddb/82SiwywTe1EtU7DMz-p3/all', (response) => {
         // console.log(JSON.parse(JSON.stringify(response)))
         this.tags = response.tags;
         this.pages = response.pages;
       })
     }
    }
  }
</script>

<style lang="scss">
body,
html {
    font-size: 22px;
    color: #222;
    margin: 0;
    padding: 0;
    font-family: 'PT Sans Narrow', sans-serif;
    box-sizing: border-box;
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 150%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Oswald', sans-serif;
}
.menu-toggle {
    width: 24px;
    height: 53px;
    position: absolute;
    left: 23px;
    top: 3px;
    transition: cubic-bezier(.22,.61,.36,1);
    z-index: 110;
}
.menu-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transition: all 0.125s ease-out;
}
.menu-toggle span:first-child {
    top: 19px;
    width: 90%;
}
.menu-toggle span:nth-child(2) {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.menu-toggle span:nth-child(3) {
    bottom: 18px;
    width: 80%;
}
.menu-toggle.close span:first-child {
    opacity: 0;
    visibility: hidden;
}
.menu-toggle.close span:nth-child(2) {
    top: 50%;
    -webkit-transform: rotate(45deg) translateY(-50%);
    transform: rotate(45deg) translateY(-50%);
}
.menu-toggle.close span:nth-child(3) {
    bottom: 50%;
    -webkit-transform: rotate(-45deg) translateY(50%);
    transform: rotate(-45deg) translateY(50%);
    width: 100%;
}
#menu {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 40px 5% 40px calc(5% + 80px);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: #000;
  opacity: .9;
  z-index: 100;
  color: #fff;
  display: none;

  a {
    color: #fff;
  }

  a:hover {
    text-decoration: none;
  }

}
#menu.open {
  bottom: 0;
  display: block;
}
#info {
    position: absolute;
    top: 0;
    right: 50%;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/me.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    .tagline {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        text-align: center;
        text-shadow: 1px 1px 1px #000;

        h1 {
            font-size: 54px;
            margin: 30px 0;
        }

        h5 {
            font-size: 18px;
            margin: 0;
            font-weight: 200;
        }

    }

}
#content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow-y: auto;
    background: url("./assets/crossword.png");
}
</style>
