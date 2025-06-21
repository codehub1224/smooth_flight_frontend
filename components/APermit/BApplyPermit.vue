<template>
  <div class="classM">

    <form class="trip-estimate-form" @submit.prevent="submitForm">
      <div v-if="currentStep === 1" class="form-step">
        <h2>General Details of Aircraft Movement</h2>
        <div class="form-group">
          <label for="purpose">a. Purpose of Flight</label>

          <select id="port" v-model="port" placeholder="enter here" style="font-weight:500;">
            <option value="VIP">VIP</option>
            <option value="Private">Private</option>
            <option value="Tourist">Tourist</option>
            <option value="Cargo">Cargo</option>
            <option value="Ambulance">Ambulance</option>
            <option value="Relief">Relief</option>
            <option value="Technical Stop">Technical Stop</option>
          </select>

          <br>
          <br>
          <div class="form-group">
            <label for="purpose">b. Whether overflying Colombo Flight Information Region (FIR) or Landing in Sri
              Lanka</label>
            <input v-model="overflyingOrLanding" class="inputClass" type="text" placeholder="Enter Here" />
          </div>

          <div>
            <label for="purpose">c. Date of Operation:</label>
            <label for="dateOfOperation" class="input"><input v-model="dateOfOperation" id="dateOfOperation"
                class="date" type="date"></label>
          </div>
          <br>

          <div class="form-group">
            <label for="purpose">d. If landing in Sri Lanka
              <input id="landingAirport" v-model="landingAirport" class="inputClass" type="text"
                placeholder="Landing Airport" />

              <label for="dateOfOperation" class="input">Expected Date Arrival<input v-model="expectedDateArrival"
                  id="dateOfOperation" class="dateA" type="date"></label>


                 
  <v-dialog
    ref="dialogArrivalTime"
    v-model="arrivalTimeModal"
    :return-value.sync="expectedTimeArrival"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <input
        v-model="expectedTimeArrival"
         :rules="[(v) => !!v || 'Arrival time is required']"
        label="Expected Time Arrival"
        placeholder="Expected Time Arrival"
        outlined
        dense
        hide-details="auto"
        readonly
        v-bind="attrs"
        v-on="on" class="input"
      />
    </template>
    <v-time-picker v-if="arrivalTimeModal" v-model="expectedTimeArrival" format="24hr" full-width>
      <v-spacer></v-spacer>
      <v-btn @click="arrivalTimeModal = false">
        Cancel
      </v-btn>
      <v-btn @click="$refs.dialogArrivalTime.save(expectedTimeArrival)">
        OK
      </v-btn>
    </v-time-picker>
  </v-dialog>


              <label for="dateOfOperation" class="input">Expected Date Departure<input v-model="expectedDateDeparture"
                  id="dateOfOperation" class="dateC" type="date"></label>

                  
  <v-dialog
    ref="dialogDepartureTime"
    v-model="departureTimeModal"
    :return-value.sync="expectedTimeDeparture"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <input
        v-model="expectedTimeDeparture"
        :rules="[(v) => !!v || 'Departure time is required']"
        label="Expected Time Departure"
        placeholder="Expected Time Departure"
        outlined
        dense
        hide-details="auto"
        :error-messages="errors.departure_time[0]"
        readonly
        v-bind="attrs"
        v-on="on" class="input"
      />
    </template>
    <v-time-picker v-if="departureTimeModal" v-model="expectedTimeDeparture" format="24hr" full-width>
      <v-spacer></v-spacer>
      <v-btn @click="departureTimeModal = false">
        Cancel
      </v-btn>
      <v-btn  @click="$refs.dialogDepartureTime.save(expectedTimeDeparture)">
        OK
      </v-btn>
    </v-time-picker>
  </v-dialog>
            </label>

          </div>

         

            <label for="purpose"> e. Inbound/Outbound ATS route itinerary including<br><input v-model="entrypoint"
                class="input" type="text" placeholder="Entry point" />

             
                
  <v-dialog
    ref="dialogExpectetime"
    v-model="expectetimeModal"
    :return-value.sync="expectetime"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <input
        v-model="expectetime"
        :rules="[(v) => !!v || 'Expected time is required']"
        label="Expected Time"
        placeholder="Expected Time"
        outlined
        dense
        hide-details="auto"
        :error-messages="errors.expectetime[0]"
        readonly
        v-bind="attrs"
        v-on="on" class="input"
      />
    </template>
    <v-time-picker v-if="expectetimeModal" v-model="expectetime" format="24hr" full-width>
      <v-spacer></v-spacer>
      <v-btn @click="expectetimeModal = false">
        Cancel
      </v-btn>
      <v-btn @click="$refs.dialogExpectetime.save(expectetime)">
        OK
      </v-btn>
    </v-time-picker>
  </v-dialog>

              <input v-model="exitpoint" class="input" type="text" placeholder="Exit point" /><br>

              
    
    <v-dialog
      ref="dialogExpectetime2"
      v-model="expectetime2Modal"
      :return-value.sync="expectetime2"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <!-- Text field that triggers the dialog -->
        <input 
          v-model="expectetime2"
          :rules="[(v) => !!v || 'Expected time is required']"
          label="Expected Time"
          placeholder="Expected Time"
          outlined
          dense
          hide-details="auto"
          :error-messages="errors.expectetime2[0]"
          readonly
          v-bind="attrs"
          v-on="on" class="input"
      />
      </template>
    
      <v-time-picker v-if="expectetime2Modal" v-model="expectetime2" format="24hr" full-width>
        <v-spacer></v-spacer>
        <v-btn @click="expectetime2Modal = false">
          Cancel
        </v-btn>
        <v-btn @click="$refs.dialogExpectetime2.save(expectetime2)">
          OK
        </v-btn>
      </v-time-picker>
    </v-dialog>
    
            </label>

         
          <br>


          <div class="form-group">
            <label for="purpose">f. Point of Origin of the flight</label>
            <input v-model="pointOfOrigin" class="inputClass" type="text" placeholder="Enter Here" />

          </div>


          <div class="form-group">
            <label for="purpose">
              g. Places of intended landing prior to arrival in Sri Lanka or fly over Colombo FIR</label>
            <input v-model="arrival" class="inputClass" type="text" placeholder="Enter Here" />
          </div>

          <div class="form-group">
            <label for="purpose">
              h. Place of immediate landing after departure form Sri Lanka or fly over Colombo FIR</label>
            <input v-model="departure" class="inputClass" type="text" placeholder="Enter Here" />
          </div>

          <div class="form-group">
            <label for="purpose">i. Final Destination</label>
            <input v-model="destination" class="inputClass" type="text" placeholder="Enter Here" />
          </div>


          <div class="form-group">
            <label for="purpose">j. Services/Facilities required at the Airport/s of Sri Lanka</label>
            <input v-model="servicesFacilities" class="inputClass" type="text" placeholder="Enter Here" />
          </div>

          <div class="form-group">
            <label for="purpose" class="para">k. Whether the Operator has previously operated in to an Airport in Sri
              Lanka or over Colombo FIR (within the preceding three years) and if so,the last date of operation,
              type of aircraft and registration number</label>

            <input v-model="operator" class="inputClass" type="text" placeholder="Enter Here" />
          </div>


          <div class="button-groupA">
            <button class="NBtn" @click.prevent="nextStep">Next</button>
          </div>
        </div>
      </div>


      <div>
        <div v-if="currentStep === 2" class="form-step">
          <h2>Aircraft Operator</h2>
          <div class="form-group">
            <label for="purpose">a. Name
              <input v-model="name" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">b. Nationality
              <input v-model="nationality" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">c. Postal Address
              <input v-model="address" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose"> d. Telephone Number
              <input v-model="teleNumber" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">e. Fax Number
              <input v-model="fax" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>


          <div class="form-group">
            <label for="purpose">f. E-mail
              <input v-model="email" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">g. Aeronautical Fixed Service (AFS) Address, if any
              <input v-model="afs" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">h. Aircraft Operator’s Certificate/Permit Number, if any
              <input v-model="permitNumber" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">i. Details of Operator (if any changes to above) for Billing purposes
              <input v-model="detailsofOperator" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>
          <div class="button-groupB">
            <button class="PBtn" @click.prevent="prevStep">Previous</button>
            <button class="NBtn" @click.prevent="nextStep">Next</button>
          </div>
        </div>
      </div>

      <div>
        <div v-if="currentStep === 3" class="form-step">
          <h2>Aircraft Details</h2>
          <div class="form-group">
            <label for="purpose">a. Pilot-in-Command
              <br>
              <input v-model="name2" class="input2" type="text" placeholder="Name" />
              <input v-model="nationality2" class="input2" type="text" placeholder="Nationality" /><br>
            </label>
          </div>

          <div class="form-group">
            <label for="purpose">b. Type of Aircraft with Maximum Take-off Weight (MTOW)
              <input v-model="mtow" class="inputClass" type="text" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">c. State of Registry/Nationality
              <input v-model="registry" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">d. Registration Number
              <input v-model="registrationNumber" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">e. Aircraft Call sign /Flight Number
              <input v-model="flightNumber" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>


          <div class="form-group">
            <label for="purpose">f. Whether the Aircraft is Capable of Air Dropping
              <input v-model="airDropping" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">g. Maximum Passenger Seating Capacity
              <input v-model="seatingCapacity" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose"> h. Maximum Payload Capacity
              <input v-model="payloadCapacity" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="form-group">
            <label for="purpose">i. Communication Equipment Available
              <input v-model="communicationEquipment" class="inputClass" type="text" placeholder="Enter Here" /></label>
          </div>

          <div class="button-groupB">
            <button class="PBtn" @click.prevent="prevStep">Previous</button>
            <button class="NBtn" @click.prevent="nextStep">Next</button>
          </div>
        </div>
      </div>

      <div v-if="currentStep === 4" class="form-step">
        <h2>On-Board Details</h2>


        <div class="form-group">
          <label for="purpose">a. Number of Crew</label>
          <input v-model="numberOfCrew" class="inputClass" type="text" placeholder="Enter Here" />
        </div>

        <div class="form-group">
          <label for="purpose" class="para">b. Number of Passengers, VIPs if any with Passenger Manifest (Not
            applicable for over flights (Passenger Manifest with passport number and the nationality should be forwarded
            to
            Director General of Civil Aviation (DGCA) at least 72 hours before forwarding the Flight Plan except
            Ambulance
            Flights.Passenger Manifest of Ambulance Flights should be forwarded with the Non-schedule
            Application))</label>
          <input v-model="numberOfPassengers" class="inputClass" type="text" placeholder="Enter Here" />
        </div>

        <div class="form-group">
          <label for="purpose">c. General description of the goods carried, if any (such as garments, printed material
            etc.)</label>
          <input v-model="generalDescription" class="inputClass" type="text" placeholder="Enter Here" />
        </div>

        <div class="form-group">
          <label for="purpose" class="para">d. Any arms, ammunitions, explosives, radioactive material, war equipment
            or
            dangerous
            goods
            carried? If so, attach a copy of Dangerous Goods Regulations (DGR) license issued by the respective
            Aviation
            Authority</label>
          <input v-model="dgr" class="inputClass" type="text" placeholder="Enter Here" />
        </div>

        <div class="form-group">
          <label for="purpose">e. If Dangerous Goods on-board, UN number/ICAO Class and Division, Quantity should be
            indicated</label>
          <input v-model="indicated" class="inputClass" type="text" placeholder="Enter Here" />
        </div>

        <div class="form-group">

          <label for="purpose">e.1. Details of Consignor(optional):
            <br>
            <input v-model="nameofConsignor" class="input2" type="text" placeholder="a. Name of Consignor" />
            <input v-model="postalAddress" class="input2" type="text" placeholder="b. Postal Address" /><br>
            <input v-model="telephoneNumber" class="input2" type="text" placeholder="c. Telephone Number" />
            <input v-model="faxNumber" class="input2" type="text" placeholder="d. Fax Number" /><br>
            <input v-model="emailConsignor" class="input2" type="text" placeholder="e. E-mail" />
            <input v-model="afsAddress" class="input2" type="text" placeholder="f. AFS Address(if any)" /></label>
          <br>
          <label for="purpose">e.2. Details of Consignor(optional):
            <br>
            <input v-model="nameofConsignor1" class="input2" type="text" placeholder="a. Name of Consignor" />
            <input v-model="postalAddress1" class="input2" type="text" placeholder="b. Postal Address" /><br>
            <input v-model="telephoneNumber1" class="input2" type="text" placeholder="c. Telephone Number" />
            <input v-model="faxNumber1" class="input2" type="text" placeholder="d. Fax Number" /><br>
            <input v-model="email1" class="input2" type="text" placeholder="e. E-mail" />
            <input v-model="afsAddress1" class="input2" type="text" placeholder="f. AFS Address(if any)" /></label>
        </div>

        <div class="form-group">
          <label for="purpose" class="para">f. Any special equipment such as aerial photography, remote sensing
            cameras, night vision cameras on board?If so, attach a copy of the permit issued by the relevant Director
            General of Civil Aviation (DGCA)</label>
          <input v-model="dgca" class="inputClass" type="text" placeholder="Enter Here" />
        </div>

        <div class="form-group">
          <label for="purpose" class="para">g.
            Number of passengers with passenger manifest or tonnages and type of cargo to be uplifted from and
            set-down in Sri Lanka (Passenger Manifest with passport number and the nationality should be forwarded to
            the Director General Civil Aviation (DGCA) at least 72 hours before forwarding the Flight Plan except
            Ambulance Flights. Passenger Manifest of Ambulance Flights should beforwardedwith the Non-schedule
            Clearance Application)</label>
          <input v-model="passengers" class="inputClass" type="text" placeholder="Enter Here" />
        </div>

        <v-container>
    <!-- Icon that triggers the dialog -->
    <label for="purpose" class="para">
      h.Please attach the aircraft documents  
      <i class="icon" @click="dialog = true" 
         style="margin-left: 1%; font-size: 11px; border-radius: 50%; cursor: pointer;">
        ?
      </i>
    </label>

    <!-- Dialog Box -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title class="headline">
          <span style="color:#183862;font-size: 18px;font-weight: 550;">REQUIRED DOCUMENTS FOR LANDING PERMIT IN SRI LANKA</span>
          <v-spacer></v-spacer>
          <!-- <span class="close" @click="dialog = false">&times;</span> -->
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="icon2" @click="dialog = false" icon>
    <v-icon>mdi-close</v-icon>
  </v-btn>
        </v-card-actions>
        </v-card-title>
        
        <v-card-text>
          <v-divider></v-divider>

          <!-- Scrollable content container -->
          <div class="scrollable-content">
            <h4><u>Commercial Charter Flights</u></h4>
            <p>1. Duly completed application<br>
               2. AOC and Operations Specifications<br>
               3. Airworthiness Certificates and latest Airworthiness Review Certificate<br>
               4. Insurance Certificates<br>
               5. Aircraft Registration Certificate<br>
               6. Radio License<br>
               7. Capt. Authorization letter to release the aircraft<br>
               8. General Declaration (inbound / outbound)
            </p>

            <h4><u>The following AVSEC requirements are to be fulfilled by Commercial Charter / Ad hoc Operators,</u></h4>
            <p>1. Conduct Aircraft Security Checks after the passengers are disembarked in Sri Lanka <br>
               2. Access Control to aircraft when the Aircraft is in Service <br>
               3. Protection of aircraft when the Aircraft is not in Service <br>
               4. Conduct aircraft security check and search for the originating flight from Sri Lanka
            </p>

            <h4><u>If the operator is not willing to get any of the above security services from an Aviation Security Service Provider in Sri Lanka,</u></h4>
            <p>The details of security measures and procedures with the responsibility of implementation, to be executed in Sri Lanka for the provision of following Aviation Security Functions according to the approved Air Operator Security Programmed (AOSP) of the operator - References with evidences as page/s from the AOSP are required.</p>

            <h4><u>If the operator is willing to get any of the above security services from an Aviation Security Service Provider in Sri Lanka,</u></h4>
            <p>It shall be clearly mentioned with any evidence or related correspondence of the security service provider in Sri Lanka with their confirmation.</p>

            <h4><u>Technical stop and Crew Rest</u></h4>
            <p>1. Duly completed application<br>
               2. Aircraft Registration Certificate<br>
               3. General Declaration (inbound / outbound)<br>
               4. Parking confirmation
            </p>

            <h4>Note</h4>
            <p>• If the owner of the aircraft is onboard, required documents remain as above</p>
          </div>
        </v-card-text>

       
      </v-card>
    </v-dialog>
  </v-container>




        <div class="form-group">
       
          <input type="file" ref="fileInput" class="fileInput" @change="handleFileUpload" />
          <ul class="file-list">
            <dt v-for="(file, index) in files" :key="index" class="file-item">
              <span class="file-name">{{ file.name }}</span>
              <button @click="removeFile(index)" class="btnattach">Remove</button>
            </dt>
          </ul>
        </div>


        <div class="button-groupC">
          <button class="PBtn" @click.prevent="prevStep">Previous</button>
          <button class="PBtn" type="submit">Submit</button>

        </div>

      </div>


    </form>
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
        departure_time: [] ,
        arrival_time: [],
        expectetime: [],
        expectetime2: []
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.files.push(selectedFile);
      }
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
        alert('Thank you! Your request has been successfully submitted');

        // Clear Form
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
        this.files= '';

      } catch (error) {
        console.error('Failed to submit form', error);
        alert('Failed to submit form');
      }
    },

    nextStep() {
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    },

    formatTime(timeField) {
      const timeValue = this[timeField];
      if (timeValue) {
        const [hours, minutes] = timeValue.split(':');
        const formattedHours = hours.padStart(2, '0');
        const formattedMinutes = minutes.padStart(2, '0');
        this[timeField] = `${formattedHours}:${formattedMinutes}`;
      }
    },

    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    }
  },
};
</script>

