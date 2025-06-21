<template>
  <div id="app">
    <!-- Your page content goes here -->
    <div class="mClass">
      <div class="columnClassA">
        <a href="/"><img class="logoClass" src="/Footer/SmothLogoW.png" alt="Image"
            style="filter: brightness(0) invert(1); margin-top:5%; margin-left: 5%;">

          <div class="faIconList dropbtn">
            <a class="iconA" href="https://www.facebook.com/SmoothflightCmb" target="_blank">
              <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'facebook-f']" /></div>
            </a>
            <a class="iconA" href="https://twitter.com/flight_smooth" target="_blank">
              <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'x-twitter']" /></div>
            </a>
            <!-- <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'twitter']"/></div> -->
            <a class="iconA" href="https://www.instagram.com/smoothflightsupport/" target="_blank">
              <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'instagram']" /></div>
            </a>
            <a class="iconA" href="https://www.linkedin.com/company/smooth-flight-support-pvt-ltd" target="_blank">
              <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'linkedin-in']" /></div>
            </a>
          </div>
        </a>



      </div>
      <div class="columnClassB">
        <br>
        <!-- Content for the first column -->
        <div class="hclass hdLine">Service</div>
        <div class="listA">
          <div class="listA" style="line-height: 35px;">
            <ul class="no-bullets">
              <li class="mdiA">
                <NuxtLink class="textLinkM" to="/services/allServices"
                  style="text-decoration: none; color:rgb(248, 247, 247);">All Services
                </NuxtLink>
              </li>
              <li class="mdiA">
                <NuxtLink class="textLinkM" to="/services/permitsA"
                  style="text-decoration: none;color:rgb(248, 247, 247);">
                  Permits
                </NuxtLink>
              </li>
              <li class="mdiA">
                <NuxtLink class="textLinkM" to="/services/groundHandling"
                  style="text-decoration: none; color:rgb(248, 247, 247);">Ground Handling
                </NuxtLink>
              </li>



              <li class="mdiA">
                <NuxtLink class="textLinkM" to="/services/aircraftFueling"
                  style="text-decoration: none; color:rgb(248, 247, 247);"> Aircraft Fueling
                </NuxtLink>
              </li>

              <li class="mdiA">
                <NuxtLink class="textLinkM" to="/services/catering"
                  style="text-decoration: none; color:rgb(248, 247, 247);">
                  Catering
                </NuxtLink>
              </li>

              <li class="mdiA">
                <NuxtLink class="textLinkM" to="/services/crewpassengerservice"
                  style="text-decoration: none; color:rgb(248, 247, 247);">Crew & Passenger Service
                </NuxtLink>
              </li>

              <li class="mdiA">
                <NuxtLink class="textLinkM" to="/services/hotelReservationTransportation"
                  style="text-decoration: none; color:rgb(248, 247, 247);">HOTAC
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>

      </div>
      <div class="columnClassC">
        <br>
        <!-- Content for the second column -->
        <div style="display: flex; align-items: center; ">
          <div class="verticalLine"></div>
          <div class="hclass hdLine">Contact us</div>
        </div>
        <div class="listB" style="line-height: 35px;">
          <ul class="no-bullets">
            <li class="mdiS">
              <div class="mdi mdi-card-account-details-outline"></div>
              <div class="coText">Smooth Flight Support (Pvt) Ltd<br>C.R.I.Road, Lunuwila ,<br>Sri Lanka.</div>
            </li>
            <li class="mdiS">
              <div class="mdi mdi-phone"></div>
              <div class="coText">+94 314354400 | +94 312249482 | +94 763061800</div>
            </li>
            <li class="mdiS">
              <div class="mdi mdi-email-open-multiple-outline"></div>
              <div class="coText">info@smoothflightsupport.lk</div>
            </li>
          </ul>

        </div>

      </div>
    </div>
    <div class="fLine">
      <div class="fLineA">Web Design & App Develop and Maintained By Codehub Software</div>
      <div class="fLineB"><a href="/Quality-Policy.pdf" style="text-decoration: none; color:white"
          target="_blank">Quality Policy</a></div>
      <div class="fLineC"><a href="/privacypolicy" style="text-decoration: none; color:white">Privacy Policy</a></div>
      <div class="fLineD">(C) Smooth Flight Support {{ startYear }}-{{ currentYear }}</div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    const startYear = 2016;
    const currentYear = new Date().getFullYear();

    return {
      startYear,
      currentYear,
    };
  },
  // Your component logic goes here
}
</script>

<style scoped>
@import '../assets/fonts.css';

.logoClass {
  width: 35dvh;
  height: 20dvh;
  padding-left: 25%;
  outline-offset: 15px;
  transition: all 0.2s;

}

