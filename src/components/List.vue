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
      :indeterminate="getIsListChecked(list.id) === 'indeterminate'"
      :checked="getIsListChecked(list.id)"
      @click="onClick"
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
      showItems: true
    }
  },
  components: {
    Item
  },
  methods: {
    onClick() {}
  },
  computed: mapGetters(['getIsListChecked']),
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
