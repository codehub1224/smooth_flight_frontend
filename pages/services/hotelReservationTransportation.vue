<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>
      
      <div>
        <div class="Desktop">
          <BFHRTransportation />
        </div>
      </div>

      <div>
        <div class="Mobile">
          <MBFHRTransportation />
        </div>
      </div>

      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  // import AFrontHeader from '~/components/AFrontHeader.vue'
  import BFHRTransportation from '~/components/Services/FHRTransportation/BFHRTransportation.vue'
  import MBFHRTransportation from '~/components/Services/FHRTransportation/MBFHRTransportation.vue'

  export default {
    name: 'Services',
    components: {
      // AFrontHeader,
      BFHRTransportation,
      MBFHRTransportation,
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
  