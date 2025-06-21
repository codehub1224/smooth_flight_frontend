<template>
    <div>
        <div class="Paragraph">
            <div style="color:black">
                <p class="Topic">
                    HOTAC
                </p>
                <p class="paraLine">
                    You don’t have to worry about accommodation and Transportation, our industry
                    experts will take care of this for you. It is our responsibility to find a
                    safe, secure, comfortable, and of course reasonably priced hotel for your
                    crew. we provide a wide range of business airport hotels and luxury hotels
                </p>
                <p class="paraLine">
                    We offering the highest standard of comfort and elegance with the latest
                    fleet of top-of-the-line vehicles, which are dedicated exclusively for
                    the use our transportation.
                </p>
                <p class="paraLine">
                    You can contact us at any time, and we will arrange the best accommodation
                    to match your requirements within less than an hour and Smooth flight
                    support team makes sure your accommodation and transportation is pleasant and
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