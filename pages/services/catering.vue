<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>

      <div>
        <div class="Desktop">
          <BCatering />
        </div>
      </div>

      <div>
        <div class="Mobile">
          <MBCatering />
        </div>
      </div>

      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  // import AFrontHeader from '~/components/AFrontHeader.vue'
  import BCatering from '~/components/Services/DCatering/BCatering.vue'
  import MBCatering from '~/components/Services/DCatering/MBCatering.vue'

  export default {
    name: 'Services',
    components: {
      // AFrontHeader,
      BCatering,
      MBCatering,
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
  ./catering.vue