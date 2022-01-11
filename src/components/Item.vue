<template>
  <li class="item">
    <input
      type="checkbox"
      v-model="checked"
      @change="onChangeIsChecked"
    >
    {{item.title}}

    <input
      class="count"
      type="number"
      min="0"
      v-model="count"
      @change="onChangeCount"
    >

    <label
      class="color-box"
      :style="{background: item.color}"
    >
      <input
        type="color"
        v-model="color"
        @change="onChangeColor"
      >
    </label>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Item',
  data() {
    return {
      count: this.item.count ?? 0,
      color: this.item.color ?? '#000000',
      checked: this.item.checked ?? false
    }
  },
  props: {
    item: Object
  },
  watch: {
    'item.count'(value) {
      this.count = value
    }
  },
  methods: {
    ...mapMutations([
      'changeCount',
      'changeColor',
      'changeChecked'
    ]),
    onChangeCount() {
      this.changeCount({
        id: this.item.id,
        changedCount: this.count
      })
    },
    onChangeColor() {
      this.changeColor({
        id: this.item.id,
        changedColor: this.color
      })
    },
    onChangeIsChecked() {
      this.changeChecked({
        id: this.item.id,
        changedIsChecked: this.checked
      })
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  margin-left: 32px;
}

.count {
  margin-left: auto;
}

.color-box {
  width: 20px;
  height: 20px;
}

input[type="color"] {
  display: none;
}

input[type="number"] {
  width: 60px;
}
</style>
