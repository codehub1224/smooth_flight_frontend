<template>
  <div class="carousel">
    <div ref="container" class="carousel-container" :class="{ active: currentIndex === 0 }"
      :style="{ transform: `translateX(${currentIndex * -100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-slide">
        <div class="desktop">
          <div class="imageOut">
            <div class="imageClass" :style="{ backgroundImage: `url('${item.image}')` }">
              <div style="position: absolute; bottom: 10%; margin-bottom: 5px; left: 5%;">
                <div class="overlay"></div>
                <div class="textClass">
                  {{ item.text }}
                  <div class="ATopic">{{ item.title }}</div>
                  <p>{{ item.description }}</p>


                  <a href="/">
                    <button class="btnSubmit" type="submit"> <span class="mdi">READ MORE<font-awesome-icon
                          style="padding-left: 5px; font-size: 13px;" :icon="['fas', 'arrow-right-long']" /></span>
                    </button>
                  </a>

                </div>


              </div>
            </div>
          </div>
        </div>

        <div class="mobile">
          <div class="carouselM" style="width: 100%; height: 100%;">
            <div style="width:100%; height:200PX;">
              <img class="imgM" :src="item.image" :alt="item.alt" />
            </div>
            <div style="height: 130px; background-color: #183862; padding: 10px 2px 0px 10px;">
              <div class="Topic" style="font-size:22px;">{{ item.title }}</div>
              <div class="paraLine">{{ item.description }}</div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <button class="carousel-button carousel-button-prev" @click="prevSlide"><font-awesome-icon
        :icon="['fas', 'chevron-left']" /></button>
    <button class="carousel-button carousel-button-next" @click="nextSlide"><font-awesome-icon
        :icon="['fas', 'chevron-right']" /></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'HomePage/Welcome/smooth slider.jpg',
          title: 'Welcome to Smooth Flight Support ',
          description: 'Your Reliable Partner for Aviation Service in Sri Lanka',
          // description: 'Flight Support Service | VIP Booking | Ground Management | Hotel Reservation',
        },
        {
          image: 'HomePage/Welcome/Slide02.jpg',
          title: 'We offer comprehensive flight solutions in Sri Lanka',
          description: 'Permits | Ground Handling | Supervision | HOTAC | Fueling',
        },
        {
          image: 'HomePage/Welcome/Slide03.jpg',
          title: 'Excellence in the Aviation Industry',
          description: 'We stand as the sole ISO 9001:2015 certified FBO company in Sri Lanka',
        },
        {
          image: ' HomePage/Welcome/smooth slider.jpg',
          title: 'Welcome to Smooth Flight Support ',
          description: 'Your Reliable Partner for Aviation Service in Sri Lanka',
        }
      ],
      currentIndex: 0, // Add currentIndex data property
    };
  },

  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
  },

};
</script>

<style scoped>
@import '../assets/fonts.css';



.imgM {
  width: 100%;
  height: 200px;

}

.ATopic {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 60px;
  font-weight: 900;
  position: relative;
  animation-name: my-animation;
  animation-duration: 5s;
  animation-iteration-count: infinite;

}

/* @keyframes my-animation {
    from {
        transform: translateY(100px);
    }
    to {
        transform: translateY(0px);
    }
}  */


p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 23px;
}


.carousel-button {
  color: white;
}

.carousel-button:hover {
  background-color: white;
  color: black;
  padding: 5px;
}

.mobile {
  display: none;
}

img {
  width: 100%;
  height: 100%;

}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));

}

.carousel-container {
  display: flex;
  transition: 0.5s;
  pointer-events: none;
}

.carousel-container.active {
  pointer-events: auto;
}

.btnSubmit {

  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  padding-top: 1.8%;
  padding-bottom: 1.8%;
  padding-left: 4.5%;
  padding-right: 4.5% !important;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  background: #88c607;
  color: white;
  z-index: 1;
}

.btnSubmit::after {
  border-radius: 6px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #183862;
  z-index: -1;
  transform: scale(0);
  transform-origin: bottom right;
  transition: transform 200ms ease-in;
}

.btnSubmit:hover::after {
  transform: scale(1);
  transform-origin: top left;
}



.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  animation: slide 15s infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(0);
  }

  40% {
    transform: translateX(-0%);
  }

  45% {
    transform: translateX(-100%);
  }

  55% {
    transform: translateX(-100%);
  }

  70% {
    transform: translateX(-100%);
  }

  75% {
    transform: translateX(-200%);
  }

  95% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(-300%);
  }
}

.carousel-button {
  position: absolute;
  top: 50%;
  font-size: 24px;
  cursor: pointer;
  outline: none;
}

.carousel-button-prev {
  left: 10px;
  transform: translateY(-50%);
}

.carousel-button-next {
  right: 10px;
  transform: translateY(-50%);
}

.imageOut {
  height: 90dvh;
  width: 100dvw;
  flex: 0 0 100%;

}

.imageClass {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  opacity: 0.85;
}

.imageClass:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  /* Adjust gradient colors and opacity as needed */
}


.textClass {
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 18px;

}

.Topic,
.paraLine {
  color: rgb(255, 255, 255);
}

.Topic {
  font-size: 25px;
  font-family: 'SourceSansPro-Regular', sans-serif;
}

/* .paraLine {
  font-size: 16px;
} */




@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .btnSubmit {

    background-color: #88c607;
    padding: 13px 35px;
    border-radius: 5px;
    color: white;
    font-size: 12px;
  }



  .ATopic {
    font-size: 38px;
  }

  p {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 20px;
  }

}

@media only screen and (min-width:1025px) and (max-width: 1280px) {
  .imageOut {
    height: 80dvh;
    width: 100dvw;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1366px) {

  .btnSubmit {

    background-color: #88c607;
    padding: 14px 40px;
    border-radius: 5px;
    color: white;
    font-size: 13px;
  }



  .ATopic {
    font-size: 55px;
  }
}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
  .imageOut {
    height: 95dvh;
    width: 100dvw;
  }

  .btnSubmit {

    background-color: #88c607;
    padding: 16px 45px;
    border-radius: 5px;
    color: white;
    font-size: 15px;
  }

}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
  .imageOut {
    height: 75dvh;
    width: 100dvw;
  }
}

@media only screen and (max-width: 500px) {

  .desktop {
    display: none;
  }


  .mobile {
    display: block;
  }

  .gitBtn:hover {
    background-color: #89c6079d;
  }
}
</style>
