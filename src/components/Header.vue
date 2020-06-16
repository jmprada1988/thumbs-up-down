<template>
  <v-card
    class="mx-auto"
    height="100vh"
    width="100%"
  >
    <v-navigation-drawer
      absolute
      dark
      :src="getMainFigure.picture"
      width="100%"
      permanent
      class="header"
    >
      <v-row class="">
        <v-col
        cols="12"
        md="4"
        lg="4"
        class="header__home"
        >
        <h2>Rule of Thumb</h2>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
        cols="12"
        md="8"
        lg="8"
        class="header__links"
        >
          <router-link v-for="route in renderRoutes" :key="route.name" :to="route.path">{{route.name}}</router-link>
          <v-btn color="transparent">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="headline">
        <v-col
        cols="12"
        md="6"
        lg="6"
        class="headline__item"
        >
        <rule-card-headline :person="getMainFigure"></rule-card-headline>
        </v-col>
        <v-col
        cols="12"
        md="6"
        lg="6"
        ></v-col>
      </v-row>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import { allRoutes } from '../router/routes';
import RuleCardHeadline from './RuleCardHeadline';
import { mapGetters } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
      allRoutes: [],
      items: [
        ['mdi-email', 'Inbox'],
        ['mdi-account-supervisor-circle', 'Supervisors'],
        ['mdi-clock-start', 'Clock-in'],
      ],
    }
  },
  components: {
    RuleCardHeadline
  },
  computed: {
    renderRoutes: () => [...allRoutes],
    ...mapGetters({
      getMainFigure: 'getMainFigure'
    }),
  }
}
</script>
<style lang="scss" scoped>

.header {
  padding-top: 3%;
  font-family: 'Lato', sans-serif;
  color: #fff;
  &__home {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-family: 'Lato', sans-serif;
      font-weight: 600;
      color: #FFF;
      font-size: 1.8rem;
    }
  }
  &__links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 20%;
    a {
      text-decoration: none;
      color: #fff;
    }
    button {
      box-shadow: none !important;
    }
  }
  .headline {
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 2%;
    }
  }

}
@media screen and (max-width: 600px) {
    .max-auto {
     height: 60vh;
    }
  }
</style>