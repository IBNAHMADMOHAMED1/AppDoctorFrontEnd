<template >
  <!-- <NavBar /> -->
    <div class="login">
        <div class="flex items-center mt-20 sin">
      <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg ">
    <div v-if ="failed" class="p-5 text-sm text-red-700 bg-red-100  dark:bg-red-200 dark:text-red-800" role="alert">
  <span class="font-medium">Notice</span> Your reference not correct try again.
</div>
        <div class="flex flex-col md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
            <img
              class="object-cover w-full h-full"
              src="../assets/img/login.jpg"
              alt="img"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-10  ">
  <div class="max-w-md w-full space-y-8 bg-white">
    <div class="">
     <div class="relative md:mb-4">
                  <a
                    href="#"
                    class="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                    >Dr.Ibnahmad</a
                  >
                  <svg
                    class="h-11 z-40 absolute -top-2 -left-3"
                    viewBox="0 0 79 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
                      fill="#65DAFF"
                    />
                  </svg>
                </div>
    </div>
     <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">Use your Reference </h2>
    <form class="mt-8 space-y-6" @submit.prevent="handelSubmit">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Reference UID</label>
          <input id="email-address" v-model="Reference" name="email" type="text" autocomplete="non" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Use your Reference">
        </div>
        
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
          </div>
        </div>
      </div>
        

    </div>
     
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { computed } from '@vue/runtime-core'
import Cookies from 'js-cookie'
import { mapGetters} from "vuex";

export default {
    name : 'LoginView',
    components: {
        NavBar
    
    },
    data() {
        return {
            Reference: '',
            failed: '',
          
            
        }
    },
    methods : {
      handelSubmit(){
          // console.log(this.Reference);
        const process=  this.$store.dispatch('loginUser',this.Reference)
        .then(() => {  
             if (Cookies.get('authIsReady') === 'true') {
                this.failed = false;
                this.$router.push('/')
                this.authIsReady = true;
             }
              else if (Cookies.get('authIsReady') === 'false') {
                  this.failed = true;
              }
            })
            
            
      
        }
    },

        computed :{
...mapGetters(["authIsReady","user"])
        }
    
    
}
</script>
<style >

body{
      background-color: #dadee1;
}
    
</style>