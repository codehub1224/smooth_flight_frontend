<template>
  <div class="f" cols="12" xs="12" sm="12" md="12">
    <div class="Mobile">
      <BFrontHeader />
    </div>
    <div class="Desktop" style="background-color:#183862; height: 200px !important;">
      <div class="classM">


        <div class="classB"></div>
        <div class="whiteClass">
          <div class="logoClass">
            <NuxtLink class="nlink" to="/">
              <img class="pngLogo" src="/Header/smoothLogo.png" alt="Smooth LOGO">
            </NuxtLink>
          </div>
          <div class="headerDetails">

            <div class="hDetails">

              <div class="headLine LineA" style="display: flex;">
                <span class="mdi mdi-phone Icons"></span>
                <div class="outlineClass ouClassA" style="display: inline-block !important;">
                  <div>Call Us Anytime</div>
                  <div class="seOuClass">(+94) 314354400</div>
                </div>
              </div>

              <div class="headLine LineB" style="display: flex;">
                <span class="mdi mdi-timer-outline Icons"></span>
                <div class="outlineClass ouClassB" style="display: inline-block;">
                  <div>Openning Time</div>
                  <div class="seOuClass">24 Hrs</div>
                </div>
              </div>

              <div class="headLine LineC" style="display: flex;">
                <span class="mdi mdi-email-multiple-outline Icons"></span>
                <div class="outlineClass" style="display: inline-block;">
                  <div>Email Us</div>
                  <div class="seOuClass">info@smoothflightsupport.lk</div>
                </div>
              </div>

              <a href="/apermit/applypermit" class="headLine btn">

                <button>
                  <!-- mdi-whatsapp -->
                  <span class="mdi">Apply Permit<font-awesome-icon style="padding-left: 5px; font-size: 13px;"
                      :icon="['fas', 'arrow-right-long']" /></span>
                </button>
              </a>
            </div>

          </div>


          <div class="outerBody">

            <div class="body">
              <nav>
                <div class="dropbtn bmLine">
                  <NuxtLink class="mainLine a" to="/">Home</NuxtLink>
                </div>
                <!-- <a href="javascript:void(0)" class="dropbtn mainLine">Company</a>
    <a href="javascript:void(0)" class="dropbtn mainLine">Services</a> -->
                <div class="dropdown">
                  <div class="dropbtn drpBtn bmLine">Company <span class="mdi mdi-menu-down"></span></div>
                  <div class="dropdown-content">
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/company/overview">Overview</NuxtLink>
                    </div>
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/company/careers">Careers</NuxtLink>
                    </div>

                    <div class="classA"><a href="https://blog.smoothflightsupport.lk/category/csr/" class="a dropText"
                        target="_blank">Corporate Social Responsibility</a></div>


                    <!-- <div class="classA">
                      <NuxtLink class="a dropText" to="https://blog.smoothflightsupport.lk/category/csr/" target="_blank">Corporate Social Responsibility</NuxtLink>
                    </div> -->
                  </div>
                </div>
                <div class="dropdown">
                  <div class="dropbtn drpBtn bmLine">Services<span class="mdi mdi-menu-down menu"></span></div>
                  <div class="dropdown-content">
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/services/permitsA">Permits</NuxtLink>
                    </div>
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/services/groundHandling">Ground Handling</NuxtLink>
                    </div>

                    <div class="classA">
                      <NuxtLink class="a dropText" to="/services/aircraftFueling">Aircraft Fueling</NuxtLink>
                    </div>
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/services/catering">Catering</NuxtLink>
                    </div>
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/services/crewpassengerservice">Crew & Passenger Service
                      </NuxtLink>
                    </div>
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/services/hotelReservationTransportation">Hotel Reservation &
                        Transportation</NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <div class="dropbtn drpBtn bmLine">e Services<span class="mdi mdi-menu-down menu"></span></div>
                  <div class="dropdown-content">
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/apermit/applypermit">Apply Permits</NuxtLink>
                    </div>
                    
                    <div class="classA">
                      <NuxtLink class="a dropText" to="/eServices/getTripCostEstimate">Get Trip Cost Estimate</NuxtLink>
                    </div>
                    <div class="classA"><a href="https://eta.gov.lk/slvisa/" class="a dropText" target="_blank">Apply e
                        visa</a></div>
                  </div>
                </div>
                <div class="dropbtn bmLine">
                  <a href="https://blog.smoothflightsupport.lk" target="_blank" class="mainLine a">Blog</a>
                </div>

                <!-- <div class="dropbtn bmLine">
                  <NuxtLink class="mainLine a" to="/privacypolicy">Privacy Policy</NuxtLink>
                </div> -->
                <div class="dropbtn bmLine">
                  <NuxtLink class="mainLine a" to="/contactUs">Contact Us</NuxtLink>
                </div>

                <div class="faIconList dropbtn" style="display: flex; z-index: 2; padding-left: 30%;">
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
                  <a class="iconA" href="https://www.linkedin.com/company/smooth-flight-support-pvt-ltd"
                    target="_blank">
                    <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'linkedin-in']" /></div>
                  </a>
                </div>

              </nav>
              <!-- Your other content goes here -->
            </div>
          </div>
        </div>
      </div>

    </div>

    <div>



    </div>



  </div>
