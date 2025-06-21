<template>
  <div>
    <div class="desktop">
      <div align="center" justify="center"
        style="height: 100%; width: 100%; background-color: #ecf2f8; position: relative;">
        <img class="planeAImg" src="/HomePage/WWOffer/planeB.png" alt="Image">
        <br>

        <v-col cols="12" sm="12" md="12" xs="12" style="padding-left: 10%; padding-right: 10%; padding-bottom:5% ;">
          <div class="headLine">What We Offer</div>
          <ul class="icon-list">
            <br>
            <br>
            <v-col class="coltext NACT" tabindex="0" align="center" justify="center">
              <li>
                <img class="blackImage" src="/HomePage/WWOffer/B/AlandingB.png" alt="pngIcon">
                <img class="whiteImage" src="/HomePage/WWOffer/W/AlandingW.png" alt="pngIcon">
                <div class="textLine">
                  <NuxtLink class="textLinkM" to="/services/permitsA">Permits
                  </NuxtLink>
                </div>
              </li>
            </v-col>

            <v-col class="coltext NACT" align="center" justify="center">
              <li>
                <img class="blackImage" src="/HomePage/WWOffer/B/FGroundHandlingb.png" alt="pngIcon">
                <img class="whiteImage" src="/HomePage/WWOffer/W/FGroundHandlingW.png" alt="pngIcon">
                <div class="textLine">

                  <NuxtLink class="textLinkM" to="/services/groundHandling">Ground Handling
                  </NuxtLink>
                </div>
              </li>
            </v-col>

            <v-col class="coltext NACT" align="center" justify="center">
              <li>
                <img class="blackImage" src="/HomePage/WWOffer/B/CaircraftFuelB.png" alt="pngIcon">
                <img class="whiteImage" src="/HomePage/WWOffer/W/CaircraftFuelW.png" alt="pngIcon">
                <div class="textLine">
                  <NuxtLink class="textLinkM" to="/services/aircraftFueling"> Aircraft Fueling
                  </NuxtLink>
                </div>
              </li>
            </v-col>
          </ul>

          <ul class="icon-list">

            <v-col ref="activate" class="coltext NACT activate" align="center" justify="center">
              <li>
                <img class="blackImage" src="/HomePage/WWOffer/B/DinflightCB.png" alt="pngIcon">
                <img class="whiteImage" src="/HomePage/WWOffer/W/DinflightCW.png" alt="pngIcon">
                <div class="textLine">
                  <NuxtLink class="textLinkM" to="/services/catering">Catering
                  </NuxtLink>
                </div>
              </li>
            </v-col>

            <v-col class="coltext NACT" align="center" justify="center">
              <li>
                <img class="blackImage" src="/HomePage/WWOffer/B/ECrewB.png" alt="pngIcon">
                <img class="whiteImage" src="/HomePage/WWOffer/W/ECrewW.png" alt="pngIcon">
                <div class="textLine">
                  <NuxtLink class="textLinkM" to="/services/crewpassengerservice">Crew & Passenger Service
                  </NuxtLink>
                </div>
              </li>
            </v-col>

            <v-col class="coltext NACT" align="center" justify="center">
              <li>
                <img class="blackImage" src="/HomePage/WWOffer/B/BHotelB.png" alt="pngIcon">
                <img class="whiteImage" src="/HomePage/WWOffer/W/BHotelW.png" alt="pngIcon">
                <div class="textLine">
                  <NuxtLink class="textLinkM" to="/services/hotelReservationTransportation">HOTAC
                  </NuxtLink>
                </div>
              </li>
            </v-col>


          </ul>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FourthPage",
  mounted() {
    this.$refs.activate.focus();
  }

};
</script>

<style scoped>
@import '../assets/fonts.css';

.activate:focus {
  background-color: #183862;
  color: white;
}

.whiteImage {
  display: none;
}

.textLinkM {
  text-decoration: none;
  color: rgb(30, 29, 29);
}

.textLinkM:hover {
  /* background-color: #183862; */
  color: white;
}


.coltext:hover .whiteImage {
  display: inline-block;
}

.coltext:hover .blackImage {
  display: none;
}


.icon-list li:hover {
  transform: scale(1.1);
  color: white;
}

.coltext:hover {
  background-color: #183862;
  color: white;
}

.coltext:focus {
  /* background-color: #081729; */
  color: white;
}


.NACT {
  background-color: white;
  min-height: 200px;
  max-height: 35dvh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 10px;
}


.coltext {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  margin: 5px;
  /* background-color: white; */
  border-radius: 5px;
  /* color: #081729; */
  /* transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; */
}

.planeAImg {
  width: 200px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
}

.desktop {
  display: block;
  animation: CSSscrollReveal ease-in-out both;
  animation-timeline: view();
  animation-range: entry 50% cover 50%;
}

@keyframes CSSscrollReveal {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.icon-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.icon-list li {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  padding: 0px;
  transition: transform 0.3s ease-in-out;
}

.textLine {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 20px;
}

.headLine {
  color: #183862;
  text-align: center;
  font-size: 50px;
  padding-bottom: 20px;
  font-family: 'Barlow-ExtraBold';
  /* font-family: 'Domaine Disp Nar'; */
  font-weight: 400;
  /* text-transform: uppercase; */
}


@media only screen and (min-width: 768px) and (max-width: 1366px) {
  .icon-list li {
    max-width: 100%;
  }

  .headLine {
    color: #183862;
    text-align: center;
    font-size: 45px;
  }

  .planeAImg {
    width: 175px;
    height: 95px;
    position: absolute;
    left: 0;
    top: 0;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .headLine {
    color: #183862;
    text-align: center;
    font-size: 40px;
  }

  .textLine {
    font-size: 17px;
  }
}

@media only screen and (max-width: 800px) {
  .icon-list li {
    max-width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  .icon-list li {
    max-width: 100%;
  }

  .headLine {
    font-size: 30px;
  }

  .planeAImg {
    display: none;
  }

  .textLinkM {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 15px !important;
  }

  /* Adding display: block to a specific element */
  .desktop {
    display: block;
  }
}


@media only screen and(max-width:800px) {
  .image {
    font-size: 50px;
    margin: 5%;
    padding: 5%;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 800;
    line-height: 1;
    text-align: center;
    text-transform: 5s;
    color: blanchedalmond;
    background-color: yellowgreen;
    text-decoration: underline;
    width: 100%;
    height: 100%;
    opacity: 8;

  }

  .image:hover {
    opacity: 0.5;
    font-weight: 500;
    font-size: 15px;
    margin-left: 5%;
    margin-top: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    padding: 8%;
    color: white;

  }
}
</style>
