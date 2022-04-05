<template>
<div> 
  <nav>
   
    <NavBar  />
  </nav>
 
</div> 
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import { get } from 'js-cookie';
import  Cookies from 'js-cookie'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data(){
    return {
      data :[],
    }
  },
  beforeCreate() {
    console.log('beforeDestroy'+Cookies.get('user'));
    // set data into store
    this.$store.commit('setAuthIsReady', Cookies.get('authIsReady'));
    this.$store.commit('setUser', Cookies.get('user'));
  
    
  },
  HandleLogout()
  {
    console.log('logout');
    this.$store.dispatch('logoutUser')
    Cookies.remove('authIsReady')
    Cookies.remove('user')
  },
  
}
</script>

<style>


/*primary color*/
.bg-cream {
    background-color: #DADEE1;
    
}


/*font*/
body {
    font-family: 'Poppins', sans-serif;
    
}

.bg-yellow-500 {
    background-color: #F48C06;
}
.text-yellow-500 {
    color: #F48C06;
}
.floating { 
    animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
} 
@keyframes floating { 
    0% { transform: translate(0, 0px); } 
    50% { transform: translate(0, 8px); } 
    100% { transform: translate(0, -0px); }  
}
button{
    border-color: #2F327D;
} 
button:hover {
    box-shadow:inset -10.5rem 0 0 0 #2F327D ,inset 10.5rem 0 0 0 #2F327D;
    color: white;
    
}
.floating-4 { 
    animation-name: floating; 
    animation-duration: 4s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
} 
@keyframes floating-4 { 
    0% { transform: translate(0, 0px); } 
    50% { transform: translate(0, 8px); } 
    100% { transform: translate(0, -0px); }  
}
.text-darken {
    color: #2F327D;
}
nav {
  margin-top: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2F327D;
}
</style>
