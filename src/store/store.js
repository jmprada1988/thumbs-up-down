import Vue from 'vue';
import Vuex from 'vuex';
const fb = require('../firebase/firebaseConfig')

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [],
    current_user: {},
    isLoggedIn: null,
    hasVotedForUSer: null,
    selectedFigure: {}
  },
  actions: {
    fetchFigures({commit}) {
      fb.figuresCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
        let figures = [];
        querySnapshot.forEach(doc => {
          let figure = doc.data();
          figure.id = doc.id
          figures.push(figure);
        })
        commit('SET_FIGURES', figures)
        commit('SET_MAIN_FIGURE', figures[0])
      })
    },
    createFigure({commit}) {
      fb.figuresCollection.add(
        {
          createdOn: new Date(),
          name: 'Mark Zuckerberg',
          date: (new Date().toLocaleTimeString()),
          picture: 'https://source.unsplash.com/2600x1800/?mark-suckerberg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex vitae metus tempus dapibus at in turpis. Aliquam non risus auctor.',
          upVotes: 66, 
          downVotes: 34,
          market: 'Business'
        }
      ).then(ref => {
        commit('ADD_FIGURE', ref)
        console.log(ref)
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateFigure({commit}, data) {
      const id = data.id;
      const val = data.upVotes ? { upVotes: data.upVotes } : { downVotes: data.downVotes }
      fb.figuresCollection.doc(id).update(val);
      commit('UPDATE_FIGURE', data)
    }

  },
  mutations: {
    SET_FIGURES(state, data) {
      state.users = data
    },
    ADD_FIGURE(state, data) {
      state.users = [...data, state.users]
    },
    UPDATE_FIGURE(state, data) {
      const figure = state.users.find(fig => fig.id === data.id)
      const key = Object.keys(data)[1];
      const vals = Object.values(data)[1];
      figure[key] = vals
      state.selectedFigure = figure
    },
    SET_MAIN_FIGURE(state, data) {
      state.selectedFigure = data;
    },
    SET_HAS_VOTED(state) {
      state.hasVotedForUSer = true
    }
  },
  getters: {
    getFigures: state => state.users.length ? state.users : [],
    getMainFigure: state => state.selectedFigure,
    hasVoted: state => !!state.hasVotedForUSer
  }
})