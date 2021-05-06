import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const token = '671a19c4b28c40808acac74045cf38aa';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}`;
const urlListSource = `https://newsapi.org/v2/sources?apiKey=${token}`;
const urlWrong = `https://newsapi.org/v2/sources?${token}`;
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
    loading: false,
    wrongApi: '',
  },
  mutations: {
    loading(state, payload) {
      state.loading = payload;
    },
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
    setSearch(state, payload) {
      state.searchResult = payload;
    },
    setFilterList(state, payload) {
      state.filterList = payload;
    },
    setFilteredResult(state, payload) {
      const filtered = state.news.filter((o) => Object.values(o.source).some((s) => s === payload));
      state.filteredResult = filtered;
    },
    setWrongApi(state, payload) {
      state.wrongApi = payload;
    },
  },
  actions: {
    // for async
    async setNews(state) {
      state.commit('loading', true);

      const newsApi = await axios.get(url);
      const listApi = await axios.get(urlListSource);

      const news = newsApi.data;
      const list = listApi.data;

      state.commit('setNews', news.articles);
      state.commit('loading', false);
      state.commit('setFilterList', list.sources);
      state.commit('loading', false);
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
      state.commit('loading', true);
      const api = await fetch(`https://newsapi.org/v2/top-headlines?q=${payload}&apiKey=099148be22804e849a0c6fe022b7cf5e`, { headers });
      const result = await api.json();
      state.commit('setSearch', result.articles);
      state.commit('loading', false);
    },
    async setFilteredResult(state, payload) {
      state.commit('setFilteredResult', payload);
    },
    async setWrongApi(state) {
      state.commit('loading', true);

      const api = await axios.get(urlWrong);

      const wrongApi = api.data;

      state.commit('setWrongApi', wrongApi);
      state.commit('loading', false);
    },
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
    getFilterResult: (state) => state.filteredResult,
    loading: (state) => state.loading,
  },
});
