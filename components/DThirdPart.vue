<template>
  <div class="services-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-badge">
          <span class="badge-icon">✈</span>
          Our Expertise
        </div>
        <h2 class="section-title">What We Offer</h2>
        <p class="section-description">
          Comprehensive aviation services designed to meet all your flight support needs with excellence and reliability. Our expert team delivers professional solutions across every aspect of ground operations.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="card-inner">
            <div class="service-icon">
              <img :src="service.icon" :alt="service.title" class="icon-img">
            </div>
            <div class="service-content">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <a :href="service.link" class="service-link">
                <span>Learn More</span>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="link-icon" />
              </a>
            </div>
            <div class="card-overlay"></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA Section -->
      <div class="cta-section">
        <div class="cta-content">
          <h3 class="cta-title">Ready to Experience Excellence?</h3>
          <p class="cta-description">
            Contact our expert team today to discuss your aviation service requirements and discover how we can support your operations.
          </p>
          <NuxtLink to="/contactUs" class="cta-button">
            <span>Get Started</span>
            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="bg-elements">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-pattern"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          title: "Permits",
          description: "Expert permit facilitation and clearance services for seamless flight operations across global destinations with fast turnaround times.",
          icon: "/HomePage/WWOffer/B/AlandingB.png",
          link: "/services/permitsA"
        },
        {
          title: "Ground Handling",
          description: "Comprehensive ground handling services ensuring efficient aircraft operations with professional equipment and experienced personnel.",
          icon: "/HomePage/WWOffer/B/FGroundHandlingb.png",
          link: "/services/groundHandling"
        },
        {
          title: "Aircraft Fueling",
          description: "Competitive fuel pricing and reliable fueling services with quality assurance and efficient delivery for all aircraft types.",
          icon: "/HomePage/WWOffer/B/CaircraftFuelB.png",
          link: "/services/aircraftFueling"
        },
        {
          title: "Catering",
          description: "Premium in-flight catering services with customized meal options, maintaining highest hygiene standards and quality.",
          icon: "/HomePage/WWOffer/B/DinflightCB.png",
          link: "/services/catering"
        },
        {
          title: "Crew & Passenger Service",
          description: "Professional crew and passenger assistance ensuring comfortable layovers with VIP transportation and dedicated support.",
          icon: "/HomePage/WWOffer/B/ECrewB.png",
          link: "/services/crewpassengerservice"
        },
        {
          title: "HOTAC",
          description: "Hotel accommodation and transportation arrangements with luxury options and reliable ground transportation services.",
          icon: "/HomePage/WWOffer/B/BHotelB.png",
          link: "/services/hotelReservationTransportation"
        }
      ]
    }
  }
};
</script>

<style scoped>
@import '../assets/fonts.css';

.services-section {
  position: relative;
  padding: 120px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  overflow: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 80px;
  animation: fadeInUp 1s ease-out;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(24, 56, 98, 0.1);
  color: #183862;
  border-radius: 50px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(24, 56, 98, 0.2);
}

.badge-icon {
  font-size: 1rem;
}

.section-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.section-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 80px;
}

.service-card {
  position: relative;
  height: 320px;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 1s ease-out;
  animation-fill-mode: both;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }
.service-card:nth-child(5) { animation-delay: 0.5s; }
.service-card:nth-child(6) { animation-delay: 0.6s; }

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s ease;
}

.service-card:hover .card-inner {
  border-color: rgba(136, 198, 7, 0.3);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  transform: scale(1.1);
}

.icon-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: grayscale(1) opacity(0.7);
}

.service-card:hover .icon-img {
  filter: brightness(0) invert(1);
  transform: scale(1.1);
}

.service-content {
  flex: 1;
}

.service-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.service-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: justify;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #88c607;
  text-decoration: none;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: #183862;
  gap: 1rem;
}

.link-icon {
  font-size: 0.875rem;
  transition: transform 0.3s ease;
}

.service-link:hover .link-icon {
  transform: translateX(4px);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(136, 198, 7, 0.05) 0%, rgba(24, 56, 98, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 24px;
}

.service-card:hover .card-overlay {
  opacity: 1;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  border-radius: 32px;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/HomePage/WhyChUs/BackgroundImgB.png') center/cover;
  opacity: 0.1;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.cta-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 40px rgba(136, 198, 7, 0.3);
}

.cta-button:hover {
  background: white;
  color: #183862;
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

/* Background Elements */
.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(136, 198, 7, 0.05) 0%, rgba(157, 212, 9, 0.02) 100%);
  top: 20%;
  left: -200px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(24, 56, 98, 0.05) 0%, rgba(30, 74, 115, 0.02) 100%);
  bottom: 10%;
  right: -150px;
}

.bg-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-image: radial-gradient(circle, rgba(136, 198, 7, 0.1) 2px, transparent 2px);
  background-size: 30px 30px;
  opacity: 0.3;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 80px 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-header {
    margin-bottom: 60px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 60px;
  }
  
  .service-card {
    height: auto;
    min-height: 280px;
  }
  
  .card-inner {
    padding: 2rem;
  }
  
  .cta-section {
    padding: 40px 20px;
    border-radius: 24px;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-description {
    font-size: 1.125rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    height: auto;
  }
  
  .card-inner {
    padding: 1.5rem;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
  }
  
  .icon-img {
    width: 30px;
    height: 30px;
  }
  
  .service-title {
    font-size: 1.25rem;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}
</style>