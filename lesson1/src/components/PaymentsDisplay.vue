<template>
  <div>
    <div :class="$style.payment_display">
      <div :class="$style.payment_display_title" v-for="(item, index) in getTitle()" :key="'t' + index">{{ item }}</div>
      <div :class="$style.payment_display_item" v-for="(item, index) in getFlatPaymentList()" :key="index">{{ item }}</div>
    </div>
    <div>
      <button @click="selectPage" name="page1">1</button>
      <button @click="selectPage" name="page2">2</button>
      <button @click="selectPage" name="page3">3</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    },
    show: Boolean
  },
  methods: {
    getTitle () {
      const flatList = []
      flatList.push('#')
      flatList.push('Date')
      flatList.push('Category')
      flatList.push('Value')
      return flatList
    },
    getFlatPaymentList () {
      const flatList = []
      let number = 1
      for (const payment of this.paymentsList) {
        flatList.push(number++)
        flatList.push(payment.date)
        flatList.push(payment.category)
        flatList.push(payment.value)
      }
      return flatList
    },
    addPayment (index, payment) {
      return `${index} ${payment.date} ${payment.category} ${payment.value}`
    },
    selectPage (event) {
      this.$emit('select-page', event.target.name)
    }
  }
}
</script>

<style lang="scss" module>
.payment_display {
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 50px 150px 150px 70px;
  row-gap: 5px;
  &_title {
    padding-top: 5px;
    font-weight: bold;
  }
  &_item {
    border-top: 1px solid black;
    padding-top: 5px;
  }
}
</style>
