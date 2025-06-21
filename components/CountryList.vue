<template>
  <div>
    <div class="countryPhone">
      <div class="form-group">
        <select id="country" v-model="selectedCountry" class="text selectOption">
          <option value="" selected disabled>Select your country :</option>
          <option v-for="country in countryList" :key="country.code" :value="country.code">
            <span class="country-option">
              {{ country.name }}
              <img :src="getCountryFlagUrl(country.code)" alt="Country Flag" class="country-icon" />
            </span>
          </option>
        </select>
      </div>
      <div class="ICPCard">
        <div class="text imageClass">
          <img :src="getCountryFlagUrl(selectedCountry)" alt="" class="selected-country-icon" />
        </div>
        <div class="form-group">
          <div class="text codeClass">{{ getDialCode(selectedCountry) }}</div>
        </div>
        <div class="form-group">
          <input class="text Phone" type="number" id="phone" v-model="phone" required placeholder="Phone Number:" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ... rest of the component ... -->


<script>
import { countries } from '../assets/countries.js';

export default {
  data() {
    return {
      selectedCountry: '',
      phone: '',
      countryList: countries, // Change the name to avoid conflict with the method
    };
  },
  methods: {
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
.form-group {
  margin-bottom: 20px;
  /* width: 100%; */
}

.countryPhone {
  display: flex;
  justify-content: space-between !important;
}

.selectOption {
  width: 15svw !important;
}

.text,
.imageClass,
.codeClass {
  height: 45px;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
}

.ICPCard {
  display: flex;
  gap: 20px;
}

img {
  height: 16px;
}

.country-option {
  display: flex;
  align-items: center;
}

.country-icon,
.selected-country-icon {
  width: 24px;
  /* Adjust the width as needed */
  /* height: auto; */
  margin-right: 8px;
  /* Adjust the margin as needed */
}


@media only screen and (max-width: 500px) {

  .countryPhone {
    display: block;
    justify-content: space-between !important;
  }

  .text {
    /* width: 70svw !important;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-radius: 4px; */
    font-size: 12px;
  }

  .selectOption {
    width: 70svw !important;
  }

  .ICPCard {
    width: 70svw !important;
    display: flex;
    gap: 0%;
    justify-content: space-between;
  }



}
</style>