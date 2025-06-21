<template>
  <div>
    <div>
      <AFrontHeader />
    </div>

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
  name: 'TripCostEstimatePage',
  components: {
    AGeTrCoEs,
    BGeTrCoEs,
  },
  head() {
    return {
      title: 'Get Trip Cost Estimate',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Request a detailed cost estimate for your flight operations in Sri Lanka. Get transparent pricing for permits, ground handling, fueling, catering, and other aviation services.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'flight cost estimate, aviation services pricing, trip cost calculator, flight operations budget, aviation services sri lanka, flight support quote'
        }
      ]
    }
  }
}
</script>