import { createStore } from 'vuex'

export default createStore({
 state: {
    User: {
        user:'',
        email:''
    },

    UserData:{},

    userCPF:{}
 },
 getters: {
  
 },
 mutations: {
    setUserEmail(state, data){
      state.User.user = data.user;
      state.User.email = data.email;
      
    },

    setUserData(state, data){
      state.UserData = data
    },

    setUserCPF(state, data){
      state.userCPF = data.CPF
    }
 },
 actions: {
 },
 modules: {
 }
})
