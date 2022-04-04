<template>
<div class="flex items-center justify-center ">
  <div class="px-4 lg:py-12">
    <div class="lg:gap-4 lg:flex">
      <div
        class="flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 class="font-bold text-blue-600 text-9xl">404</h1>
        <p
          class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
          <span class="text-red-500">Oops!</span> Page not found
        </p>
        <p class="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>
        <button
          @click="BackHome"
          class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >Go Back</button>
      </div>
      <div class="mt-4">
        <img
        src="../assets/img/fontfound.svg"
          alt="img"
          class="object-cover w-30 h-30"
        />
      </div>
    </div>
  </div>
    </div>
</template>

<script>


export default ({
    name: 'NotFound',

    methods: {
        BackHome() {
            this.$router.go(-1)
        }
    }
})
   

</script>

<style >
      .text-3xl{
      font-size: 4rem;
      }
      @media(max-width: 645px){
      .text-9xl{
      font-size: 5.75rem;
      }
      .text-6xl{
      font-size: 1.75rem;
      }
      .text-2xl {
      font-size: 1rem;
      line-height: 1.2rem;
      }
      .py-8 {
      padding-top: 1rem;
      padding-bottom: 1rem;
      }
      .px-6 {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      }
      .mr-6{
      margin-right: 0.5rem;
      }
      .px-12 {
      padding-left: 1rem;
      padding-right: 1rem;
      }
      }
    </style>
