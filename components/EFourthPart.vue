<template>
    <div class="classM">


        <div class="Background">



            <div class="rightClass">




                <div class="mainTopic">Why Choose Us?</div>



                <div>
                    <p>
                        Choose Smooth Flight Support for a journey where excellence, reliability,
                        and seamless experiences converge. Elevate your aviation adventure with
                        us — where every takeoff is smooth, and every landing is seamless.
                    </p>
                    <div class="Class">
                        <div class="mainLine"> <font-awesome-icon :icon="['fas', 'check']" /> ISO 9001:2015 Certified
                        </div>
                        <!-- <div class="subLine">We are committed to providing high-quality services that meet international standards</div> -->
                    </div>

                    <div class="Class">
                        <div class="mainLine"> <font-awesome-icon :icon="['fas', 'check']" /> High Quality, Excellence
                            and
                            Confidentiality </div>
                        <!-- <div class="subLine">We use the latest technology and best practices to ensure 
                        that your flight is safe, efficiant and confidentially</div> -->
                    </div>

                    <div class="Class">
                        <div class="mainLine"> <font-awesome-icon :icon="['fas', 'check']" /> Accountability &
                            Reliability
                        </div>
                        <!-- <div class="subLine">We are responsible for our actions and deliver on our promises.</div> -->
                    </div>

                    <div class="Class">
                        <div class="mainLine"> <font-awesome-icon :icon="['fas', 'check']" /> Safety, Hospitality & Fast
                        </div>
                        <!-- <div class="subLine">We Prioritize safety and customer service, and we are always willing to go the extra mile</div> -->
                    </div>

                    <div class="Class">
                        <div class="mainLine"> <font-awesome-icon :icon="['fas', 'check']" /> Priority on Service</div>
                        <!-- <div class="subLine">We are dedicated to  meeting your needs and exceeding your expectations.</div> -->
                    </div>

                    <div class="Class">
                        <div class="mainLine"> <font-awesome-icon :icon="['fas', 'check']" /> Used the latest technology
                        </div>
                        <!-- <div class="subLine">We are dedicated to  meeting your needs and exceeding your expectations.</div> -->
                    </div>

                    <div class="Class">
                        <div class="mainLine"> <font-awesome-icon :icon="['fas', 'check']" /> Friendly & experienced
                            team
                        </div>
                        <!-- <div class="subLine">We are dedicated to  meeting your needs and exceeding your expectations.</div> -->
                    </div>
                </div>

            </div>
            <div class="rImgClass">
                <img class="rightImg" src="/HomePage/WhyChUs/whychoose.jpg" alt="Image">
            </div>


        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../assets/fonts.css';


.rImgClass {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.rightImg {
    height: 68dvh;
    width: 100%;

}


.rightClass {
    width: 50%;
    height: 100%;
}

.classM {
    width: 100%;
    height: 100%;
    z-index: 1;

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



.Background {
    width: 100%;
    height: 100%;
    background-color: #183862;
    position: relative;
    display: flex;
}

.Background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
    background-position: 32% 68%;
    opacity: 0.2;
}


p {
    width: 80%;
    padding-left: 12%;
    padding-top: 1.5%;
    color: white;
    font-size: 22px;
    text-align: justify;

}


.mainTopic {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 50px;
    color: white;
    font-weight: 700;
    padding-left: 10%;
    margin-top: 4%;
}


.Class {
    padding-top: 0.52%;
    padding-bottom: 0.52%;
    padding-left: 5%;
}

.mainLine {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 22px;
    color: white;
    padding-left: 8%;
}



@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .mainTopic {
        font-size: 38px;
        font-weight: 700;
        margin-top: 5%;
    }

    p {
        font-size: 15px;
    }

    .mainLine {
        font-size: 14.5px;
        line-height: 1.3;

    }

    .rightImg {
        height: 73dvh;
        width: 100%;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 1% 68%;
        opacity: 0.2;
    }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .mainTopic {
        font-size: 45px;
        margin-top: 7%;
    }

    p {
        font-size: 17.5px;
    }

    .mainLine {
        font-size: 17.3px;
    }

    .Background {
        width: 100%;
        height: 100%;
        background-color: #183862;
        position: relative;
        display: flex;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 25% 68%;
        opacity: 0.2;
    }

}

