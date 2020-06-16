<template>
    <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section"
  >
    <v-layout row wrap class="main-container">
      <center-quote></center-quote>
      <v-flex tag="h1" class="headline main-container__cards-title">Votes</v-flex>
      <v-row>
        <v-col 
        cols="12"
        md="6"
        lg="4"
        v-for="person in getFigures"
        :key="person.name"
        >          <rule-card
        :person="person"
        ></rule-card>
        </v-col>
      </v-row>      
      <suggested-name></suggested-name>        
      <app-footer></app-footer>
    </v-layout> 
  </v-container>
</template>
<script>
import CenterQuote from './CenterQuote';
import RuleCard from './RuleCard';
import SuggestedName from './SuggestedName';
import AppFooter from './AppFooter';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RuleMain',
  components: {
    CenterQuote,
    RuleCard,
    SuggestedName,
    AppFooter
  },
  data() {
    return {
      users: {}
    }
  },
  computed: {
    ...mapGetters({
      getFigures: 'getFigures'
    }),
  },
  methods: {
    ...mapActions({
      fetchFigures: 'fetchFigures',
      createFigure: 'createFigure'
    }),
  },
  mounted() {
    this.fetchFigures();
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 5%;
  font-family: 'Lato', sans-serif;
  &__cards-title {
    font-weight: 300;
    font-size: 2em !important;
    margin-top: 3%;
    margin-bottom: 2%;;
  }
}
</style>