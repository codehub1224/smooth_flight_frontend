<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>

      <div>
        <AAllServices />
      </div>

      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  // import AFrontHeader from '~/components/AFrontHeader.vue'
  import AAllServices from '~/components/Services/AAllServices/AAllServices.vue'

  export default {
    name: 'Services',
    components: {
      // AFrontHeader,
      AAllServices,
    },
    
  }
  </script>
  