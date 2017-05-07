<template lang="html">
  <div class="content">
    <div class="container">
      <div class="search-container">
        <input class="search-input"
        @keyup.enter="requestData"
        placeholder="Search in the SW world"
        type="search" name="search"
        v-model="package"
        >
        <button class="search-button" @click="requestData">Find</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
