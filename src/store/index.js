import { createStore } from 'vuex'

function findItemById(state, id) {
  for (let list of state.lists) {
    try {
      return list
        .items
        .find(item => item.id === id)
    } catch (e) {}
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
            count: 0,
            color: '#000000'
          },
          {
            id: 2,
            title: 'Item 2',
            checked: false,
            count: 10,
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
            title: 'Item 1',
            checked: false,
            count: 0,
            color: '#000000'
          }
        ]
      }
    ]
  },
  mutations: {
    changeCount(state, { id, changedCount }) {
      findItemById(state, id).count = changedCount
    },
    changeColor(state, { id, changedColor }) {
      findItemById(state, id).color = changedColor
    },
  },
  actions: {
  },
  getters: {
    getLists: state => state.lists
  },
  modules: {
  }
})
