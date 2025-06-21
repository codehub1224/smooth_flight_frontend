<template>
  <div style="width:100%; height:100%">
    <h1 class="Topic">Crew & Passenger Service</h1>

    <div class="ScLine">
      <ul class="stepper">
        <li class="step active">Smooth Flight Support</li>
        <li class="step" style="font-weight: 600;">Services</li>
        <li class="step">Crew & Passenger Service</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ScLine {
  width: 100%;
  height: 100%;
  /* padding: 5px; */
  display: flex;
  align-items: center;
  /* background-color: rgb(168, 168, 168); */
  border: 1px solid #ccc;
}

.Topic {
  width: 100%;
  top: 0;
  z-index: 1;
  padding-left: 5%;
  padding-top: 35px;
  padding-bottom: 35px;
  font-size: 45px;
  font-weight: 800;
  background-color: #f0f0f0;
  text-transform: uppercase;
  display: flex;
  justify-items: center;

}

.stepper {
  display: flex;
  list-style-type: none;
  padding: 0;
  background-color: #fff;
  border-radius: 2.5px;
  overflow: hidden;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
}

.step {
  color: #081729;
  flex: 1;
  text-align: center;
  position: relative;
  padding: 5px 10px;
  box-sizing: border-box;
  transition: background-color 0.3s;
  text-wrap: nowrap;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #ccc;
}

.step.active {
  background-color: white;
  color: #081729;
  font-weight: 600;
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .Topic {
    font-size: 30px;
  }
}


@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .Topic {
    font-size: 30px;
  }
}

@media only screen and (min-width:1281px) and (max-width: 1366px){
  .Topic {
    font-size: 35px;
  }
}

@media only screen and (max-width: 500px) {

.ScLine {
  display: none;
}

.Topic {
  font-size: 25px;
  font-weight: 800;
}

.step {
  font-size: 12px;
  text-wrap: wrap;
  text-align: left;
  padding-left: 7.5%;

}

.stepper {
  justify-content: center !important;
  align-items: center !important;
  display: flex;

}

}
</style>