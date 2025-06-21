<template>
  <div class="trip-estimate-container">
    <div class="container">
      <div class="form-container">
        <div class="form-header">
          <div class="header-badge">
            <font-awesome-icon :icon="['fas', 'calculator']" class="badge-icon" />
            <span>Request a Quote</span>
          </div>
          <h2 class="form-title">Get Your Trip Cost Estimate</h2>
          <p class="form-description">
            Fill out the form below to receive a detailed cost estimate for your flight operations in Sri Lanka.
            Our team will analyze your requirements and provide you with a comprehensive quote.
          </p>
        </div>

        <div class="progress-container" v-if="currentStep <= 3">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${(currentStep / 3) * 100}%` }"></div>
          </div>
          <div class="progress-steps">
            <div 
              v-for="step in 3" 
              :key="step" 
              class="progress-step" 
              :class="{ 'active': currentStep >= step, 'completed': currentStep > step }"
              @click="goToStep(step)"
            >
              <div class="step-number">{{ step }}</div>
              <div class="step-label">{{ getStepLabel(step) }}</div>
            </div>
          </div>
        </div>

        <form class="estimate-form" @submit.prevent="submitForm">
          <!-- Step 1: Personal Information -->
          <div v-if="currentStep === 1" class="form-step">
            <div class="step-content">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  id="name" 
                  v-model="name" 
                  type="text" 
                  class="form-input" 
                  required 
                  placeholder="Enter your full name"
                />
              </div>

              <div class="form-group">
                <label for="companyName">Company Name</label>
                <input 
                  id="companyName" 
                  v-model="companyName" 
                  class="form-input" 
                  type="text" 
                  placeholder="Enter your company name"
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  id="email" 
                  v-model="email" 
                  type="email" 
                  class="form-input" 
                  required 
                  placeholder="Enter your email address"
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <div class="phone-input-container">
                  <div class="country-select">
                    <select 
                      id="country" 
                      v-model="selectedCountry" 
                      class="country-dropdown"
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option v-for="country in countryList" :key="country.code" :value="country.code">
                        {{ country.name }}
                      </option>
                    </select>
                    <div class="selected-flag" v-if="selectedCountry">
                      <img 
                        :src="getCountryFlagUrl(selectedCountry)" 
                        :alt="getCountryName(selectedCountry)" 
                        class="flag-icon"
                      />
                    </div>
                  </div>
                  
                  <div class="phone-number-container">
                    <div class="dial-code">{{ getDialCode(selectedCountry) }}</div>
                    <input 
                      id="phone" 
                      v-model="phone" 
                      type="tel" 
                      class="phone-input" 
                      required 
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="next-button" @click="nextStep">
                <span>Next Step</span>
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>

          <!-- Step 2: Flight Details -->
          <div v-if="currentStep === 2" class="form-step">
            <div class="step-content">
              <div class="form-row">
                <div class="form-group">
                  <label for="aircraftType">Aircraft Type</label>
                  <input 
                    id="aircraftType" 
                    v-model="aircraftType" 
                    class="form-input" 
                    type="text" 
                    placeholder="e.g. Boeing 737, Airbus A320"
                  />
                </div>

                <div class="form-group">
                  <label for="mtow">MTOW (kg)</label>
                  <input 
                    id="mtow" 
                    v-model="mtow" 
                    class="form-input" 
                    type="number" 
                    placeholder="Maximum Take-off Weight"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="port">Airport</label>
                  <select id="port" v-model="port" class="form-select">
                    <option value="" disabled selected>Select airport</option>
                    <option value="VCBI">VCBI - Bandaranaike International Airport</option>
                    <option value="VCRI">VCRI - Mattala Rajapaksa International Airport</option>
                    <option value="VCCC">VCCC - Colombo International Airport</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="purpose">Purpose of Flight</label>
                  <select id="purpose" v-model="purpose" class="form-select">
                    <option value="" disabled selected>Select purpose</option>
                    <option value="Tech Stop">Technical Stop</option>
                    <option value="Private">Private</option>
                    <option value="Passenger">Passenger</option>
                    <option value="Cargo">Cargo</option>
                    <option value="Ambulance">Ambulance</option>
                    <option value="Diplomatic">Diplomatic</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="prev-button" @click="prevStep">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span>Previous</span>
              </button>
              <button type="button" class="next-button" @click="nextStep">
                <span>Next Step</span>
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>

          <!-- Step 3: Services -->
          <div v-if="currentStep === 3" class="form-step">
            <div class="step-content">
              <div class="form-group">
                <label class="services-label">Please select the services you require:</label>
                <div class="services-grid">
                  <div class="service-checkbox">
                    <input type="checkbox" id="permits" v-model="permits">
                    <label for="permits" class="checkbox-label">
                      <div class="checkbox-icon">
                        <font-awesome-icon :icon="['fas', 'file-alt']" />
                      </div>
                      <span>Permits</span>
                    </label>
                  </div>
                  
                  <div class="service-checkbox">
                    <input type="checkbox" id="groundHandling" v-model="groundHandling">
                    <label for="groundHandling" class="checkbox-label">
                      <div class="checkbox-icon">
                        <font-awesome-icon :icon="['fas', 'truck']" />
                      </div>
                      <span>Ground Handling</span>
                    </label>
                  </div>
                  
                  <div class="service-checkbox">
                    <input type="checkbox" id="fueling" v-model="fueling">
                    <label for="fueling" class="checkbox-label">
                      <div class="checkbox-icon">
                        <font-awesome-icon :icon="['fas', 'gas-pump']" />
                      </div>
                      <span>Fueling</span>
                    </label>
                  </div>
                  
                  <div class="service-checkbox">
                    <input type="checkbox" id="catering" v-model="catering">
                    <label for="catering" class="checkbox-label">
                      <div class="checkbox-icon">
                        <font-awesome-icon :icon="['fas', 'utensils']" />
                      </div>
                      <span>Catering</span>
                    </label>
                  </div>
                  
                  <div class="service-checkbox">
                    <input type="checkbox" id="crewPassengerService" v-model="crewPassengerService">
                    <label for="crewPassengerService" class="checkbox-label">
                      <div class="checkbox-icon">
                        <font-awesome-icon :icon="['fas', 'users']" />
                      </div>
                      <span>Crew & Passenger Service</span>
                    </label>
                  </div>
                  
                  <div class="service-checkbox">
                    <input type="checkbox" id="hotelReservation" v-model="hotelReservation">
                    <label for="hotelReservation" class="checkbox-label">
                      <div class="checkbox-icon">
                        <font-awesome-icon :icon="['fas', 'hotel']" />
                      </div>
                      <span>Hotel Reservation & Transportation</span>
                    </label>
                  </div>
                  
                  <div class="service-checkbox">
                    <input type="checkbox" id="other" v-model="other">
                    <label for="other" class="checkbox-label">
                      <div class="checkbox-icon">
                        <font-awesome-icon :icon="['fas', 'plus']" />
                      </div>
                      <span>Other</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div class="form-group" v-if="other">
                <label for="otherDetails">Please provide details for other services:</label>
                <textarea 
                  id="otherDetails" 
                  v-model="otherDetails" 
                  class="form-textarea" 
                  placeholder="Describe any additional services you require"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="prev-button" @click="prevStep">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span>Previous</span>
              </button>
              <button type="submit" class="submit-button">
                <span>Submit Request</span>
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </div>
          </div>

          <!-- Step 4: Success Message -->
          <div v-if="currentStep === 4" class="form-step success-step">
            <div class="success-message">
              <div class="success-icon">
                <font-awesome-icon :icon="['fas', 'check-circle']" />
              </div>
              <h3 class="success-title">Request Submitted Successfully!</h3>
              <p class="success-text">
                Thank you for your request. Our team will review your requirements and contact you shortly with a detailed cost estimate.
              </p>
              <button type="button" class="new-request-button" @click="resetForm">
                <span>Submit Another Request</span>
                <font-awesome-icon :icon="['fas', 'plus']" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="info-container">
        <div class="info-card">
          <div class="info-header">
            <div class="info-icon">
              <font-awesome-icon :icon="['fas', 'info-circle']" />
            </div>
            <h3 class="info-title">Why Request a Cost Estimate?</h3>
          </div>
          <div class="info-content">
            <p>
              Getting a trip cost estimate helps you plan your flight operations more effectively by providing:
            </p>
            <ul class="info-list">
              <li>
                <font-awesome-icon :icon="['fas', 'check']" class="list-icon" />
                <span>Accurate budgeting for your flight operations</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'check']" class="list-icon" />
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'check']" class="list-icon" />
                <span>Customized service packages based on your needs</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'check']" class="list-icon" />
                <span>Competitive rates for all aviation services</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="contact-card">
          <div class="contact-header">
            <div class="contact-icon">
              <font-awesome-icon :icon="['fas', 'headset']" />
            </div>
            <h3 class="contact-title">Need Immediate Assistance?</h3>
          </div>
          <div class="contact-content">
            <p>
              Our operations team is available 24/7 to assist you with urgent requests or any questions you may have.
            </p>
            <div class="contact-methods">
              <div class="contact-method">
                <font-awesome-icon :icon="['fas', 'phone']" class="method-icon" />
                <span>(+94) 314354400</span>
              </div>
              <div class="contact-method">
                <font-awesome-icon :icon="['fas', 'envelope']" class="method-icon" />
                <span>ops@smoothflightsupport.lk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { countries } from '@/assets/countries.js';

export default {
  data() {
    return {
      currentStep: 1,
      name: '',
      companyName: '',
      email: '',
      selectedCountry: '',
      phone: '',
      countryList: countries,
      aircraftType: '',
      mtow: null,
      port: '',
      purpose: '',
      permits: false,
      groundHandling: false,
      fueling: false,
      catering: false,
      crewPassengerService: false,
      hotelReservation: false,
      other: false,
      otherDetails: '',
      showSuccessMessage: false,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep += 1;
        window.scrollTo(0, 0);
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
        window.scrollTo(0, 0);
      }
    },
    goToStep(step) {
      if (step < this.currentStep) {
        this.currentStep = step;
        window.scrollTo(0, 0);
      }
    },
    getStepLabel(step) {
      const labels = {
        1: 'Personal Information',
        2: 'Flight Details',
        3: 'Services Required'
      };
      return labels[step] || '';
    },
    async submitForm() {
      try {
        const formData = {
          name: this.name,
          companyName: this.companyName,
          email: this.email,
          selectedCountry: this.selectedCountry,
          phone: this.phone,
          aircraftType: this.aircraftType,
          mtow: this.mtow,
          port: this.port,
          purpose: this.purpose,
          permits: this.permits,
          groundHandling: this.groundHandling,
          fueling: this.fueling,
          catering: this.catering,
          crewPassengerService: this.crewPassengerService,
          hotelReservation: this.hotelReservation,
          other: this.other,
          otherDetails: this.otherDetails,
        };

        const response = await this.$axios.post('/api/submit', formData);
        console.log('Form submitted successfully:', response.data);
        
        // Show success message
        this.currentStep = 4;
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Failed to submit form:', error);
        alert('There was an error submitting your request. Please try again later.');
      }
    },
    resetForm() {
      this.currentStep = 1;
      this.name = '';
      this.companyName = '';
      this.email = '';
      this.selectedCountry = '';
      this.phone = '';
      this.aircraftType = '';
      this.mtow = null;
      this.port = '';
      this.purpose = '';
      this.permits = false;
      this.groundHandling = false;
      this.fueling = false;
      this.catering = false;
      this.crewPassengerService = false;
      this.hotelReservation = false;
      this.other = false;
      this.otherDetails = '';
      window.scrollTo(0, 0);
    },
    getCountryFlagUrl(countryCode) {
      return `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${countryCode}.svg`;
    },
    getCountryName(countryCode) {
      const country = this.countryList.find((country) => country.code === countryCode);
      return country ? country.name : '';
    },
    getDialCode(countryCode) {
      const country = this.countryList.find((country) => country.code === countryCode);
      return country ? country.dial_code : '';
    },
  },
};
</script>

<style scoped>
@import '../../../assets/fonts.css';

.trip-estimate-container {
  background-color: #f8fafc;
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* Form Container */
.form-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.form-header {
  padding: 30px;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  color: white;
  position: relative;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(136, 198, 7, 0.2);
  color: #88c607;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.badge-icon {
  font-size: 0.875rem;
}

.form-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.form-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 700px;
}

/* Progress Bar */
.progress-container {
  padding: 30px 30px 0;
}

.progress-bar {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #88c607, #9dd409);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.step-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.step-label {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.progress-step.active .step-number {
  background: #88c607;
  color: white;
}

.progress-step.active .step-label {
  color: #183862;
  font-weight: 600;
}

.progress-step.completed .step-number {
  background: #183862;
  color: white;
}

/* Form Steps */
.form-step {
  padding: 30px;
}

.step-content {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

label {
  display: block;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  color: #334155;
  margin-bottom: 8px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #334155;
  background: #f8fafc;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #88c607;
  box-shadow: 0 0 0 3px rgba(136, 198, 7, 0.1);
  background: white;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* Phone Input */
.phone-input-container {
  display: flex;
  gap: 12px;
}

.country-select {
  position: relative;
  width: 120px;
  flex-shrink: 0;
}

.country-dropdown {
  width: 100%;
  padding-right: 36px;
}

.selected-flag {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
}

.flag-icon {
  width: 20px;
  height: auto;
}

.phone-number-container {
  display: flex;
  flex: 1;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  overflow: hidden;
  transition: all 0.3s ease;
}

.phone-number-container:focus-within {
  border-color: #88c607;
  box-shadow: 0 0 0 3px rgba(136, 198, 7, 0.1);
  background: white;
}

.dial-code {
  display: flex;
  align-items: center;
  padding: 0 12px;
  background: #f1f5f9;
  color: #64748b;
  font-weight: 600;
  border-right: 1px solid #e2e8f0;
}

.phone-input {
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #334155;
  background: transparent;
}

.phone-input:focus {
  outline: none;
}

/* Services Grid */
.services-label {
  margin-bottom: 16px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.service-checkbox {
  position: relative;
}

.service-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-checkbox input:checked + .checkbox-label {
  background: rgba(136, 198, 7, 0.1);
  border-color: #88c607;
}

.checkbox-icon {
  width: 40px;
  height: 40px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.3s ease;
}

.service-checkbox input:checked + .checkbox-label .checkbox-icon {
  background: #88c607;
  color: white;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.prev-button,
.next-button,
.submit-button,
.new-request-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.prev-button {
  background: #f1f5f9;
  color: #64748b;
}

.prev-button:hover {
  background: #e2e8f0;
  color: #334155;
}

.next-button,
.submit-button,
.new-request-button {
  background: #88c607;
  color: white;
  box-shadow: 0 4px 12px rgba(136, 198, 7, 0.2);
}

.next-button:hover,
.submit-button:hover,
.new-request-button:hover {
  background: #183862;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 56, 98, 0.3);
}

/* Success Step */
.success-step {
  text-align: center;
  padding: 60px 30px;
}

.success-message {
  max-width: 500px;
  margin: 0 auto;
}

.success-icon {
  font-size: 4rem;
  color: #88c607;
  margin-bottom: 24px;
}

.success-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 16px;
}

.success-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 32px;
}

.new-request-button {
  margin: 0 auto;
}

/* Info Container */
.info-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-card,
.contact-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.info-header,
.contact-header {
  padding: 24px;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  color: white;
  display: flex;
  align-items: center;
  gap: 16px;
}

.info-icon,
.contact-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.info-title,
.contact-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

.info-content,
.contact-content {
  padding: 24px;
}

.info-content p,
.contact-content p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  color: #334155;
}

.list-icon {
  color: #88c607;
  margin-top: 4px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  color: #334155;
  font-weight: 600;
}

.method-icon {
  width: 36px;
  height: 36px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #88c607;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .info-container {
    flex-direction: row;
  }
  
  .info-card,
  .contact-card {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .trip-estimate-container {
    padding: 40px 0;
  }
  
  .form-header {
    padding: 24px;
  }
  
  .form-title {
    font-size: 1.75rem;
  }
  
  .progress-container {
    padding: 24px 24px 0;
  }
  
  .form-step {
    padding: 24px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .info-container {
    flex-direction: column;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .trip-estimate-container {
    padding: 30px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .form-header {
    padding: 20px;
  }
  
  .form-title {
    font-size: 1.5rem;
  }
  
  .form-description {
    font-size: 0.9375rem;
  }
  
  .progress-container {
    padding: 20px 20px 0;
  }
  
  .step-label {
    display: none;
  }
  
  .form-step {
    padding: 20px;
  }
  
  .phone-input-container {
    flex-direction: column;
    gap: 8px;
  }
  
  .country-select {
    width: 100%;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .prev-button,
  .next-button,
  .submit-button,
  .new-request-button {
    width: 100%;
    justify-content: center;
  }
  
  .success-step {
    padding: 40px 20px;
  }
  
  .success-icon {
    font-size: 3rem;
  }
  
  .success-title {
    font-size: 1.5rem;
  }
  
  .success-text {
    font-size: 1rem;
  }
}
</style>