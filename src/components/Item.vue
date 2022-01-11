<template>
  <li>
    {{item.title}}
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

<style>
</style>
