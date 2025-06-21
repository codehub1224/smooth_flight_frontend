<template>
  <div class="drawer-content">
    <nav class="drawer-navigation">
      <ul class="nav-list">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/" @click="$emit('close')">
            <span class="mdi mdi-home nav-icon"></span>
            Home
          </NuxtLink>
        </li>

        <li class="nav-item">
          <button 
            class="nav-link dropdown-toggle" 
            @click="toggleDropdown('company')"
            :class="{ active: currentDropdown === 'company' }"
          >
            <span class="mdi mdi-domain nav-icon"></span>
            Company
            <span class="mdi mdi-chevron-down dropdown-arrow" :class="{ rotated: currentDropdown === 'company' }"></span>
          </button>
          <transition name="dropdown">
            <div v-show="currentDropdown === 'company'" class="dropdown-content">
              <NuxtLink class="dropdown-link" to="/company/overview" @click="$emit('close')">
                <span class="mdi mdi-information-outline dropdown-icon"></span>
                Overview
              </NuxtLink>
              <NuxtLink class="dropdown-link" to="/company/careers" @click="$emit('close')">
                <span class="mdi mdi-account-group dropdown-icon"></span>
                Careers
              </NuxtLink>
              <a class="dropdown-link" href="https://blog.smoothflightsupport.lk/category/csr/" target="_blank">
                <span class="mdi mdi-heart dropdown-icon"></span>
                Corporate Social Responsibility
              </a>
            </div>
          </transition>
        </li>

        <li class="nav-item">
          <button 
            class="nav-link dropdown-toggle" 
            @click="toggleDropdown('services')"
            :class="{ active: currentDropdown === 'services' }"
          >
            <span class="mdi mdi-airplane nav-icon"></span>
            Services
            <span class="mdi mdi-chevron-down dropdown-arrow" :class="{ rotated: currentDropdown === 'services' }"></span>
          </button>
          <transition name="dropdown">
            <div v-show="currentDropdown === 'services'" class="dropdown-content">
              <NuxtLink class="dropdown-link" to="/services/permitsA" @click="$emit('close')">
                <span class="mdi mdi-file-document dropdown-icon"></span>
                Permits
              </NuxtLink>
              <NuxtLink class="dropdown-link" to="/services/groundHandling" @click="$emit('close')">
                <span class="mdi mdi-truck dropdown-icon"></span>
                Ground Handling
              </NuxtLink>
              <NuxtLink class="dropdown-link" to="/services/aircraftFueling" @click="$emit('close')">
                <span class="mdi mdi-gas-station dropdown-icon"></span>
                Aircraft Fueling
              </NuxtLink>
              <NuxtLink class="dropdown-link" to="/services/catering" @click="$emit('close')">
                <span class="mdi mdi-silverware dropdown-icon"></span>
                Catering
              </NuxtLink>
              <NuxtLink class="dropdown-link" to="/services/crewpassengerservice" @click="$emit('close')">
                <span class="mdi mdi-account-multiple dropdown-icon"></span>
                Crew & Passenger Service
              </NuxtLink>
              <NuxtLink class="dropdown-link" to="/services/hotelReservationTransportation" @click="$emit('close')">
                <span class="mdi mdi-hotel dropdown-icon"></span>
                HOTAC
              </NuxtLink>
            </div>
          </transition>
        </li>

        <li class="nav-item">
          <button 
            class="nav-link dropdown-toggle" 
            @click="toggleDropdown('eservices')"
            :class="{ active: currentDropdown === 'eservices' }"
          >
            <span class="mdi mdi-web nav-icon"></span>
            e Services
            <span class="mdi mdi-chevron-down dropdown-arrow" :class="{ rotated: currentDropdown === 'eservices' }"></span>
          </button>
          <transition name="dropdown">
            <div v-show="currentDropdown === 'eservices'" class="dropdown-content">
              <NuxtLink class="dropdown-link" to="/apermit/applypermit" @click="$emit('close')">
                <span class="mdi mdi-file-plus dropdown-icon"></span>
                Apply Permits
              </NuxtLink>
              <NuxtLink class="dropdown-link" to="/eServices/getTripCostEstimate" @click="$emit('close')">
                <span class="mdi mdi-calculator dropdown-icon"></span>
                Get Trip Cost Estimate
              </NuxtLink>
              <a class="dropdown-link" href="https://eta.gov.lk/slvisa/" target="_blank">
                <span class="mdi mdi-passport dropdown-icon"></span>
                Apply e visa
              </a>
            </div>
          </transition>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="https://blog.smoothflightsupport.lk" target="_blank">
            <span class="mdi mdi-post nav-icon"></span>
            Blog
            <span class="mdi mdi-open-in-new external-icon"></span>
          </a>
        </li>

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/contactUs" @click="$emit('close')">
            <span class="mdi mdi-phone nav-icon"></span>
            Contact Us
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="drawer-footer">
      <div class="footer-section">
        <h4 class="footer-title">Follow Us</h4>
        <div class="social-links">
          <a class="social-link" href="https://www.facebook.com/SmoothflightCmb" target="_blank" aria-label="Facebook">
            <span class="mdi mdi-facebook"></span>
          </a>
          <a class="social-link" href="https://twitter.com/flight_smooth" target="_blank" aria-label="Twitter">
            <span class="mdi mdi-twitter"></span>
          </a>
          <a class="social-link" href="https://www.instagram.com/smoothflightsupport/" target="_blank" aria-label="Instagram">
            <span class="mdi mdi-instagram"></span>
          </a>
          <a class="social-link" href="https://www.linkedin.com/company/smooth-flight-support-pvt-ltd" target="_blank" aria-label="LinkedIn">
            <span class="mdi mdi-linkedin"></span>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <NuxtLink to="/apermit/applypermit" class="cta-button" @click="$emit('close')">
          <span class="mdi mdi-airplane-takeoff"></span>
          Apply Permit
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerComponent',
  data() {
    return {
      currentDropdown: null,
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      if (this.currentDropdown === dropdown) {
        this.currentDropdown = null;
      } else {
        this.currentDropdown = dropdown;
      }
    },
  },
};
</script>

