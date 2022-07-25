export default {
  data() {
    return {
      count: 0
    }
  }
}

<template>
  <header>
    <nav>
      <a href="/#"><img src="./icons/img_logo_dtt.png" /></a>
      <ul>
        <li><a href="/#houses" class="active">Houses</a></li>
        <li><a href="/#about">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

nav li a.active {
  font: var(--dtt-f-active-menu);
  color: var(--color-menu-active);
}

nav li a {
  font: var(--dtt-f-header-inactive-menu);
  color: var(--color-menu-inactive);
}

</style>
