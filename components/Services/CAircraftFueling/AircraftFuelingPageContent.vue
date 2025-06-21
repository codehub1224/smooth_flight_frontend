<template>
  <div class="service-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Aircraft Fueling</h1>
        <div class="breadcrumb-container">
          <ul class="breadcrumb">
            <li class="breadcrumb-item active">Smooth Flight Support</li>
            <li class="breadcrumb-item">Services</li>
            <li class="breadcrumb-item">Aircraft Fueling</li>
          </ul>
        </div>
      </div>
      <div class="header-background"></div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <!-- Service Image Section -->
        <div class="service-image-section">
          <div class="image-container">
            <img src="/ServicesImg/Fueling/Fueling.jpg" alt="Aircraft Fueling Services" class="service-image">
            <div class="image-overlay">
              <div class="overlay-badge">
                <font-awesome-icon :icon="['fas', 'gas-pump']" class="badge-icon" />
                <span>Aircraft Fueling</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Service Content Section -->
        <div class="service-content-section">
          <div class="service-content">
            <h2 class="content-title">Aircraft Fueling Services</h2>
            
            <div class="content-description">
              <p>
                Fuel sales is one of our core offerings at Smooth Flight Support. As we have quickly
                developed into one of the most recognized brands in the industry, it has become
                our top priority to ensure you get the most out of our services.
              </p>
              
              <p>
                We are committed to sharing our clients' goal of securing the best price and
                service in today's volatile fuel market. We achieve this by constantly monitoring
                world market conditions and negotiating with global, national, and local suppliers
                to provide you with competitive rates.
              </p>
              
              <p>
                For competitive fuel price quotations for VCBI/VCCC/VCRI, don't hesitate to contact
                our office 24 hours a day, 7 days a week. Our professional and friendly team will
                provide you with current fuel prices as soon as possible.
              </p>
            </div>
            
            <div class="service-features">
              <h3 class="features-title">Our Fueling Services Include:</h3>
              
              <div class="features-grid">
                <div class="feature-item">
                  <div class="feature-icon">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </div>
                  <div class="feature-text">Competitive Fuel Pricing</div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </div>
                  <div class="feature-text">Quality Assurance</div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </div>
                  <div class="feature-text">Rapid Response Times</div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </div>
                  <div class="feature-text">24/7 Availability</div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </div>
                  <div class="feature-text">Jet A-1 Fuel</div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </div>
                  <div class="feature-text">Avgas 100LL</div>
                </div>
              </div>
            </div>
            
            <div class="service-cta">
              <NuxtLink to="/eServices/getTripCostEstimate" class="cta-button">
                <span>Get Fuel Quote</span>
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Other Services Section -->
        <div class="other-services-section">
          <h3 class="section-title">Explore Our Other Services</h3>
          
          <div class="services-grid">
            <NuxtLink to="/services/permitsA" class="service-link">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'file-alt']" />
              </div>
              <span>Permits</span>
            </NuxtLink>
            
            <NuxtLink to="/services/groundHandling" class="service-link">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'truck']" />
              </div>
              <span>Ground Handling</span>
            </NuxtLink>
            
            <NuxtLink to="/services/catering" class="service-link">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'utensils']" />
              </div>
              <span>Catering</span>
            </NuxtLink>
            
            <NuxtLink to="/services/crewpassengerservice" class="service-link">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'users']" />
              </div>
              <span>Crew & Passenger Service</span>
            </NuxtLink>
            
            <NuxtLink to="/services/hotelReservationTransportation" class="service-link">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'hotel']" />
              </div>
              <span>HOTAC</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AircraftFuelingPage'
}
</script>

<style scoped>
@import '../../../assets/fonts.css';

.service-page {
  background-color: #f8fafc;
  min-height: 100vh;
}

/* Page Header */
.page-header {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.header-content {
  position: relative;
  z-index: 2;
  padding: 80px 5% 40px;
}

.page-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 20px;
  text-transform: uppercase;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: #88c607;
  border-radius: 2px;
}

.breadcrumb-container {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: inline-block;
  padding: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.breadcrumb {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.breadcrumb-item {
  color: #183862;
  position: relative;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.breadcrumb-item:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent #e5e7eb;
}

.breadcrumb-item.active {
  font-weight: 600;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f0f0;
  z-index: 1;
}

/* Main Content */
.main-content {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Service Image Section */
.service-image-section {
  margin-bottom: 40px;
}

.image-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  height: 450px;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.image-container:hover .service-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
}

.overlay-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(136, 198, 7, 0.9);
  color: white;
  border-radius: 50px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.badge-icon {
  font-size: 1.25rem;
}

/* Service Content Section */
.service-content-section {
  margin-bottom: 60px;
}

.service-content {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.content-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #183862;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 15px;
  text-align: center;
}

.content-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #88c607;
  border-radius: 2px;
}

.content-description p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 20px;
  text-align: justify;
}

/* Service Features */
.service-features {
  margin-top: 40px;
  margin-bottom: 40px;
}

.features-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 25px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
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

/* Service CTA */
.service-cta {
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 15px 30px;
  background: #88c607;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
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

/* Other Services Section */
.other-services-section {
  background: #f1f5f9;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 30px;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.service-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 25px 20px;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: #334155;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.service-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  border-color: #88c607;
  color: #183862;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #183862;
  transition: all 0.3s ease;
}

.service-link:hover .service-icon {
  background: #88c607;
  color: white;
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .header-content {
    padding: 60px 5% 30px;
  }
  
  .image-container {
    height: 400px;
  }
  
  .content-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 40px 0;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .breadcrumb-item {
    padding: 10px 15px;
    font-size: 0.85rem;
  }
  
  .image-container {
    height: 350px;
  }
  
  .service-content {
    padding: 30px;
  }
  
  .content-title {
    font-size: 1.75rem;
  }
  
  .content-description p {
    font-size: 1rem;
  }
  
  .features-title {
    font-size: 1.25rem;
  }
  
  .other-services-section {
    padding: 30px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 576px) {
  .main-content {
    padding: 30px 0;
  }
  
  .page-title {
    font-size: 1.75rem;
  }
  
  .header-content {
    padding: 40px 5% 20px;
  }
  
  .breadcrumb-container {
    display: none;
  }
  
  .image-container {
    height: 250px;
  }
  
  .overlay-badge {
    padding: 8px 16px;
    font-size: 1rem;
  }
  
  .service-content {
    padding: 25px;
  }
  
  .content-title {
    font-size: 1.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .other-services-section {
    padding: 25px;
  }
  
  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .service-link {
    padding: 15px;
  }
  
  .service-icon {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>