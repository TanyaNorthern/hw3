<template>
  <div id="app">
    <div class="header">My Personal Costs: {{ totalCost }}</div>
    <main>
      <AddPaymentForm @add-payment="addPayment" :categoryList="categoryList"/>
      <PaymentsDisplay @select-page="selectPage" :paymentsList="paymentsList" show txt="text"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay
  },
  computed: {
    ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchCategoryData', 'fetchData', 'addNewPayment', 'fetchPageData']),
    ...mapMutations(['ADD_PAYMENT']),
    addPayment (data) {
      this.addNewPayment(data)
    },
    selectPage (page) {
      this.fetchPageData(page)
    }
  },
  created () {
    this.fetchData()
    this.fetchCategoryData()
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin: 50px 20px;
  .header {
    font-size: 24px;
  }
}
</style>
