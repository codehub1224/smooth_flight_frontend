<template>
  <div>
    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <CrewPassengerServicePageContent />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import CrewPassengerServicePageContent from '~/components/Services/ECPService/CrewPassengerServicePageContent.vue'

export default {
  name: 'CrewPassengerServicePage',
  components: {
    CrewPassengerServicePageContent,
  },
  head() {
    return {
      title: 'Crew & Passenger Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Professional crew and passenger assistance services in Sri Lanka ensuring comfortable layovers with VIP transportation and dedicated support for all your aviation needs.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'crew services, passenger services, VIP transportation, aviation crew support, passenger assistance, flight crew services, VIP aviation services'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Crew & Passenger Services | Smooth Flight Support'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Professional crew and passenger assistance services ensuring comfortable layovers with VIP transportation and dedicated support.'
        }
      ]
    }
  }
}
</script>