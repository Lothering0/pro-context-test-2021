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
      :indeterminate="getIsIndeterminateList(list.id)"
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
import { mapGetters } from 'vuex'
import Item from '@/components/Item'

export default {
  name: 'List',
  data() {
    return {
      showItems: true,
      indeterminate: true
    }
  },
  components: {
    Item
  },
  computed: mapGetters(['getIsIndeterminateList']),
  mounted() {
    console.log(this.getIsIndeterminateList(this.list.id))
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
