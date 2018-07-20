<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <header>
      John Patrick Given is a programmer living and working in Seattle, WA.
    </header>
    <section id="info">

    </section>
    <section id="content">
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    font-family: Inconsolata,monospace;
    box-sizing: border-box;
    min-height: 100vh;
  }
  body {
    /* background-image: url('./assets/me.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
  }
  #nav {
    display: none;
  }
  header {
    padding: 50px;
    background: #fff;
    display: none;
  }
</style>
