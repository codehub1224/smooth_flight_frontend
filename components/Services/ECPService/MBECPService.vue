<template>
  <div>
    <div>
      <CrewPassengerHeader />
    </div>
    <div style="width: 100%; padding: 5%;">
      <div style="background-color: white;">
        <div class="imgClass" style="width: 100%;">
          <img class="imgGH" src="/ServicesImg/CrewPassenger/CrewAndPaxServices.jpg" alt="Crew & Passenger Services">
        </div>
        <div>
          <CrewPassengerDescription />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CrewPassengerHeader from '~/components/Services/ECPService/SubES/CrewPassengerHeader.vue'
import CrewPassengerDescription from '~/components/Services/ECPService/SubES/CrewPassengerDescription.vue'

export default {
  components: {
    CrewPassengerHeader,
    CrewPassengerDescription,
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