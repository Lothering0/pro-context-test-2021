<template>
  <ul>
    <li
      v-for="list in lists"
      :key="list.name"
    >
      {{list.title}}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LeftPanel',
  mounted() {
    console.log(this.$store)
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