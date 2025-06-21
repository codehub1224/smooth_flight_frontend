<template>
    <div>
  
      <div style="margin: 0%;">
        <AFrontHeader />
      </div>

      <div>
        <div class="Desktop">
          <BPermit />
        </div>
      </div>

      <div>
        <div class="Mobile">
          <MBPermit />
        </div>
      </div>

      <div>
        <ZFooter />
      </div>
      
  
  
    </div>
    
  </template>
  
  <script>
  // import AFrontHeader from '~/components/AFrontHeader.vue'
  import BPermit from '~/components/Services/BPermits/BPermit.vue'
  import MBPermit from '~/components/Services/BPermits/MBPermit.vue'

  export default {
    name: 'Services',
    components: {
      // AFrontHeader,
      BPermit,
      MBPermit,
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
  