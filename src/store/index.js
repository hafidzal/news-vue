import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const token = '1f5aea3b8fa34823aa7a8a82d2ee4d3a';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}`;
const urlListSource = `https://newsapi.org/v2/sources?apiKey=${token}`;
const headers = { Accept: 'application/json' };

export default new Vuex.Store({
  state: {
    news: '',
    currentHeadline: '',
    visitedHeadline: [],
    selectedHeadline: '',
    searchResult: [],
    filterList: [],
    filteredResult: '',
    source: '',
  },
  mutations: {
    setVisitedHeadline(state, payload) {
      state.currentHeadline = payload;
      state.visitedHeadline.push(payload);
    },
    setNews(state, payload) {
      const source = payload.map((src) => src.source);
      state.news = payload;
      state.source = source;
    },
    setSelectedHeadline(state, payload) {
      state.selectedHeadline = payload;
    },
    changeHeadlineTitle(state, payload) {
      const newHeadlineTitle = state.news.find((a) => a.title === state.selectedHeadline);
      newHeadlineTitle.title = payload;
    },
    setSearch(state, payload) {
      state.searchResult = payload;
    },
    setFilterList(state, payload) {
      state.filterList = payload;
    },
    setFilteredResult(state, payload) {
      // const fil = state.news.map((as) => as.source);
      // const filt = fil.filter((y) => y.name.includes(payload));
      const fil = state.news.filter((o) => Object.values(o.source).some((b) => b === payload));
      console.log('fil: ', fil);
      state.news = fil;
    },
  },
  actions: {
    // for async
    async setNews(state) {
      const newsApi = await axios.get(url);
      const listApi = await axios.get(urlListSource);

      const news = newsApi.data;
      const list = listApi.data;

      state.commit('setNews', news.articles);
      state.commit('setFilterList', list.sources);
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
    async setSearch(state, payload) {
      const api = await fetch(`https://newsapi.org/v2/top-headlines?q=${payload}&apiKey=099148be22804e849a0c6fe022b7cf5e`, { headers });
      const result = await api.json();
      state.commit('setSearch', result.articles);
    },
    async setFilteredResult(state, payload) {
      state.commit('setFilteredResult', payload);
    },
    // async setFilterList(state) {
    // // const api = await fetch(urlListSource, { headers });
    // // const result = await api.json();
    // // state.commit('setFilterList', result.sources);

    //   axios.get(urlListSource)
    //     .then((response) => {
    //       console.log('res; ', response);
    //       state.commit('setFilterList', response.data.sources);
    //     });
    // },
  },
  modules: {
  },
  getters: {
    getCurrentHeadline: (state) => state.currentHeadline,
    getNews: (state) => state.news,
    getSelectedHeadline: (state) => state.selectedHeadline,
    getVisitedHeadline: (state) => state.visitedHeadline,
    getSearchResult: (state) => state.searchResult,
    getFilterList: (state) => state.filterList,
  },
});
