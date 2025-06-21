<template>
    <div class="classM">
        <div class="imgOut">
            <img class="imgB" src="HomePage/SmoothFS/ManWPlane.jpg" alt="">
        </div>

        <div class="hItem" style="position: relative;">
            <div class="topicLine">


                <div class="topic topicA">Smooth Flight Support is the</div>
                <div class="topic topicB">Most Trusted Provider</div>
                <div class="topic topicC">Of Flight Support Services in Sri Lanka</div>
            </div>

            <div>
                <div class="paragraph pA">Embark on an extraordinary journey with Smooth Flight Support, the premier
                    flight
                    support company in Sri Lanka, where our steadfast dedication to exceptional service and unwavering
                    reliability sets us apart. We redefine your travel experience, ensuring an unmatched standard of
                    comfort
                    and efficiency.Our team of seasoned aviation professionals is committed to delivering top-tier
                    support,tailored to meet the unique needs of each journey. </div>

                <div class="paragraph pB">From meticulous flight planning to seamless
                    ground handling, we provide comprehensive solutions that cater to all aspects of your aviation
                    requirements. Trust in our expertise
                    to transform your journey into a seamless, luxurious, and unforgettable adventure in the skies</div>
                <div class="btnClass">
                    <a href="/company/overview">
                        <button class="btnSubmit" type="submit"> <span class="mdi">READ MORE<font-awesome-icon
                                    style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>
                </div>


            </div>

            <img class="BplaneImg" src="HomePage/SmoothFS/BackgroundImgA.png" alt="Image">


        </div>


    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../assets/fonts.css';

.classM {
    width: 100%;
    height: 84dvh;
    /* background-color: aqua; */
    display: flex;




}

.imgOut {
    width: 50%;
    height: 100%;
    /* background-color: blue; */
}

.imgB {
    width: 100%;
    height: 100%;
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

.hItem {
    width: 50%;
    height: 100%;
    background-color: #183862;
    padding: 2.5%;
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

.topicLine {
    padding-bottom: 5%;
}

.topic {
    font-size: 50px;
    font-weight: 700;
    font-family: 'SourceSansPro-Regular', sans-serif;
    line-height: 1.2;

}

.topicA,
.topicC {
    color: white;
    font-size: 45px;
    text-align: center;
}

.topicB {
    color: greenyellow;
    font-size: 55px;
    text-align: center;
}

.paragraph {
    color: white;
    text-align: justify;
    padding-bottom: 5%;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 21px;
}

.btnClass {
    display: flex;
    justify-content: flex-start;
}

.btnSubmit {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    padding: 18px 50px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;
    margin-top: 13%;

}

/* .btnSubmit::after {
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

.btnSubmit:hover::after {
    transform: scale(1);
    transform-origin: top left;
} */



.BplaneImg {
    width: 200px;
    height: 150px;
    position: absolute;
    left: 75%;
    bottom: 6%;

}

.btnMA:hover {
    background-color: white;
    border-color: #081729;
    color: #081729;
}


@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .classM {
        width: 100%;
        height: 84dvh;
        /* background-color: aqua; */
        display: flex;
    }

    .topicA,
    .topicC {
        font-size:
            25px;

    }

    .topicB {
        font-size: 30px;
        line-height: 1;
    }

    .paragraph {
        font-size: 14px;
    }

    .btnSubmit {
        padding: 10px 25px;
        margin-bottom: 1.5svh;
        font-size: 12px;
    }

    .imgB {
        height: 100%;
        width: 100%;
    }

    .BplaneImg {
        width: 100px;
        height: 87px;
        position: absolute;
        left: 75%;
        bottom: 8%;

    }

}


@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .classM {
        width: 100%;
        height: 80dvh;
        /* background-color: aqua; */
        display: flex;
    }

    .topicLine {
        padding-top: 5%;
    }

    .topicA,
    .topicC {
        font-size:
            36px;

    }

    .topicB {
        font-size: 43px;
    }

    .paragraph {
        font-size: 16px;
    }

    .btnSubmit {
        padding: 12px 45px;
        margin-bottom: 1.5svh;
        font-size: 12px;

    }

    .imgB {
        height: 100%;
        width: 100%;
    }

    .BplaneImg {
        width: 150px;
        height: 100px;
        position: absolute;
        left: 75%;
        bottom: 9%;

    }

}

