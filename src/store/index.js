import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e';
// const url = 'https://icanhazdadjoke.com';
const headers = { Accept: 'application/json' };

export default new Vuex.Store({
  state: {
    news: '',
    currentHeadline: '',
    visitedHeadline: [],
    selectedHeadline: '',
  },
  mutations: {
    setVisitedHeadline(state, payload) {
      state.currentHeadline = payload;
      state.visitedHeadline.push(payload);
    },
    setNews(state, payload) {
      state.news = payload;
    },
    setSelectedHeadline(state, payload) {
      state.selectedHeadline = payload;
    },
    changeHeadlineTitle(state, payload) {
      const newHeadlineTitle = state.news.find((a) => a.title === state.selectedHeadline);
      newHeadlineTitle.title = payload;
    },
  },
  actions: {
    // for async
    async setNews(state) {
      const api = await fetch(url, { headers });
      const news = await api.json();
      state.commit('setNews', news.articles);
    },
    async setSelectedHeadline(state, payload) {
      state.commit('setSelectedHeadline', payload);
    },
    async changeHeadlineTitle(state, payload) {
      state.commit('changeHeadlineTitle', payload);
    },
    async setVisitedHeadline(state, payload) {
      state.commit('setVisitedHeadline', payload);
    },
  },
  modules: {
  },
  getters: {
    getCurrentHeadline: (state) => state.currentHeadline,
    getNews: (state) => state.news,
    getSelectedHeadline: (state) => state.selectedHeadline,
    getVisitedHeadline: (state) => state.visitedHeadline,
  },
});
