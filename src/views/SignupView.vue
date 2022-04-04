<template>
  <div class="singup">
      
    <div class="flex items-center sin mt-20">
      <div  class="flex-1 h-full max-w-4xl mx-auto bg-white  ">
 <div v-if ="failed" class="p-5 text-sm text-red-700 bg-red-100  dark:bg-red-200 dark:text-red-800" role="alert">
  <span class="font-medium">Danger</span> Change a few things up and try submitting again.
</div>
        
  <div class="flex flex-col md:flex-row">
    
          <div class="h-32 md:h-auto md:w-1/2">
            <img
              class="object-cover w-full h-full"
              src="../assets/img/reg.jpg"
              alt="img"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <div class="flex justify-center mb-20">
                <div class="relative md:mt-8">
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
              <form>
                <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                  Sign up
                </h1>
                <div>
                  <label class="block text-sm"> Nom </label>
                  <input
                    v-model="nom"
                    type="text"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Name"
                  />
                </div>
                <div class="mt-4">
                  <label class="block text-sm"> Prenom </label>
                  <input
                    v-model="prenom"
                    type="text"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Name"
                  />
                </div>
                <div class="mt-4">
                  <label class="block text-sm"> Email </label>
                  <input
                    v-model="email"
                    type="email"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Email Address"
                  />
                </div>
                <div class="mt-4">
                  <label class="block text-sm"> Tele </label>
                  <input
                    v-model="tele"
                    type="tel"  name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Telephone"
                  />
                </div>
                
                <input type="submit" value="Sign up" @click.prevent="handleSubmit" class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
/>
<!-- {{failed}} -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { computed } from '@vue/runtime-core';

import {useRouter} from 'vue-router'
import {store} from 'vuex'
import Cookies from 'js-cookie'



export default {
  name: "SignupView",
    data() {
        return {
        nom: "",
        prenom: "",
        email: "",
        tele: "",
        failed: false,
        
        authIsReady: this.$store.state.authIsReady,
        }; 
    },
    methods: {
        handleSubmit() {
            const user = {
            Nom: this.nom,
            Prenom: this.prenom,
            Email: this.email,
            Tele: this.tele
            };
            // console.log(user);
            // fetch("http://localhost/doctor/pasiens/create", {
            // method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify(user)
            // }).then(response => {
            // console.log(response);
            // if (response.status === 200) {
            //     alert("Successfully created user!");
            //     this.$router.push('/')
            //     this.authIsReady = true;
            // } else {
            //     // alert("Failed to create user!");
            //     this.failed = true;
            // }
            
            // })
            
            
        const response=  this.$store.dispatch('createUser', user)
            .then(() => {
              if (response) {
                alert("Successfully created user!");
                this.$router.push('/')
                this.authIsReady = true;
              } else {
                this.failed = true;
              }
            })
            
            
        },
    

    },
   

};
</script>

<style>
.singup {
  background-color: #dadee1;
}
.sin{
    margin-bottom: 100px;
}
</style>
