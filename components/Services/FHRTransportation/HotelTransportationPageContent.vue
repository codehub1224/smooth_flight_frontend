<template>
  <div class="hotel-transportation-page">
    <!-- Page Header -->
    <div v-if="showSection1" class="page-header">
      <AllSeTopicLine />
    </div>

    <div v-if="showSection2" class="page-header">
      <AHTopicLine />
    </div>

    <div v-if="showSection3" class="page-header">
      <BPTopicLine />
    </div>

    <div v-if="showSection4" class="page-header">
      <ACTopicLine />
    </div>

    <div v-if="showSection5" class="page-header">
      <DCTopicLine />
    </div>

    <div v-if="showSection6" class="page-header">
      <ESTopicLine />
    </div>

    <div v-if="showSection7" class="page-header">
      <HotelTransportationHeader />
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <div class="content-layout">
          <!-- Services Navigation Sidebar -->
          <aside class="services-sidebar">
            <div class="sidebar-header">
              <h2 class="sidebar-title">Our Services</h2>
            </div>
            
            <nav class="services-nav">
              <button 
                v-for="section in sections" 
                :key="section.id" 
                class="nav-item" 
                :class="{ active: section.active }"
                @click="toggleSection(section.id)"
              >
                <span class="nav-icon">
                  <font-awesome-icon :icon="getServiceIcon(section.id)" />
                </span>
                <span class="nav-label">{{ section.label }}</span>
                <span class="nav-arrow">
                  <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </span>
              </button>
            </nav>
          </aside>

          <!-- Content Area -->
          <main class="content-area">
            <!-- All Services Grid -->
            <div v-if="showSection1" class="services-grid">
              <AllSeImageItems />
            </div>

            <!-- Individual Service Content -->
            <div v-else class="service-content">
              <div class="service-layout">
                <!-- Service Image -->
                <div class="service-image">
                  <div v-if="showSection2" class="image-wrapper">
                    <AHImage />
                  </div>
                  <div v-if="showSection3" class="image-wrapper">
                    <BPImage />
                  </div>
                  <div v-if="showSection4" class="image-wrapper">
                    <ACImage />
                  </div>
                  <div v-if="showSection5" class="image-wrapper">
                    <DCImage />
                  </div>
                  <div v-if="showSection6" class="image-wrapper">
                    <ESImage />
                  </div>
                  <div v-if="showSection7" class="image-wrapper">
                    <HotelTransportationImage />
                  </div>
                </div>

                <!-- Service Description -->
                <div class="service-description">
                  <div v-if="showSection2" class="description-content">
                    <AHParaLine />
                  </div>
                  <div v-if="showSection3" class="description-content">
                    <BPParaLine />
                  </div>
                  <div v-if="showSection4" class="description-content">
                    <ACParaLine />
                  </div>
                  <div v-if="showSection5" class="description-content">
                    <DCParaLine />
                  </div>
                  <div v-if="showSection6" class="description-content">
                    <ESParaLine />
                  </div>
                  <div v-if="showSection7" class="description-content">
                    <HotelTransportationDescription />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllSeTopicLine from '~/components/Services/AAllServices/SubAllService/AllSeTopicLine.vue'
import AllSeImageItems from '~/components/Services/AAllServices/SubAllService/AllSeImageItems.vue'

import AHTopicLine from '~/components/Services/AGroundHandling/SubAG/AHTopicLine.vue'
import AHParaLine from '~/components/Services/AGroundHandling/SubAG/AHParaLine.vue'
import AHImage from '~/components/Services/AGroundHandling/SubAG/AHImage.vue'

import BPTopicLine from '~/components/Services/BPermits/SubBP/BPTopicLine.vue'
import BPParaLine from '~/components/Services/BPermits/SubBP/BPParaLine.vue'
import BPImage from '~/components/Services/BPermits/SubBP/BPImage.vue'

import ACTopicLine from '~/components/Services/CAircraftFueling/SubAF/ACTopicLine.vue'
import ACParaLine from '~/components/Services/CAircraftFueling/SubAF/ACParaLine.vue'
import ACImage from '~/components/Services/CAircraftFueling/SubAF/ACImage.vue'

import DCTopicLine from '~/components/Services/DCatering/SubDC/DCTopicLine.vue'
import DCParaLine from '~/components/Services/DCatering/SubDC/DCParaLine.vue'
import DCImage from '~/components/Services/DCatering/SubDC/DCImage.vue'

