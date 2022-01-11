<template>
  <ul class="panel">
    <li
      v-for="list in lists"
      :key="list.id"
    >
      <List :list="list" />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import List from '@/components/List'

export default {
  name: 'LeftPanel',
  components: {
    List
  },
  computed: mapState({
    lists: state => state.lists
  })
}
</script>

<style scoped>
</style>
