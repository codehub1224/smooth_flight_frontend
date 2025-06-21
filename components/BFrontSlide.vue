<template>
  <div class="hero-carousel">
    <div class="carousel-container" :style="{ transform: `translateX(${currentIndex * -100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-slide">
        <div class="slide-background" :style="{ backgroundImage: `url('${item.image}')` }">
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <div class="content-wrapper">
              <div class="slide-badge">{{ item.badge }}</div>
              <h1 class="slide-title">{{ item.title }}</h1>
              <p class="slide-description">{{ item.description }}</p>
              <div class="slide-features">
                <div v-for="(feature, idx) in item.features" :key="idx" class="feature-item">
                  <span class="feature-icon">✈</span>
                  <span class="feature-text">{{ feature }}</span>
                </div>
              </div>
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
      >
        <span class="indicator-label">{{ item.shortTitle }}</span>
      </button>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: `${((currentIndex + 1) / items.length) * 100}%` }"></div>
    </div>

    <!-- Mobile Version -->
    <div class="mobile-carousel">
      <div v-for="(item, index) in items" :key="index" class="mobile-slide" v-show="currentIndex === index">
        <div class="mobile-image">
          <img :src="item.image" :alt="item.title" />
          <div class="mobile-overlay"></div>
        </div>
        <div class="mobile-content">
          <div class="mobile-badge">{{ item.badge }}</div>
          <h2 class="mobile-title">{{ item.title }}</h2>
          <p class="mobile-description">{{ item.description }}</p>
          <div class="mobile-features">
            <div v-for="(feature, idx) in item.features.slice(0, 2)" :key="idx" class="mobile-feature">
              <span class="feature-icon">✈</span>
              <span>{{ feature }}</span>
            </div>
          </div>
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
          badge: 'ISO 9001:2015 Certified',
          title: 'Premier Aviation Services in Sri Lanka',
          shortTitle: 'Welcome',
          description: 'Your trusted partner for comprehensive flight support services, delivering excellence in every aspect of aviation operations across Sri Lanka.',
          features: [
            '24/7 Operations Support',
            'ISO Certified Quality',
            'Expert Local Knowledge'
          ]
        },
        {
          image: 'HomePage/Welcome/Slide02.jpg',
          badge: 'Comprehensive Solutions',
          title: 'Complete Flight Support Services',
          shortTitle: 'Services',
          description: 'From permits and ground handling to fueling and catering, we provide end-to-end aviation support solutions tailored to your specific needs.',
          features: [
            'Permits & Clearances',
            'Ground Handling',
            'Aircraft Fueling & Catering'
          ]
        },
        {
          image: 'HomePage/Welcome/Slide03.jpg',
          badge: 'Industry Leadership',
          title: 'Excellence in Aviation Since 2019',
          shortTitle: 'Excellence',
          description: 'Leading the aviation industry in Sri Lanka with innovative solutions, cutting-edge technology, and unwavering commitment to safety and quality.',
          features: [
            'Industry Expertise',
            'Modern Technology',
            'Safety First Approach'
          ]
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
      }, 7000);
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
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.carousel-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
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
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4rem 2rem 6rem;
  z-index: 2;
  color: white;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  animation: slideInUp 1.2s ease-out;
}

.slide-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(136, 198, 7, 0.9);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 25px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.slide-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
}

.slide-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.slide-features {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-icon {
  font-size: 1.25rem;
  color: #88c607;
}

.feature-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
}

/* Navigation Controls */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(15px);
  z-index: 3;
}

.carousel-control:hover {
  background: rgba(136, 198, 7, 0.9);
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(15px);
  font-size: 0.875rem;
  font-weight: 500;
}

.indicator.active {
  background: rgba(136, 198, 7, 0.9);
  border-color: #88c607;
  transform: scale(1.05);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
}

.indicator-label {
  white-space: nowrap;
}

/* Progress Bar */
.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 3;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #88c607, #9dd409);
  transition: width 0.3s ease;
}

/* Mobile Carousel */
.mobile-carousel {
  display: none;
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-carousel {
    height: 85vh;
  }
  
  .slide-content {
    padding: 3rem 1.5rem 5rem;
  }
  
  .slide-features {
    gap: 1rem;
  }
  
  .feature-item {
    padding: 0.5rem 1rem;
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
  .slide-indicators,
  .progress-bar {
    display: none;
  }
  
  .mobile-carousel {
    display: block;
  }
  
  .mobile-slide {
    position: relative;
    background: white;
  }
  
  .mobile-image {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  
  .mobile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .mobile-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  
  .mobile-content {
    padding: 2rem 1.5rem;
    background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
    color: white;
    text-align: center;
  }
  
  .mobile-badge {
    display: inline-block;
    padding: 0.375rem 1rem;
    background: rgba(136, 198, 7, 0.9);
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 20px;
    margin-bottom: 1rem;
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
  
  .mobile-features {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  
  .mobile-feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
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
    font-size: 0.9rem;
  }
  
  .mobile-features {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
</template>