<template>
    <div class="classM">

        <div class="classB">
            <div class="textClass">
                <div class="topicM">Hello There and Welcome</div>
                <div class="topicB">Who We Are.</div>
                <div class="textP">
                    Smooth Flight Support, a leading provider of flight support services in Sri Lanka, was
                    established
                    in
                    2019 and is ISO 9001:2015 certified. Since its inception, the company has experienced
                    significant
                    growth. We specialize in providing unparalleled support for flight operations, including permit
                    facilitation, ground handling, and refueling. Our commitment to excellence and professionalism
                    has
                    propelled us to the forefront of the industry, making us the preferred choice for aircraft
                    operators
                    in
                    search of reliable and efficient flight support. As your local handling agent, Smooth Flight
                    Support
                    takes care of all your flight arrangements, freeing you to concentrate more on your crew,
                    passengers,
                    and the flight itself.
                    <!-- <a href="#">Read More</a> -->
                </div>

                <div class="itemCard">

                    <div class="downItem dItemA" style="text-align: center;">
                        <div>
                            <div class="TP">Our Vision</div>
                            <div style="display: flex;">
                                <font-awesome-icon class="faIcon fIcA" :icon="['fas', 'eye-low-vision']" />
                                <p class="itemP">To be the leader in the ground flight support
                                    sector while
                                    providing our clients exceptional service in every aspect
                                    comply with the cutting-edge technology in srilanka
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="downItem dItemB" style="text-align: center;">
                        <div>
                            <div class="TP">Our Mission</div>
                            <div style="display: flex;">
                                <font-awesome-icon class="faIcon fIcB" :icon="['fas', 'people-group']" />
                                <p class="itemP">To Provide our clients the best solutions in
                                    the ground handling
                                    services with reliable , safe ,fast and effective operation
                                    ensuring the best quality services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="rightItem">
                <div class="rItemB">
                    <div class="rImgClass">
                        <div class="rImgOutL">
                            <img class="rImage" src="/HomePage/RequestQQ/3.jpg" alt="Image">
                        </div>
                    </div>

                    <div class="rBImgClass">
                        <div class="rBImgOutA">
                            <img class="rBImage" src="/HomePage/RequestQQ/2.jpg" alt="Image">
                        </div>
                        <div class="rBImgOutB">
                            <img class="rBImage" src="/HomePage/RequestQQ/1.jpg" alt="Image">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>


<script>

</script>


<style scoped>
@import '../assets/fonts.css';

.faIcon {
    font-size: 55px;
    padding-right: 2.5%;
    margin-top: 15%;
}

.fIcA {
    color: white;

}

.fIcB {
    color: #88c607;
}

.TP {
    color: #ffffff;
    font-size: 25px;
    margin-top: 8%;
}

.itemP {
    padding: 3%;
    font-size: 22px;
    line-height: 1.5;

}

.itemCard {
    display: flex;
    align-items: center;
    height: 37dvh;
    /* animation: fade 2s 2s both; */

}

.downItem {
    padding-left: 15px;
    padding-right: 15px;
    text-align: justify;
    color: white;
    height: 35dvh;
    justify-content: center;
    align-items: center;
    border-radius: 0%;


}

.dItemA {
    background-color: #88c607;
}

.dItemB {
    background-color: #183862;

}

p {
    text-align: justify;
    padding: 5px;
}

.imgClass {
    padding-top: 5%;
}

.classM {
    width: 100%;
    height: 100%;
}

/* @keyframes fade {
    0% {
        opacity: 0;
        transform: translate(0, 4rem);
    }

    100% {
        opacity: 1;
        transform: translate(0, 0);
    }

} */

