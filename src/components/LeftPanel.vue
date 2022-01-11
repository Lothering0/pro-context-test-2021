<template>
  <ul class="panel">
    <li
      v-for="list in getLists"
      :key="list.id"
    >
      <List :list="list" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import List from '@/components/List'

export default {
  name: 'LeftPanel',
  components: {
    List
  },
  computed: {
    ...mapGetters([
      'getLists'
    ])
  }
}
</script>

<style scoped>
</style>
