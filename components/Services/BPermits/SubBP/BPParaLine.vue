<template>
  <div class="permits-content">
    <h2 class="permits-title">
      Flight Permits & Clearances
    </h2>
    
    <div class="permits-description">
      <p class="description-text">
        Every country has its own set of rules, regulations and procedures for granting
        permits to flights desirous of landing or even entering their air space. We obtain
        express flight permit clearances for a global network of destinations.
      </p>
      
      <p class="description-text">
        Our team is composed of experienced, dynamic, active professionals, capable of securing 
        all required permits in a fast and efficient way. This allows us to offer the 
        shortest turnaround time in seeking the necessary permits and flight clearances.
      </p>
      
      <p class="description-text">
        Smooth Flight Support handles airspace clearance for a wide range of flights, from
        commercial airlines to VIP flight operators and emergency aviation. We can obtain these
        permits even on short notice, ensuring your operations proceed without delay.
      </p>
    </div>
    
    <div class="permits-features">
      <div class="feature-item">
        <div class="feature-icon">
          <font-awesome-icon :icon="['fas', 'check']" />
        </div>
        <div class="feature-text">Landing Permits</div>
      </div>
      
      <div class="feature-item">
        <div class="feature-icon">
          <font-awesome-icon :icon="['fas', 'check']" />
        </div>
        <div class="feature-text">Overflight Clearances</div>
      </div>
      
      <div class="feature-item">
        <div class="feature-icon">
          <font-awesome-icon :icon="['fas', 'check']" />
        </div>
        <div class="feature-text">Diplomatic Clearances</div>
      </div>
      
      <div class="feature-item">
        <div class="feature-icon">
          <font-awesome-icon :icon="['fas', 'check']" />
        </div>
        <div class="feature-text">Short Notice Approvals</div>
      </div>
    </div>
    
    <div class="cta-container">
      <NuxtLink to="/apermit/applypermit" class="cta-button">
        <span>Apply for Permit</span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PermitsDescription'
}
</script>

<style scoped>
.permits-content {
  padding: 1rem 0;
}

.permits-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #183862;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
}

.permits-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 4px;
  background: #88c607;
  border-radius: 2px;
}

.permits-description {
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

.permits-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
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
  .permits-title {
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
  .permits-title {
    font-size: 1.75rem;
    padding-bottom: 0.75rem;
  }
  
  .permits-title::after {
    width: 60px;
    height: 3px;
  }
  
  .permits-features {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .permits-title {
    font-size: 1.5rem;
  }
  
  .description-text {
    font-size: 0.9375rem;
  }
  
  .permits-features {
    grid-template-columns: 1fr;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
    padding: 0.875rem 1.5rem;
  }
}
</style>