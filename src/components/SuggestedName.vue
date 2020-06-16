<template>
<v-row class="cover"
>
  <v-col
  cols="12"
  md="6"
  class="cover__text"
  >
  <p>Is there anyone else you would want us to add?</p>

  </v-col>
  <v-col 
  cols="12"
  md="6"
  class="cover__submit"
  >
    <button>Submit a Name</button>
  </v-col>
</v-row>
</template>
<script>
export default {
  name: "SuggestedName"
}
</script>
<style lang="scss" scoped>
.cover {
  background: url("https://source.unsplash.com/random") repeat;
  opacity: .8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &__text {
    display: flex;
    align-content: center;
    p {
      margin: 0px;
      font-size: 1.6rem;
      font-weight: 300;
    }
  }
  &__submit {
    display: flex;
    align-content: center;
    justify-content: flex-end;
    button {
      padding: .6rem 2rem;
      margin-right: 5%;
      border: 1.5px black solid;
      font-size: 1.1rem;
      font-weight: 700;
    }
    button:hover {
      background-color: #eee;
    }
  }
}
</style>