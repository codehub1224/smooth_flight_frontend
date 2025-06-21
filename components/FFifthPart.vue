<template>
    <div class="classM">
        <div class="Header">

            <br>
            <br>
            <div class="Topic">Download And Get More Benefits<br> From Smooth Flight Mobile App</div>
            <div class="listItem">
                <ul style="padding-right: 2.5%;">
                    <li>On-the-Go Accessibility</li>
                    <li>User Friendly Interface</li>
                    <li>Instant Notifications</li>
                </ul>
                <ul>
                    <li>Comprehensive Aviation Service</li>
                    <li>Dual Compatibility</li>
                    <li>24/7 Support</li>
                </ul>
            </div>
            <div class="storeIcons Desktop">
                <img class="stIcon" src="HomePage/DownloadGet/AppStore.png" alt="Image">
                <a href="https://play.google.com/store/apps/details?id=com.codehub.smooth_flight_support&hl=en&gl=US"
                    target="_blank">
                    <img class="stIcon" src="HomePage/DownloadGet/PlayStore.png" alt="Image"></a>
            </div>

        </div>

        <div class="imgAllOut">


            <div class="imgAll">
                <img class="imgSm" src="HomePage/DownloadGet/1.png" alt="Image">
                <img class="imgSm" src="HomePage/DownloadGet/2.png" alt="Image">
                <img class="imgSm" src="HomePage/DownloadGet/3.png" alt="Image">
                <img class="imgSm" src="HomePage/DownloadGet/4.png" alt="Image">
            </div>

        </div>

        <div class="storeIcons Mobile">
            <img class="stIcon" src="HomePage/DownloadGet/AppStore.png" alt="Image">
            <a href="https://play.google.com/store/apps/details?id=com.codehub.smooth_flight_support&hl=en&gl=US"
                target="_blank">
                <img class="stIcon" src="HomePage/DownloadGet/PlayStore.png" alt="Image"></a>
        </div>


    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../assets/fonts.css';

.Mobile {
    display: none !important;
}

.Desktop {
    display: block;
}