<style scoped>
.button-groupA {
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: flex-end;

}
.icon2{
  color: #183862;background-color: #f8f9fa;

}
.button-groupB {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5%;
}
.scrollable-content {
  max-height: 60vh; 
  overflow-y: auto; 
  padding-right: 15px;
}
.icon {
  cursor: pointer;

  
}
.button-groupC {
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: space-between;
}

h2 {
  margin-top: 5%;
  font-weight: 900;
  font-family: 'SourceSansPro-Regular', sans-serif;
  color: #183862;
  margin-bottom: 5%;
}



.para {
  text-align: justify;
}


.PBtn {
  left: 0%;
  width: 150px;
  background-color: #88c607;


}

.radio-buttons {
  display: block;

}

.radio-buttons input[type="radio"],
.radio-buttons label {
  display: block;
  margin-left: 10%;
}

.radio-buttons label {
  margin-right: 10px;

}

.date {
  margin-left: 70%;

}

.dateA {
  margin-left: 35%;
}

.dateB {
  margin-left: 46%;
}

.dateC {
  margin-left: 29%;
}

.DateD {
  margin-left: 46%;

}

.NBtn {
  right: 0%;
  width: 150px;
  background-color: #88c607;
}



.classM {
  width: 100%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  animation: fade 1.5s 1.5s both;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translate(0, 4rem);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }


}

