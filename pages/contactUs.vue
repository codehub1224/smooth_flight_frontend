<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>
      
      <div>
        <ACoUs />
      </div>
      <div>
        <BCoUs />
      </div>
      <div>
        <CCoUs />
      </div>

      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  import ACoUs from '~/components/ContactUs/ACoUs.vue'
  import BCoUs from '~/components/ContactUs/BCoUs.vue'
  import CCoUs from '~/components/ContactUs/CCoUs.vue'
  
  export default {
    name: 'ContactUsPage',
    components: {
      // AFrontHeader,
      ACoUs,
      BCoUs,
      CCoUs,
    },

  }
  </script>
  