.classM {
    width: 100%;
    height: 50dvh;
    background-color: white;
    padding: 0.5%;
    display: flex;
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

.Header {
    width: 50%;
    height: 100%;
    margin-top: 0%;
}

.Topic {
    text-align: center;
    font-size: 45px;
    font-weight: 700;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    line-height: 1.2;
}

.listItem {
    display: flex;
    justify-content: center;
    font-size: 23px;
    padding-left: 8%;
}

.imgAllOut {
    width: 50%;
    height: 100%;
    margin-top: 2%;
}

.imgAll {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;

}



.imgSm {
    margin-right: -3.9%;
    margin-left: -3.9%;
    width: 200px;
    height: 350px;
    animation: fade 5s 5s both;
    outline-offset: 15px;
    transition: all 0.2s;
}

.imgSm:hover {
    /* outline: 10px solid yellow; */
    transform: scale(1.05) translateY(-20px);
    z-index: 20;

}

.storeIcons {
    display: flex;
    justify-content: center;
}

.stIcon {
    width: 210px;
    height: 80px;
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .Mobile {
        display: none;
    }

    .classM {
        width: 100%;
        height: 60dvh;
        padding: 0.5%;
        display: flex;
    }

    .Topic {
        font-size: 30px;
        font-weight: 800;
        margin-left: 5%;
    }

    .listItem {
        font-size: 15px;
    }

    .imgAllOut {
        width: 50%;
        height: 100%;
        margin-top: 5%;
    }

    .imgAll {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1%;

    }

    .imgSm {
        margin-right: -6%;
        margin-left: -6%;
        width: 150px;
        height: 250px;

    }

    .stIcon {
        width: 150px;
        height: 60px;
        /* margin-right: 8%; */

    }

    .storeIcons {
        margin-right: 8%;
    }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .Mobile {
        display: none;
    }

    .classM {
        width: 100%;
        height: 50dvh;
        padding: 0.5%;
        display: flex;
    }

    .Header {
        width: 50%;
        height: 100%;
        margin-top: 0%;
    }

    .imgAllOut {
        width: 50%;
        height: 100%;
        margin-top: 2%;
    }

    .Topic {
        font-size: 30px;
        font-weight: 800;
        margin-left: 5%;
        line-height: 1;
    }

    .imgAllOut {
        width: 50%;
        height: 100%;

    }

    .listItem {
        font-size: 19px;
        margin-left: 5%;
    }

    .imgAll {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0%;


    }

    .imgSm {
        margin-right: -6%;
        margin-left: -6%;
        width: 175px;
        height: 290px;
    }

    .stIcon {
        width: 185px;
        height: 80px;
        margin-left: 5%;


    }

    .storeIcons {
        display: flex;
        justify-content: center;

    }


}

@media only screen and (min-width:1281px) and (max-width: 1366px) {
    .Mobile {
        display: none;
    }

    .Header {
        width: 50%;
        height: 100%;
        margin-top: 0%;
    }

    .classM {
        width: 100%;
        height: 60dvh;
        background-color: white;
        padding: 0.5%;
        display: flex;
    }

    .Topic {
        font-size: 30px;
    }

    .listItem {
        display: flex;
        justify-content: center;
        font-size: 18px;
        padding-left: 7%;
    }

    .imgAllOut {
        width: 50%;
        height: 100%;
        margin-top: 2%;
    }

    .imgAll {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1%;

    }

    .imgSm {
        margin-right: -6%;
        margin-left: -6%;
        width: 180px;
        height: 300px;
    }

    .stIcon {
        width: 180px;
        height: 70px;
        /* margin-right: 8%; */

    }

    .storeIcons {
        margin-right: 8%;
    }

}

@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .Mobile {
        display: none;
    }

    .Topic {
        font-size: 38px;
        font-weight: 800;
        margin-left: 5%;
    }

    .listItem {
        display: flex;
        justify-content: center;
        font-size: 19px;
        padding-left: 5%;
    }

    .imgAllOut {
        width: 50%;
        height: 100%;
        margin-top: 5%;

    }

    .imgAll {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1%;

    }

    .imgSm {
        margin-right: -6%;
        margin-left: -6%;
        width: 180px;
        height: 300px;
    }

    .stIcon {
        width: 200px;
        height: 70px;

    }

    .storeIcons {
        margin-right: 8%;
    }


}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .Mobile {
        display: none;
    }

    .classM {
        width: 100%;
        height: 50dvh;
        padding: 0.5%;
        display: flex;
    }

    .Header {
        width: 50%;
        height: 100%;
        margin-top: 0%;
    }

    .imgAllOut {
        width: 50%;
        height: 100%;
        margin-top: 2%;
    }

    .Topic {
        font-size: 35px;
        font-weight: 800;
        margin-left: 5%;
        line-height: 1;
    }

    .imgAllOut {
        width: 50%;
        height: 100%;

    }

    .listItem {
        font-size: 21px;
        margin-left: 5%;
    }

    .imgAll {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0%;


    }

    .imgSm {
        margin-right: -6%;
        margin-left: -6%;
        width: 175px;
        height: 290px;
    }

    .stIcon {
        width: 185px;
        height: 80px;
        margin-left: 5%;


    }

    .storeIcons {
        display: flex;
        justify-content: center;

    }
}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .Mobile {
        display: none !important;
    }

    .Desktop {
        display: block;
    }

    .Topic {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        line-height: 1.2;
    }

    .listItem {
        display: flex;
        justify-content: center;
        font-size: 21px;
        padding-left: 5%;
    }

    .storeIcons {
        display: flex;
        justify-content: center;

    }

    .stIcon {
        width: 210px;
        height: 80px;
    }



}

@media only screen and (max-width: 500px) {

    .Mobile {
        display: block !important;
        margin-left: 20%;
        margin-top: 5%;
    }

    .stIcon {
        width: 130px;
        height: 60px;

    }

    .classM {
        width: 100%;
        height: 100%;
        display: block;
    }

    .Header {
        width: 100%;
        height: 100%;
    }

    .Topic {
        font-size: 20px;

    }

    .listItem {
        display: none;
    }


    .imgSm {
        margin-right: 0.5%;
        margin-left: 0.5%;
        width: 80px;
        height: 150px;

    }

    .imgAllOut {
        width: 100%;
        height: 100%;
    }

    .imgAll {
        display: flex;
    }

    .Desktop {
        display: none;
    }

}
</style>