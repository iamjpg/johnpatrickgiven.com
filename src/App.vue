<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <section id="info">
      <div class="tagline">
        <h1>John Patrick Given</h1>
        <h5>is a software developer living and working in Seattle, WA.</h5>
      </div>
    </section>
    <section id="content">
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss">
  html, body {
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
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }
  #info {
    position: absolute;
    top: 0;
    right: 50%;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url('./assets/me.jpg');
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
  #nav {
    display: none;
  }
  #content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow-y: auto;
    background: url('./assets/crossword.png');
  }
</style>
