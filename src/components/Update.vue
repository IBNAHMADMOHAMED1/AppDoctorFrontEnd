<template>
     <div class="general">

</div>
   <div class="ctn ">
      <div class="flex items-center sin mt-20">
      <div  class="flex-1 h-full max-w-4xl mx-auto bg-white  ">
 <div v-if ="failed" class="p-5 text-sm text-red-700 bg-red-100  dark:bg-red-200 dark:text-red-800" role="alert">
  <span class="font-medium">Danger</span> Change a few things up and try submitting again.
</div>
        
  <div class="flex flex-col md:flex-row">
    
          <div class="h-32 md:h-auto md:w-1/2">
            <img
              class="object-cover w-full h-full"
              src="../assets/img/3.jpg"
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
                 Add an appointment
                </h1>
                <div>
                  <label class="block text-sm"> Day </label>
                  <input
                
                    @change="HandlDate"  v-model="DateConsult"  :min="date_sys"
                    type="date"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Name"
                  />
                </div>
                <div  class="mt-4">
                  <label class="block text-sm"> Horaire </label>
               
                  <select 
                   @change="HandlHoraire"  v-model="Horaire"

                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
>
                    <option v-for="heure in heures" :key="heure.value" :disabled="!heure.status">{{heure.value}}</option>
                  </select>
                </div>
                <div class="mt-4">
                  <label class="block text-sm"> sujet </label>
                 
                  <textarea
                    v-model="TypeConsult"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"

                  
                  > 


                  </textarea>
                </div>
              
                
                <input type="submit" value="Book now" @click.prevent="UpdateAppointment" class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
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
import { computed, watch } from '@vue/runtime-core'
import { get } from 'js-cookie';
import  Cookies from 'js-cookie'
import { mapGetters} from "vuex";


import sweetalert2 from 'sweetalert2';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';


export default {
    name:'update',
   data() {
    return {
      DateConsult: "",
      Horaire :"",
      TypeConsult: "",
      Reference:Cookies.get('user'),
      UpdateData: [],
      
      
      
      Appointments:[
      ],
      date_sys : new Date().toISOString().slice(0,10),
      heures:[
        {
          "value" : "08:00:00",
          "status" : true
        },
        {
          "value" : "09:00:00",
          "status" : true
        },
        {
          "value" : "10:00:00",
          "status" : true
        },
        {
          "value" : "11:00:00",
          "status" : true
        },
        {
          "value" : "14:00:00",
          "status" : true
        },
        {
          "value" : "15:00:00",
          "status" : true
        },
        {
          "value" : "16:00:00",
          "status" : true
        },
        {
          "value" : "17:00:00",
          "status" : true
        }
      ]
    
    };
  },
methods:{
 

    HandlDate(){
        // acsses to function in the watch
        console.log(this.DateConsult);
     
        
       fetch("http://localhost/doctor/Appointments/findAppointment/"+this.DateConsult)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        if (data[1] === 'error') {
          console.log(this.heures);
        }
        else if (data[0] === 'success'){
        //  alert("vous avez déja un rendez-vous a cette date");
          // console.log(data[1][0].Horaire);
          // console.log(this.heures[0].value);
          // console.log(this.heures[0].value==data[1][0].Horaire);
          console.log(data[1]);
          for (var i = 0; i <this.heures.length; i++) {
            for (var j = 0; j <data[1].length;j++) {
               if (this.heures[i].value == data[1][j].Horaire) {
              this.heures[i].status = false;
              

            }

            }
           
          }
          
        }
       
       
        });
     

        
    },

    HandlHoraire () {
      // console.log("horaire",this.Horaire);
    },
UpdateAppointment(){
  const Appointment = {
    DateConsult: this.DateConsult,
    Horaire: this.Horaire,
    sujet: this.TypeConsult,

    Reference: Cookies.get('user'),
   
  };
  console.log(Appointment);
  console.log(this.$route.params.id);
 
  fetch('http://localhost/doctor/Appointments/update/'+this.$route.params.id, {
    method: 'UPDATE',
    headers: {
      'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
     
    },
    body: JSON.stringify(Appointment),
  }).then(response => response.json())
    .then(data => {
      console.log(data);
      if (data === 'success'){
        alert("Votre rendez-vous a été modifié avec succès");
        this.$router.push('/allappointment');
      }
    })
}


  //ajouter un rendez voous par reference:
},
    computed: {
      ...mapGetters(['Appointment']),
    },

    mounted() {
        
        console.log(this.$route.params.id);
        fetch("http://localhost/doctor/Appointments/find/"+this.$route.params.id)
        .then(response => response.json())
        .then(data =>
        {
         
          this.DateConsult = data[1].DateConsult;
          this.Horaire = data[1].Horaire;
          this.TypeConsult = data[1].sujet;
        }).then(()=>{
      
         
          
        });
     
     
      
    }
 
    

    
};
</script>
