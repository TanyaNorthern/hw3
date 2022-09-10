const API_DATA = {
  page1: [
    {
      date: '28.3.2020',
      category: 'Food',
      value: 169
    },
    {
      date: '24.3.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '24.3.2020',
      category: 'Food',
      value: 532
    }
  ],
  page2: [
    {
      date: '29.3.2020',
      category: 'Sport',
      value: 1090
    },
    {
      date: '29.3.2020',
      category: 'Sport',
      value: 200
    },
    {
      date: '24.3.2020',
      category: 'Sport',
      value: 876
    }
  ],
  page3: [
    {
      date: '28.5.2020',
      category: 'Food',
      value: 34
    },
    {
      date: '24.5.2020',
      category: 'Transport',
      value: 3660
    },
    {
      date: '24.5.2020',
      category: 'Food',
      value: 700
    }
  ]
}

export default {
  state: {
    currentPage: 'page1',
    paymentsList: []
  },
  mutations: {
    SET_PAYMENT_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENT (state, payment) {
      state.paymentsList.push(payment)
    }
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    totalCost: ({ paymentsList }) => paymentsList.reduce((total, { value }) => total + value, 0)
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(
        () => {
          this.state.currentPage = 'page1'
          const initialPaymentList = API_DATA.page1
          commit('SET_PAYMENT_LIST', initialPaymentList)
        }, 1100)
    },
    fetchPageData ({ commit, state }, page) {
      if (this.state.currentPage !== page) {
        this.state.currentPage = page
        commit('SET_PAYMENT_LIST', API_DATA[this.state.currentPage])
      }
    },
    addNewPayment ({ commit }, payment) {
      commit('ADD_PAYMENT', payment)
    }
  }
}
