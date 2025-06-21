<template>
  <div class="map-section">
    <div class="container">
      <div class="map-container">
        <iframe 
          class="map-iframe" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15828.562943643603!2d79.8701047!3d7.3380878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a9464e6bb4e921a!2sSmooth%20Flight%20Support%20(Pvt)Ltd!5e0!3m2!1sen!2slk!4v1581834786788!5m2!1sen!2slk" 
          width="1300" 
          height="450" 
          frameborder="0" 
          style="border:0;" 
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Smooth Flight Support Location Map"
        ></iframe>
        
        <div class="map-overlay">
          <div class="overlay-content">
            <div class="overlay-badge">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="badge-icon" />
              <span>Our Location</span>
            </div>
            <h3 class="overlay-title">Visit Our Office</h3>
            <p class="overlay-text">
              C.R.I.Road, Lunuwila, Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMap'
}
</script>

<style scoped>
@import '../../assets/fonts.css';

.map-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.map-container {
  position: relative;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.map-overlay {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 300px;
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  animation: fadeInRight 1s ease-out;
}

.overlay-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(136, 198, 7, 0.1);
  color: #88c607;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.badge-icon {
  font-size: 0.875rem;
}

.overlay-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 12px;
}

.overlay-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 992px) {
  .map-section {
    padding: 40px 0;
  }
  
  .map-container {
    height: 400px;
  }
  
  .map-overlay {
    width: 250px;
    padding: 20px;
  }
  
  .overlay-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .map-container {
    height: 350px;
  }
  
  .map-overlay {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    margin-top: -80px;
    z-index: 10;
  }
}

@media (max-width: 576px) {
  .map-section {
    padding: 30px 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .map-container {
    height: 300px;
    border-radius: 12px;
  }
  
  .map-overlay {
    margin-top: -60px;
    padding: 15px;
    border-radius: 12px;
  }
}
</style>