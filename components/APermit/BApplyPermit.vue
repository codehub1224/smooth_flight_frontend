<template>
  <div class="apply-permit-section">
    <div class="container">
      <div class="form-container">
        <div class="form-intro">
          <div class="intro-badge">
            <font-awesome-icon :icon="['fas', 'file-alt']" class="badge-icon" />
            <span>Flight Permit Application</span>
          </div>
          <h2 class="intro-title">Submit Your Permit Request</h2>
          <p class="intro-description">
            Complete the form below to apply for flight permits. Our team will process your request promptly and efficiently.
          </p>
        </div>
        
        <div class="form-progress">
          <div class="progress-steps">
            <div 
              v-for="step in 4" 
              :key="step" 
              class="progress-step" 
              :class="{ 'active': currentStep >= step, 'completed': currentStep > step }"
            >
              <div class="step-number">{{ step }}</div>
              <div class="step-label">{{ getStepLabel(step) }}</div>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${(currentStep - 1) * 33.33}%` }"></div>
          </div>
        </div>
        
        <form class="permit-form" @submit.prevent="submitForm">
          <!-- Step 1: General Details -->
          <div v-if="currentStep === 1" class="form-step">
            <h3 class="step-title">General Details of Aircraft Movement</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="purpose">Purpose of Flight</label>
                <select id="purpose" v-model="port" class="form-select">
                  <option value="" disabled>Select purpose</option>
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
                <input 
                  id="overflyingOrLanding" 
                  v-model="overflyingOrLanding" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter details"
                />
              </div>
              
              <div class="form-group">
                <label for="dateOfOperation">Date of Operation</label>
                <input 
                  id="dateOfOperation" 
                  v-model="dateOfOperation" 
                  type="date" 
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="landingAirport">Landing Airport (if landing in Sri Lanka)</label>
                <input 
                  id="landingAirport" 
                  v-model="landingAirport" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter airport code"
                />
              </div>
              
              <div class="form-group">
                <label for="expectedDateArrival">Expected Date of Arrival</label>
                <input 
                  id="expectedDateArrival" 
                  v-model="expectedDateArrival" 
                  type="date" 
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="expectedTimeArrival">Expected Time of Arrival</label>
                <v-dialog
                  ref="dialogArrivalTime"
                  v-model="arrivalTimeModal"
                  :return-value.sync="expectedTimeArrival"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      id="expectedTimeArrival"
                      v-model="expectedTimeArrival"
                      class="form-input time-input"
                      placeholder="Select time"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-time-picker v-if="arrivalTimeModal" v-model="expectedTimeArrival" format="24hr" full-width>
                    <div class="time-picker-actions">
                      <button type="button" class="time-picker-btn cancel" @click="arrivalTimeModal = false">
                        Cancel
                      </button>
                      <button type="button" class="time-picker-btn confirm" @click="$refs.dialogArrivalTime.save(expectedTimeArrival)">
                        OK
                      </button>
                    </div>
                  </v-time-picker>
                </v-dialog>
              </div>
              
              <div class="form-group">
                <label for="expectedDateDeparture">Expected Date of Departure</label>
                <input 
                  id="expectedDateDeparture" 
                  v-model="expectedDateDeparture" 
                  type="date" 
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="expectedTimeDeparture">Expected Time of Departure</label>
                <v-dialog
                  ref="dialogDepartureTime"
                  v-model="departureTimeModal"
                  :return-value.sync="expectedTimeDeparture"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      id="expectedTimeDeparture"
                      v-model="expectedTimeDeparture"
                      class="form-input time-input"
                      placeholder="Select time"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-time-picker v-if="departureTimeModal" v-model="expectedTimeDeparture" format="24hr" full-width>
                    <div class="time-picker-actions">
                      <button type="button" class="time-picker-btn cancel" @click="departureTimeModal = false">
                        Cancel
                      </button>
                      <button type="button" class="time-picker-btn confirm" @click="$refs.dialogDepartureTime.save(expectedTimeDeparture)">
                        OK
                      </button>
                    </div>
                  </v-time-picker>
                </v-dialog>
              </div>
            </div>
            
            <div class="form-divider"></div>
            
            <div class="form-group">
              <label>Inbound/Outbound ATS route itinerary</label>
              <div class="form-grid">
                <div class="form-group">
                  <label for="entrypoint" class="sub-label">Entry point</label>
                  <input 
                    id="entrypoint" 
                    v-model="entrypoint" 
                    type="text" 
                    class="form-input" 
                    placeholder="Enter entry point"
                  />
                </div>
                
                <div class="form-group">
                  <label for="expectetime" class="sub-label">Expected Time</label>
                  <v-dialog
                    ref="dialogExpectetime"
                    v-model="expectetimeModal"
                    :return-value.sync="expectetime"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <input
                        id="expectetime"
                        v-model="expectetime"
                        class="form-input time-input"
                        placeholder="Select time"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-time-picker v-if="expectetimeModal" v-model="expectetime" format="24hr" full-width>
                      <div class="time-picker-actions">
                        <button type="button" class="time-picker-btn cancel" @click="expectetimeModal = false">
                          Cancel
                        </button>
                        <button type="button" class="time-picker-btn confirm" @click="$refs.dialogExpectetime.save(expectetime)">
                          OK
                        </button>
                      </div>
                    </v-time-picker>
                  </v-dialog>
                </div>
                
                <div class="form-group">
                  <label for="exitpoint" class="sub-label">Exit point</label>
                  <input 
                    id="exitpoint" 
                    v-model="exitpoint" 
                    type="text" 
                    class="form-input" 
                    placeholder="Enter exit point"
                  />
                </div>
                
                <div class="form-group">
                  <label for="expectetime2" class="sub-label">Expected Time</label>
                  <v-dialog
                    ref="dialogExpectetime2"
                    v-model="expectetime2Modal"
                    :return-value.sync="expectetime2"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <input
                        id="expectetime2"
                        v-model="expectetime2"
                        class="form-input time-input"
                        placeholder="Select time"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-time-picker v-if="expectetime2Modal" v-model="expectetime2" format="24hr" full-width>
                      <div class="time-picker-actions">
                        <button type="button" class="time-picker-btn cancel" @click="expectetime2Modal = false">
                          Cancel
                        </button>
                        <button type="button" class="time-picker-btn confirm" @click="$refs.dialogExpectetime2.save(expectetime2)">
                          OK
                        </button>
                      </div>
                    </v-time-picker>
                  </v-dialog>
                </div>
              </div>
            </div>
            
            <div class="form-divider"></div>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="pointOfOrigin">Point of Origin of the flight</label>
                <input 
                  id="pointOfOrigin" 
                  v-model="pointOfOrigin" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter point of origin"
                />
              </div>
              
              <div class="form-group">
                <label for="arrival">Places of intended landing prior to arrival in Sri Lanka</label>
                <input 
                  id="arrival" 
                  v-model="arrival" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter details"
                />
              </div>
              
              <div class="form-group">
                <label for="departure">Place of immediate landing after departure from Sri Lanka</label>
                <input 
                  id="departure" 
                  v-model="departure" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter details"
                />
              </div>
              
              <div class="form-group">
                <label for="destination">Final Destination</label>
                <input 
                  id="destination" 
                  v-model="destination" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter final destination"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="servicesFacilities">Services/Facilities required at the Airport/s of Sri Lanka</label>
                <input 
                  id="servicesFacilities" 
                  v-model="servicesFacilities" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter required services/facilities"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="operator">Previous operations in Sri Lanka (if any in the last 3 years)</label>
                <textarea 
                  id="operator" 
                  v-model="operator" 
                  class="form-textarea" 
                  placeholder="Include date, aircraft type, and registration number if applicable"
                ></textarea>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="form-button next" @click="nextStep">
                <span>Next Step</span>
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>
          
          <!-- Step 2: Aircraft Operator -->
          <div v-if="currentStep === 2" class="form-step">
            <h3 class="step-title">Aircraft Operator</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  id="name" 
                  v-model="name" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter operator name"
                />
              </div>
              
              <div class="form-group">
                <label for="nationality">Nationality</label>
                <input 
                  id="nationality" 
                  v-model="nationality" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter nationality"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="address">Postal Address</label>
                <textarea 
                  id="address" 
                  v-model="address" 
                  class="form-textarea" 
                  placeholder="Enter postal address"
                ></textarea>
              </div>
              
              <div class="form-group">
                <label for="teleNumber">Telephone Number</label>
                <input 
                  id="teleNumber" 
                  v-model="teleNumber" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter telephone number"
                />
              </div>
              
              <div class="form-group">
                <label for="fax">Fax Number</label>
                <input 
                  id="fax" 
                  v-model="fax" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter fax number"
                />
              </div>
              
              <div class="form-group">
                <label for="email">E-mail</label>
                <input 
                  id="email" 
                  v-model="email" 
                  type="email" 
                  class="form-input" 
                  placeholder="Enter email address"
                />
              </div>
              
              <div class="form-group">
                <label for="afs">Aeronautical Fixed Service (AFS) Address</label>
                <input 
                  id="afs" 
                  v-model="afs" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter AFS address (if any)"
                />
              </div>
              
              <div class="form-group">
                <label for="permitNumber">Aircraft Operator's Certificate/Permit Number</label>
                <input 
                  id="permitNumber" 
                  v-model="permitNumber" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter certificate/permit number (if any)"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="detailsofOperator">Details of Operator for Billing purposes (if different from above)</label>
                <textarea 
                  id="detailsofOperator" 
                  v-model="detailsofOperator" 
                  class="form-textarea" 
                  placeholder="Enter billing details if different"
                ></textarea>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="form-button prev" @click="prevStep">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span>Previous</span>
              </button>
              <button type="button" class="form-button next" @click="nextStep">
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
                  id="name2" 
                  v-model="name2" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter pilot name"
                />
              </div>
              
              <div class="form-group">
                <label for="nationality2">Pilot-in-Command Nationality</label>
                <input 
                  id="nationality2" 
                  v-model="nationality2" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter pilot nationality"
                />
              </div>
              
              <div class="form-group">
                <label for="mtow">Type of Aircraft with Maximum Take-off Weight (MTOW)</label>
                <input 
                  id="mtow" 
                  v-model="mtow" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter aircraft type and MTOW"
                />
              </div>
              
              <div class="form-group">
                <label for="registry">State of Registry/Nationality</label>
                <input 
                  id="registry" 
                  v-model="registry" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter state of registry"
                />
              </div>
              
              <div class="form-group">
                <label for="registrationNumber">Registration Number</label>
                <input 
                  id="registrationNumber" 
                  v-model="registrationNumber" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter registration number"
                />
              </div>
              
              <div class="form-group">
                <label for="flightNumber">Aircraft Call sign/Flight Number</label>
                <input 
                  id="flightNumber" 
                  v-model="flightNumber" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter call sign/flight number"
                />
              </div>
              
              <div class="form-group">
                <label for="airDropping">Whether the Aircraft is Capable of Air Dropping</label>
                <input 
                  id="airDropping" 
                  v-model="airDropping" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter Yes/No and details if applicable"
                />
              </div>
              
              <div class="form-group">
                <label for="seatingCapacity">Maximum Passenger Seating Capacity</label>
                <input 
                  id="seatingCapacity" 
                  v-model="seatingCapacity" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter seating capacity"
                />
              </div>
              
              <div class="form-group">
                <label for="payloadCapacity">Maximum Payload Capacity</label>
                <input 
                  id="payloadCapacity" 
                  v-model="payloadCapacity" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter payload capacity"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="communicationEquipment">Communication Equipment Available</label>
                <input 
                  id="communicationEquipment" 
                  v-model="communicationEquipment" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter communication equipment details"
                />
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="form-button prev" @click="prevStep">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span>Previous</span>
              </button>
              <button type="button" class="form-button next" @click="nextStep">
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
                  id="numberOfCrew" 
                  v-model="numberOfCrew" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter number of crew"
                />
              </div>
              
              <div class="form-group">
                <label for="numberOfPassengers">Number of Passengers</label>
                <input 
                  id="numberOfPassengers" 
                  v-model="numberOfPassengers" 
                  type="text" 
                  class="form-input" 
                  placeholder="Enter number of passengers"
                />
              </div>
              
              <div class="form-group full-width">
                <label for="generalDescription">General description of the goods carried</label>
                <textarea 
                  id="generalDescription" 
                  v-model="generalDescription" 
                  class="form-textarea" 
                  placeholder="Enter description of goods carried"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label for="dgr">Any arms, ammunitions, explosives, radioactive material, war equipment or dangerous goods carried?</label>
                <textarea 
                  id="dgr" 
                  v-model="dgr" 
                  class="form-textarea" 
                  placeholder="Enter details if applicable"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <label for="indicated">If Dangerous Goods on-board, UN number/ICAO Class and Division, Quantity</label>
                <textarea 
                  id="indicated" 
                  v-model="indicated" 
                  class="form-textarea" 
                  placeholder="Enter details if applicable"
                ></textarea>
              </div>
            </div>
            
            <div class="form-divider"></div>
            
            <h4 class="subsection-title">Required Documents</h4>
            <div class="info-box">
              <div class="info-icon">
                <font-awesome-icon :icon="['fas', 'info-circle']" />
              </div>
              <div class="info-content">
                <p class="info-text">
                  Please attach the required documents for your permit application. These may include aircraft registration, airworthiness certificates, insurance documents, and other relevant permits.
                </p>
                <button type="button" class="info-button" @click="dialog = true">
                  View Required Documents
                </button>
              </div>
            </div>
            
            <div class="form-group file-upload-group">
              <label for="fileInput" class="file-upload-label">
                <font-awesome-icon :icon="['fas', 'upload']" class="upload-icon" />
                <span class="upload-text">Upload Documents</span>
                <span class="upload-hint">PDF, DOC, or DOCX format (Max 5MB)</span>
              </label>
              <input 
                type="file" 
                id="fileInput" 
                ref="fileInput" 
                class="file-input" 
                @change="handleFileUpload" 
                multiple
              />
              
              <ul v-if="files.length > 0" class="file-list">
                <li v-for="(file, index) in files" :key="index" class="file-item">
                  <div class="file-info">
                    <font-awesome-icon :icon="['fas', 'file-alt']" class="file-icon" />
                    <span class="file-name">{{ file.name }}</span>
                  </div>
                  <button type="button" @click="removeFile(index)" class="file-remove-button">
                    <font-awesome-icon :icon="['fas', 'times']" />
                  </button>
                </li>
              </ul>
            </div>
            
            <div class="form-actions">
              <button type="button" class="form-button prev" @click="prevStep">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span>Previous</span>
              </button>
              <button type="submit" class="form-button submit">
                <span>Submit Application</span>
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </div>
          </div>
        </form>
      </div>
      
      <!-- Required Documents Dialog -->
      <v-dialog v-model="dialog" max-width="800px" class="documents-dialog">
        <v-card>
          <v-card-title class="dialog-title">
            <span>Required Documents for Landing Permit in Sri Lanka</span>
            <v-btn class="close-button" @click="dialog = false" icon>
              <font-awesome-icon :icon="['fas', 'times']" />
            </v-btn>
          </v-card-title>
          
          <v-card-text class="dialog-content">
            <div class="scrollable-content">
              <h4 class="document-section-title">Commercial Charter Flights</h4>
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
              
              <h4 class="document-section-title">AVSEC Requirements for Commercial Charter / Ad hoc Operators</h4>
              <ol class="document-list">
                <li>Conduct Aircraft Security Checks after the passengers are disembarked in Sri Lanka</li>
                <li>Access Control to aircraft when the Aircraft is in Service</li>
                <li>Protection of aircraft when the Aircraft is not in Service</li>
                <li>Conduct aircraft security check and search for the originating flight from Sri Lanka</li>
              </ol>
              
              <h4 class="document-section-title">Security Services from Aviation Security Service Provider</h4>
              <p class="document-note">
                If the operator is not willing to get any of the above security services from an Aviation Security Service Provider in Sri Lanka, the details of security measures and procedures with the responsibility of implementation, to be executed in Sri Lanka for the provision of following Aviation Security Functions according to the approved Air Operator Security Programmed (AOSP) of the operator - References with evidences as page/s from the AOSP are required.
              </p>
              
              <p class="document-note">
                If the operator is willing to get any of the above security services from an Aviation Security Service Provider in Sri Lanka, it shall be clearly mentioned with any evidence or related correspondence of the security service provider in Sri Lanka with their confirmation.
              </p>
              
              <h4 class="document-section-title">Technical stop and Crew Rest</h4>
              <ol class="document-list">
                <li>Duly completed application</li>
                <li>Aircraft Registration Certificate</li>
                <li>General Declaration (inbound / outbound)</li>
                <li>Parking confirmation</li>
              </ol>
              
              <p class="document-note">
                <strong>Note:</strong> If the owner of the aircraft is onboard, required documents remain as above
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
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
      dialog: false,
      errors: {
        departure_time: [],
        arrival_time: [],
        expectetime: [],
        expectetime2: []
      }
    };
  },
  methods: {
    getStepLabel(step) {
      const labels = {
        1: 'General Details',
        2: 'Aircraft Operator',
        3: 'Aircraft Details',
        4: 'On-Board Details'
      };
      return labels[step] || '';
    },
    handleFileUpload(event) {
      const selectedFiles = Array.from(event.target.files);
      this.files = [...this.files, ...selectedFiles];
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    async submitForm() {
      const formData = new FormData();
      this.files.forEach((file, index) => {
        formData.append(`pdf[${index}]`, file); 
      });

      formData.append('port', this.port);
      formData.append('overflyingOrLanding', this.overflyingOrLanding);
      formData.append('dateOfOperation', this.dateOfOperation);
      formData.append('landingAirport', this.landingAirport);
      formData.append('expectedDateArrival', this.expectedDateArrival);
      formData.append('expectedTimeArrival', this.expectedTimeArrival);
      formData.append('expectedDateDeparture', this.expectedDateDeparture);
      formData.append('expectedTimeDeparture', this.expectedTimeDeparture);
      formData.append('entrypoint', this.entrypoint);
      formData.append('expectetime', this.expectetime);
      formData.append('exitpoint', this.exitpoint);
      formData.append('expectetime2', this.expectetime2);
      formData.append('pointOfOrigin', this.pointOfOrigin);
      formData.append('arrival', this.arrival);
      formData.append('departure', this.departure);
      formData.append('destination', this.destination);
      formData.append('servicesFacilities', this.servicesFacilities);
      formData.append('operator', this.operator);
      formData.append('name', this.name);
      formData.append('nationality', this.nationality);
      formData.append('address', this.address);
      formData.append('teleNumber', this.teleNumber);
      formData.append('fax', this.fax);
      formData.append('email', this.email);
      formData.append('afs', this.afs);
      formData.append('permitNumber', this.permitNumber);
      formData.append('detailsofOperator', this.detailsofOperator);
      formData.append('name2', this.name2);
      formData.append('nationality2', this.nationality2);
      formData.append('mtow', this.mtow);
      formData.append('registry', this.registry);
      formData.append('registrationNumber', this.registrationNumber);
      formData.append('flightNumber', this.flightNumber);
      formData.append('airDropping', this.airDropping);
      formData.append('seatingCapacity', this.seatingCapacity);
      formData.append('payloadCapacity', this.payloadCapacity);
      formData.append('communicationEquipment', this.communicationEquipment);
      formData.append('numberOfCrew', this.numberOfCrew);
      formData.append('numberOfPassengers', this.numberOfPassengers);
      formData.append('generalDescription', this.generalDescription);
      formData.append('dgr', this.dgr);
      formData.append('indicated', this.indicated);
      formData.append('nameofConsignor', this.nameofConsignor);
      formData.append('postalAddress', this.postalAddress);
      formData.append('telephoneNumber', this.telephoneNumber);
      formData.append('faxNumber', this.faxNumber);
      formData.append('emailConsignor', this.emailConsignor);
      formData.append('afsAddress', this.afsAddress);
      formData.append('nameofConsignor1', this.nameofConsignor1);
      formData.append('postalAddress1', this.postalAddress1);
      formData.append('telephoneNumber1', this.telephoneNumber1);
      formData.append('faxNumber1', this.faxNumber1);
      formData.append('email1', this.email1);
      formData.append('afsAddress1', this.afsAddress1);
      formData.append('dgca', this.dgca);
      formData.append('passengers', this.passengers);

      try {
        const response = await this.$axios.post('/api/send-pdf', formData, {
          method: 'POST',
          body: formData
        });
        console.log(response.data);
        this.showSuccessMessage();
        this.resetForm();
      } catch (error) {
        console.error('Failed to submit form', error);
        alert('Failed to submit form. Please try again later.');
      }
    },
    showSuccessMessage() {
      alert('Thank you! Your permit application has been successfully submitted. Our team will contact you shortly.');
    },
    resetForm() {
      this.currentStep = 1;
      this.port = '';
      this.overflyingOrLanding = '';
      this.dateOfOperation = '';
      this.landingAirport = '';
      this.expectedDateArrival = '';
      this.expectedTimeArrival = '';
      this.expectedDateDeparture = '';
      this.expectedTimeDeparture = '';
      this.entrypoint = '';
      this.expectetime = '';
      this.exitpoint = '';
      this.expectetime2 = '';
      this.pointOfOrigin = '';
      this.arrival = '';
      this.departure = '';
      this.destination = '';
      this.servicesFacilities = '';
      this.operator = '';
      this.name = '';
      this.nationality = '';
      this.address = '';
      this.teleNumber = '';
      this.fax = '';
      this.email = '';
      this.afs = '';
      this.permitNumber = '';
      this.detailsofOperator = '';
      this.name2 = '';
      this.nationality2 = '';
      this.mtow = '';
      this.registry = '';
      this.registrationNumber = '';
      this.flightNumber = '';
      this.airDropping = '';
      this.seatingCapacity = '';
      this.payloadCapacity = '';
      this.communicationEquipment = '';
      this.numberOfCrew = '';
      this.numberOfPassengers = '';
      this.generalDescription = '';
      this.dgr = '';
      this.indicated = '';
      this.nameofConsignor = '';
      this.postalAddress = '';
      this.telephoneNumber = '';
      this.faxNumber = '';
      this.emailConsignor = '';
      this.afsAddress = '';
      this.nameofConsignor1 = '';
      this.postalAddress1 = '';
      this.telephoneNumber1 = '';
      this.faxNumber1 = '';
      this.email1 = '';
      this.afsAddress1 = '';
      this.dgca = '';
      this.passengers = '';
      this.files = [];
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
    }
  }
};
</script>

<style scoped>
@import '../../assets/fonts.css';

.apply-permit-section {
  background-color: #f8fafc;
  padding: 60px 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.form-container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Form Intro */
.form-intro {
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  padding: 40px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.form-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
  background-position: center;
  opacity: 0.1;
  pointer-events: none;
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(136, 198, 7, 0.2);
  color: #88c607;
  border-radius: 50px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(136, 198, 7, 0.3);
  position: relative;
}

.badge-icon {
  font-size: 1rem;
}

.intro-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  position: relative;
}

.intro-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

/* Progress Steps */
.form-progress {
  padding: 30px 40px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
}

.progress-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 50%;
  width: 100%;
  height: 2px;
  background: #e2e8f0;
  z-index: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.step-label {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
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

.progress-bar {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #88c607;
  border-radius: 3px;
  transition: width 0.3s ease;
}

/* Form Styles */
.permit-form {
  padding: 40px;
}

.form-step {
  animation: fadeIn 0.5s ease-out;
}

.step-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

.step-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: #88c607;
  border-radius: 2px;
}

.subsection-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.form-group {
  margin-bottom: 0;
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
  font-size: 0.95rem;
}

.sub-label {
  font-weight: 500;
  color: #64748b;
  font-size: 0.875rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
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
  min-height: 100px;
  resize: vertical;
}

.time-input {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 40px;
}

.form-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 30px 0;
  grid-column: span 2;
}

/* File Upload */
.file-upload-group {
  margin-top: 30px;
}

.file-upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-upload-label:hover {
  border-color: #88c607;
  background: rgba(136, 198, 7, 0.05);
}

.upload-icon {
  font-size: 2.5rem;
  color: #88c607;
  margin-bottom: 15px;
}

.upload-text {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 8px;
}

.upload-hint {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
}

.file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.file-list {
  margin-top: 20px;
  list-style: none;
  padding: 0;
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
  gap: 12px;
}

.file-icon {
  color: #183862;
  font-size: 1.25rem;
}

.file-name {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.95rem;
  color: #334155;
}

.file-remove-button {
  width: 32px;
  height: 32px;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-remove-button:hover {
  background: #ef4444;
  color: white;
}

/* Info Box */
.info-box {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: rgba(136, 198, 7, 0.05);
  border: 1px solid rgba(136, 198, 7, 0.2);
  border-radius: 12px;
  margin-bottom: 30px;
}

.info-icon {
  font-size: 1.5rem;
  color: #88c607;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
}

.info-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.95rem;
  color: #334155;
  margin-bottom: 15px;
}

.info-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #88c607;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.info-button:hover {
  background: #183862;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.form-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-button.next,
.form-button.submit {
  background: #88c607;
  color: white;
}

.form-button.prev {
  background: #f1f5f9;
  color: #64748b;
}

.form-button:hover {
  transform: translateY(-3px);
}

.form-button.next:hover,
.form-button.submit:hover {
  background: #183862;
}

.form-button.prev:hover {
  background: #e2e8f0;
  color: #334155;
}

/* Time Picker Styles */
.time-picker-actions {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

.time-picker-btn {
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.time-picker-btn.cancel {
  background: #f1f5f9;
  color: #64748b;
}

.time-picker-btn.confirm {
  background: #88c607;
  color: white;
}

.time-picker-btn:hover {
  opacity: 0.9;
}

/* Dialog Styles */
.dialog-title {
  background: #183862;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  color: white;
}

.dialog-content {
  padding: 0;
}

.scrollable-content {
  max-height: 60vh;
  overflow-y: auto;
  padding: 20px;
}

.document-section-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #183862;
  margin: 20px 0 10px;
  text-decoration: underline;
}

.document-section-title:first-child {
  margin-top: 0;
}

.document-list {
  padding-left: 20px;
  margin-bottom: 20px;
}

.document-list li {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.95rem;
  color: #334155;
  margin-bottom: 8px;
  line-height: 1.5;
}

.document-note {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 10px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 3px solid #88c607;
}

/* Responsive Design */
@media (max-width: 992px) {
  .apply-permit-section {
    padding: 40px 0;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  .intro-title {
    font-size: 2rem;
  }
  
  .step-title {
    font-size: 1.5rem;
  }
  
  .progress-steps {
    display: none;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .form-intro,
  .permit-form {
    padding: 30px;
  }
  
  .form-progress {
    padding: 20px 30px;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 15px;
  }
  
  .form-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .apply-permit-section {
    padding: 30px 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .form-intro,
  .permit-form {
    padding: 20px;
  }
  
  .form-progress {
    padding: 15px 20px;
  }
  
  .intro-title {
    font-size: 1.75rem;
  }
  
  .intro-description {
    font-size: 1rem;
  }
  
  .step-title {
    font-size: 1.35rem;
  }
  
  .file-upload-label {
    padding: 30px 20px;
  }
  
  .upload-icon {
    font-size: 2rem;
  }
  
  .upload-text {
    font-size: 1.125rem;
  }
}
</style>