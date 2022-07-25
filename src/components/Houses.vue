export default {
  data() {
    return {
      count: 0
    }
  }
}

<template>
  <div>
    <div class="houses-header">
      <h2>Houses</h2>
      <button class="primary-button"><img src="./icons/ic_plus_white.png"/><span>CREATE NEW</span></button>
    </div>
    <div class="houses-header">
      <div class="input-wrapper">
        <img src="./icons/ic_search.png" />
        <input type="search" placeholder="Search for a house"/>
      </div>
      <div class="tab">
        <button class="first-tab primary-button"><span>Price</span></button>
        <button class="last-tab tertiary-button"><span>Size</span></button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped>

.houses-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}

.input-wrapper {
  background-color: var(--color-input-background);
  box-sizing: content-box;
  padding: 2px 10px;
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-items: stretch;
  width: 320px;
}

.input-wrapper img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
}

.input-wrapper input {
  border: none;
  background: none;
  height: 100%;
  margin-left: 10px;
  flex-grow: 2;
}

.input-wrapper input:focus {
  outline: none;
}

</style>
