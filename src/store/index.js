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
          },
          {
            id: 3,
            title: 'Item 3',
            checked: true,
            count: 3,
            color: '#9141AC'
          },
          {
            id: 4,
            title: 'Item 4',
            checked: false,
            count: 15,
            color: '#C01C28'
          }
        ]
      },
      {
        id: 2,
        title: 'List 2',
        checked: false,
        items: [
          {
            id: 5,
            title: 'Item 5',
            checked: true,
            count: 5,
            color: '#FF7800'
          },
          {
            id: 6,
            title: 'Item 6',
            checked: false,
            count: 17,
            color: '#1C71D8'
          },
          {
            id: 7,
            title: 'Item 7',
            checked: true,
            count: 5,
            color: '#33D17A'
          },
          {
            id: 8,
            title: 'Item 8',
            checked: false,
            count: 20,
            color: '#3D3846'
          },
          {
            id: 9,
            title: 'Item 9',
            checked: false,
            count: 11,
            color: '#77767b'
          },
          {
            id: 10,
            title: 'Item 10',
            checked: true,
            count: 1,
            color: '#62A0EA'
          }
        ]
      },
      {
        id: 3,
        title: 'List 3',
        checked: false,
        items: [
          {
            id: 11,
            title: 'Item 11',
            checked: false,
            count: 5,
            color: '#FFA348'
          },
          {
            id: 12,
            title: 'Item 12',
            checked: false,
            count: 10,
            color: '#99C1F1'
          },
          {
            id: 13,
            title: 'Item 13',
            checked: false,
            count: 13,
            color: '#ED333B'
          },
          {
            id: 14,
            title: 'Item 14',
            checked: false,
            count: 20,
            color: '#F8E45C'
          },
          {
            id: 15,
            title: 'Item 15',
            checked: false,
            count: 0,
            color: '#CDAB8F'
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
    },

    changeListIsChecked(state, id) {
      const currentList = state
        .lists
        .find(list => list.id === id)

      currentList.checked = !currentList.checked

      currentList
        .items
        .map(item => item.checked = currentList.checked)
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
