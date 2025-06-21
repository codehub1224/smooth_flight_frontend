<template>
  <div class="slider">
    <div class="slide-track">


      <div class="slide">
        <img src="/HomePage/LogoFile/Logo01.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/Logo02.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/LogoC.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/NBAA.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/LogoB.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/surabi.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>

      <div class="slide">
        <img src="/HomePage/LogoFile/Logo01.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/Logo02.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/LogoC.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/NBAA.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/LogoB.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>
      <div class="slide">
        <img src="/HomePage/LogoFile/surabi.png" alt="pngIcon" style="width: 15dvh;height: 10dvh;">
      </div>

    </div>
  </div>
</template>



<script>


export default {
  name: "FourthPage",
}
</script>

<style scoped>
@import '../assets/fonts.css';
/* @import '../assets/fonts.css'; */




img {

  justify-content: center;
  width: 100px;
  height: 100px;
  animation: scroll 35s linear infinite;
  margin-left: 75%;

}

.slide-track {
  width: 100%;
  display: flex;
  gap: 6em;
  overflow: hidden;
}

.slider {
  margin-top: 35px;
  background-color: whitesmoke;
  padding: 8em 2em;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translatex(-1000%)
  }
}


@media only screen and (min-width: 768px) and (max-width: 1366px) {
  img {
    width: 100%;
    height: 100%;
    animation: scroll 20s linear infinite;
  }
}




@media only screen and (max-width: 500px) {

  img {
    width: 100%;
    height: 100%;
    animation: scroll 20s linear infinite;
  }


}
</style>