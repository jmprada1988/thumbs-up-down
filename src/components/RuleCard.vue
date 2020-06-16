<template>
  <v-card
    class="mx-auto card"
    max-width="300"
    v-if="person"
  >
    <v-img
      class="white--text align-end"
      height="400px"
      :src="person.picture"
    >
      <v-icon color=" white lighten-2 card__icon" :style="getVoteWin">{{`mdi-thumb-${person.upVotes > person.downVotes ? "up" : "down"}`}}</v-icon>
      <v-card-title class="card__name">
        {{person.name}}</v-card-title>
      <v-card-text class="card__text">
        <p>{{person.date + ` in ${person.market}`}}</p>
        <p>{{hasVoted ? 'Thank you for voting!!!' : person.description}}</p>
      </v-card-text>
      <v-card-actions class="card__vote">
        <v-btn class="card__vote-up">
          <v-icon @click="handleVote(person.id, 'upVotes', person.upVotes)" color="white lighten-2">mdi-thumb-up</v-icon>
        </v-btn>
        <v-btn class="card__vote-down">
          <v-icon @click="handleVote(person.id, 'downVotes', person.downVotes)"  color="white lighten-2">mdi-thumb-down</v-icon>
        </v-btn>
        <v-btn @click="hasVoted = !hasVoted" class="card__vote-action">
          {{hasVoted ? "Vote again" : 'Vote now'}}
        </v-btn>
      </v-card-actions>
    </v-img>
    <v-card-actions class="card__footer">
      <div
        color="orange"
        text
        class="positive"
        :style="getUpStyle"
      >
      <v-icon color="white lighten-2">mdi-thumb-up</v-icon>
      {{getUpVotes}}%
      </div>
      
      <div
        color="orange"
        text
        class="negative"
        :style="getDownStyle"
      >
      {{getDownVotes}}%
      <v-icon color="white lighten-2">mdi-thumb-down</v-icon>

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
      likedStyle: {
        'position': 'relative',
        'left': '-5px',
        'top' : '50px',
        'background-color': '#319E99',
        'width': '30px',
        'height': '30px',
        'margin-right': '5px'
      },
      unlikedStyle: {
        'position': 'relative',
        'left': '-5px',
        'top' : '50px',
        'background-color': '#B37915',
        'width': '30px',
        'height': '30px',
        'margin-right': '5px'
      },
      hasVoted: false      
    }
  },
  props: {
    person: {
      type: Object
    }
  },
  computed: {
    getVoteWin: function() {
      return this.person.upVotes > this.person.downVotes ? this.likedStyle : this.unlikedStyle
    },
    getUpStyle: function() {
      const style = {
        'width': `${this.person.upVotes}%`
      }
      return style;
    },
    getDownStyle: function() {
      const style = {
        'width': `${this.person.downVotes}%`
      }
      return style;
    },
    getUpVotes: function() {
      const { upVotes, downVotes } = this.person;
      let totalVotes = upVotes + downVotes;
      return Math.round((upVotes * 100) / totalVotes)
    },
    getDownVotes: function() {
      const { upVotes, downVotes } = this.person;
      let totalVotes = upVotes + downVotes;
      return Math.round((downVotes * 100) / totalVotes);
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
      this.hasVoted = !this.hasVoted
    }
  }
}
</script>

<style lang="scss" scoped>
.card { 
  &__name, &__text, &__vote {
    padding-left: 30px;
  }

  &__name {
    font-weight: 700;
    font-size: 2.5rem;
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
      background-color: #B37915 !important;
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
      i {
        min-height: 3rem;
        padding: .3rem;
      }
    }
    div.positive {
      background-color: #319E99;
    }
    div.negative {
      justify-content: flex-end;
      background-color: #B37915;
    }
    
    
  }
}
@media screen and (max-width: 600px) {
    .card {
      &__name {
        font-weight: 700;
        font-size: 1.5rem;
      }
    }
  }
</style>