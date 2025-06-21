<template>
  <div>
    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <AircraftFuelingPageContent />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import AircraftFuelingPageContent from '~/components/Services/CAircraftFueling/AircraftFuelingPageContent.vue'

export default {
  name: 'AircraftFuelingPage',
  components: {
    AircraftFuelingPageContent,
  },
  head() {
    return {
      title: 'Aircraft Fueling Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Competitive aircraft fueling services in Sri Lanka with quality assurance and efficient delivery for all aircraft types. Get the best fuel prices for your operations.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'aircraft fueling, aviation fuel, jet fuel, avgas, fuel services sri lanka, aircraft refueling, fuel price quotations, fuel quality assurance'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Aircraft Fueling Services | Smooth Flight Support'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Competitive aircraft fueling services in Sri Lanka with quality assurance and efficient delivery for all aircraft types.'
        }
      ]
    }
  }
}
</script>