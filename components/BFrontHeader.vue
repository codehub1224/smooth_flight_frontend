<template>
  <div class="mobile-header">
    <div class="header-top">
      <div class="header-content">
        <div class="logo-container">
          <NuxtLink class="logo-link" to="/">
            <img class="logo" src="/Header/smoothLogo.png" alt="Smooth Flight Support">
          </NuxtLink>
        </div>
        
        <button class="menu-toggle" @click="toggleDrawer" aria-label="Toggle menu">
          <span class="menu-icon">
            <span class="menu-line" :class="{ active: isDrawerOpen }"></span>
            <span class="menu-line" :class="{ active: isDrawerOpen }"></span>
            <span class="menu-line" :class="{ active: isDrawerOpen }"></span>
          </span>
          <span class="menu-text">Menu</span>
        </button>
      </div>
    </div>

    <div class="contact-section">
      <div class="contact-grid">
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
      </div>

      <div class="social-section">
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

        <NuxtLink to="/apermit/applypermit" class="cta-button">
          Apply Permit
          <font-awesome-icon class="cta-icon" :icon="['fas', 'arrow-right-long']" />
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="drawer">
      <div v-if="isDrawerOpen" class="drawer-overlay" @click="closeDrawer">
        <div class="drawer" @click.stop>
          <div class="drawer-header">
            <img class="drawer-logo" src="/Header/smoothLogo.png" alt="Smooth Flight Support">
            <button class="close-button" @click="closeDrawer" aria-label="Close menu">
              <span class="mdi mdi-close"></span>
            </button>
          </div>
          <DrawerComponent @close="closeDrawer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import DrawerComponent from "@/components/DrawerComponent.vue";

export default {
  name: 'BFrontHeader',
  components: {
    DrawerComponent,
  },
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      this.toggleBodyScroll();
    },
    closeDrawer() {
      this.isDrawerOpen = false;
      this.toggleBodyScroll();
    },
    toggleBodyScroll() {
      if (this.isDrawerOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
.mobile-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-top {
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo-container {
  flex-shrink: 0;
}

.logo-link {
  display: block;
}

.logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.menu-toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: #183862;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: #1e4a73;
  transform: translateY(-2px);
}

.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 20px;
}

.menu-line {
  width: 100%;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu-line.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-line.active:nth-child(2) {
  opacity: 0;
}

.menu-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.menu-text {
  font-size: 0.75rem;
  font-weight: 600;
}

.contact-section {
  background: #f8fafc;
  padding: 1rem;
}

.contact-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #88c607;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  font-size: 1.25rem;
  color: #88c607;
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
}

.contact-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.125rem;
}

.contact-value {
  font-size: 0.875rem;
  color: #111827;
  font-weight: 600;
}

.social-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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
  background: #183862;
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #88c607;
  transform: translateY(-2px) scale(1.1);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
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
}

.cta-icon {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-icon {
  transform: translateX(4px);
}

/* Drawer Styles */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 90vw;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  z-index: 10000;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f8fafc;
}

.drawer-logo {
  height: 40px;
  width: auto;
}

.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.25rem;
}

.close-button:hover {
  background: #dc2626;
  transform: scale(1.1);
}

/* Drawer Transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-active .drawer,
.drawer-leave-active .drawer {
  transition: transform 0.3s ease;
}

.drawer-enter,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter .drawer,
.drawer-leave-to .drawer {
  transform: translateX(100%);
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .header-content {
    padding: 0.75rem;
  }
  
  .contact-section {
    padding: 0.75rem;
  }
  
  .social-section {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .drawer {
    width: 100vw;
  }
}
</style>
</template>