import ESTopicLine from '~/components/Services/ECPService/SubES/ESTopicLine.vue'
import ESParaLine from '~/components/Services/ECPService/SubES/ESParaLine.vue'
import ESImage from '~/components/Services/ECPService/SubES/ESImage.vue'

import HotelTransportationHeader from '~/components/Services/FHRTransportation/SubFT/HotelTransportationHeader.vue'
import HotelTransportationDescription from '~/components/Services/FHRTransportation/SubFT/HotelTransportationDescription.vue'
import HotelTransportationImage from '~/components/Services/FHRTransportation/SubFT/HotelTransportationImage.vue'

export default {
  components: {
    AllSeTopicLine,
    AllSeImageItems,
    AHTopicLine,
    AHParaLine,
    AHImage,
    BPTopicLine,
    BPParaLine,
    BPImage,
    ACTopicLine,
    ACParaLine,
    ACImage,
    DCTopicLine,
    DCParaLine,
    DCImage,
    ESTopicLine,
    ESParaLine,
    ESImage,
    HotelTransportationHeader,
    HotelTransportationDescription,
    HotelTransportationImage
  },
  data: () => ({
    sections: [
      { id: 1, label: 'All Services', active: false },
      { id: 2, label: 'Ground Handling', active: false },
      { id: 3, label: 'Permits', active: false },
      { id: 4, label: 'Aircraft Fueling', active: false },
      { id: 5, label: 'Catering', active: false },
      { id: 6, label: 'Crew & Passenger Service', active: false },
      { id: 7, label: 'HOTAC', active: true },
    ],
    showSection1: false,
    showSection2: false,
    showSection3: false,
    showSection4: false,
    showSection5: false,
    showSection6: false,
    showSection7: true,
  }),
  methods: {
    toggleSection(sectionId) {
      this.sections.forEach((section) => {
        section.active = section.id === sectionId;
      });

      this.showSection1 = sectionId === 1;
      this.showSection2 = sectionId === 2;
      this.showSection3 = sectionId === 3;
      this.showSection4 = sectionId === 4;
      this.showSection5 = sectionId === 5;
      this.showSection6 = sectionId === 6;
      this.showSection7 = sectionId === 7;
    },
    getServiceIcon(sectionId) {
      const icons = {
        1: ['fas', 'list-alt'],
        2: ['fas', 'truck'],
        3: ['fas', 'file-alt'],
        4: ['fas', 'gas-station'],
        5: ['fas', 'utensils'],
        6: ['fas', 'users'],
        7: ['fas', 'hotel']
      };
      return icons[sectionId] || ['fas', 'check'];
    }
  },
};
</script>

<style scoped>
@import '../../../assets/fonts.css';

.hotel-transportation-page {
  background-color: #f8fafc;
  min-height: 100vh;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  padding: 60px 0;
}

/* Services Sidebar */
.services-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

.sidebar-header {
  padding: 1.5rem;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  color: white;
}

.sidebar-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  position: relative;
}

.sidebar-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background: #88c607;
  border-radius: 2px;
}

.services-nav {
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  text-align: left;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  background-color: #f1f5f9;
  color: #183862;
  transform: translateX(5px);
}

.nav-item.active {
  background-color: #f1f5f9;
  color: #183862;
  font-weight: 600;
  border-left: 3px solid #88c607;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  color: #88c607;
}

.nav-label {
  flex: 1;
}

.nav-arrow {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.nav-item:hover .nav-arrow,
.nav-item.active .nav-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Content Area */
.content-area {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

/* Service Content */
.service-content {
  padding: 2rem;
}

.service-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.service-image {
  position: relative;
}

.image-wrapper {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-description {
  padding: 1rem 0;
}

.description-content {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .content-layout {
    gap: 30px;
  }
}

@media (max-width: 992px) {
  .content-layout {
    grid-template-columns: 250px 1fr;
    gap: 20px;
  }
  
  .service-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .sidebar-title {
    font-size: 1.25rem;
  }
  
  .nav-item {
    padding: 0.875rem 1.25rem;
    font-size: 0.9375rem;
  }
}

@media (max-width: 768px) {
  .content-layout {
    grid-template-columns: 1fr;
    padding: 30px 0;
  }
  
  .services-sidebar {
    position: relative;
    top: 0;
    margin-bottom: 30px;
  }
  
  .sidebar-header {
    padding: 1.25rem;
  }
  
  .service-content {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 1rem;
  }
  
  .content-layout {
    padding: 20px 0;
  }
  
  .service-content {
    padding: 1rem;
  }
  
  .nav-item {
    padding: 0.75rem 1rem;
  }
}
</style>