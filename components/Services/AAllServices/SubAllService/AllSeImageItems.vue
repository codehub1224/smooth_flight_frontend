<template>
    <div style="width: 100%; height: 100%;">
        <!-- <div class="RightItem" style="width: 75%; background-color: rgb(255, 255, 255); padding: 0px 20px 20px 20px"> -->
        <div class="allItem">

            <div class="cardClass">
                <div class="imgClass">
                    <img class="Img" src="/ServicesImg/AllServicess/LandingPermit.jpg" alt="Image">
                </div>
                <div class="textClass">
                    <div class="headLine">PERMITS</div>
                    <!-- <p ref="limitedTextA">Every country has its own set of rules, regulations and procedures for granting 
                            permits to flights desirous of landing or even entering their air space. we obtain 
                            express flight permit clearances for a global network of destinations.
                            </p> -->

                    <a href="/services/permitsA">
                        <button><span class="mdi">READ MORE<font-awesome-icon
                                    style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>

                    <br>
                </div>
            </div>

            <div class="cardClass">
                <div class="imgClass">
                    <img class="Img" src="/ServicesImg/AllServicess/GroundHandling.jpg" alt="Image">
                </div>
                <div class="textClass">
                    <div class="headLine">GROUND HANDLING</div>

                    <a href="/services/groundHandling">
                        <button> <span class="mdi">READ MORE<font-awesome-icon
                                    style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>
                </div>
            </div>

            <div class="cardClass">
                <div class="imgClass">
                    <img class="Img" src="/ServicesImg/AllServicess/AirCraftFueling.jpg" alt="Image">
                </div>
                <div class="textClass">
                    <div class="headLine">AIRCRAFT FUELING</div>

                    <a href="/services/aircraftFueling">
                        <button><span class="mdi">READ MORE<font-awesome-icon
                                    style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>


                </div>
            </div>

        </div>
        <div class="allItem">
            <div class="cardClass">
                <div class="imgClass">
                    <img class="Img" src="/ServicesImg/AllServicess/InFlightCatering.jpg" alt="Image">
                </div>
                <div class="textClass">
                    <div class="headLine">CATERING</div>


                    <a href="/services/catering">
                        <button><span class="mdi">READ MORE<font-awesome-icon
                                    style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>
                </div>
            </div>

            <div class="cardClass">
                <div class="imgClass">
                    <img class="Img" src="/ServicesImg/AllServicess/CrewPassengerTransportation.jpg" alt="Image">
                </div>
                <div class="textClass">
                    <div class="headLine">CREW & PASSENGER SERVICE</div>

                    <a href="/services/crewpassengerservice">
                        <button><span class="mdi">READ MORE<font-awesome-icon
                                    style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>


                </div>
            </div>

            <div class="cardClass">
                <div class="imgClass">
                    <img class="Img" src="/ServicesImg/AllServicess/HotelReservation.jpg" alt="Image">
                </div>
                <div class="textClass">
                    <div class="headLine">HOTAC</div>

                    <a href="/services/hotelReservationTransportation">
                        <button><span class="mdi">READ MORE<font-awesome-icon
                                    style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>
                </div>
            </div>

        </div>


    </div>

    <!-- </div> -->
</template>

<script>
//  import AHParaLine from '~/components/Services/AGroundHandling/SubAG/AHParaLine.vue'

export default {
    // components: {
    //     AHParaLine,
    // },

    //   mounted() {
    //     this.limitWords('limitedTextA', 15);
    //     this.limitWords('limitedTextB', 15);
    //     this.limitWords('limitedTextC', 15);
    //     this.limitWords('limitedTextD', 15);
    //     this.limitWords('limitedTextE', 15);
    //     this.limitWords('limitedTextF', 15);
    //   },
    methods: {
        limitWords(elementRef, limit) {
            const paragraph = this.$refs[elementRef];
            const words = paragraph.innerText.split(' ');

            if (words.length > limit) {
                paragraph.innerText = words.slice(0, limit).join(' ') + '...';
            }
        },
    },
};
</script>

<style scoped>
.allItem {
    width: 100%;
    padding-right: 10%;
    display: flex;
    gap: 20px;
    padding: 10px 0px 10px 0px;
    background-color: rgb(255, 255, 255);
    margin-right: 25%;
}


