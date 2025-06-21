<template>
  <div>
    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <CateringPageContent />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import CateringPageContent from '~/components/Services/DCatering/CateringPageContent.vue'

export default {
  name: 'CateringPage',
  components: {
    CateringPageContent,
  },
  head() {
    return {
      title: 'In-Flight Catering Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Premium in-flight catering services in Sri Lanka with customized meal options, maintaining highest hygiene standards and quality for private jets and commercial flights.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'in-flight catering, aircraft food service, private jet catering, aviation catering, flight meals, VIP catering, airline food service, gourmet flight meals'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'In-Flight Catering Services | Smooth Flight Support'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Premium in-flight catering services with customized meal options, maintaining highest hygiene standards and quality for all aircraft types.'
        }
      ]
    }
  }
}
</script>