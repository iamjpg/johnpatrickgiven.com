<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <section id="info">
      <div class="tagline">
        <h1>John Patrick Given</h1>
        <p>is a engineer developer living and working in Seattle, WA.</p>
      </div>
    </section>
    <section id="content">
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss">
  html, body {
    font-size: 18px;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    min-height: 100vh;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Julius Sans One', sans-serif;
  }
  #info {
    position: absolute;
    top: 0;
    right: 50%;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('./assets/me.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: grayscale(60%);

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
        margin: 20px 0;
      }

      p {
        font-size: 18px;
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
  }
</style>
