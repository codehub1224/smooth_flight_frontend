<template>
  <div>
    <div>
      <HotelTransportationHeader />
    </div>
    <div style="width: 100%; padding: 5%;">
      <div style="background-color: white;">
        <div class="imgClass" style="width: 100%;">
          <img class="imgGH" src="/ServicesImg/HotelRes/HotelReservation.jpg" alt="Hotel Accommodation & Transportation">
        </div>
        <div>
          <HotelTransportationDescription />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelTransportationHeader from '~/components/Services/FHRTransportation/SubFT/HotelTransportationHeader.vue'
import HotelTransportationDescription from '~/components/Services/FHRTransportation/SubFT/HotelTransportationDescription.vue'

export default {
  components: {
    HotelTransportationHeader,
    HotelTransportationDescription,
  }
}
</script>

<style scoped>
.imgGH {
  width: 100%;
  height: 35svh;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>