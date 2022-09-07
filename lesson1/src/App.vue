<template>
  <div id="app">
    <div class="header">My Personal Costs</div>
    <main>
      <AddPaymentForm @add-payment="addPayment"/>
      <PaymentsDisplay :paymentsList="paymentsList" show txt="text"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay
  },
  data: () => ({
    paymentsList: []
  }),
  methods: {
    fetchPaymentsData () {
      return [
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
      ]
    },
    addPayment (data) {
      this.paymentsList.push(data)
    }
  },
  created () {
    setTimeout(() => { this.paymentsList = this.fetchPaymentsData() }, 2000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px 20px;
  .header {
    font-size: 24px;
  }
}
</style>
