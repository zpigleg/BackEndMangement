import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
  state:{
    list:[1,5,8,10,30,50],
    count:0
  },
  mutations:{
    increment (state,n=1){
      state.count += n;
    },
    decrease (state,n=1){
      state.count -= n;
    }
  },
  getters:{
    filteredList:state =>{
      return state.list.filter(item => item < 10);
    }
  }


})

export default store
