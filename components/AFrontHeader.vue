<template>
  <div class="header-container" cols="12" xs="12" sm="12" md="12">
    <div class="mobile-header">
      <BFrontHeader />
    </div>
    <div class="desktop-header">
      <div class="header-wrapper">
        <div class="top-bar">
          <div class="logo-section">
            <NuxtLink class="logo-link" to="/">
              <img class="logo" src="/Header/smoothLogo.png" alt="Smooth Flight Support - Aviation Services Sri Lanka">
            </NuxtLink>
          </div>
          
          <div class="contact-info">
            <div class="contact-item">
              <span class="mdi mdi-phone contact-icon"></span>
              <div class="contact-details">
                <div class="contact-label">Call Us Anytime</div>
                <div class="contact-value">(+94) 314354400</div>
              </div>
            </div>

            <div class="contact-item">
              <span class="mdi mdi-timer-outline contact-icon"></span>
              <div class="contact-details">
                <div class="contact-label">Opening Time</div>
                <div class="contact-value">24 Hrs</div>
              </div>
            </div>

            <div class="contact-item">
              <span class="mdi mdi-email-multiple-outline contact-icon"></span>
              <div class="contact-details">
                <div class="contact-label">Email Us</div>
                <div class="contact-value">info@smoothflightsupport.lk</div>
              </div>
            </div>

            <NuxtLink to="/apermit/applypermit" class="cta-button">
              Apply Permit
              <font-awesome-icon class="cta-icon" :icon="['fas', 'arrow-right-long']" />
            </NuxtLink>
          </div>
        </div>

        <nav class="main-navigation">
          <div class="nav-container">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            
            <div class="dropdown">
              <button class="nav-link dropdown-trigger">
                Company 
                <span class="mdi mdi-chevron-down dropdown-icon"></span>
              </button>
              <div class="dropdown-menu">
                <NuxtLink class="dropdown-item" to="/company/overview">Overview</NuxtLink>
                <NuxtLink class="dropdown-item" to="/company/careers">Careers</NuxtLink>
                <a class="dropdown-item" href="https://blog.smoothflightsupport.lk/category/csr/" target="_blank">
                  Corporate Social Responsibility
                </a>
              </div>
            </div>

            <div class="dropdown">
              <button class="nav-link dropdown-trigger">
                Services
                <span class="mdi mdi-chevron-down dropdown-icon"></span>
              </button>
              <div class="dropdown-menu">
                <NuxtLink class="dropdown-item" to="/services/permitsA">Permits</NuxtLink>
                <NuxtLink class="dropdown-item" to="/services/groundHandling">Ground Handling</NuxtLink>
                <NuxtLink class="dropdown-item" to="/services/aircraftFueling">Aircraft Fueling</NuxtLink>
                <NuxtLink class="dropdown-item" to="/services/catering">Catering</NuxtLink>
                <NuxtLink class="dropdown-item" to="/services/crewpassengerservice">Crew & Passenger Service</NuxtLink>
                <NuxtLink class="dropdown-item" to="/services/hotelReservationTransportation">Hotel Reservation & Transportation</NuxtLink>
              </div>
            </div>

            <div class="dropdown">
              <button class="nav-link dropdown-trigger">
                e Services
                <span class="mdi mdi-chevron-down dropdown-icon"></span>
              </button>
              <div class="dropdown-menu">
                <NuxtLink class="dropdown-item" to="/apermit/applypermit">Apply Permits</NuxtLink>
                <NuxtLink class="dropdown-item" to="/eServices/getTripCostEstimate">Get Trip Cost Estimate</NuxtLink>
                <a class="dropdown-item" href="https://eta.gov.lk/slvisa/" target="_blank">Apply e visa</a>
              </div>
            </div>

            <a href="https://blog.smoothflightsupport.lk" target="_blank" class="nav-link">Blog</a>
            <NuxtLink class="nav-link" to="/contactUs">Contact Us</NuxtLink>

            <div class="social-links">
              <a class="social-link" href="https://www.facebook.com/SmoothflightCmb" target="_blank" aria-label="Facebook">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
              <a class="social-link" href="https://twitter.com/flight_smooth" target="_blank" aria-label="Twitter">
                <font-awesome-icon :icon="['fab', 'x-twitter']" />
              </a>
              <a class="social-link" href="https://www.instagram.com/smoothflightsupport/" target="_blank" aria-label="Instagram">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a class="social-link" href="https://www.linkedin.com/company/smooth-flight-support-pvt-ltd" target="_blank" aria-label="LinkedIn">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AFrontHeader'
}
</script>

<style scoped>
@import '../assets/fonts.css';

.mobile-header {
  display: none;
}

.desktop-header {
  display: block;
}

.header-container {
  width: 100%;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
}

.header-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.logo-section {
  flex-shrink: 0;
}

.logo-link {
  display: block;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-right: 2rem;
  border-right: 2px solid #e5e7eb;
}

.contact-item:last-of-type {
  border-right: none;
  padding-right: 0;
}

.contact-icon {
  font-size: 1.25rem;
  color: #88c607;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.contact-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.contact-value {
  font-size: 0.875rem;
  color: #111827;
  font-weight: 600;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(136, 198, 7, 0.3);
}

.cta-button:hover {
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(24, 56, 98, 0.4);
}

.cta-icon {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-icon {
  transform: translateX(4px);
}

.main-navigation {
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  position: relative;
}

.main-navigation::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/HomePage/WhyChUs/BackgroundImgB.png') center/cover;
  opacity: 0.1;
  pointer-events: none;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 1.25rem 1rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background: #88c607;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link:hover {
  color: #88c607;
  transform: translateY(-2px);
}

.dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.dropdown-icon {
  font-size: 0.875rem;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 280px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  border: 1px solid #e5e7eb;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 0.875rem 1.25rem;
  color: #374151;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f3f4f6;
}

.dropdown-item:last-child {
  border-bottom: none;
  border-radius: 0 0 12px 12px;
}

.dropdown-item:first-child {
  border-radius: 12px 12px 0 0;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  color: white;
  transform: translateX(8px);
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: #88c607;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 20px rgba(136, 198, 7, 0.4);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .contact-info {
    gap: 1rem;
  }
  
  .contact-item {
    padding-right: 1rem;
  }
}

@media (max-width: 1024px) {
  .top-bar {
    padding: 0.75rem 1rem;
  }
  
  .nav-container {
    padding: 0 1rem;
  }
  
  .contact-info {
    gap: 0.75rem;
  }
  
  .contact-label,
  .contact-value {
    font-size: 0.75rem;
  }
  
  .social-links {
    margin-left: 1rem;
  }
}

@media (max-width: 768px) {
  .desktop-header {
    display: none;
  }
  
  .mobile-header {
    display: block;
  }
}

@media (max-width: 640px) {
  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .contact-item {
    border-right: none;
    padding-right: 0;
  }
}
</style>
</template>