.cardClass {
    width: 380px !important;
    height: 400px;
    background-color: rgb(255, 255, 255);
    border: 2px outset;
    border-radius: 5px;
    padding-bottom: 1%;

}

.imgClass {
    width: 100%;
    height: 250px;
}

.Img {
    width: 100%;
    height: 100%;
    opacity: 0.7;

}

.Img:hover {
    opacity: 1;
    transform: translateY(-12px) !important;
    transition: 2s !important;
}

.textClass {
    padding: 5px;

}

.headLine {
    font-size: 17px;
    font-weight: 900;
    color: #444444;
    text-align: center;
    padding-top: 1%;
    padding-bottom: 1%;
    line-height: 2.8;
}

/* p{
    text-align: justify;
    font-size: 15px;
    font-weight: 400;
    color: RGB(170, 170, 170)
} */

button {
    text-decoration: none;
    /* border-radius: 6px; */
    font-weight: 600;
    font-size: 15px;
    padding: 18px 95px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;
    margin-left: 10%;

}

button::after {
    /* border-radius: 6px; */
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


@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .cardClass {
        width: 215px !important;
        height: 50%;
        margin-right: 2%;

    }



    .headLine {
        font-size: 12.5px;
    }

    button {
        font-size: 10px;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 25%;
        padding-right: 25%;
        margin-left: 8%;

    }

    .imgClass {
        width: 100%;
        height: 125px;
    }

    .allItem {
        margin-right: 20%;
    }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .cardClass {
        width: 260px !important;
        height: 70%;
        margin-right: 2%;

    }



    .headLine {
        font-size: 12.5px;
    }

    button {
        font-size: 10px;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 25%;
        padding-right: 25%;
        margin-left: 10%;

    }

    .imgClass {
        width: 100%;
        height: 160px;
    }

    .allItem {
        margin-right: 20%;
    }
}


@media only screen and (min-width: 1281px) and (max-width: 1366px) {
    .cardClass {
        width: 290px !important;
        height: 75%;
        margin-right: 2%;

    }



    .headLine {
        font-size: 14px;
    }

    button {
        font-size: 12px;
        padding-top: 5%;
        padding-bottom: 5%;
        padding-left: 25%;
        padding-right: 25%;
        margin-left: 11%;

    }

    .imgClass {
        width: 100%;
        height: 190px;
    }

    .allItem {
        margin-right: 20%;
    }
}


@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .cardClass {
        width: 300px !important;
        height: 75%;
        margin-right: 2%;

    }



    .headLine {
        font-size: 14px;
    }

    button {
        font-size: 12px;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 25%;
        padding-right: 25%;
        margin-left: 11%;

    }

    .imgClass {
        width: 100%;
        height: 190px;
    }

    .allItem {
        margin-right: 20%;
    }
}

@media only screen and (min-width: 1440px) and (max-width: 1600px) {
    .cardClass {
        width: 330px !important;
        height: 75%;
        margin-right: 2%;

    }



    .headLine {
        font-size: 14px;
    }

    button {
        font-size: 12px;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 25%;
        padding-right: 25%;
        margin-left: 11%;

    }

    .imgClass {
        width: 100%;
        height: 190px;
    }

    .allItem {
        margin-right: 20%;
    }
}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .cardClass {
        width: 350px !important;
        height: 100%;
        margin-right: 2%;

    }



    .headLine {
        font-size: 14px;
    }

    button {
        font-size: 12px;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 25%;
        padding-right: 25%;
        margin-left: 13%;

    }

    .imgClass {
        width: 100%;
        height: 220px;
    }

    .allItem {
        margin-right: 20%;
    }
}

@media only screen and (max-width: 500px) {
    .imgClass {
        width: 100%;
        height: 230px;
    }

    .allItem {
        display: block;
        gap: 25px;
        padding: 2px 0px 2px 0px;
        margin-left: 3%;
    }

    .cardClass {
        width: 320px !important;
        height: 350px;
        margin-top: 3%;

    }

    button {
        font-size: 14px;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 28%;
        padding-right: 28%;
        margin-left: 8%;
    }
}


/* .Topic {
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-style: italic;
    text-decoration: underline;
} */
</style>