.trip-estimate-form {
  max-width: 65%;
  margin: 0 auto;
  padding: 2px 2px 2px 2px !important;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

}

.form-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px; */
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-left: 15%;
  padding-right: 15%;
}



.form-group {
  margin-bottom: 20px;

}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'SourceSansPro-Regular', sans-serif;
}

img {
  height: 35px;
  width: auto;
}



.CDIClass {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  height: 45px;
  margin-top: 5px;
  padding-left: 5px;

}

.Phone {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  margin-left: 10px;
}



.codeDial {
  width: 100% !important;
  font-size: 16px;
}

.Phone {
  width: 20dvw !important;
}

.inputClass,
select,
textarea {
  width: 44.5dvw !important;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
}

button {
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  padding: 16px 50px;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  background: #88c607;
  color: white;
  z-index: 1;
}

button::after {
  border-radius: 6px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #183862;
  z-index: -1;
  transform: scale(0);
  transform-origin: bottom right;
  transition: transform 200ms ease-in;
}

button:hover::after {
  transform: scale(1);
  transform-origin: top left;
}

.add {
  padding: 15px 50px;
  margin-left: 25%;
  background: #183862;
  text-decoration: none;
}

.input {

  width: 23dvw !important;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;

}

.input2 {
  width: 22dvw !important;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
}

