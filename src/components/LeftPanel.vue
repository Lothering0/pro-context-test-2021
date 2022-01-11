<template>
  <ul>
    <li
      v-for="{title, items} in lists"
      :key="title"
    >
      {{title}}
      <Item
        v-for="item in items"
        :item="item"
        :key="item.title"
      />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import Item from '@/components/Item'

export default {
  name: 'LeftPanel',
  components: {
    Item
  },
  computed: mapState({
    lists: state => state.lists
  })
}
</script>

<style scoped>
ul li {
  margin-left: 20px;
}
</style>