.classB {
    display: flex;
    padding-top: 1%;
    animation: CSSscrollReveal 1s ease-in-out both;
    animation-range: entry 50% cover 50%;
    /* Specify animation name, duration, timing function, and fill mode */
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



.textClass {
    font-family: 'SourceSansPro-Regular', sans-serif;
    width: 55%;
    height: 100%;
    padding-left: 2.5%;
}

.rightItem {
    width: 45%;
    height: 100%;

}

.topicM {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 50px;
    font-weight: 900;
    /* animation: fade 2s 2s both; */
}



.topicB {
    padding-top: 1px;
    color: #88c607;
    font-family: 'Barlow-Regular';
    font-size: 30px;
    font-weight: 800;
    /* animation: fade 2s 2s both; */

}



.textP {
    font-family: 'SourceSansPro-Regular', sans-serif;
    color: #183862;
    font-size: 22px;
    text-align: justify;
    /* animation: fade 2s 2s both; */
}



.rItemB {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;


}

.rImgClass {
    width: 50%;
    height: 100%;
    padding-right: 2.5%;
    padding-left: 5%;
}

.rImgOutL {
    width: 100%;
    height: 100%;
    border: 0px solid black;
    padding-top: 1%;
    padding-bottom: 1%;
}

.rImage {
    width: 17dvw;
    height: 69dvh;
    margin-top: 13%;
    margin-left: 15%;
    /* animation: fade 2s 2s both; */

}



.rBImgClass {
    width: 65%;
    height: 100%;

}



.rBImage {
    width: 98%;
    height: 98%;

}

.rBImgOutA {
    width: 21dvw;
    height: 34.6dvh;
    border: 0px solid black;
    margin-top: 11%;
    margin-left: 10%;
    /* animation: fade 2s 2s both; */
}



.rBImgOutB {
    width: 21dvw;
    height: 34.8dvh;
    border: 0px solid black;
    margin-bottom: 1%;
    margin-left: 10%;
    /* animation: fade 2s 2s both; */
}


@media only screen and (min-width: 601px) and (max-width: 1024px) {


    .topicM {
        font-size: 38px;
        line-height: 1.2;
    }

    .topicB {
        font-size: 25px;
    }

    .textClass {
        width: 58%;
        height: 100%;
    }

    .faIcon {
        font-size: 35px;
        padding-right: 2.5%;
        margin-top: 15%;
    }


    .rightItem {
        width: 42%;
        height: 100%;
        margin-right: 5%;
    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: #183862;
        font-size: 15px;
        text-align: justify;
    }

    .itemCard {
        display: flex;
        align-items: center;
        height: 38dvh;

    }


    .downItem {
        width: 100%;
        height: 33dvh;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 1%;

    }


    .TP {
        font-size: 18px;
        margin-top: 0%;

    }

    .itemP {
        padding: 0%;
        font-size: 14.5px;

    }

    .rImgOutL {
        width: 100%;
        height: 100%;

    }

    .rImage {
        width: 20.5dvw;
        height: 76dvh;
        margin-top: 29%;
        margin-left: 1%;

    }

    .rBImgClass {
        width: 60%;
        height: 100%;

    }



    .rBImage {
        width: 100%;
        height: 98%;
        margin-left: 12%;
        margin-top: 9%;
    }

    .rBImgOutA {
        width: 24dvw;
        height: 38.2dvh;
        border: 0px solid black;
        margin-top: 1%;
        margin-left: 5%;

    }

    .rBImgOutB {
        width: 24dvw;
        height: 38.5dvh;
        border: 0px solid black;
        margin-bottom: 1%;
        margin-left: 5%;
    }

}

@media only screen and (min-width:1025px) and (max-width: 1280px) {
    .faIcon {
        font-size: 40px;
        padding-right: 2.5%;
        margin-top: 10%;
    }

    .textClass {
        width: 55%;
        height: 100%;
    }

    .rightItem {
        width: 45%;
        height: 100%;
    }

    .topicM {
        font-size: 40px;
    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: #183862;
        font-size: 17.5px;
        text-align: justify;
    }

    .itemCard {
        height: 30dvh;
        padding-top: 5%;
    }

    .downItem {
        height: 32dvh;
    }

    .itemP {
        font-size: 17px;
        padding: 2%;
        margin-top: 2%;
    }

    .rImage {
        width: 19dvw;
        height: 71dvh;
        margin-top: 18%;
        margin-left: 1%;

    }

    .rBImage {
        width: 100%;
        height: 98%;
        margin-left: 1%;
        margin-top: 6.5%;
    }

    .rBImgOutA {
        width: 23dvw;
        height: 35.5dvh;
        border: 0px solid black;
        margin-top: 1%;
        margin-left: 5%;

    }

    .rBImgOutB {
        width: 23dvw;
        height: 36dvh;
        border: 0px solid black;
        margin-bottom: 1%;
        margin-left: 5%;
    }
}

@media only screen and (min-width: 1281px) and (max-width: 1366px) {
    .topicM {
        font-size: 40px;
    }

    .textClass {
        width: 52%;
        height: 100%;
    }

    .faIcon {
        font-size: 47px;
        padding-right: 2.5%;
        margin-top: 18%;
    }


    .rightItem {
        width: 45%;
        height: 100%;
    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: #183862;
        font-size: 17px;
        text-align: justify;
    }

    .TP {
        font-size: 20px;
    }

    .itemCard {

        display: flex;
        align-items: center;
        height: 37dvh;
        padding-top: 6%;
    }

    .downItem {
        width: 100%;
        height: 39dvh;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .itemP {
        font-size: 18px;
        padding: 2%;
        margin-top: 2%;
    }

    .rImgOutL {
        width: 100%;
        height: 100%;
        border: 0px solid black;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    .rImage {
        width: 19.8dvw;
        height: 84dvh;
        margin-top: 15%;
        margin-left:0;


    }

    .rBImgClass {
        width: 60%;
        height: 100%;

    }



    .rBImage {
        width: 100%;
        height: 98%;
        margin-left: 2%;
        margin-top: 5%;
    }

    .rBImgOutA {
        width: 25dvw;
        height: 42.5dvh;
        border: 0px solid black;
        margin-top: 1%;
        margin-left: 7%;

    }

    .rBImgOutB {
        width: 25dvw;
        height: 42.5dvh;
        border: 0px solid black;
        margin-bottom: 1%;
        margin-left: 7%;
    }

}


@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .topicM {
        font-size: 40px;
    }

    .textClass {
        width: 55%;
        height: 100%;
    }

    .faIcon {
        font-size: 50px;
        padding-right: 2.5%;
        margin-top: 15%;
    }


    .rightItem {
        width: 40%;
        height: 100%;
    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: #183862;
        font-size: 18px;
        text-align: justify;
    }

    .itemCard {

        display: flex;
        align-items: center;
        height: 30dvh;
        padding-top: 5%;
    }

    .downItem {
        width: 100%;
        height: 30dvh;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .TP {
        color: #ffffff;
        font-size: 25px;
        margin-top: 2%;
    }

    .itemP {
        font-size: 18px;
        padding: 2%;
        margin-top: 2%;
    }

    .rImgOutL {
        width: 100%;
        height: 100%;
        border: 0px solid black;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    .rImage {
        width: 18dvw;
        height: 65.5dvh;
        margin-top: 10%;
        margin-left: 7%;


    }

    .rBImgClass {
        width: 60%;
        height: 100%;

    }



    .rBImage {
        width: 100%;
        height: 98%;
        margin-left: 10%;
        margin-top: 3%;
    }

    .rBImgOutA {
        width: 23dvw;
        height: 33dvh;
        border: 0px solid black;
        margin-top: 1%;
        margin-left: 5%;

    }

    .rBImgOutB {
        width: 23dvw;
        height: 33dvh;
        border: 0px solid black;
        margin-bottom: 1%;
        margin-left: 5%;
    }



}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .topicM {
        font-size: 50px;
    }

    .textClass {
        width: 50%;
        height: 100%;
    }

    .faIcon {
        font-size: 50px;
        padding-right: 2.5%;
        margin-top: 15%;
    }


    .rightItem {
        width: 50%;
        height: 100%;
    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: #183862;
        font-size: 20px;
        text-align: justify;
    }

    .itemCard {
        display: flex;
        align-items: center;
        height: 38dvh;
        padding-top: 0%;
    }

    .downItem {
        width: 100%;
        height: 35dvh;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .TP {
        margin-top: 8%;
        font-weight: 500;
        font-size: 25px;
    }

    .itemP {
        font-size: 20px;
        padding-bottom: 5%;

    }

    .rImgOutL {
        width: 100%;
        height: 100%;
        border: 0px solid black;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    .rImage {
        width: 20dvw;
        height: 84.3dvh;
        margin-top: 5%;
        margin-left: 8%;


    }

    .rBImgClass {
        width: 60%;
        height: 100%;

    }



    .rBImage {
        width: 100%;
        height: 98%;
        margin-left: 6%;
        margin-top: 2%;
    }

    .rBImgOutA {
        width: 24dvw;
        height: 42.5dvh;
        border: 0px solid black;
        margin-top: 1%;
        margin-left: 1%;

    }

    .rBImgOutB {
        width: 24dvw;
        height: 42.5dvh;
        border: 0px solid black;
        margin-bottom: 1%;
        margin-left: 1%;
    }


}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .topicM {
        font-size: 45px;
    }

    .textClass {
        width: 55%;
        height: 100%;
    }

    .faIcon {
        font-size: 50px;
        padding-right: 2.5%;
        margin-top: 15%;
    }


    .rightItem {
        width: 45%;
        height: 100%;
    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: #183862;
        font-size: 20px;
        text-align: justify;
    }

    .itemCard {

        display: flex;
        align-items: center;
        height: 29.5dvh;
        padding-top: 4%;
    }

    .downItem {
        width: 100%;
        height: 30dvh;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .TP {
        color: #ffffff;
        font-size: 25px;
        margin-top: 1%;
    }

    .itemP {
        font-size: 22px;
        /* padding: 2%;
margin-top: 2%; */
    }

    .rImgOutL {
        width: 100%;
        height: 100%;
        border: 0px solid black;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    .rImage {
        width: 18dvw;
        height: 60dvh;
        margin-top: 8%;
        margin-left: 1%;


    }

    .rBImgClass {
        width: 60%;
        height: 100%;

    }



    .rBImage {
        width: 100%;
        height: 98%;
        margin-left: 1%;
        margin-top: 3%;
    }

    .rBImgOutA {
        width: 23dvw;
        height: 30.3dvh;
        border: 0px solid black;
        margin-top: 1%;
        margin-left: 1%;

    }

    .rBImgOutB {
        width: 23dvw;
        height: 30.2dvh;
        border: 0px solid black;
        margin-bottom: 1%;
        margin-left: 1%;
    }


}

@media only screen and (max-width: 500px) {
    .classB {
        display: block;
        padding-top: 2.5%;
    }

    .textClass {
        width: 100%;
        height: 100%;
        padding: 3%;
    }

    .topicM {
        font-size: 30px;
    }

    .topicB {
        font-size: 20px;
    }

    .textP {
        font-size: 18px;
        text-align: justify;
        padding: 2.5%;

    }

    .itemCard {
        display: block;
        line-height: 0.01;
        margin-left: 3%;
        margin-right: 3%;
        height: 33dvh;

    }

    .downItem {
        width: 100%;
        height: 33dvh;
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 3%;
    }

    .rightItem {
        width: 100%;
        height: 100%;
        display: block;
    }

    .rImgOutL {
        display: none;
    }



    .rItemB {
        display: block;
        padding: 0%;
    }

    .itemP {
        font-size: 16px;
        margin-top: 4%;
    }

    .TP {
        margin-top: 5%;
        font-size: 20px;
    }

    .rBImage {
        width: 100%;
        height: 98%;
        /* margin-left: 5.5%; */
        margin-top: 25%;
    }

    .rBImgOutA {
        width: 88dvw;
        height: 40dvh;
        margin-top: 70%;
    }

    .rBImgOutB {
        width: 88dvw;
        height: 40dvh;
        margin-bottom: 35%;
    }

    .rImage {
        display: none;
    }

    .faIcon {
        font-size: 40px;
        padding-right: 2.5%;

    }
}
</style>