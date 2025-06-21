<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>
      
      <div>
        <div class="Desktop">
          <BECPService />
        </div>
      </div>

      <div>
        <div class="Mobile">
          <MBECPService />
        </div>
      </div>

      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  // import AFrontHeader from '~/components/AFrontHeader.vue'
  import BECPService from '~/components/Services/ECPService/BECPService.vue'
  import MBECPService from '~/components/Services/ECPService/MBECPService.vue'

  export default {
    name: 'Services',
    components: {
      // AFrontHeader,
      BECPService,
      MBECPService,
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
  