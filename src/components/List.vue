<template>
  <div class="list">
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
      @click="onClick(list.id)"
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
import { mapGetters, mapMutations } from 'vuex'
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
    ...mapMutations(['changeListIsChecked']),
    onClick(id) {
      this.changeListIsChecked(id)
    }
  },
  computed: mapGetters(['getIsListChecked']),
  props: {
    list: Object
  }
}
</script>

<style scoped>
.list {
  margin-bottom: 20px;
}

.rotated {
  transform: rotate(90deg);
}
</style>
