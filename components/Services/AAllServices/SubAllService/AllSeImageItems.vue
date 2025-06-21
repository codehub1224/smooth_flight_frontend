<template>
  <div class="services-grid">
    <!-- Permits Card -->
    <div class="service-card">
      <div class="card-image-container">
        <img src="/ServicesImg/AllServicess/LandingPermit.jpg" alt="Flight Permits" class="card-image">
        <div class="image-overlay"></div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Permits</h3>
        <p class="card-description">
          We obtain express flight permit clearances for a global network of destinations, navigating complex regulations with expertise and efficiency.
        </p>
        <NuxtLink to="/services/permitsA" class="card-button">
          <span>Read More</span>
          <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="button-icon" />
        </NuxtLink>
      </div>
    </div>

    <!-- Ground Handling Card -->
    <div class="service-card">
      <div class="card-image-container">
        <img src="/ServicesImg/AllServicess/GroundHandling.jpg" alt="Ground Handling" class="card-image">
        <div class="image-overlay"></div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Ground Handling</h3>
        <p class="card-description">
          Professional ground handling services for commercial and business jet operations with cost-effective, high-quality solutions.
        </p>
        <NuxtLink to="/services/groundHandling" class="card-button">
          <span>Read More</span>
          <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="button-icon" />
        </NuxtLink>
      </div>
    </div>

    <!-- Aircraft Fueling Card -->
    <div class="service-card">
      <div class="card-image-container">
        <img src="/ServicesImg/AllServicess/AirCraftFueling.jpg" alt="Aircraft Fueling" class="card-image">
        <div class="image-overlay"></div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Aircraft Fueling</h3>
        <p class="card-description">
          Competitive fuel pricing with reliable delivery and quality assurance for all aircraft types at Sri Lankan airports.
        </p>
        <NuxtLink to="/services/aircraftFueling" class="card-button">
          <span>Read More</span>
          <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="button-icon" />
        </NuxtLink>
      </div>
    </div>

    <!-- Catering Card -->
    <div class="service-card">
      <div class="card-image-container">
        <img src="/ServicesImg/AllServicess/InFlightCatering.jpg" alt="In-Flight Catering" class="card-image">
        <div class="image-overlay"></div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Catering</h3>
        <p class="card-description">
          Premium in-flight catering with customized menu options and the highest standards of quality and hygiene.
        </p>
        <NuxtLink to="/services/catering" class="card-button">
          <span>Read More</span>
          <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="button-icon" />
        </NuxtLink>
      </div>
    </div>

    <!-- Crew & Passenger Service Card -->
    <div class="service-card">
      <div class="card-image-container">
        <img src="/ServicesImg/AllServicess/CrewPassengerTransportation.jpg" alt="Crew & Passenger Services" class="card-image">
        <div class="image-overlay"></div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Crew & Passenger Service</h3>
        <p class="card-description">
          VIP transportation and dedicated support ensuring comfortable and safe layovers for crew and passengers.
        </p>
        <NuxtLink to="/services/crewpassengerservice" class="card-button">
          <span>Read More</span>
          <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="button-icon" />
        </NuxtLink>
      </div>
    </div>

    <!-- HOTAC Card -->
    <div class="service-card">
      <div class="card-image-container">
        <img src="/ServicesImg/AllServicess/HotelReservation.jpg" alt="Hotel Accommodation & Transportation" class="card-image">
        <div class="image-overlay"></div>
      </div>
      <div class="card-content">
        <h3 class="card-title">HOTAC</h3>
        <p class="card-description">
          Hotel accommodation and transportation arrangements with luxury options and reliable ground transportation services.
        </p>
        <NuxtLink to="/services/hotelReservationTransportation" class="card-button">
          <span>Read More</span>
          <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="button-icon" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllServicesGrid'
}
</script>

<style scoped>
@import '../../../../assets/fonts.css';

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.service-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(136, 198, 7, 0.3);
}

.card-image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .card-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(24, 56, 98, 0.4));
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.service-card:hover .image-overlay {
  opacity: 0.9;
}

.card-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 15px;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #88c607;
  border-radius: 2px;
}

.card-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.card-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  background: #88c607;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  align-self: flex-start;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.card-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #183862;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.card-button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.button-icon {
  transition: transform 0.3s ease;
}

.card-button:hover .button-icon {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .card-title {
    font-size: 1.35rem;
  }
  
  .card-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 576px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .card-image-container {
    height: 200px;
  }
  
  .card-content {
    padding: 20px;
  }
}
</style>