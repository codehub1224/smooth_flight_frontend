<template>
  <div class="classM">


    <form class="trip-estimate-form" @submit.prevent="submitForm">
      <div v-if="currentStep === 1" class="form-step">
        <h2>Personal Information</h2>
        <div class="form-group">
          <input id="name" v-model="name" type="text" class="inputClass" required placeholder="Name" />
        </div>

        <div class="form-group">
          <input id="companyName" v-model="companyName" class="inputClass" type="text" placeholder="Company Name" />
        </div>

        <div class="form-group">
          <input id="email" v-model="email" type="email" class="inputClass" required placeholder="Email" />
        </div>

        <!-- <div class="form-group">
          <input type="tel" id="phone" v-model="phone" required placeholder="Phone Number:"/>
        </div> -->

        <!-- <div style="justify-content: flex-start; width: 100%; padding-left: 5%; padding-right: 5%;">
          
          <div class="countryPhone"> -->
        <div class="SelectCountryAutoSetNumbers">
          <div class="form-group">
            <select id="country" v-model="selectedCountry" class="selectOption">
              <option value="" selected disabled>Select your country </option>
              <option v-for="country in countryList" :key="country.code" :value="country.code">
                <span class="country-option">
                  {{ country.name }}
                  <img :src="getCountryFlagUrl(country.code)" alt="Country Flag" class="country-icon" />
                </span>
              </option>
            </select>
          </div>
          <div class="ICPCard" style="width: 100%; display: flex;">
            <!-- <div class="imageClass">
                <img :src="getCountryFlagUrl(selectedCountry)" alt="" class="selected-country-icon Image" />
              </div> -->
            <div class="number-group" style="display: flex;">
              <div class="CDIClass" style="display: flex;">
                <img :src="getCountryFlagUrl(selectedCountry)" alt="" class="selected-country-icon Image" />
                <div class="codeDial">{{ getDialCode(selectedCountry) }}</div>
              </div>
              <input id="phone" v-model="phone" class="Phone" type="number" required placeholder="Phone Number" />
            </div>
          </div>
        </div>


        <div class="button-groupA">
          <button class="NBtn" @click.prevent="nextStep">Next</button>
        </div>
      </div>

      <div v-if="currentStep === 2" class="form-step">
        <h2>Flight Details</h2>
        <div class="form-group">
          <input id="aircraftType" v-model="aircraftType" class="inputClass" type="text" placeholder="Aircraft Type" />
        </div>

        <div class="form-group">
          <input id="mtow" v-model="mtow" class="inputClass" type="number" placeholder="MTOW" />
        </div>

        <div class="form-group">
          <label for="port">Port</label>
          <select id="port" v-model="port">
            <option value="VCBI">VCBI</option>
            <option value="VCRI">VCRI</option>
            <option value="VCCC">VCCC</option>
          </select>
        </div>

        <div class="form-group">
          <label for="purpose">Purpose of Flight</label>
          <select id="purpose" v-model="purpose">
            <option value="Tech Stop">Tech Stop</option>
            <option value="Private">Private</option>
            <option value="Passenger">Passenger</option>
            <option value="Cargo">Cargo</option>
            <option value="Ambulance">Ambulance</option>
            <option value="Diplomatic">Diplomatic</option>
          </select>
        </div>
        <div class="button-groupB">
          <button class="PBtn" @click.prevent="prevStep">Previous</button>
          <button class="NBtn" @click.prevent="nextStep">Next</button>
        </div>

      </div>

      <div v-if="currentStep === 3" class="form-step">
        <h2>Services</h2>
        <div class="form-group">
          <label for="services">Please select the services you require</label>
          <div class="checkbox-group">
            <v-checkbox v-model="permits" label="Permits" color="indigo" value="Permits" hide-details></v-checkbox>
            <v-checkbox v-model="groundHandling" label="Ground Handling" color="indigo" value="Ground Handling"
              hide-details></v-checkbox>
            <v-checkbox v-model="fueling" label="Fueling" color="indigo" value="Fueling" hide-details></v-checkbox>
            <v-checkbox v-model="catering" label="Catering" color="indigo" value="Catering" hide-details></v-checkbox>
            <v-checkbox v-model="crewPassengerService" label="Crew & Passenger Service" color="indigo"
              value="Crew & Passenger Service" hide-details></v-checkbox>
            <v-checkbox v-model="hotelReservation" label="Hotel Reservation & Transportation" color="indigo"
              value="Hotel Reservation & Transportation" hide-details></v-checkbox>
            <v-checkbox v-model="other" label="Other" color="indigo" value="Other" hide-details></v-checkbox>
          </div>
          <textarea v-if="other" v-model="otherDetails" placeholder="Please provide details"></textarea>
        </div>
        <div class="button-groupC">
          <button class="PBtn" @click.prevent="prevStep">Previous</button>
          <button class="sButton" type="submit">Submit</button>
        </div>


      </div>
    </form>

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
      port: 'VCBI',
      purpose: 'Tech Stop',
      permits: false,
      groundHandling: false,
      fueling: false,
      catering: false,
      crewPassengerService: false,
      hotelReservation: false,
      other: false,
      otherDetails: '',
    };

  },
  closeModal() {
    this.showModal = false;
  },
  openModal() {
    this.showModal = true;
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
    },
    prevStep() {
      this.currentStep -= 1;
    },



    async submitForm() {
      try {
        const formData = {
          currentStep: this.currentStep,
          name: this.name,
          companyName: this.companyName,
          email: this.email,
          selectedCountry: this.selectedCountry,
          phone: this.phone,
          aircraftType: this.aircraftType,
          mtow: this.mtow,
          port: this.port,
          purpose: this.purpose,
          permits: !!this.permits,
          groundHandling: !!this.groundHandling,
          fueling: !!this.fueling,
          catering: !!this.catering,
          crewPassengerService: !!this.crewPassengerService,
          hotelReservation: !!this.hotelReservation,
          other: !!this.other,
          otherDetails: this.otherDetails,
        };

        const response = await this.$axios.post('/api/submit', formData);
        console.log(response.data);
        alert('Thank you..! Your message has been successfully submitted.. ');
        this.resetForm();
    } catch (error) {
      console.error('Failed to submit form', error);
      alert('Failed to submit form');
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
    this.port = 'VCBI';
    this.purpose = 'Tech Stop';
    this.permits = false;
    this.groundHandling = false;
    this.fueling = false;
    this.catering = false;
    this.crewPassengerService = false;
    this.hotelReservation = false;
    this.other = false;
    this.otherDetails = '';
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
.message-box {
  position: fixed;
  top: 70%;
  left: 35%;
  transform: translate(-50%, -50%);
  padding: 8px 25px;
  border-radius: 8px;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.close {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  color: #666;
  font-size: 20px;
}

.close:hover {
  color: #000;
}

.success-message {
  color: #88c607;
  border: 2px solid #88c607;
}

.error-message {
  color: #f44336;
  border: 1px solid #f44336;
}

.button-groupA {
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: flex-end;

}

.button-groupB {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5%;
}

.button-groupC {
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: space-between;
}


.PBtn {
  left: 0%;
  width: 150px;
  background-color: #88c607;


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

}

.trip-estimate-form {
  max-width: 60%;
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
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


h2 {
  color: #343a40;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  /* width: 100%; */
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

img {
  height: 35px;
  width: auto;
}

/* .Image{
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: auto;
  height: 16px;
} */


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

.planeAImg {
  width: 200px;
  height: 150px;
  position: right;
  margin-left: 5%;
  top: 0;
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
  width: 50dvw !important;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
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

/* .sButton {
  background-color: #88c607;

}

.sButton:hover {
  background-color: #89c6079d;
} */





@media only screen and (min-width: 1281px) and (max-width: 1366px) {
  button {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    padding: 15px 55px;
    cursor: pointer;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;
  }

}

@media only screen and (max-width: 500px) {

  .trip-estimate-form {
    max-width: 90%;
  }


  img {
    height: 15px;
    width: auto;
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

  /* .number-group{
width: 70svw;
} */

  .Phone {
    width: 52svw !important;
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
    width: 70svw !important;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 12px;
  }

  .button-groupA,
  .button-groupB,
  .button-groupC {
    padding: 6%;

  }


  .PBtn {
    width: 110px;
    padding-right: 10%;

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
}
</style>
