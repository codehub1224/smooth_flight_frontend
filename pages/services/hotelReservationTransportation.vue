<template>
  <div>
    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <HotelTransportationPageContent />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import HotelTransportationPageContent from '~/components/Services/FHRTransportation/HotelTransportationPageContent.vue'

export default {
  name: 'HotelReservationTransportationPage',
  components: {
    HotelTransportationPageContent,
  },
  head() {
    return {
      title: 'Hotel Accommodation & Transportation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hotel accommodation and transportation arrangements in Sri Lanka with luxury options and reliable ground transportation services for aviation crew and passengers.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'hotel accommodation, crew transportation, aviation transportation, HOTAC, luxury hotels sri lanka, ground transportation, VIP transfers, crew accommodation'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Hotel Accommodation & Transportation | Smooth Flight Support'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Hotel accommodation and transportation arrangements with luxury options and reliable ground transportation services for aviation crew and passengers.'
        }
      ]
    }
  }
}
</script>