<template>
  <div>
    <div class="header">My Personal Costs: {{ totalCost }}</div>
    <AddPaymentForm @add-payment="addPayment" :categoryList="categoryList"/>
    <PaymentsDisplay @select-page="selectPage" :paymentsList="paymentsList" show txt="text"/>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'

export default {
  name: 'Dashboard',
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

<style scoped>
.header {
  font-size: 24px;
}
</style>
