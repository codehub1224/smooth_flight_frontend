<template>
  <div>
    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <GroundHandlingPageContent />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import GroundHandlingPageContent from '~/components/Services/AGroundHandling/GroundHandlingPageContent.vue'

export default {
  name: 'GroundHandlingPage',
  components: {
    GroundHandlingPageContent,
  },
  head() {
    return {
      title: 'Ground Handling Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Professional ground handling services in Sri Lanka for commercial and business jet operations. Quality service with cost-effective solutions for all aircraft types.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ground handling, aircraft handling, ramp services, baggage handling, passenger handling, aircraft cleaning, aviation services sri lanka, ground support'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Ground Handling Services | Smooth Flight Support'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Professional ground handling services in Sri Lanka for commercial and business jet operations. Quality service with cost-effective solutions.'
        }
      ]
    }
  }
}
</script>