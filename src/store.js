import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,

    name: 'jim',
    age: 18,
    sex: 'F',

    cars: [{
      id: 1,
      name: 'Audi',
    }, {
      id: 2,
      name: 'BMW',
    }, {
      id: 3,
      name: 'Benz',
    }]
  },
  getters: {
    // 如果多个组件都需要state中的计算的数据，可以在vuex中声明getters
    // getters相当于组件中的computed，但可以多个组件共用getters计算属性
    info: state => {
      return `我的名字是: ${state.name}, 我今年: ${state.age}岁, 我的性别是: ${state.sex}`;
    },
    cars: state => {
      const names = state.cars.map(item => item.name);
      return names.toString();
    },

    // getter也可以返回一个函数，来实现给getter传参
    getCarById: state => id => {
      return state.cars.find(item => item.id == id);
    },
  },
  // 注意：Mutation 必须是同步函数，异步处理使用actions
  mutations: {
    decrement(state) {
      state.count -= 1;
    },
    increment (state, params) {
      state.count += parseInt(params.num);
    },
  },
  // 说明：
  // 1. Action 提交的是 mutation，而不是直接变更状态。
  // 2. Action 可以包含任意异步操作。
  actions: {
    decrementAsync ({ commit }) {
      setTimeout(() => {
        commit('decrement')
      }, 1000)
    },
  }
})