.time {
  width: 23dvw !important;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
}

.checkbox-group label {
  margin-bottom: 10px;
}

.checkbox-group input {
  margin-right: 5px;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.fileInput {
  width: 44.5dvw !important;
  padding: 7px;
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
}

.file-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2%;
}

.file-name {
  flex: 1;
}

.btnattach {
  width: 100px;
  text-align: center;
  background-color: #183862;
  border: 1px solid #ccc;
  padding: 5px 20px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  margin-right: 35%;
}

.icon {
  border: 1px solid  black; /* Border style */
  padding: 5px; /* Optional: Add padding to the icon */
 
}

.popup {
  position: fixed;
  left: 0;
  top: 15%;
  width: 78%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
 
  margin-left: 10%;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
p{
  text-align: justify;
}
@media only screen and (min-width: 601px) and (max-width: 1024px) {

  .inputClass,
  select,
  textarea {
    width: 54dvw !important;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .input {

    width: 40dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .input2 {
    width: 26.1dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .date {
    margin-left: 67%;
  }

  .dateA {
    margin-left: 30%;
  }

  .dateB {
    margin-left: 42%;
  }

  .dateC {
    margin-left: 23%;
  }

  .DateD {
    margin-left: 42%;

  }

  .time {
    width: 40dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }



  .trip-estimate-form {
    max-width: 90%;
    margin: 0 auto;
    padding: 2px 2px 2px 2px !important;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .form-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 20px; */
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding-left: 20%;
    padding-right: 20%;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {

  .inputClass,
  select,
  textarea {
    width: 65dvw !important;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .input {
    width: 30dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .input2 {
    width: 30dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  .date {
    margin-left: 65%;
  }

  .dateA {
    margin-left: 25%;
  }

  .dateB {
    margin-left: 36%;
  }

  .dateC {
    margin-left: 17%;
  }

  .dateD {
    margin-left: 32%;
  }



  .trip-estimate-form {
    max-width: 90%;
    margin: 0 auto;
    padding: 2px 2px 2px 2px !important;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .time {
    width: 30vw !important;
    /* Corrected unit to vw */
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }


}


@media only screen and (min-width: 1281px) and (max-width: 1366px) {
  .date {
    margin-left: 60%;
  }

  .dateA {
    margin-left: 15%;
  }

  .dateB {
    margin-left: 30%;
  }

  .dateC {
    margin-left: 7%;
  }

  .DateD {
    margin-left: 30%;

  }

  .input {

    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .input2 {
    width: 21.9dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .time {
    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  /* .para {
    text-align: justify;
    font-size: 13px;
  } */

  .trip-estimate-form {
    max-width: 75%;
    margin: 0 auto;
    padding: 2px 2px 2px 2px !important;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .form-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 20px; */
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding-left: 20%;
    padding-right: 20%;
  }
}


@media only screen and (min-width: 1367px) and (max-width: 1440px) {

  .inputClass,
  select,
  textarea {
    width: 48dvw !important;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .input {

    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .input2 {
    width: 23.3dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .date {
    margin-left: 62%;
  }

  .dateA {
    margin-left: 20%;
  }

  .dateB {
    margin-left: 30%;
  }

  .dateC {
    margin-left: 12%;
  }

  .DateD {
    margin-left: 52%;

  }

  .time {
    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .trip-estimate-form {
    max-width: 80%;
    margin: 0 auto;
    padding: 2px 2px 2px 2px !important;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .form-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 20px; */
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding-left: 20%;
    padding-right: 20%;
  }


}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {

  .date {
    margin-left: 63%;
  }

  .dateA {
    margin-left: 28%;
  }

  .dateB {
    margin-left: 40%;
  }

  .dateC {
    margin-left: 22%;
  }

  .DateD {
    margin-left: 40%;

  }

  .input {

    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .time {
    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .form-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 20px; */
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding-left: 20%;
    padding-right: 20%;
  }

  .trip-estimate-form {
    max-width: 75%;
    margin: 0 auto;
    padding: 2px 2px 2px 2px !important;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }



}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
  .date {
    margin-left: 67%;
  }

  .dateA {
    margin-left: 32%;
  }

  .dateB {
    margin-left: 45%;
  }

  .dateC {
    margin-left: 25%;
  }

  .DateD {
    margin-left: 40%;

  }

  .input {

    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .time {
    width: 25dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
  }

  .form-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 20px; */
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding-left: 20%;
    padding-right: 20%;
  }

  .trip-estimate-form {
    max-width: 75%;
    margin: 0 auto;
    padding: 2px 2px 2px 2px !important;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }



}

@media only screen and (max-width: 500px) {
  .classM {
    display: block;
    padding: 10px;
    font-size: 14px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-family: 'SourceSansPro-Regular', sans-serif;
    margin-left: 5%
  }

  .trip-estimate-form {
    max-width: 100%;
    padding-right: 2%;
  }


  img {
    height: 15px;
    width: auto;
  }

  h2 {
    font-size: 15px;
  }

  .CDIClass {
    width: 15svw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    height: 45px;
    margin-top: 5px;
    padding-left: 5px;

  }


  .Phone {
    width: 50svw !important;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 12px;
    margin-left: 10px;
  }


  .codeDial {
    width: 10svw !important;
    font-size: 12px;
  }

  .inputClass,
  select,
  textarea {
    width: 65svw !important;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 12px;
    margin-left: 5%;
  }

  .radio-buttons {
    display: block;
    flex-direction: row;
    align-items: center;

  }

  .radio-buttons input[type="radio"],
  .radio-buttons label {
    margin-right: 10px;
    margin-bottom: 0;

  }

  .input {

    width: 65dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    color: rgb(126, 125, 125);
    border-radius: 4px;
    font-size: 11px;
  }

  .input2 {
    width: 65dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;

  }

  .time {
    width: 65dvw !important;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
    color: rgb(126, 125, 125);
    border-radius: 4px;
    font-size: 16px;
    margin-left: 5%;
  }

  .date {
    margin-left: 45%;
    color: rgb(126, 125, 125);

  }

  .dateA {
    margin-left: 1%;
    color: rgb(126, 125, 125);
  }

  .dateB {
    margin-left: 15%;
    color: rgb(126, 125, 125);
  }

  .dateC {
    margin-left: 0%;
    color: rgb(126, 125, 125);
  }

  .DateD {
    margin-left: 15%;
    color: rgb(126, 125, 125);

  }

  .button-groupA,
  .button-groupB,
  .button-groupC {
    padding: 6%;

  }


  .PBtn {
    width: 110px;
    padding-right: 8%;

  }

  .NBtn {
    width: 110px;
  }

  button {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    padding: 10px 25px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;
    text-align: center;
  }

  .sButton {
    width: 110px;
  }

  .para {
    padding-right: 2%;
  }
}
</style>
