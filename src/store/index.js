import { createStore } from 'vuex'

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
      for (let list of state.lists) {
        try {
          list
            .items
            .find(item => item.id === id)
            .count = changedCount
        } catch (e) {}
      }
    }
  },
  actions: {
  },
  getters: {
    getLists: state => state.lists
  },
  modules: {
  }
})
