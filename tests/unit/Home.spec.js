import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/views/Home.vue';
import Spinner from 'vue-simple-spinner';
// import Vuetify from 'vuetify'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false,
    news: '',
    currentHeadline: '',
  },
});

describe('Home.vue', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(Home, {
      store,
      localVue,
    });
  });

  it('should not render spinner on mount', () => expect(component.findComponent(Spinner).exists()).to.be.false);
});