@media only screen and (min-width: 1281px) and (max-width: 1366px) {
    .classM {
        width: 100%;
        height: 90dvh;
        /* background-color: aqua; */
        display: flex;
    }

    .topicLine {
        padding-bottom: 2%;
    }

    .topicA,
    .topicC {
        font-size: 30px;

    }

    .topicB {
        font-size: 35px;
        line-height: 1;
    }

    .paragraph {
        font-size: 17px;
    }

    .btnSubmit {
        padding: 12px 35px;
        margin-bottom: 1.5svh;
        font-size: 14px;

    }

    .imgB {
        height: 100%;
        width: 100%;
    }

    .BplaneImg {
        width: 150px;
        height: 100px;
        position: absolute;
        left: 75%;
        bottom: 8%;

    }
}


@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .classM {
        width: 100%;
        height: 75dvh;
        /* background-color: aqua; */
        display: flex;
    }


    .topicA,
    .topicC {
        font-size:
            40px;

    }

    .topicB {
        font-size: 50px;
    }

    .paragraph {
        font-size: 19px;
    }

    .btnSubmit {
        padding: 12px 45px;
        margin-bottom: 1.5svh;
        font-size: 15px;

    }

    .imgB {
        height: 100%;
        width: 100%;
    }

    .BplaneImg {
        width: 150px;
        height: 100px;
        position: absolute;
        left: 75%;
        bottom: 7%;

    }

}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .classM {
        width: 100%;
        height: 90dvh;
        display: flex;
        line-height: 2;
    }

    .topicA,
    .topicC {
        font-size:
            32px;

    }

    .topicB {
        font-size: 38px;
    }

    .paragraph {
        font-size: 18px;
    }

    .btnSubmit {
        padding: 10px 45px;
        margin-bottom: 1.5svh;
        font-size: 15px;

    }

    .imgB {
        height: 100%;
        width: 100%;
    }

    .BplaneImg {
        width: 175px;
        height: 130px;
        position: absolute;
        left: 75%;
        bottom: 9%;

    }
}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .classM {
        width: 100%;
        height: 75dvh;
        display: flex;

    }

    .topicLine {
        margin-top: 3%;
    }

    .topicA,
    .topicC {
        font-size:
            40px;

    }

    .topicB {
        font-size: 45px;
    }

    .paragraph {
        font-size: 22px;
    }

    .btnSubmit {
        padding: 12px 45px;
        margin-bottom: 1.5svh;
        font-size: 16px;

    }

    .imgB {
        height: 100%;
        width: 100%;
    }

    .BplaneImg {
        width: 175px;
        height: 130px;
        position: absolute;
        left: 75%;
        bottom: 8%;

    }
}

@media only screen and (max-width: 500px) {

    .topicA,
    .topicC {
        font-size: 20px;
    }

    .topicB {
        font-size: 24px;
    }

    .paragraph {

        font-size: 17px;
        padding: 2.5%;
    }

    .btnClass {
        display: block;

    }

    .btnSubmit {
        padding: 10px 25px;
        margin-bottom: 1.5svh;
        font-size: 12px;
        margin-left: 35%;
    }

    .classM {
        width: 100%;
        height: 100%;
        display: block;
    }

    .imgOut {
        width: 100%;
        height: 50dvh;
        background-color: #081729;
    }

    .hItem {
        width: 100%;
    }

    .BplaneImg {
        width: 100px;
        height: 75px;
        left: 75%;
        bottom: 1%;
    }

    .imgB {
        width: 100%;
        height: 100%;

    }
}
</style>