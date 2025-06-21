<template>
  <div class="hotel-transportation-content">
    <h2 class="hotel-transportation-title">
      Hotel Accommodation & Transportation
    </h2>
    
    <div class="hotel-transportation-description">
      <p class="description-text">
        You don't have to worry about accommodation and transportation during your stay in Sri Lanka. 
        Our industry experts will take care of all arrangements for you. It is our responsibility to find 
        safe, secure, comfortable, and reasonably priced hotels for your crew and passengers.
      </p>
      
      <p class="description-text">
        We provide a wide range of business airport hotels and luxury accommodations to suit your 
        preferences and requirements. Our transportation services offer the highest standard of comfort 
        and elegance with a modern fleet of top-of-the-line vehicles, dedicated exclusively for 
        VIPs like you and your crew.
      </p>
      
      <p class="description-text">
        You can contact us at any time, and we will arrange the best accommodation to match your 
        requirements within less than an hour. The Smooth Flight Support team ensures your 
        accommodation and transportation experience is pleasant, seamless, and stress-free.
      </p>
    </div>
    
    <div class="hotel-transportation-features">
      <h3 class="features-title">Our HOTAC Services Include:</h3>
      
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div class="feature-text">Luxury Hotel Bookings</div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div class="feature-text">Airport Hotels</div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div class="feature-text">VIP Transportation</div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div class="feature-text">Chauffeur Services</div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div class="feature-text">Crew Accommodation</div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div class="feature-text">24/7 Support</div>
        </div>
      </div>
    </div>
    
    <div class="cta-container">
      <NuxtLink to="/eServices/getTripCostEstimate" class="cta-button">
        <span>Request HOTAC Services</span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelTransportationDescription'
}
</script>

<style scoped>
.hotel-transportation-content {
  padding: 1rem 0;
}

.hotel-transportation-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #183862;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
}

.hotel-transportation-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 4px;
  background: #88c607;
  border-radius: 2px;
}

.hotel-transportation-description {
  margin-bottom: 2rem;
}

.description-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.description-text:last-child {
  margin-bottom: 0;
}

.hotel-transportation-features {
  margin-bottom: 2.5rem;
}

.features-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border-color: #88c607;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #88c607;
  color: white;
  border-radius: 50%;
  flex-shrink: 0;
}

.feature-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  color: #334155;
}

.cta-container {
  margin-top: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #88c607;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(136, 198, 7, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.cta-button::after {
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

.cta-button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.cta-button:hover {
  box-shadow: 0 15px 30px rgba(24, 56, 98, 0.2);
}

@media (max-width: 992px) {
  .hotel-transportation-title {
    font-size: 2rem;
  }
  
  .description-text {
    font-size: 1rem;
  }
  
  .feature-item {
    padding: 0.875rem;
  }
  
  .feature-icon {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 768px) {
  .hotel-transportation-title {
    font-size: 1.75rem;
    padding-bottom: 0.75rem;
  }
  
  .hotel-transportation-title::after {
    width: 60px;
    height: 3px;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .hotel-transportation-title {
    font-size: 1.5rem;
  }
  
  .description-text {
    font-size: 0.9375rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
    padding: 0.875rem 1.5rem;
  }
}
</style>