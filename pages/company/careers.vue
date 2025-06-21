<template>
  <div>

    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <ABCareers />
    </div>

    <div>
      <BBCareers />
      
    </div>

    <div>
      <ZFooter />
    </div>
    


  </div>
  
</template>

<script>
// import AFrontHeader from '~/components/AFrontHeader.vue'
import ABCareers from '~/components/ACompany/BCareers/ABCareers.vue'
import BBCareers from '~/components/ACompany/BCareers/BBCareers.vue'

export default {
  name: 'Careers',
  components: {
    // AFrontHeader,
    ABCareers,
    BBCareers,
  },
  
}
</script>