import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import  Cookies from 'js-cookie'
// import axios from 'axios'


export default createStore({

  state: {
  
    user: null,
    authIsReady: false,
    failed: false,
    Horaies: [],
    Appointment: [],
    data: {},
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
  getters: {
    authIsReady: state => state.authIsReady,
    user: state => state.user,
    Horaries: state => state.Horaies,
    Appointment: state => state.Appointment,
    data: state => state.data,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      console.log('user state changed:', state.user)
    },
    setAuthIsReady(state, authIsReady) {
      state.authIsReady = authIsReady
      console.log('authIsReady state changed:', state.authIsReady)
    },
    setFailed(state, failed) {
      state.failed = failed
      console.log('failed state changed:', state.failed)
    },
    setHoraies(state, horaries) {
      state.Horaies = horaries
      console.log('horaries state changed:', state.Horaies)
    },
    setAppointment(state, appointment) {
      state.Appointment = appointment
      console.log('appointment state changed:', state.Appointment)
    },
    setData(state, data) {
      state.data = data
      console.log('data state changed:', state.data)
    }
  
  },
  actions: {
    async createUser(context, user)
    {
console.log(user)
      const reponse = await fetch("http://localhost/doctor/pasiens/create", {
        
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(response => response.json())
        .then(data => {
          console.log(data)
          if (data[0] === 200) {
            console.log(data[1])
            context.commit('setUser', Cookies.set('user', data[1]))
            context.commit('setAuthIsReady', true)
            context.commit('setFailed', false)
            console.log('user created')
          
       
            // save user to local storage using cookies plugin
            Cookies.set('authIsReady', true)
            Cookies.set('user', data[1])
       

       
          }
        })
    
    },
    async logoutUser(context) {
      context.commit('setUser', null)
      context.commit('setAuthIsReady', false)
   
      // remove key from cookies
      Cookies.remove
      Cookies.remove('authIsReady')
      // remove cookies from

    

      

      // Cookies.remove(key)
    },
    async loginUser(context, Reference) {
      fetch("http://localhost/doctor/pasiens/lgoin", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          // 'Content-Type': 'application/json'
        },
        body: JSON.stringify({Reference})
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data[0] === 'success') {
           
            context.commit('setUser', data[1])
            context.commit('setAuthIsReady', true)
            context.commit('setFailed', false)
            // save user to local storage using cookies plugin
            Cookies.set('user', data[1])
            Cookies.set('authIsReady', true)
            
          }
        }
      ).catch(error => {
        console.log(error);
        context.commit('setFailed', true)
        this.$router.push('/login')
      });
    },
   
  
    getUser(context, Reference) {
      fetch("http://localhost/doctor/Appointments/get/"+Reference, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          // 'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data[1]);
          if (data === 'success') { 
            context.commit('setData', data[1])
            Cookies.set('dataAppointment', data)
           
            
              // save data to local storage using cookies plugin
              
            // Cookies.set('user', data[1])
          }
          else {
            // Cookies.remove('data', null)
          }
        }
      ).catch(error => {
        console.log(error);
      
      }
      );
    }
      
      
  },
  modules: {

  }
})
