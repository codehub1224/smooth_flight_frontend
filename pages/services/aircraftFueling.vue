<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>

      <div>
        <div class="Desktop">
          <CAirCFuel />
        </div>
      </div>

      <div>
        <div class="Mobile">
          <MCAirCFuel />
        </div>
      </div>



      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  // import AFrontHeader from '~/components/AFrontHeader.vue'
  import CAirCFuel from '~/components/Services/CAircraftFueling/CAirCFuel.vue'
  import MCAirCFuel from '~/components/Services/CAircraftFueling/MCAirCFuel.vue'

  export default {
    name: 'Services',
    components: {
      // AFrontHeader,
      CAirCFuel,
      MCAirCFuel,
    },
    
  }
  </script>

<style>
.Desktop{
  display: block;
}

.Mobile{
  display: none;
}


@media only screen and (max-width: 500px) {

.Desktop{
  display: none;
}

.Mobile{
  display: block;
}

}

</style>

  
  