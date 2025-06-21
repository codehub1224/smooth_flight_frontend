<template>
    <div>
        <div class="Paragraph">
            <div style="color:black">
                <p class="Topic">
                    AIRCRAFT FUELING
                </p>
                <p class="paraLine">
                    Fuel sales today is one of core offerings. As Smooth Flight Support has quickly
                    developed into one of the most recognized brands in the industry, it has become
                    our top and ultimate priority to make sure you get the most out of our services.
                </p>
                <p class="paraLine">
                    We are committed to sharing our client’s goal of securing the best price and
                    service in today’s volatile fuel market. We achieve this by constantly monitoring
                    world market conditions, negotiating with global, national and local suppliers.
                </p>
                <p class="paraLine">
                    For competitive fuel price quotations for VCBI/VCCC/VCRI don’t hesitate to contact
                    our office 24 hours a day, 7 days a week and our professional and friendly team will '
                    provide you with current fuel prices as soon as possible.
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
                    </p> -->

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
    font-size: 17.5px;
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