</template>

<script>

// const btn = Document.querySelector('.btn');
// btn.onmousemove = function (e) {
//   const x = e.pageX - btn.offsetLeft;
//   const y = e.pageY - btn.offsetTop;
//   btn.style.setProperty('--x', x + 'px');
//   btn.style.setProperty('--y', y + 'px');
// }
</script>

<style scoped>
@import '../assets/fonts.css';

.Mobile {
  display: none;
}

/* .btnLink{

} */
.menu {
  padding-left: 5px;
}

.classM {
  width: 100%;
  height: 170px !important;
}

.classB {
  width: 100%;
  height: 30px;
  /* background-color: #1f425d; */
  /* background-color: #081729; */
  background-color: #183862;
}

.whiteClass {
  background-color: rgb(255, 196, 0);
  display: flex;
  width: 100%;
  height: 150px !important;
  position: relative;
  z-index: 1;
}

.logoClass {
  width: 25%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 0.6%;
}

.pngLogo {
  width: 60%;
  height: 80%;
}


/* .faIconList{

} */

.headerDetails {
  height: 70%;
  width: 75%;
  background-color: rgb(255, 255, 255) !important;
  float: right;
  padding: 10px;
  display: flex;
}

.hDetails {
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(255, 255, 255);
}

.headLine {
  text-wrap: nowrap;
  padding-right: 2% !important;
}

.ouClassA,
.ouClassB {
  border-right: 2px solid black;
}

.seOuClass {
  font-weight: 700;
}

.outlineClass {
  padding-right: 20px;
  padding-left: 10px;
  font-size: 15px;
  font-family: 'Roboto';
}


.btn {
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-left: 4.5%;
  padding-right: 4.5% !important;
  margin-left: 15%;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  background: #88c607;
  color: white;
  z-index: 1;
}

.btn::after {
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

.btn:hover::after {
  transform: scale(1);
  transform-origin: top left;
}


.Icons {
  font-size: 22px;
  color: #88c607;
}

.iconA {
  color: #081729;
  text-decoration: none;
}

.outerBody {
  height: 10dvh !important;
  width: 100%;
  position: absolute;
  top: 70%;
}


.fontFA {
  font-size: 22px;
  /* padding: 5px 10px; */
  margin-right: 5px;
  border-radius: 5px;
  /* color: #1f425d; */
  color: #081729;
  background-color: rgba(255, 255, 255, 0.589);
}

.whiteClass {
  background-color: white;
  height: 100%;
}

.body {
  margin: 0;
  background-origin: 0%;
  padding: 0;
  bottom: 0% !important;
}

nav {
  background-color: #f7f7f700;
  /* background-color: #183862; */
  position: relative;
  z-index: 0;
  padding: 0px;
  padding-left: 25%;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: space-around;
  color: white;
}

nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(22.5% 50%, 25% 0, 100% 0, 100% 50%, 100% 100%, 30% 100%, 0 100%, 0 50%);
  z-index: 0;
  /* background-color: #1f425d; */
  /* background-color: #081729; */
  background-color: #183862;
}

nav .a,
.dropbtn {
  text-decoration: none;
  align-items: center;
  display: flex;
  color: white;
  text-wrap: nowrap;
  position: relative;
  /* Add this line */
  z-index: 1;
  /* Add this line */
}

