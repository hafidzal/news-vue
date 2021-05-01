import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e';
// const url = 'https://icanhazdadjoke.com';
const headers = { Accept: 'application/json' };

export default new Vuex.Store({
  state: {
    news: 'hehe',
    currentHeadline: 'this is headline',
    visitedHeadline: [],
  },
  mutations: {
    setVisitedHeadline(state, payload) {
      state.currentHeadline = payload;
      state.visitedHeadline.push(payload);
    },
    setNews(state, payload) {
      state.news = payload;
    },
  },
  actions: {
    // for async
    async setNews(state) {
      const api = await fetch(url, { headers });
      const news = await api.json();
      state.commit('setNews', news.articles);
    },
  },
  modules: {
  },
  getters: {
    getCurrentHeadline: (state) => state.currentHeadline,
    getNews: (state) => state.news,
  },
});
