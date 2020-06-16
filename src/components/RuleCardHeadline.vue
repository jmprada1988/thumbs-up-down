<template>
  <v-card
    class="mx-auto card"
    max-width="500"
    v-if="person"
  >
    <v-img
      class="white--text align-start"
      height="400px"
    > 
      <v-card-title class="card__name">
        <p>What's your opinion on</p>        
        {{person.name}}?</v-card-title>
      <v-card-text class="card__text">
        <p class="card__text--desc">{{person.description}}</p>
        <v-btn class="white--text card__text--btn" depressed left light>
          <v-icon>mdi-wordpress</v-icon>
          More information
        </v-btn>
        <p class="card__text--quest">What's Your Verdict?</p>
      </v-card-text>
    
    </v-img>
    <v-card-actions class="card__footer">
      <div
        color="orange"
        text
        class="positive"
      >
      <v-icon @click="handleVote(person.id, 'upVotes', person.upVotes)" color="white lighten-2">mdi-thumb-up</v-icon>
      </div>
      
      <div
        color="orange"
        text
        class="negative"
      >
      <v-icon @click="handleVote(person.id, 'downVotes', person.downVotes)" color="white lighten-2">mdi-thumb-down</v-icon>

      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'RuleCard',
  data() {
    return {
      voted: null,
      vote: {
        up: null,
        down: null
      }
    }
  },
  props: {
    person: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      updateFigure: 'updateFigure'
    }),
    handleVote(id, key,val) {
      const payload = {};
      payload.id = id;
      payload[key] = ++val;
      this.updateFigure(payload)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.card { 
  background-color: #5C5C5E !important;
  opacity: .8 !important;
  &__name, &__text, &__vote {
    padding-left: 30px;
  }

  &__name {
    font-weight: 700;
    font-size: 3rem;
    p {
      font-size: 1rem;
      font-weight: 300;
      margin-top: 2em;
    }
  }
  &__text {
    &--desc {
      padding-top: 1rem;
    }
    &--btn {
      text-decoration: underline;
      background-color: transparent !important;
      padding: 0px !important;
      text-transform: none;
      span {
        text-decoration: none;
        i {
          border: none;
        }
      }
    }
    &--quest {
      padding-top: 2rem;
    }
  }

  &__vote {
    padding-left: 4rem;
    button {
      border-radius: 0px;
      padding: 0px;
      min-width: 30px !important;
    }
    button:active {
      border: 1px #fff solid;
    }
    &-up {
      background-color: #319E99 !important;
      width: 40px;
      
    }
    &-down {
      background-color: $vote-color-up !important;
      width: 40px;
    }
    &-action {
      background-color: transparent !important;
      border: 1px #fff solid;
      color: #fff;
      text-transform: none;
    }
  }
  &__footer {
    color: #FFF;
    padding: 0px;
    margin: 0px;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 0 .5rem 0 .5rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i {
        min-height: 4rem;
        padding: .3rem;
      }
    }
    div.positive {
      background-color: #319E99;
    }
    div.negative {
      background-color: #B37915;
    }
    
    
  }
}
</style>