<template>
<div id="app">
  <div id="nav">
    <!-- router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link -->
    <a href="#" class="menu-toggle" data-wpel-link="internal"> <span></span> <span></span> <span></span> </a>
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
    z-index: 7;
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
