<template>
  <div class="panel">
    <ul>
      <li
        class="list"
        v-for="list in getLists"
        :key="list.id"
      >
        {{list.title}}

        <ul
          class="items"
          v-for="item in list.items"
          :key="item.id"
        >
          <li
            class="item"
            v-for="i in item.count"
            :key="i"
            :style="{
              background: item.color
            }"
          >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RightPanel',
  computed: mapGetters([
    'getLists'
  ])
}
</script>

<style scoped>
.list {
  padding: 7px 4px;

  border: 1px solid black;
}

.items {
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 5px;

  margin: 10px 0;
}

.item {
  width: 20px;
  height: 20px;
}
</style>