.logoClass:hover {
  transform: scale(1) translateY(-10px);
  z-index: 20;
}

.Icons {
  font-size: 22px;
  color: #88c607;

}

.faIconList {
  display: flex;
  z-index: 2;
  padding-left: 38%;
}

.iconA {
  color: #081729;
  text-decoration: none;
  margin-top: 10%;
  outline-offset: 15px;
  transition: all 0.2s;

}

.iconA:hover {
  transform: scale(1) translateY(-10px);
  z-index: 20;
}

.fontFA {
  font-size: 22px;
  margin-right: 5px;
  border-radius: 5px;
  color: #081729;
  background-color: rgba(255, 255, 255, 0.589);


}

.Fcn {
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;

}

.Fcn:hover {
  background-color: white !important;
  cursor: pointer;
}



.fLine {
  display: flex;
  justify-content: center;
  padding: 10px 5px;
  width: 100%;
  font-size: 12px;
  color: white;
  text-align: center;

}

.fLineA {
  text-align: left;
}

.fLineB {
  padding-left: 1.5%;
  text-decoration: none;
}

.fLineC {
  padding-left: 1.5%;
}

.fLineD {
  text-align: right;
  padding-left: 1.5%;
}




.mClass {
  width: 100%;
  display: flex;
}

#app {
  position: relative;
  min-height: 100%;
  background-color: #183862;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #183862;
  color: white;
  text-align: center;
  padding: 10px !important;
}

.listA .no-bullets {
  /* list-style: none; */
  padding: 0;
  text-align: left;
  line-height: 25px;
}

.listB .no-bullets {
  list-style: none;
  padding: 0;
  text-align: left;
  line-height: 25px;
}

.hclass {
  color: white;
  font-size: 25px;
  padding-top: 2.5%;
  padding-bottom: 2.5%
}

.mdi,
li {
  color: white;
  font-size: 15px;
}

.mdiS {
  display: flex;
  padding-bottom: 10px;
}

.coText {
  padding-left: 10px;
}


.columnClassA {
  width: 40%;
  /* justify-content: center; */
  align-items: center;
  display: flex;
}

.columnClassB {
  width: 30%;
}

.columnClassC {
  width: 30%;
}







@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .faIconList {
    display: flex;
    z-index: 2;
    padding-left: 35%;
  }

  .hclass {
    font-size: 20px;
  }

  .Fcn {
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;

  }

  .fontFA {
    font-size: 20px;
  }

  .mdi,
  li {
    color: white;
    font-size: 13px;
  }
}


@media only screen and (min-width: 1025px) and (max-width: 1366px) {
  .faIconList {
    display: flex;
    z-index: 2;
    padding-left: 26%;
  }

  .Fcn {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;

  }

  .fontFA {
    font-size: 20px;
  }
}

@media only screen and (min-width: 1367px) and (max-width: 1400px) {
  .faIconList {
    display: flex;
    z-index: 2;
    padding-left: 26%;
  }

  .Fcn {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;

  }

  .fontFA {
    font-size: 20px;
  }
}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
  .faIconList {
    display: flex;
    z-index: 2;
    padding-left: 33%;
  }
}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
  .faIconList {
    display: flex;
    z-index: 2;
    padding-left: 42%;
  }


}


@media only screen and (max-width: 500px) {
  .faIconList {
    display: flex;
    z-index: 2;
    padding-left: 10%;
  }

  .logoClass {
    width: 55dvw;
    height: 15dvh;
    padding-left: 10%;
    padding-right: 30%;
  }

  .columnClassA {
    margin-right: 35%;
  }

  .mClass {
    width: 100%;
    justify-content: center;
    align-items: center;
    justify-items: center;
    height: 100%;
    display: block;

  }


  /* #app {
    position: relative;
    min-height: 80vh;
    background-color: #081729;
} */

  .fLine {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 12px;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 6%;


  }

  .hclass {
    color: white;
    font-size: 20px;
    padding-top: 2.5%;
    padding-bottom: 2.5%
  }

  .fLineA {
    text-align: center;
    margin-top: 6%;
  }

  .fLineB {
    padding-left: 0%;
  }

  .fLineC {
    padding-left: 0%;
  }

  .fLineD {
    text-align: center;
    right: 0;
    position: relative;
    margin-bottom: 5%;
  }


  .columnClassA,
  .columnClassB,
  .columnClassC {
    width: 100%;
    background-color: #183862;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
  }

  .listA .no-bullets {
    padding: 2.5%;
  }

  .listB .no-bullets {
    padding: 2.5%;
  }

  .mdiB {
    display: none;
  }

}
</style>
