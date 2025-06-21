<template>
  <div>
    <div>
      <CateringHeader />
    </div>
    <div style="width: 100%; padding: 5%;">
      <div style="background-color: white;">
        <div class="imgClass" style="width: 100%;">
          <img class="imgGH" src="/ServicesImg/CateringI/Catering.jpg" alt="In-Flight Catering Services">
        </div>
        <div>
          <CateringDescription />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CateringHeader from '~/components/Services/DCatering/SubDC/CateringHeader.vue'
import CateringDescription from '~/components/Services/DCatering/SubDC/CateringDescription.vue'

export default {
  components: {
    CateringHeader,
    CateringDescription,
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