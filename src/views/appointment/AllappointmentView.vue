<template>
    <div>
        <div class="main flex flex-col m-5 mt-12">
  <div class="header">
    <div class="text-2xl font-bold text-gray-600 mb-4 mb-8 font-bold text-blue-600 text-4xl  ">Your Appointments </div>
  </div>
  <div v-for="appointment in Appointments" :key="appointment.id" target="_new">
    <div class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-400 border mb-3 hover:border-gray-500 ">
      <div class="left">
        <div class="header text-blue-600 font-semibold text-1xl">Horaire : {{appointment.Horaire}}  </div>
        <div class="header text-blue-600 font-semibold text-1xl">Date : {{appointment.DateConsult}}  </div>
         <div class="header text-blue-500 font-semibold text-1xl">sujet : {{appointment.sujet}}  </div>
        <div class="desc text-gray-600">{{appointment.text}}</div>
      </div>
      <div class="right m-auto mr-0">
        <div class="icon flex gap-4">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg> -->
          <a @click="deleteAppointment(appointment.id)" > <i class="fa-solid fa-trash h-8 w-8 fa-2xl  cursor-pointer" style="color:#e11d48;" ></i></a>

          <a @click="UpdateAppointment(appointment.id)" class="cursor-pointer"> <i class="fa-solid fa-edit h-10 w-10 fa-2xl text-green-400"  ></i></a>
          
        </div>
      </div>
      
    </div>
  </div>
</div>
    <div v-if="Appointments.length <=0">
     
      <div class="flex items-center justify-center ">
    <div class="px-4 lg:py-12">
        <div class="lg:gap-4 lg:flex">
            <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
                <h1 class="mb-8 font-bold text-blue-600 text-5xl">No Appointments</h1>
                <p class="mb-8 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                    <span class="text-red-500">Oops!</span> You don't have any appointment
                </p>
                <p class="mb-8 text-center text-gray-500 md:text-lg">
                    The page you’re looking for doesn’t exist.
                </p>
                <button @click="BackBook" class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">Go
                    Book </button>
            </div>
            <div class="mt-4 w-80">
                <img src="../../assets/img/fontfound.svg" alt="img" class="object-cover w-30 h-30" />
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
</template>
<script>

import { computed, watch } from '@vue/runtime-core'
import { get } from 'js-cookie';
import  Cookies from 'js-cookie'
import { mapGetters} from "vuex";
import { axios } from "axios";
import { get as get_cookie } from "js-cookie";

export default {
   
   data() {
       return {
          Reference:Cookies.get('user'),
           Appointments:[],
       }
   },
   methods:{
     BackBook()
     {
      this.$router.push('/Appointment');
     },
      deleteAppointment(id)
      {
        fetch('http://localhost/doctor/Appointments/delete/'+id, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             'Content-Type': 'application/json'

          },
          body: JSON.stringify({
            id: id,
          }),
        })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
         this.Appointments.splice(this.Appointments.indexOf(id),1);
        })
      },

      UpdateAppointment(id)
      {
        this.$router.push('/Appointment/update/'+id);
      },
     
   },


      mounted() {
        console.log('mounted');
      fetch('http://localhost/doctor/Appointments/get/'+this.Reference)
      .then(response => response.json())
      .then(data => this.Appointments=[...data]);
     
    
    },
    beforeCreate() {
      console.log(this.Reference);
      fetch('http://localhost/doctor/Appointments/get/'+Cookies.get('user'))
      .then(response => response.json())
      .then(data => this.Appointments=[...data]);
     
    
    },
    
    
}
</script>
<style>
    
</style>