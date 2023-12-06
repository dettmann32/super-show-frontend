import { createStore } from 'vuex'

export default createStore({
 state: {
    User: {
        user:'',
        email:''
    }
 },
 getters: {
  
 },
 mutations: {
    setUserEmail(state, data){
      state.User.user = data.user;
      state.User.email = data.email;
      
    }
 },
 actions: {
 },
 modules: {
 }
})
