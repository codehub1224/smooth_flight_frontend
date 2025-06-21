<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>
      <!-- <div>
      <PageHeader />
    </div> -->

      <div>
        <AGeTrCoEs />
      </div>
      <div>
        <BGeTrCoEs />
      </div>

      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  import AGeTrCoEs from '~/components/EServices/GTCE/AGeTrCoEs.vue'
  import BGeTrCoEs from '~/components/EServices/GTCE/BGeTrCoEs.vue'
  
  export default {
    name: 'EServices',
    components: {
      // AFrontHeader,
      AGeTrCoEs,
      BGeTrCoEs,
    },

  }
  </script>
  