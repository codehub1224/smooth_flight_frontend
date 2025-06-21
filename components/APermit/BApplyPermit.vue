<template>
  <div class="permit-form-container">
    <div class="container">
      <div class="form-wrapper">
        <div class="form-header">
          <div class="header-badge">
            <font-awesome-icon :icon="['fas', 'file-alt']" class="badge-icon" />
            <span>Flight Authorization</span>
          </div>
          <h2 class="form-title">Apply for Flight Permits</h2>
          <p class="form-description">
            Complete the form below to apply for flight permits in Sri Lanka. Our team will process your request promptly.
          </p>
        </div>

        <div class="progress-container" v-if="currentStep <= 4">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${(currentStep / 4) * 100}%` }"></div>
          </div>
          <div class="progress-steps">
            <div 
              v-for="step in 4" 
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

        <form class="permit-form" @submit.prevent="submitForm">
          <!-- Step 1: General Details -->
          <div v-if="currentStep === 1" class="form-step">
            <h3 class="step-title">General Details of Aircraft Movement</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="purpose">Purpose of Flight</label>
                <select id="purpose" v-model="port" class="form-select" required>
                  <option value="" disabled selected>Select purpose</option>
                  <option value="VIP">VIP</option>
                  <option value="Private">Private</option>
                  <option value="Tourist">Tourist</option>
                  <option value="Cargo">Cargo</option>
                  <option value="Ambulance">Ambulance</option>
                  <option value="Relief">Relief</option>
                  <option value="Technical Stop">Technical Stop</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="overflyingOrLanding">Overflying or Landing in Sri Lanka</label>
                <select id="overflyingOrLanding" v-model="overflyingOrLanding" class="form-select" required>
                  <option value="" disabled selected>Select option</option>
                  <option value="Overflying">Overflying Colombo FIR</option>
                  <option value="Landing">Landing in Sri Lanka</option>
                  <option value="Both">Both Overflying and Landing</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="dateOfOperation">Date of Operation</label>
                <input 
                  type="date" 
                  id="dateOfOperation" 
                  v-model="dateOfOperation" 
                  class="form-input" 
                  required
                />
              </div>
              
              <div class="form-group" v-if="overflyingOrLanding === 'Landing' || overflyingOrLanding === 'Both'">
                <label for="landingAirport">Landing Airport</label>
                <select id="landingAirport" v-model="landingAirport" class="form-select" required>
                  <option value="" disabled selected>Select airport</option>
                  <option value="VCBI">VCBI - Bandaranaike International Airport</option>
                  <option value="VCRI">VCRI - Mattala Rajapaksa International Airport</option>
                  <option value="VCCC">VCCC - Colombo International Airport</option>
                </select>
              </div>
            </div>
            
            <div class="form-row" v-if="overflyingOrLanding === 'Landing' || overflyingOrLanding === 'Both'">
              <div class="form-group">
                <label for="expectedDateArrival">Expected Date of Arrival</label>
                <input 
                  type="date" 
                  id="expectedDateArrival" 
                  v-model="expectedDateArrival" 
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="expectedTimeArrival">Expected Time of Arrival</label>
                <input 
                  type="time" 
                  id="expectedTimeArrival" 
                  v-model="expectedTimeArrival" 
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="expectedDateDeparture">Expected Date of Departure</label>
                <input 
                  type="date" 
                  id="expectedDateDeparture" 
                  v-model="expectedDateDeparture" 
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="expectedTimeDeparture">Expected Time of Departure</label>
                <input 
                  type="time" 
                  id="expectedTimeDeparture" 
                  v-model="expectedTimeDeparture" 
                  class="form-input"
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="entrypoint">Entry Point</label>
                <input 
                  type="text" 
                  id="entrypoint" 
                  v-model="entrypoint" 
                  class="form-input" 
                  placeholder="Entry point"
                />
              </div>
              
              <div class="form-group">
                <label for="expectetime">Expected Time at Entry Point</label>
                <input 
                  type="time" 
                  id="expectetime" 
                  v-model="expectetime" 
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="exitpoint">Exit Point</label>
                <input 
                  type="text" 
                  id="exitpoint" 
                  v-model="exitpoint" 
                  class="form-input" 
                  placeholder="Exit point"
                />
              </div>
              
              <div class="form-group">
                <label for="expectetime2">Expected Time at Exit Point</label>
                <input 
                  type="time" 
                  id="expectetime2" 
                  v-model="expectetime2" 
                  class="form-input"
                />
              </div>
            </div>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="pointOfOrigin">Point of Origin of the Flight</label>
                <input 
                  type="text" 
                  id="pointOfOrigin" 
                  v-model="pointOfOrigin" 
                  class="form-input" 
                  placeholder="Enter point of origin"
                />
              </div>
              
              <div class="form-group">
                <label for="arrival">Places of Intended Landing Prior to Sri Lanka</label>
                <input 
                  type="text" 
                  id="arrival" 
                  v-model="arrival" 
                  class="form-input" 
                  placeholder="Enter places of intended landing"
                />
              </div>
              
              <div class="form-group">
                <label for="departure">Place of Immediate Landing After Sri Lanka</label>
                <input 
                  type="text" 
                  id="departure" 
                  v-model="departure" 
                  class="form-input" 
                  placeholder="Enter place of immediate landing"
                />
              </div>
              
              <div class="form-group">
                <label for="destination">Final Destination</label>
                <input 
                  type="text" 
                  id="destination" 
                  v-model="destination" 
                  class="form-input" 
                  placeholder="Enter final destination"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="servicesFacilities">Services/Facilities Required at Airports in Sri Lanka</label>
                <textarea 
                  id="servicesFacilities" 
                  v-model="servicesFacilities" 
                  class="form-textarea" 
                  placeholder="Enter services/facilities required"
                  rows="3"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label for="operator">Previous Operations in Sri Lanka (if any)</label>
                <textarea 
                  id="operator" 
                  v-model="operator" 
                  class="form-textarea" 
                  placeholder="Enter details of previous operations in Sri Lanka within the last three years"
                  rows="3"
                ></textarea>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="next-button" @click="nextStep">
                <span>Next Step</span>
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>

          <!-- Step 2: Aircraft Operator -->
          <div v-if="currentStep === 2" class="form-step">
            <h3 class="step-title">Aircraft Operator Information</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="name">Operator Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="name" 
                  class="form-input" 
                  placeholder="Enter operator name"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="nationality">Nationality</label>
                <input 
                  type="text" 
                  id="nationality" 
                  v-model="nationality" 
                  class="form-input" 
                  placeholder="Enter nationality"
                  required
                />
              </div>
              
              <div class="form-group full-width">
                <label for="address">Postal Address</label>
                <textarea 
                  id="address" 
                  v-model="address" 
                  class="form-textarea" 
                  placeholder="Enter postal address"
                  rows="3"
                  required
                ></textarea>
              </div>
              
              <div class="form-group">
                <label for="teleNumber">Telephone Number</label>
                <input 
                  type="tel" 
                  id="teleNumber" 
                  v-model="teleNumber" 
                  class="form-input" 
                  placeholder="Enter telephone number"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="fax">Fax Number</label>
                <input 
                  type="text" 
                  id="fax" 
                  v-model="fax" 
                  class="form-input" 
                  placeholder="Enter fax number"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="email" 
                  class="form-input" 
                  placeholder="Enter email address"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="afs">Aeronautical Fixed Service (AFS) Address</label>
                <input 
                  type="text" 
                  id="afs" 
                  v-model="afs" 
                  class="form-input" 
                  placeholder="Enter AFS address (if any)"
                />
              </div>
              
              <div class="form-group">
                <label for="permitNumber">Aircraft Operator's Certificate/Permit Number</label>
                <input 
                  type="text" 
                  id="permitNumber" 
                  v-model="permitNumber" 
                  class="form-input" 
                  placeholder="Enter certificate/permit number (if any)"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="detailsofOperator">Details of Operator for Billing Purposes</label>
                <textarea 
                  id="detailsofOperator" 
                  v-model="detailsofOperator" 
                  class="form-textarea" 
                  placeholder="Enter details if different from above"
                  rows="3"
                ></textarea>
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

          <!-- Step 3: Aircraft Details -->
          <div v-if="currentStep === 3" class="form-step">
            <h3 class="step-title">Aircraft Details</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="name2">Pilot-in-Command Name</label>
                <input 
                  type="text" 
                  id="name2" 
                  v-model="name2" 
                  class="form-input" 
                  placeholder="Enter pilot name"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="nationality2">Pilot-in-Command Nationality</label>
                <input 
                  type="text" 
                  id="nationality2" 
                  v-model="nationality2" 
                  class="form-input" 
                  placeholder="Enter pilot nationality"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="mtow">Aircraft Type with MTOW</label>
                <input 
                  type="text" 
                  id="mtow" 
                  v-model="mtow" 
                  class="form-input" 
                  placeholder="Enter aircraft type and MTOW"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="registry">State of Registry/Nationality</label>
                <input 
                  type="text" 
                  id="registry" 
                  v-model="registry" 
                  class="form-input" 
                  placeholder="Enter state of registry"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="registrationNumber">Registration Number</label>
                <input 
                  type="text" 
                  id="registrationNumber" 
                  v-model="registrationNumber" 
                  class="form-input" 
                  placeholder="Enter registration number"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="flightNumber">Aircraft Call Sign/Flight Number</label>
                <input 
                  type="text" 
                  id="flightNumber" 
                  v-model="flightNumber" 
                  class="form-input" 
                  placeholder="Enter call sign/flight number"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="airDropping">Air Dropping Capability</label>
                <select id="airDropping" v-model="airDropping" class="form-select">
                  <option value="" disabled selected>Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="seatingCapacity">Maximum Passenger Seating Capacity</label>
                <input 
                  type="number" 
                  id="seatingCapacity" 
                  v-model="seatingCapacity" 
                  class="form-input" 
                  placeholder="Enter seating capacity"
                />
              </div>
              
              <div class="form-group">
                <label for="payloadCapacity">Maximum Payload Capacity</label>
                <input 
                  type="text" 
                  id="payloadCapacity" 
                  v-model="payloadCapacity" 
                  class="form-input" 
                  placeholder="Enter payload capacity"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="communicationEquipment">Communication Equipment Available</label>
                <textarea 
                  id="communicationEquipment" 
                  v-model="communicationEquipment" 
                  class="form-textarea" 
                  placeholder="Enter communication equipment details"
                  rows="3"
                ></textarea>
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

          <!-- Step 4: On-Board Details -->
          <div v-if="currentStep === 4" class="form-step">
            <h3 class="step-title">On-Board Details</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="numberOfCrew">Number of Crew</label>
                <input 
                  type="number" 
                  id="numberOfCrew" 
                  v-model="numberOfCrew" 
                  class="form-input" 
                  placeholder="Enter number of crew"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="numberOfPassengers">Number of Passengers</label>
                <input 
                  type="number" 
                  id="numberOfPassengers" 
                  v-model="numberOfPassengers" 
                  class="form-input" 
                  placeholder="Enter number of passengers"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="generalDescription">General Description of Goods Carried</label>
                <textarea 
                  id="generalDescription" 
                  v-model="generalDescription" 
                  class="form-textarea" 
                  placeholder="Enter description of goods carried (if any)"
                  rows="3"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label for="dgr">Dangerous Goods Information</label>
                <textarea 
                  id="dgr" 
                  v-model="dgr" 
                  class="form-textarea" 
                  placeholder="Enter details of any arms, ammunitions, explosives, radioactive material, etc. (if any)"
                  rows="3"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label for="indicated">UN Number/ICAO Class for Dangerous Goods</label>
                <textarea 
                  id="indicated" 
                  v-model="indicated" 
                  class="form-textarea" 
                  placeholder="Enter UN number/ICAO Class and Division, Quantity (if applicable)"
                  rows="3"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label for="dgca">Special Equipment On Board</label>
                <textarea 
                  id="dgca" 
                  v-model="dgca" 
                  class="form-textarea" 
                  placeholder="Enter details of any special equipment such as aerial photography, remote sensing cameras, etc. (if any)"
                  rows="3"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label for="passengers">Passenger Manifest Information</label>
                <textarea 
                  id="passengers" 
                  v-model="passengers" 
                  class="form-textarea" 
                  placeholder="Enter details of passengers to be uplifted from and set-down in Sri Lanka"
                  rows="3"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label class="file-label">
                  <span>Required Documents</span>
                  <font-awesome-icon 
                    :icon="['fas', 'info-circle']" 
                    class="info-icon" 
                    @click="dialog = true"
                  />
                </label>
                <div class="file-upload-container">
                  <label for="fileInput" class="file-upload-button">
                    <font-awesome-icon :icon="['fas', 'upload']" />
                    <span>Upload Documents</span>
                  </label>
                  <input 
                    type="file" 
                    id="fileInput" 
                    ref="fileInput" 
                    class="file-input" 
                    @change="handleFileUpload" 
                    multiple
                  />
                </div>
                
                <div class="file-list" v-if="files.length > 0">
                  <div v-for="(file, index) in files" :key="index" class="file-item">
                    <div class="file-info">
                      <font-awesome-icon :icon="['fas', 'file-alt']" class="file-icon" />
                      <span class="file-name">{{ file.name }}</span>
                    </div>
                    <button type="button" @click="removeFile(index)" class="remove-button">
                      <font-awesome-icon :icon="['fas', 'times']" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="prev-button" @click="prevStep">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span>Previous</span>
              </button>
              <button type="submit" class="submit-button">
                <span>Submit Application</span>
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </div>
          </div>
          
          <!-- Step 5: Success Message -->
          <div v-if="currentStep === 5" class="form-step success-step">
            <div class="success-message">
              <div class="success-icon">
                <font-awesome-icon :icon="['fas', 'check-circle']" />
              </div>
              <h3 class="success-title">Application Submitted Successfully!</h3>
              <p class="success-text">
                Thank you for your permit application. Our team will review your submission and contact you shortly.
                Please check your email for confirmation details.
              </p>
              <button type="button" class="new-application-button" @click="resetForm">
                <span>Submit Another Application</span>
                <font-awesome-icon :icon="['fas', 'plus']" />
              </button>
            </div>
          </div>
        </form>
        
        <!-- Document Requirements Dialog -->
        <v-dialog v-model="dialog" max-width="800px">
          <v-card>
            <v-card-title class="dialog-title">
              <span>Required Documents for Landing Permit in Sri Lanka</span>
              <v-btn icon @click="dialog = false" class="close-button">
                <font-awesome-icon :icon="['fas', 'times']" />
              </v-btn>
            </v-card-title>
            
            <v-card-text class="dialog-content">
              <div class="document-section">
                <h4 class="section-title">Commercial Charter Flights</h4>
                <ol class="document-list">
                  <li>Duly completed application</li>
                  <li>AOC and Operations Specifications</li>
                  <li>Airworthiness Certificates and latest Airworthiness Review Certificate</li>
                  <li>Insurance Certificates</li>
                  <li>Aircraft Registration Certificate</li>
                  <li>Radio License</li>
                  <li>Capt. Authorization letter to release the aircraft</li>
                  <li>General Declaration (inbound / outbound)</li>
                </ol>
              </div>
              
              <div class="document-section">
                <h4 class="section-title">AVSEC Requirements for Commercial Charter / Ad hoc Operators</h4>
                <ol class="document-list">
                  <li>Conduct Aircraft Security Checks after the passengers are disembarked in Sri Lanka</li>
                  <li>Access Control to aircraft when the Aircraft is in Service</li>
                  <li>Protection of aircraft when the Aircraft is not in Service</li>
                  <li>Conduct aircraft security check and search for the originating flight from Sri Lanka</li>
                </ol>
              </div>
              
              <div class="document-section">
                <h4 class="section-title">Technical Stop and Crew Rest</h4>
                <ol class="document-list">
                  <li>Duly completed application</li>
                  <li>Aircraft Registration Certificate</li>
                  <li>General Declaration (inbound / outbound)</li>
                  <li>Parking confirmation</li>
                </ol>
              </div>
              
              <div class="document-note">
                <p><strong>Note:</strong> If the owner of the aircraft is onboard, required documents remain as above</p>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      dialog: false,
      
      // Form fields
      port: '',
      overflyingOrLanding: '',
      dateOfOperation: '',
      landingAirport: '',
      expectedDateArrival: '',
      expectedTimeArrival: '', 
      arrivalTimeModal: false,
      expectedDateDeparture: '',
      expectedTimeDeparture: '', 
      departureTimeModal: false,
      entrypoint: '',
      expectetime: '', 
      expectetimeModal: false,
      exitpoint: '',
      expectetime2: '', 
      expectetime2Modal: false,
      pointOfOrigin: '',
      arrival: '',
      departure: '',
      destination: '',
      servicesFacilities: '',
      operator: '',
      name: '',
      nationality: '',
      address: '',
      teleNumber: '',
      fax: '',
      email: '',
      afs: '',
      permitNumber: '',
      detailsofOperator: '',
      name2: '',
      nationality2: '',
      mtow: '',
      registry: '',
      registrationNumber: '',
      flightNumber: '',
      airDropping: '',
      seatingCapacity: '',
      payloadCapacity: '',
      communicationEquipment: '',
      numberOfCrew: '',
      numberOfPassengers: '',
      generalDescription: '',
      dgr: '',
      indicated: '',
      nameofConsignor: '',
      postalAddress: '',
      telephoneNumber: '',
      faxNumber: '',
      emailConsignor: '',
      afsAddress: '',
      nameofConsignor1: '',
      postalAddress1: '',
      telephoneNumber1: '',
      faxNumber1: '',
      email1: '',
      afsAddress1: '',
      dgca: '',
      passengers: '',
      files: [],

      errors: {
        departure_time: [],
        arrival_time: [],
        expectetime: [],
        expectetime2: []
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      const selectedFiles = Array.from(event.target.files);
      this.files = [...this.files, ...selectedFiles];
    },
    
    removeFile(index) {
      this.files.splice(index, 1);
    },
    
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep++;
        window.scrollTo(0, 0);
      }
    },
    
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
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
        1: 'General Details',
        2: 'Operator Info',
        3: 'Aircraft Details',
        4: 'On-Board Details'
      };
      return labels[step] || '';
    },
    
    async submitForm() {
      try {
        const formData = new FormData();
        
        // Append all form fields to formData
        Object.keys(this.$data).forEach(key => {
          if (key !== 'files' && key !== 'currentStep' && key !== 'dialog' && 
              key !== 'arrivalTimeModal' && key !== 'departureTimeModal' && 
              key !== 'expectetimeModal' && key !== 'expectetime2Modal' && 
              key !== 'errors') {
            formData.append(key, this[key]);
          }
        });
        
        // Append files
        this.files.forEach((file, index) => {
          formData.append(`pdf[${index}]`, file);
        });
        
        // Submit the form
        const response = await this.$axios.post('/api/send-pdf', formData);
        console.log('Form submitted successfully:', response.data);
        
        // Show success message
        this.currentStep = 5;
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Failed to submit form:', error);
        alert('There was an error submitting your application. Please try again later.');
      }
    },
    
    resetForm() {
      // Reset all form fields
      Object.keys(this.$data).forEach(key => {
        if (key !== 'currentStep' && key !== 'dialog' && 
            key !== 'arrivalTimeModal' && key !== 'departureTimeModal' && 
            key !== 'expectetimeModal' && key !== 'expectetime2Modal' && 
            key !== 'errors') {
          if (key === 'files') {
            this[key] = [];
          } else if (typeof this[key] === 'boolean') {
            this[key] = false;
          } else if (typeof this[key] === 'string') {
            this[key] = '';
          } else if (typeof this[key] === 'number') {
            this[key] = null;
          }
        }
      });
      
      // Reset to first step
      this.currentStep = 1;
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
@import '../../assets/fonts.css';

.permit-form-container {
  background-color: #f8fafc;
  padding: 60px 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.form-wrapper {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Form Header */
.form-header {
  padding: 40px;
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
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.form-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 700px;
}

/* Progress Bar */
.progress-container {
  padding: 30px 40px 0;
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
  padding: 0 40px 40px;
}

.step-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #183862;
  margin: 0 0 30px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group.full-width {
  grid-column: span 2;
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
  min-height: 100px;
}

/* File Upload */
.file-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icon {
  color: #88c607;
  cursor: pointer;
  transition: all 0.3s ease;
}

.info-icon:hover {
  transform: scale(1.1);
}

.file-upload-container {
  margin-top: 10px;
}

.file-upload-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: #f1f5f9;
  color: #334155;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-upload-button:hover {
  background: rgba(136, 198, 7, 0.1);
  border-color: #88c607;
  color: #183862;
}

.file-input {
  display: none;
}

.file-list {
  margin-top: 20px;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid #e2e8f0;
}

.file-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-icon {
  color: #183862;
}

.file-name {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.9375rem;
  color: #334155;
}

.remove-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-button:hover {
  background: #ef4444;
  color: white;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.prev-button,
.next-button,
.submit-button,
.new-application-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
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
.new-application-button {
  background: #88c607;
  color: white;
  box-shadow: 0 4px 12px rgba(136, 198, 7, 0.2);
}

.next-button:hover,
.submit-button:hover,
.new-application-button:hover {
  background: #183862;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 56, 98, 0.3);
}

/* Success Step */
.success-step {
  text-align: center;
  padding: 60px 40px;
}

.success-message {
  max-width: 600px;
  margin: 0 auto;
}

.success-icon {
  font-size: 5rem;
  color: #88c607;
  margin-bottom: 30px;
}

.success-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 20px;
}

.success-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 40px;
}

.new-application-button {
  margin: 0 auto;
}

/* Dialog Styles */
.dialog-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #183862 !important;
  font-family: 'Barlow-ExtraBold', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.25rem !important;
  padding: 20px 24px !important;
  border-bottom: 1px solid #e2e8f0;
}

.close-button {
  color: #64748b !important;
}

.dialog-content {
  padding: 24px !important;
  max-height: 70vh;
  overflow-y: auto;
}

.document-section {
  margin-bottom: 24px;
}

.section-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 16px;
  text-decoration: underline;
}

.document-list {
  padding-left: 24px;
  margin: 0;
}

.document-list li {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #334155;
  line-height: 1.6;
  margin-bottom: 8px;
}

.document-note {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #334155;
  background: #f1f5f9;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #88c607;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .permit-form-container {
    padding: 40px 0;
  }
  
  .form-header {
    padding: 30px;
  }
  
  .form-title {
    font-size: 2rem;
  }
  
  .progress-container {
    padding: 24px 30px 0;
  }
  
  .form-step {
    padding: 0 30px 30px;
  }
}

@media (max-width: 768px) {
  .form-grid,
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  .step-label {
    display: none;
  }
  
  .form-header {
    padding: 24px;
  }
  
  .form-title {
    font-size: 1.75rem;
  }
  
  .form-description {
    font-size: 1rem;
  }
  
  .progress-container {
    padding: 20px 24px 0;
  }
  
  .form-step {
    padding: 0 24px 24px;
  }
  
  .step-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .permit-form-container {
    padding: 30px 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .form-header {
    padding: 20px;
  }
  
  .form-title {
    font-size: 1.5rem;
  }
  
  .progress-container {
    padding: 16px 20px 0;
  }
  
  .form-step {
    padding: 0 20px 20px;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 15px;
  }
  
  .prev-button,
  .next-button,
  .submit-button,
  .new-application-button {
    width: 100%;
    justify-content: center;
  }
  
  .success-step {
    padding: 40px 20px;
  }
  
  .success-icon {
    font-size: 4rem;
  }
  
  .success-title {
    font-size: 1.5rem;
  }
  
  .success-text {
    font-size: 1rem;
  }
}
</style>