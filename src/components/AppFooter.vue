<template>
<v-row class="footer">
  <v-col
  cols="12"
  md="6"
  lg="6"
  class="footer__policy"
  >
  <router-link to="/">Terms and Conditions</router-link>
  <router-link to="/">Privacy Policy</router-link>
  <router-link to="/">Contact Us</router-link>
  </v-col>
  <v-col
  cols="12"
  md="6"
  lg="6"
  class="footer__social"
  >
  <router-link to="/">Follow Us</router-link>

  <v-icon size="24px" v-for="icon in icons" :key="icon">{{icon}}</v-icon>
  </v-col>
</v-row>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
      ],
      year: new Date().getUTCFullYear()
    }
  },
}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  align-content: space-between;
  min-height: 15vh;
  padding: 0px;
  &__policy {
    display: flex;
    align-items: flex-start;
    color: #BABABA;
    a {
      text-decoration: none;
      padding-right: 10px;
      color: inherit;
      font-size: .8rem;
    }
  }
  &__social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #BABABA;
    a {
      text-decoration: none;
      padding-right: 10px;
      color: inherit;
      font-size: .8rem;
    }
  }
}
</style>