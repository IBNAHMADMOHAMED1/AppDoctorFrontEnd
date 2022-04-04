<template>
 <div class="bg-cream">
		<div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
			<!--Left Col-->
			<div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
				<h1 data-aos="fade-right" data-aos-once="true" class="my-4 text-5xl font-bold leading-tight text-darken">
					<span class="text-yellow-500">Meet the</span> Best Hospital
				</h1>
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal text-2xl mb-8">We know how large objects will act, 
but things on a small scale.</p>
				<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
					<button class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-md py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						Appointment
					</button>
					<button class="lg:mx-0 border-2 border-blue-300 text-b text-xl font-bold rounded-md py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						View Doctors
					</button>
				</div>
			</div>
			<!--Right Col-->
			<div class="w-full mt-10 lg:w-6/12  relative" id="girl">
				<img data-aos="fade-up" data-aos-once="true" class="w-10/12  mx-auto 2xl:-mb-15" src="../assets/img/4.png" />
				<!-- calendar -->
				
				<!-- red -->
				<div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating">
                    
                	<svg class="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C"/></g><rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white"/><path d="M74.5 54.425V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><path d="M83.125 63.9125V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"/><defs><filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="8"/><feGaussianBlur stdDeviation="20"/><feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
                    <!-- <h1 class="text-bold" >chof tbiba li3ndna f lma7al </h1> -->
				</div>
				<!-- ux class -->
				<div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating">
					<img class="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28" src="../assets/img/usx.svg" alt="">
				</div>
				<!-- congrats -->
              
				
			</div>
		</div>
		<div class="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
			<svg class="xl:h-40 xl:w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
			</svg>
			<div class="bg-white w-full h-20 -mt-px"></div>
		</div>
			<div data-aos="flip-up" class="max-w-xl mx-auto text-center mt-24">
			<h1 class="font-bold text-darken my-3 text-2xl">Leading  <span class="text-yellow-500">Medicine</span></h1>
			<p class="leading-relaxed text-gray-500">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics .</p>
		</div>
		<div class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">

    <!-- trusted by -->
    <div class="max-w-4xl mx-auto">
        <h1 class="text-center mb-3 text-gray-400 font-medium">Trusted by 5,000+ Companies Worldwide</h1>
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
            <!-- <img class="h-7" src="">
            <img class="h-7" src="../../assets/img/Closed Eye.png">
            <img class="h-7" src="../../assets/img/Clinic.png">
            <img class="h-7 transform translate-y-2" src="../../assets/img/Schizophrenia.png"> -->
            <!-- <img class="h-7" src="img/company/facebook.svg">
            <img class="h-7" src="img/company/grab.svg"> -->
        </div>
    </div>
</div>

	</div>
</template>
<script>
import { computed } from '@vue/runtime-core'

export default {
  name: "Home",
  data() {
	  return {
		   user: localStorage.getItem('user')
	  }
  }
  
};
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
button {
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

</style>
