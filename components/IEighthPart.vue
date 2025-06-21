<template>
    <div style="width: 100%; height: 100%; background-color: rgb(255, 255, 255);">
        <div class="Topic">AVIATION NEWS</div>

        <div class="classItem">

            <div class="Card">
                <img class="Image" src="HomePage/News/APS.jpg" alt="Image">
                <div class="DTClass">
                    <div class="DT"></div>
                    <div class="Month">oct</div>
                    <div class="Date">30</div>
                </div>
                <div class="Text">Aviation Groups In US Write To Government Challenging Public Charter Rules</div>
                <div class="clickMore"><a href="#">More News<span class="mdi mdi-chevron-right"></span></a></div>
            </div>

            <div class="Card">
                <img class="Image" src="HomePage/News/APS.jpg" alt="Image">
                <div class="DTClass">
                    <div class="DT"></div>
                    <div class="Month">oct</div>
                    <div class="Date">30</div>
                </div>
                <div class="Text">Aviation Groups In US Write To Government Challenging Public Charter Rules</div>
                <div class="clickMore"><a href="#">More News<span class="mdi mdi-chevron-right"></span></a></div>
            </div>

            <div class="Card">
                <img class="Image" src="HomePage/News/APS.jpg" alt="Image">
                <div class="DTClass">
                    <div class="DT"></div>
                    <div class="Month">oct</div>
                    <div class="Date">30</div>
                </div>
                <div class="Text">Aviation Groups In US Write To Government Challenging Public Charter Rules</div>
                <div class="clickMore"><a href="#">More News<span class="mdi mdi-chevron-right"></span></a></div>
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

.classItem {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
}

.Card {
    width: 30%;
    height: 60dvh;
    background-color: white;
    position: relative;
}

.DTClass {
    width: 50px;
    height: 65px;
    position: absolute;
    background-color: greenyellow;
    top: 2.5%;
    right: 2.5%;
    align-items: center;
    text-align: center;
}

.DT {
    width: 100%;
    height: 2px;
    background-color: white;
    margin-top: 5px;
}

.Topic {
    color: black;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
}

.Image {
    width: 100%;
    height: 60%;
}

.Text {
    padding: 2px 5%;
    font-size: 15px;
}

.clickMore {
    position: absolute;
    bottom: 5%;
    padding-left: 5%;
    width: 100%;
    color: black;
}

.mdi {
    right: 5%;
    position: absolute;
}

a {
    text-decoration: none;
    color: black !important;
}


@media only screen and (max-width: 500px) {

    .classItem {
        width: 100%;
        height: 100%;
        display: block;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .Card {
        width: 100%;
        height: 350px;
        background-color: white;
        position: relative;
        margin-bottom: 35px;
    }

    .Topic {
        padding: 35px 10px 10px 10px;
    }
}
</style>