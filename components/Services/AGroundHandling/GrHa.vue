<template>
  <div class="classM">
    <div>
      <div v-if="showSection1" class="Card cardA">
        <AllSeTopicLine />
      </div>

      <div v-if="showSection2" class="Card cardA">
        <AHTopicLine />
      </div>

      <div v-if="showSection3" class="Card cardA">
        <BPTopicLine />
      </div>

      <div v-if="showSection4" class="Card cardA">
        <ACTopicLine />
      </div>

      <div v-if="showSection5" class="Card cardA">
        <DCTopicLine />
      </div>

      <div v-if="showSection6" class="Card cardA">
        <ESTopicLine />
      </div>

      <div v-if="showSection7" class="Card cardA">
        <FTTopicLine />
      </div>
    </div>
    <div class="THClass">
      <div class="leftItem">
        <div class="topic">Our Services</div>
        <div style="height: 100%;">
          <button v-for="section in sections" :key="section.id" class="lSqItem" :class="{ activeSe: section.active }"
            @click="toggleSection(section.id)">
            {{ section.label }}
          </button>
        </div>
      </div>

      <div class="RightItemB">

        <div v-if="showSection2" class="Card cardA">
          <AHImage />
        </div>

        <div v-if="showSection3" class="Card cardA">
          <BPImage />
        </div>

        <div v-if="showSection4" class="Card cardA">
          <ACImage />
        </div>

        <div v-if="showSection5" class="Card cardA">
          <DCImage />
        </div>

        <div v-if="showSection6" class="Card cardA">
          <ESImage />
        </div>

        <div v-if="showSection7" class="Card cardA">
          <FTImage />
        </div>

      </div>

      <div class="RightItemA">

        <div v-if="showSection2" class="Card cardA">
          <AHParaLine />
        </div>

        <div v-if="showSection3" class="Card cardA">
          <BPParaLine />
        </div>

        <div v-if="showSection4" class="Card cardA">
          <ACParaLine />
        </div>

        <div v-if="showSection5" class="Card cardA">
          <DCParaLine />
        </div>

        <div v-if="showSection6" class="Card cardA">
          <ESParaLine />
        </div>

        <div v-if="showSection7" class="Card cardA">
          <FTParaLine />
        </div>
      </div>


      <div>
        <div v-if="showSection1" class="Card cardA">
          <AllSeImageItems />
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import AllSeTopicLine from '~/components/Services/AAllServices/SubAllService/AllSeTopicLine.vue'
import AllSeImageItems from '~/components/Services/AAllServices/SubAllService/AllSeImageItems.vue'

import AHTopicLine from '~/components/Services/AGroundHandling/SubAG/AHTopicLine.vue'
import AHParaLine from '~/components/Services/AGroundHandling/SubAG/AHParaLine.vue'
import AHImage from '~/components/Services/AGroundHandling/SubAG/AHImage.vue'

import BPTopicLine from '~/components/Services/BPermits/SubBP/BPTopicLine.vue'
import BPParaLine from '~/components/Services/BPermits/SubBP/BPParaLine.vue'
import BPImage from '~/components/Services/BPermits/SubBP/BPImage.vue'

import ACTopicLine from '~/components/Services/CAircraftFueling/SubAF/ACTopicLine.vue'
import ACParaLine from '~/components/Services/CAircraftFueling/SubAF/ACParaLine.vue'
import ACImage from '~/components/Services/CAircraftFueling/SubAF/ACImage.vue'

import DCTopicLine from '~/components/Services/DCatering/SubDC/DCTopicLine.vue'
import DCParaLine from '~/components/Services/DCatering/SubDC/DCParaLine.vue'
import DCImage from '~/components/Services/DCatering/SubDC/DCImage.vue'

import ESTopicLine from '~/components/Services/ECPService/SubES/ESTopicLine.vue'
import ESParaLine from '~/components/Services/ECPService/SubES/ESParaLine.vue'
import ESImage from '~/components/Services/ECPService/SubES/ESImage.vue'

import FTTopicLine from '~/components/Services/FHRTransportation/SubFT/FTTopicLine.vue'
import FTParaLine from '~/components/Services/FHRTransportation/SubFT/FTParaLine.vue'
import FTImage from '~/components/Services/FHRTransportation/SubFT/FTImage.vue'