<style scoped>
@import '../assets/fonts.css';

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
}

.drawer-navigation {
  flex: 1;
  padding: 1rem 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  border-bottom: 1px solid #f3f4f6;
}

.nav-item:last-child {
  border-bottom: none;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  position: relative;
}

.nav-link:hover {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #183862;
  transform: translateX(8px);
}

.nav-link.active {
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  color: white;
}

.nav-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  color: #88c607;
}

.nav-link:hover .nav-icon,
.nav-link.active .nav-icon {
  color: currentColor;
}

.dropdown-toggle {
  justify-content: space-between;
}

.dropdown-arrow {
  font-size: 1rem;
  transition: transform 0.3s ease;
  color: #6b7280;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.external-icon {
  font-size: 0.875rem;
  color: #6b7280;
  margin-left: auto;
}

.dropdown-content {
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
}

.dropdown-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  color: #4b5563;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 1px solid #e5e7eb;
}

.dropdown-link:last-child {
  border-bottom: none;
}

.dropdown-link:hover {
  background: white;
  color: #183862;
  transform: translateX(12px);
}

.dropdown-icon {
  font-size: 1rem;
  color: #88c607;
  flex-shrink: 0;
}

.dropdown-link:hover .dropdown-icon {
  color: #183862;
}

.drawer-footer {
  padding: 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
}

.footer-section {
  margin-bottom: 1.5rem;
}

.footer-section:last-child {
  margin-bottom: 0;
}

.footer-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  color: #183862;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.25rem;
}

.social-link:hover {
  background: #183862;
  color: white;
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 4px 12px rgba(24, 56, 98, 0.3);
}

.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(136, 198, 7, 0.3);
}

.cta-button:hover {
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(24, 56, 98, 0.4);
}

/* Dropdown Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  max-height: 0;
}

.dropdown-enter-to,
.dropdown-leave {
  opacity: 1;
  max-height: 400px;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .nav-link {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
  
  .dropdown-link {
    padding: 0.75rem 1.5rem;
    font-size: 0.8125rem;
  }
  
  .drawer-footer {
    padding: 1rem;
  }
}
</style>
</template>