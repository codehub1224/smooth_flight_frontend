<template>
  <div>

    <div style="margin: 0%;">
      <AFrontHeader />
    </div>
    <div>
      <AOverview />
    </div>


    <div>
      <BOverview />
    </div>

    <div>
      <ZFooter />
    </div>



  </div>
</template>

<script>
// import AFrontHeader from '~/components/AFrontHeader.vue'
import AOverview from '~/components/ACompany/AOverview/AOverview.vue'
import BOverview from '~/components/ACompany/AOverview/BOverview.vue'

export default {
  name: 'Services',
  components: {
    // AFrontHeader,
    AOverview,
    BOverview,
  },

}
</script>
