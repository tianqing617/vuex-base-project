import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  mutations: {

  },
  actions: {

  }
})
