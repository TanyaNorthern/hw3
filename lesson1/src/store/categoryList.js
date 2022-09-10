export default {
  state: {
    categoryList: []
  },
  mutations: {
    SET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    }
  },
  getters: {
    categoryList: (state) => state.categoryList
  },
  actions: {
    fetchCategoryData ({ commit }) {
      setTimeout(
        () => {
          const initialCategoryList = ['Food', 'Transport', 'Education', 'Sport']
          commit('SET_CATEGORY_LIST', initialCategoryList)
        }, 1100)
    }
  }
}
