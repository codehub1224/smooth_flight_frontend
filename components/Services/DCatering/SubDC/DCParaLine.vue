<template>
    <div>
        <div class="Paragraph">
            <div style="color:black">
                <p class="Topic">
                    CATERING
                </p>
                <p class="paraLine">
                    Today’s private jet and commercial operators seek to ensure that in-flight catering
                    meets high standards in terms of service. The Food & Beverages experience on a journey
                    is as important as the comfortable ambience created by the crew on board a private
                    and commercial jet.
                </p>
                <p class="paraLine">
                    At Smooth flight support, we are committed to sharing our client’s goal of securing
                    the best experience with the highest standards and most convenient price. Let us take
                    care of your in-flight catering needs, rest assured and feel the difference.
                </p>
                <p class="paraLine">
                    We ensure your flight meals and beverages are supplied according to your requirements
                    and are at best quality and hygiene. Smooth flight support can arrange for food and
                    beverage services and ensure that your VIPs receive the level of service they deserve.
                </p>
            </div>

            <!-- <h4>Through our 24-hour operations centre, we provide:</h4>
                    <p class="paraLine">
                        Arrangement of all types of ground handling equipment<br>
                        Aircraft cleaning and air conditioning<br>
                        VIP Transportation and Chauffeuring Service<br>
                        Lavatory services<br>
                        Cargo handling<br>
                        Baggage handling<br>
                        Ramp supervision<br>
                        Passenger handling<br>
                        Security services and arrangements
                    </p>
                     -->
        </div>


    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.paraLine {
    text-align: justify;
    font-size: 17px;
    color: #aaaaaa;
}

.Topic {
    font-size: 30px;
    color: #183862;
    margin: 0 0 5px;
    font-weight: 900;
}


h4 {
    color: #aaaaaa;
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .paraLine {
        text-align: justify;
        font-size: 12px;
        color: #aaaaaa;
    }

    .Topic {
        font-size: 18px;
        line-height: 1.3;
        margin-top: 10%;
    }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .paraLine {
        text-align: justify;
        font-size: 14.5px;
        color: #aaaaaa;
    }

    .Topic {
        font-size: 20px;
        line-height: 1.3;
        margin-top: 10%;
    }
}


@media only screen and (min-width: 1281px) and (max-width: 1366px) {

    .paraLine {
        text-align: justify;
        font-size: 14.5px;
        color: #aaaaaa;
        margin-left: 5%;
    }

    .Topic {
        font-size: 20px;
        line-height: 1.3;
        margin-top: 10%;
        margin-left: 5%;
    }
}

@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .paraLine {
        text-align: justify;
        font-size: 16px;
        color: #aaaaaa;
    }

    .Topic {
        font-size: 23px;
        line-height: 1.3;
        margin-top: 10%;
    }


}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .paraLine {
        text-align: justify;
        font-size: 15px;
        color: #aaaaaa;
    }

    .Topic {
        font-size: 23px;
        line-height: 1.3;
        margin-top: 10%;
    }
}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .Topic {
        font-size: 25px;
    }
}

@media only screen and (max-width: 500px) {

    .paraLine {
        text-align: justify;
        font-size: 15.5px;
        color: #aaaaaa;
    }

    .Topic {
        font-size: 22px;
        line-height: 1.3;
        margin-top: 5%;
    }

}
</style>