@media only screen and (min-width: 1281px) and (max-width: 1366px) {
    .mainTopic {
        font-size: 40px;
        margin-top: 6%;
    }

    p {
        font-size: 16px;
    }

    .mainLine {
        font-size: 16px;
        line-height: 1.5;
    }

    .rightImg {
        height: 80dvh;
        width: 100%;
    }

    .Background {
        width: 100%;
        height: 100%;
        background-color: #183862;
        position: relative;
        display: flex;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 20% 68%;
        opacity: 0.2;
    }
}

@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .mainTopic {
        font-size: 50px;
    }

    p {
        font-size: 20px;
    }

    .mainLine {
        font-size: 19px;
    }

    .Background {
        width: 100%;
        height: 100%;
        background-color: #183862;
        position: relative;
        display: flex;
    }

    .rightImg {
        height: 70dvh;
        width: 100%;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 25% 68%;
        opacity: 0.2;
    }
}


@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .mainTopic {
        font-size: 40px;
        margin-top: 8%;
    }

    p {
        font-size: 20px;
    }

    .mainLine {
        font-size: 18px;
    }

    .Background {
        width: 100%;
        height: 100%;
        background-color: #183862;
        position: relative;
        display: flex;
    }

    .rightImg {
        height: 75dvh;
        width: 100%;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 25% 68%;
        opacity: 0.2;
    }

}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .mainTopic {
        font-size: 45px;
        margin-top: 9%;
    }

    p {
        font-size: 22px;
    }

    .mainLine {
        font-size: 21px;
    }

    .Background {
        width: 100%;
        height: 100%;
        background-color: #183862;
        position: relative;
        display: flex;
    }

    .rightImg {
        height: 65dvh;
        width: 100%;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 25% 68%;
        opacity: 0.2;
    }

}

@media only screen and (max-width: 500px) {

    .classM {
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .Background {
        padding-top: 5px;
        padding-bottom: 0px !important;
        display: block;
    }

    p {
        width: 90%;
        color: white;
        font-size: 16px;
        text-align: justify;

    }

    .rImgClass {
        width: 100%;
        height: 100%;
        /* display: block;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 20px 0px 0px 0px; */
    }

    .rightImg {
        height: 50dvh;
        width: 100%;
        margin-top: 5%;


    }

    .rightClass {
        width: 100%;
        height: 100%;
    }

    .mainTopic {
        font-size: 30px;
        margin-left: 15%;
    }

    .mainLine {
        font-size: 16px;
        padding-left: 8%;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 20% 20%;
        opacity: 0.2;
    }
}

@media only screen and (max-width: 320px) {

    .classM {
        width: 100%;
        height: 100%;
        z-index: 1;
        display: block;
    }

    .Background {
        padding-top: 5px;
        padding-bottom: 0px !important;
        display: block;
    }

    p {
        width: 90%;
        color: white;
        font-size: 13px;
        text-align: justify;

    }

    .rImgClass {
        width: 100%;
        height: 100%;
        /* display: block;
align-items: center;
justify-content: center;
margin: 0;
padding: 20px 0px 0px 0px; */
    }

    .rightImg {
        height: 30dvh;
        width: 100%;
        margin-top: 5%;


    }

    .rightClass {
        width: 100%;
        height: 100%;
    }

    .mainTopic {
        font-size: 20px;
        margin-left: 20%;
    }

    .mainLine {
        font-size: 12px;

    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 20% 20%;
        opacity: 0.2;
    }
}
</style>