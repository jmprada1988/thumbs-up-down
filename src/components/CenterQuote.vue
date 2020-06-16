<template>
  <v-row no-gutters class="qoute">
    <v-col sm="11">
      <v-row>
        <v-col
        cols="12"
        sm="12"
        md="4"
        lg="3"
        >
          <h2>Speak Out. Be heard <strong>Be Counted</strong> </h2>
        </v-col>
        <v-col
        sm="12"
        md="8"
        lg="9"
        >
          The English phrase rule of thumb refers to a principle with broad application that is not intended to be strictly accurate or reliable for every situation. It refers to an easily learned and easily applied procedure or standard, based on practical experience rather than theory. 
        </v-col>
      </v-row>
    </v-col>
    <v-col
    cols="12"
    md="1"
    >
    <v-icon class="close-icon">mdi-close</v-icon>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'CenterQuote'
}
</script>
<style lang="scss" scoped>
  .qoute {
    background-color: #EBEBEB;
    color: #BABABA;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
  }
  .close-icon {
    position: relative;
    top: 35px;
    left: 25px;
  }
  @media screen and (max-width: 600px) {
    .close-icon {
      position: absolute;
      top: 50px;
      left: 88%;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 1000px)  {
    .close-icon {
      position: absolute;
      top: 5%;
      left: 90%;
    }
  }
</style>