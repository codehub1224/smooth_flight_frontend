<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>

      <div>
        <div class="Desktop">
          <GrHa />
        </div>
      </div>
      
      <div class="Mobile">
        <div>
          <MGrHa />
        </div>
      </div>


      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  // import AFrontHeader from '~/components/AFrontHeader.vue'
  import GrHa from '~/components/Services/AGroundHandling/GrHa.vue'
  import MGrHa from '~/components/Services/AGroundHandling/MGrHa.vue'

  export default {
    name: 'Services',
    components: {
      // AFrontHeader,
      GrHa,
      MGrHa,
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
  