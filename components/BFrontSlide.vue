<template>
  <div class="hero-carousel">
    <div class="carousel-container" :style="{ transform: `translateX(${currentIndex * -100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-slide">
        <div class="slide-background" :style="{ backgroundImage: `url('${item.image}')` }">
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <div class="content-wrapper">
              <h1 class="slide-title">{{ item.title }}</h1>
              <p class="slide-description">{{ item.description }}</p>
              <NuxtLink to="/company/overview" class="cta-button">
                <span class="button-text">Discover More</span>
                <font-awesome-icon class="button-icon" :icon="['fas', 'arrow-right-long']" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <button class="carousel-control prev" @click="prevSlide" aria-label="Previous slide">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </button>
    <button class="carousel-control next" @click="nextSlide" aria-label="Next slide">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </button>

    <!-- Slide Indicators -->
    <div class="slide-indicators">
      <button 
        v-for="(item, index) in items" 
        :key="index"
        class="indicator"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

    <!-- Mobile Version -->
    <div class="mobile-carousel">
      <div v-for="(item, index) in items" :key="index" class="mobile-slide" v-show="currentIndex === index">
        <div class="mobile-image">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="mobile-content">
          <h2 class="mobile-title">{{ item.title }}</h2>
          <p class="mobile-description">{{ item.description }}</p>
          <NuxtLink to="/company/overview" class="mobile-cta">
            Learn More
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BFrontSlide',
  data() {
    return {
      currentIndex: 0,
      autoplayInterval: null,
      items: [
        {
          image: 'HomePage/Welcome/smooth slider.jpg',
          title: 'Welcome to Smooth Flight Support',
          description: 'Your Reliable Partner for Aviation Services in Sri Lanka',
        },
        {
          image: 'HomePage/Welcome/Slide02.jpg',
          title: 'Comprehensive Flight Solutions',
          description: 'Permits | Ground Handling | Supervision | HOTAC | Fueling',
        },
        {
          image: 'HomePage/Welcome/Slide03.jpg',
          title: 'Excellence in Aviation Industry',
          description: 'ISO 9001:2015 certified FBO company in Sri Lanka',
        },
      ],
    };
  },
  mounted() {
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.resetAutoplay();
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.resetAutoplay();
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.resetAutoplay();
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 6000);
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
      }
    },
    resetAutoplay() {
      this.stopAutoplay();
      this.startAutoplay();
    }
  },
};
</script>

<style scoped>
@import '../assets/fonts.css';

.hero-carousel {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background: #000;
}

.carousel-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.slide-background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(24, 56, 98, 0.8) 0%,
    rgba(24, 56, 98, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.slide-content {
  position: absolute;
  bottom: 15%;
  left: 5%;
  right: 5%;
  z-index: 2;
  color: white;
}

.content-wrapper {
  max-width: 800px;
  animation: slideInUp 1s ease-out;
}

.slide-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.slide-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 600px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(136, 198, 7, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  transition: left 0.4s ease;
  z-index: -1;
}

.cta-button:hover::before {
  left: 0;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(24, 56, 98, 0.4);
}

.button-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .button-icon {
  transform: translateX(6px);
}

/* Navigation Controls */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 3;
}

.carousel-control:hover {
  background: rgba(136, 198, 7, 0.8);
  border-color: #88c607;
  transform: translateY(-50%) scale(1.1);
}

.carousel-control.prev {
  left: 2rem;
}

.carousel-control.next {
  right: 2rem;
}

/* Slide Indicators */
.slide-indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #88c607;
  border-color: #88c607;
  transform: scale(1.2);
}

.indicator:hover {
  border-color: white;
  transform: scale(1.1);
}

/* Mobile Carousel */
.mobile-carousel {
  display: none;
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-carousel {
    height: 80vh;
  }
  
  .slide-content {
    bottom: 10%;
    left: 3%;
    right: 3%;
  }
  
  .carousel-control {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
  
  .carousel-control.prev {
    left: 1rem;
  }
  
  .carousel-control.next {
    right: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-carousel {
    height: auto;
  }
  
  .carousel-container,
  .carousel-slide,
  .slide-background {
    display: none;
  }
  
  .carousel-control,
  .slide-indicators {
    display: none;
  }
  
  .mobile-carousel {
    display: block;
  }
  
  .mobile-slide {
    background: white;
  }
  
  .mobile-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
  
  .mobile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .mobile-content {
    padding: 2rem 1.5rem;
    background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
    color: white;
    text-align: center;
  }
  
  .mobile-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .mobile-description {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
  
  .mobile-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: #88c607;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .mobile-cta:hover {
    background: #9dd409;
    transform: translateY(-2px);
  }
}

@media (max-width: 480px) {
  .mobile-content {
    padding: 1.5rem 1rem;
  }
  
  .mobile-title {
    font-size: 1.25rem;
  }
  
  .mobile-description {
    font-size: 0.875rem;
  }
}
</style>
</template>