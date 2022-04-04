<template>
  <div class="navbar">
   <div x-data="{ open: false }" class="w-fullpt-10 text-gray-700 bg-cream">
        <div class="flex flex-col max-w-screen-xl  px-8 mx-auto md:items-center md:justify-between md:flex-row">
            <div class="flex flex-row items-center justify-between py-6">
                <div class="relative md:mt-8">
                    <a href="#" class="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline">Dr.Ibnahmad</a>
                    <svg class="h-11 z-40 absolute -top-2 -left-3" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z" fill="#65DAFF"/>
                    </svg>
                </div>
                <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                        <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            
            
            <nav :class="{ 'transform md:transform-none': !open, 'h-full': open }" class="h-0 md:h-auto flex flex-col flex-grow md:items-center pb-2 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 scale-y-0">
                <router-link to ="/" class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline">Home</router-link>
                <router-link  v-if="authIsReady" to ="/Appointment" class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" >Appointment</router-link>
                <router-link  v-if="authIsReady" to ="/allappointment" class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" >my Appointment</router-link>
                <router-link to ="/about" class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" >About Us</router-link>
                <button v-if="authIsReady"  @click="HandleLogout"  class="px-10 py-3 mt-2 text-sm text-center bg-red-500  text-white  md:mt-8 md:ml-4 btn">Logout </button>

                <router-link v-if="!authIsReady" to="/Login" class="px-10 py-3 mt-2 text-sm text-center bg-white text-gray-800  md:mt-8 md:ml-4 btn">Login </router-link>
                <router-link v-if="!authIsReady" to ="/Singup" class="px-10 py-3 mt-2 text-sm text-center bg-yellow-500 text-white md:mt-8 md:ml-4 btn" >Sign Up </router-link>
                
                <router-link v-if="user" to="/" class="px-10 py-3 mt-2 text-sm text-center   text-white  md:mt-8 md:ml-4 btn">
                <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" class=" floating flex-col flex-grow">
                    
                	<!-- <svg class="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C"/></g><rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white"/><path d="M74.5 54.425V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><path d="M83.125 63.9125V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><defs><filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="8"/><feGaussianBlur stdDeviation="20"/><feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg> -->
                    <!-- <h1 class="text-bold" >chof tbiba li3ndna f lma7al </h1> -->
                   <p v-if="authIsReady" class="text-l">Your UID is : <strong>{{user}}</strong></p>
				</div>
                 </router-link>

            </nav>
            <!-- {{authIsReady}} -->
        </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { get } from 'js-cookie';
import  Cookies from 'js-cookie'
import { mapGetters} from "vuex";
// @ is an alias to /src

// import {mapState} from '@/store/index.js'

// import {mapMutations} from 'vuex'

//  accses to valeus from store
// console.log(localStorage.getItem('user'));
// console.log(get('user'));
// console.log(Cookies.get('authIsReady'));
export default {
    name: 'NavBar',
    
    data(){
        return {
            // acsses to valeus from store
            // get value to localstorage
            // user: localStorage.getItem('user'),
            // user: '',
            // authIsReady: false,
        }
        //  accses to key cokies 
       
      
        
    },
  
    computed :{
...mapGetters(["authIsReady","user"])

//   authIsReady()
//             {
//               return Cookies.get('authIsReady')
//             },
//         user (){
//             return Cookies.get('user')
//         }
        },
    methods: {
        HandleLogout()
        {
            // console.log('logout');
            this.$store.dispatch('logoutUser')
            Cookies.remove('authIsReady')
            Cookies.remove('user')

            // this.$router.push('/login')
        }
    },
  
    mounted(){
        // this.user = localStorage.getItem('user')
        // this.user = Cookies.get('user')
        // this.authIsReady = Cookies.get('authIsReady')
        // console.log(this.user);
        // console.log("test",this.authIsReady);
        // this.user = this.$store.state.user
        // this.authIsReady = this.$store.state.authIsReady
        // console.log(this.user);
        // console.log("test",this.authIsReady);
    },
    // before Down component 
 
// created()    
// {


    created () {
         this.authIsReady = Cookies.get('authIsReady')
        // console.log(this.user);
        // console.log('aaaa',this.authIsReady);
        // console.log('before create');

    }
    
 
   




  
}
</script>

<style >
.btn{
    border-radius: 8px ;
}
</style>
