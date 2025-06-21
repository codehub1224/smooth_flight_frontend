<template>
  <div>
    <div>
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
import AOverview from '~/components/ACompany/AOverview/AOverview.vue'
import BOverview from '~/components/ACompany/AOverview/BOverview.vue'

export default {
  name: 'CompanyOverviewPage',
  components: {
    AOverview,
    BOverview,
  },
  head() {
    return {
      title: 'Company Overview',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn about Smooth Flight Support, a premier ISO 9001:2015 certified aviation services company in Sri Lanka providing comprehensive flight support services since 2019.'
        }
      ]
    }
  }
}
</script>