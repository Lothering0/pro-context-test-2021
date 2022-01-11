<template>
  <div>
    <button
      class="hide_items"
      :class="{
        rotated: showItems
      }"
      @click="showItems = !showItems"
    >
      &gt;
    </button>

    <input
      type="checkbox"
      :indeterminate="true"
    >
    {{list.title}}

    <template v-if="showItems">
      <Item
        v-for="item in list.items"
        :item="item"
        :key="item.id"
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

<style scoped>
.rotated {
  transform: rotate(90deg);
}
</style>
