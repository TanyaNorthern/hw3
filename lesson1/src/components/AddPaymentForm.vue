<template>
  <div>
    <div :class="$style.add_payment_form">
      <button :class="$style.add_payment_form_hide_btn" @click="setHideBtnTitle">{{ hideBtnTitle }}</button>
      <div :class="$style.add_payment_form_container" v-if="show">
        <input type="text" :class="$style.add_payment_form_txt" placeholder="Date" v-model="date">
        <select  :class="$style.add_payment_form_txt" v-model="category">
          <option v-for="category in categoryList" :value="category" :key="category">{{ category }}</option>
        </select>
        <input type="text" :class="$style.add_payment_form_txt" placeholder="Value" v-model="value">
        <div :class="$style.add_payment_form_add_btn_container">
          <button :class="$style.add_payment_form_add_btn" @click="addPayment">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    show: false,
    hideBtnTitle: '',
    value: '',
    category: '',
    date: ''
  }),
  methods: {
    setHideBtnTitle (event) {
      this.show = !this.show
      this.hideBtnTitle = this.show ? 'Hide' : 'Add New Cost'
    },
    addPayment () {
      console.log('addPayment')
      const { value, category, date } = this
      const data = {
        value: Number(value),
        category,
        date: date || this.currentDate
      }
      this.$emit('add-payment', data)
    }
  },
  mounted () {
    this.date = this.currentDate
    this.hideBtnTitle = 'Add New Cost'
    this.show = false
  },
  computed: {
    currentDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style lang="scss" module>
.add_payment_form {
  margin-top: 20px;
  &_hide_btn {
    width: 100px;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
    margin-bottom: 7px;
  }
  &_container {
    display: flex;
    flex-direction: column;
  }
  &_txt {
    width: 200px;
    margin-bottom: 5px;
  }
  &_add_btn_container {
    width: 208px;
    text-align: right;
  }
  &_add_btn {
    width: 100px;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
  }
}
</style>
