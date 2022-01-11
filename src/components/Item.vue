<template>
  <li class="item">
    <input type="checkbox">
    {{item.title}}
    <input
      class="count"
      type="number"
      min="0"
      :value="item.count"
    >
    <label
      class="color-box"
      :style="{background: item.color}"
    >
      <input type="color">
    </label>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: Object
  }
}
</script>

<style scoped>
.item {
  display: flex;
  margin-left: 20px;
}

.count {
  margin-left: auto;
}

.color-box {
  width: 20px;
  height: 20px;
}

input[type="color"] {
  display: none;
}

input[type="number"] {
  width: 60px;
}
</style>
