import { createStore } from 'vuex'

export default createStore({
  state: {
    lists: [
      {
        title: 'List 1',
        checked: false,
        items: [
          {
            title: 'Item 1',
            checked: false,
            count: 0,
            color: '#000000'
          },
          {
            title: 'Item 1',
            checked: false,
            count: 10,
            color: '#00F000'
          }
        ]
      },
      {
        title: 'List 1',
        checked: false,
        items: [
          {
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
  },
  actions: {
  },
  modules: {
  }
})
