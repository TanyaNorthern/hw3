<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="dashboard" class="route-link">Dashboard</router-link>
        <router-link to="about" class="route-link">About</router-link>
        <router-link to="notfound" class="route-link">Not Found</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
      <button @click="goToPage">About</button>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  methods: {
    goToPage () {
      this.$router.push({
        name: 'about',
        params: {
          a: 'qwerty'
        }
      })
    }
  },
  mounted () {
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
}
header {
  font-size: 22px;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.route-link {
  margin: 0 5px;
}
</style>