export default {
  components: {

    AllSeTopicLine,
    AllSeImageItems,

    AHTopicLine,
    AHParaLine,
    AHImage,

    BPTopicLine,
    BPParaLine,
    BPImage,

    ACTopicLine,
    ACParaLine,
    ACImage,

    DCTopicLine,
    DCParaLine,
    DCImage,

    ESTopicLine,
    ESParaLine,
    ESImage,

    FTTopicLine,
    FTParaLine,
    FTImage,

  },
  data: () => ({
    sections: [
      { id: 1, label: 'All Services', active: false },
      { id: 3, label: 'Permits', active: false },
      { id: 2, label: 'Ground Handling', active: true },
      { id: 4, label: 'Aircraft Fueling', active: false },
      { id: 5, label: 'Catering', active: false },
      { id: 6, label: 'Crew & Passenger Service', active: false },
      { id: 7, label: 'HOTAC', active: false },
    ],
    showSection1: false,
    showSection3: false,
    showSection2: true,
    showSection4: false,
    showSection5: false,
    showSection6: false,
    showSection7: false,
  }),
  methods: {
    toggleSection(sectionId) {
      this.sections.forEach((section) => {
        section.active = section.id === sectionId;
      });

      this.showSection1 = sectionId === 1;
      this.showSection2 = sectionId === 2;
      this.showSection3 = sectionId === 3;
      this.showSection4 = sectionId === 4;
      this.showSection5 = sectionId === 5;
      this.showSection6 = sectionId === 6;
      this.showSection7 = sectionId === 7;
    },
  },
};
</script>

<style scoped>
/* .a {
  text-decoration: none;
  color: #aaaaaa !important;
} */


.THClass {
  width: 100%;
  display: flex;
  padding-top: 5%;
  padding-left: 7.5%;
  padding-right: 7.5%;
  padding-bottom: 2.5%;
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

.leftItem {
  width: 15%;
  background-color: rgb(255, 255, 255);
}

.RightItemA {
  width: 35%;
  background-color: rgb(255, 255, 255);
  padding: 0px 10px 20px 20px;
  margin-top: 0%;
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

.RightItemB {
  width: 50%;
  background-color: rgb(255, 255, 255);
  margin-left: 12%;
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

.topic {
  text-align: left;
  font-size: 27px;
  font-weight: 900;
  padding-bottom: 30px;
}

.lSqItem {
  width: 300px;
  padding: 15px 10px;
  margin-bottom: 2px !important;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #aaaaaa !important;
}

.activeSe {
  background-color: #88c607;
  color: white !important;
}

/* .paraLine {
  text-align: justify;
  font-size: 16px;
  color: #aaaaaa;
} */

h4 {
  color: #aaaaaa;
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .topic {
    text-align: left;
    font-size: 22px;
    font-weight: 900;
    padding-bottom: 30px;
  }

  .lSqItem {
    width: 300px;
    padding: 15px 10px;
    margin-bottom: 2px !important;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 700;
    color: #aaaaaa !important;
  }

  .activeSe {
    background-color: #88c607;
    color: white !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1280px) {
  .lSqItem {
    width: 300px;
    padding: 15px 10px;
    margin-bottom: 2px !important;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: #aaaaaa !important;
  }

  .activeSe {
    background-color: #88c607;
    color: white !important;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1366px) {

  .RightItemB {
    width: 50%;
    background-color: rgb(255, 255, 255);
    margin-left: 10%;
    margin-bottom: 10%;



  }

  .lSqItem {
    width: 280px;
    padding: 15px 10px;
    margin-bottom: 2px !important;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #aaaaaa !important;
  }

  .activeSe {
    background-color: #88c607;
    color: white !important;
  }
}




@media only screen and (max-width: 500px) {

  .classM {
    display: inline-block;
  }


  .THClass {
    width: 100%;
    display: block;
    padding-top: 5%;
    padding-left: 7.5%;
    padding-right: 7.5%;
    padding-bottom: 2.5%;
  }

  .leftItem {
    width: 100%;
  }

  .RightItemA {
    width: 100%;
  }

  .RightItemB {
    width: 100%;
    background-color: rgb(255, 255, 255);
  }


  .lSqItem {
    width: 100%;
    padding: 15px 10px;
    margin-bottom: 2px !important;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: #aaaaaa !important;
  }

}
</style>