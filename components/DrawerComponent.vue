<template>
  <div class="sidenav">

    <!-- <div class="image" style=" justify-content: center; display: flex; padding-bottom: 10%;">
        <img src="/SLanka.png" alt="Image" style="width: 80%; height: 10%;">
  
      </div> -->
    <div class="Menu">
      <ul>
        <li>
          <NuxtLink class="textLinkM" to="/">Home</NuxtLink>
        </li>
        <!-- <li><NuxtLink class="textLinkM" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="textLinkM" to="/aboutUs">About Us</NuxtLink></li> -->

        <li>
          <button class="dropdown-btn textLinkM" @click="toggleDropdown('tourPackage')">Company<span
              class="mdi mdi-menu-down menu"></span>
            <i class="fa fa-caret-down"></i>
          </button>
          <div v-show="currentDropdown === 'tourPackage'" class="dropdown-container subMenu">
            <ul>
              <!-- <li>
                  <button class="dropdown-btn textLink" @click="toggleSubDropdown('sriLankanTourPackage')">Company<i class="fa fa-caret-down"></i></button>
                  <div v-show="currentSubDropdown === 'sriLankanTourPackage'" class="dropdown-container subSubMenu">
                    <ul>
                      <li><NuxtLink class="textLinkS" to="/tourPack/aslTourPack/aCulture">Cultural And Heritage</NuxtLink></li>
                      <li><NuxtLink class="textLinkS" to="/tourPack/aslTourPack/bRomance">Romance And Honeymoon</NuxtLink></li>
                      <li><NuxtLink class="textLinkS" to="/tourPack/aslTourPack/cNature">Nature And Wildlife</NuxtLink></li>
                      <li><NuxtLink class="textLinkS" to="/tourPack/aslTourPack/dAyurweda">Ayurveda And Wellness</NuxtLink></li>
                      <li><NuxtLink class="textLinkS" to="/tourPack/aslTourPack/eAdventure">Adventure And Excursion</NuxtLink></li>
                      <li><NuxtLink class="textLinkS" to="/tourPack/aslTourPack/fAllIsland">All Island Explore</NuxtLink></li>
                      <li><NuxtLink class="textLinkS" to="/tourPack/aslTourPack/GBeachAndRelax">Beach And Relax</NuxtLink></li>
                    </ul>
                  </div>
                </li> -->
              <li>
                <NuxtLink class="textLink" to="/company/overview">Overview</NuxtLink>
              </li>

              <li>
                <NuxtLink class="textLink" to="/company/careers">Careers</NuxtLink>
              </li>

              <li>
                <a class="textLink" href="https://blog.smoothflightsupport.lk/category/csr/" target="_blank">Corporate
                  Social Responsibility</a>

              </li>
            </ul>
          </div>
        </li>

        <li>
          <button class="dropdown-btn textLinkM" @click="toggleDropdown('ourServices')">Services<span
              class="mdi mdi-menu-down menu"></span>
            <i class="fa fa-caret-down"></i>
          </button>

          <div v-show="currentDropdown === 'ourServices'" class="dropdown-container subMenu">
            <ul>
              <li>
                <NuxtLink class="textLinkM" to="/services/groundHandling">Ground Handling</NuxtLink>
              </li>
              <li>
                <NuxtLink class="textLinkM" to="/services/permitsA">Permits</NuxtLink>
              </li>
              <li>
                <NuxtLink class="textLinkM" to="/services/aircraftFueling">Aircraft Fueling</NuxtLink>
              </li>
              <li>
                <NuxtLink class="textLinkM" to="/services/catering">Catering</NuxtLink>
              </li>
              <li>
                <NuxtLink class="textLinkM" to="/services/crewpassengerservice">Crew & Passenger Service</NuxtLink>
              </li>
              <li>
                <NuxtLink class="textLinkM" to="/services/hotelReservationTransportation">Hotel Reservation &
                  Transportation</NuxtLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <button class="dropdown-btn textLinkM" @click="toggleDropdown('travelGuide')">e Services<span
              class="mdi mdi-menu-down menu"></span>
            <i class="fa fa-caret-down"></i>
          </button>
          <div v-show="currentDropdown === 'travelGuide'" class="dropdown-container subMenu">
            <ul>
              <li>
                <NuxtLink class="textLink" to="#">Apply Permits</NuxtLink>
              </li>
              <li>
                <NuxtLink class="textLink" to="#">Create General Declaration</NuxtLink>
              </li>
              <li>
                <NuxtLink class="textLink" to="/eServices/getTripCostEstimate">Get Trip Cost Estimate</NuxtLink>
              </li>
              <li><a class="textLink" href="https://eta.gov.lk/slvisa/">Apply e visa</a></li>
            </ul>
          </div>
        </li>

        <li><a class="a textLinkM" href="#">Blog</a></li>
        <li>
          <NuxtLink class="textLinkM" to="/contactUs">Contact Us</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDropdown: null,
      currentSubDropdown: null,
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      if (this.currentDropdown === dropdown) {
        this.currentDropdown = null; // Close the dropdown if it's already open
      } else {
        this.currentDropdown = dropdown;
        this.currentSubDropdown = null; // Close the sub-dropdown when a new dropdown is opened
      }
    },
    toggleSubDropdown(subDropdown) {
      if (this.currentSubDropdown === subDropdown) {
        this.currentSubDropdown = null; // Close the sub-dropdown if it's already open
      } else {
        this.currentSubDropdown = subDropdown;
      }
    },
  },
};
</script>

<style scoped>
@import '../assets/fonts.css';

.textLinkM {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 18px !important;
  padding-bottom: 2.5% !important;
  padding-top: 2.5% !important;
  /* font-weight: 400 !important; */
  /* line-height: 200%; */

}

.textLink {
  font-size: 16px !important;
}

/* .textLinkS{
    font-size: 17px !important;
  } */


.sidenav {
  height: 100% !important;
  margin: 0%;
  padding: 0%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}

.sidenav a:hover,
.dropdown-btn:hover {
  color: rgb(255, 255, 255);
  background-color: #183862;
  border-radius: 5px;
}

.sidenav a,
.dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #183862;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.sidenav ul {
  list-style-type: none;
  /* padding: 0; 
    margin: 0;  */
}




/* Your styles go here */
</style>