.drpBtn {
  cursor: pointer;
  width: 100%;
}

.dropdown {
  position: relative;
  display: flex;
  top: 0%;
  bottom: 0%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
}

.dropText:hover {
  color: rgb(255, 255, 255) !important;
  /* background-color: #1f425d; */
  /* background-color: #081729; */
  background-color: #183862;
}

/* a:active{
      color: red;
    } */

/* .dropdown:hover .dropdown-content,
    .dropdown:focus-within .dropdown-content {
      display: block;
    } */

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content .a {
  color: rgb(36, 36, 36);
  padding: 10px 16px;
  border-bottom: 1px solid #18386257;
  display: block;
  text-decoration: none;
}

/* .bmLine:hover{
      border-bottom: 5px solid red !important; 
    } */

.bmLine {
  padding: 20px 10px;
  position: relative;
  font-size: 16px !important;

}

.bmLine::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background-color: transparent;
  transition: 0.3s ease;
}

.bmLine:hover::before {
  background-color: #88c607;
}

.dropText {
  font-size: 15px !important;
}

.a {
  cursor: pointer;
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

.logoClass:hover {
  background-color: white !important;
}

.nlink {
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: #88c607; */
}

.nlink:hover {
  background-color: white;
}



@media only screen and (min-width: 600px) and (max-width: 1024px) {

  .btn {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 4.5%;
    padding-right: 4.5% !important;
    margin-left: 2%;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;
  }

  .outlineClass {
    font-size: 12px;
  }

  .iconA {
    width: 100%;
    height: 100%;


  }

  nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(20% 45%, 25% 0, 100% 0, 100% 45%, 100% 100%, 30% 100%, 0 100%, 0 45%);
    z-index: 0;

    background-color: #183862;
  }


  .fontFA {
    font-size: 20px;
    padding: 5px 5px;
    /* margin-right: 15px; */
    border-radius: 5px;
    /* color: #1f425d; */
    color: #081729;
    background-color: rgba(255, 255, 255, 0.589);
  }


  .Fcn {
    width: 33px;
    height: 33px;


  }

  .faIconList {
    margin-right: 2.3%;
    padding: 1%;
    margin-top: 0.4%;
  }

  .bmLine {
    padding: 22px 4px;
    position: relative;
    font-size: 13px !important;
  }


  .dropText {
    font-size: 14px !important;
  }



  .LineD {
    font-size: 14px;
    margin-left: 1%;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {

  .iconA {
    width: 100%;
    height: 100%;

  }

  .fAIcon {
    font-size: 25px;

  }

  .Fcn {
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .faIconList {
    margin-right: 3.3%;
    padding: 1.2%;
    margin-top: 0.4%;
  }

  .bmLine {
    padding: 20px 10px;
    position: relative;
    font-size: 15px !important;
  }


  .dropText {
    font-size: 15px !important;
  }

  .LineD {
    font-size: 15px;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 4.5%;
    padding-right: 4.5% !important;
    margin-left: 7%;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1366px) {
  .iconA {
    width: 100%;
    height: 100%;

  }

  .fAIcon {
    font-size: 25px;

  }

  .Fcn {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .faIconList {
    margin-right: 3.3%;
    padding: 1.2%;
    margin-top: 0.4%;
  }

  .bmLine {
    padding: 20px 14px;
    position: relative;
    font-size: 14px !important;
  }


  .dropText {
    font-size: 14px !important;
  }

  .LineD {
    font-size: 14px;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 4.5%;
    padding-right: 4.5% !important;
    margin-left: 7%;
  }
}

@media only screen and (min-width: 1367px) and (max-width: 1440px) {
  .iconA {
    width: 100%;
    height: 100%;

  }

  .fAIcon {
    font-size: 25px;

  }

  .Fcn {
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .faIconList {
    margin-right: 3.3%;
    padding: 1.2%;
    margin-top: 0.4%;
  }

  .bmLine {
    padding: 20px 10px;
    position: relative;
    font-size: 15px !important;
  }


  .dropText {
    font-size: 15px !important;
  }

  .LineD {
    font-size: 15px;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 4.5%;
    padding-right: 4.5% !important;
    margin-left: 7%;
  }
}

@media only screen and (max-width: 500px) {

  .Desktop {
    display: none;
  }

  .Mobile {
    display: block;
  }



}
</style>