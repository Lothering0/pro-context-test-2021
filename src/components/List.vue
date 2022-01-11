<template>
  <div>
    <button class="hide_items" @click="showItems = !showItems">&gt;</button>
    <input type="checkbox">
    {{list.title}}
    <template v-if="showItems">
      <Item
        v-for="item in list.items"
        :item="item"
        :key="item.title"
      />
    </template>
  </div>
</template>

<script>
import Item from '@/components/Item'

export default {
  name: 'List',
  data() {
    return {
      showItems: true
    }
  },
  components: {
    Item
  },
  props: {
    list: Object
  }
}
</script>

<style>
</style>