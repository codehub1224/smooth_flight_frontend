<template>
  <div>
    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <PermitsPageContent />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import PermitsPageContent from '~/components/Services/BPermits/PermitsPageContent.vue'

export default {
  name: 'PermitsPage',
  components: {
    PermitsPageContent,
  },
  head() {
    return {
      title: 'Flight Permits & Aviation Clearances',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Expert flight permit facilitation and aviation clearances for global destinations. Fast turnaround times for landing permits, overflight clearances, and regulatory compliance in Sri Lanka and worldwide.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'flight permits, aviation clearances, landing permits, overflight permits, aircraft permits sri lanka, flight permit services, aviation regulatory compliance, permit facilitation, flight clearances'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Flight Permits & Aviation Clearances | Smooth Flight Support'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Expert flight permit facilitation and aviation clearances for global destinations. Fast turnaround times for landing permits and regulatory compliance.'
        }
      ]
    }
  }
}
</script>