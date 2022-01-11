import { createStore } from 'vuex'

function findItemById(state, id) {
  for (const list of state.lists) {
    const value = list
      .items
      .find(item => item.id === id)

    if (value) return value
  }
}

export default createStore({
  state: {
    lists: [
      {
        id: 1,
        title: 'List 1',
        checked: false,
        items: [
          {
            id: 1,
            title: 'Item 1',
            checked: false,
            count: 10,
            color: '#000000'
          },
          {
            id: 2,
            title: 'Item 2',
            checked: true,
            count: 40,
            color: '#00F000'
          }
        ]
      },
      {
        id: 2,
        title: 'List 2',
        checked: false,
        items: [
          {
            id: 3,
            title: 'Item 3',
            checked: true,
            count: 5,
            color: '#FF7800'
          }
        ]
      }
    ]
  },
  mutations: {
    decrementCount(state, id) {
      findItemById(state, id).count--
    },
    changeCount(state, { id, changedCount }) {
      findItemById(state, id).count = changedCount
    },
    changeColor(state, { id, changedColor }) {
      findItemById(state, id).color = changedColor
    },
    changeChecked(state, { id, changedIsChecked }) {
      findItemById(state, id).checked = changedIsChecked
    }
  },
  getters: {
    getLists: state => state.lists,
    getIsListChecked: state => id => {
      const currentItems = state
        .lists
        .find(list => list.id === id)
        .items

      const value = currentItems
        .filter(item => item.checked)

      if (value.length === currentItems.length) return true

      return value.length > 0 && value.length < currentItems.length
        ? 'indeterminate'
        : false
    }
  }
})
