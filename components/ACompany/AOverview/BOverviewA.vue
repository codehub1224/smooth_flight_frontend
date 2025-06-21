<template>
    <div style="width: 100%; height: 100%;">
        <div class="Background">
            <div class="classB">

               
                <div class="textClass">
                    <div class="topicM">About Us</div>
                    <div class="textP">
                        Smooth Flight Support, is a flight support services company based in Sri Lanka, was established
                        in 2019.
                        Since our inception, we have seen considerable growth, a testament to our unwavering commitment
                        to
                        professionalism. Our reputation is anchored in our dedication to serving as your trusted local
                        handling agent,
                        meticulously managing all aspects of your flight arrangements. This allows you to devote more
                        attention to
                        your crew, passengers, and ensuring a smooth flight experience. Our core objective revolves
                        around delivering
                        exceptional service quality and prioritizing the wellbeing of all our clients.<br><br>
                        We are committed to providing top-notch services, guaranteeing a seamless, enjoyable travel
                        experience for
                        everyone involved. Our team, available around the clock, every day of the year, is dedicated to
                        fulfilling
                        your flight requirements with efficiency and expertise. Whether it's permit facilitation, ground
                        handling, or
                        refueling, we cover all facets of flight support to ensure your operations are hassle-free.
                        Trust Smooth
                        Flight Support to elevate your flight experience with our exceptional service and commitment to
                        customer
                        satisfaction.
                    </div>


                </div>
                <div class="imgClass">
                    <img class="img" src="/CompanyI/Overview/Aboutus.jpg" alt="Image">           
                </div>
            </div>

     <div class="classC">
      <div class="content-wrapper">
      <div class="image-section">
        <img class="banner-image" src="/CompanyI/Overview/CEO.jpeg" alt="Company Banner"> 

      </div>
      <div class="text-section"><br>
        <h1>Director Message</h1><br>
        <p>Welcome to Smooth Flight Support, where excellence meets efficiency in ground handling services. 
            It is an honor to lead a team dedicated to delivering unparalleled support for your aviation needs. 
            At Smooth Flight Support, we understand that time is the most precious commodity in aviation, and our 
            mission is to ensure every second counts. <br><br>


        Our commitment to excellence is reflected in our comprehensive range of services, from passenger handling 
        and baggage assistance to refueling and aircraft maintenance. We take pride in our ability to provide tailored 
        solutions that meet the unique demands of each client, ensuring seamless operations and exceptional customer 
        experiences.<br><br>
    
        The aviation industry thrives on precision, safety, and reliability, and we uphold these values in everything we do.
         Our team of highly trained professionals is equipped with the latest technology and industry knowledge to support your 
         operations, whether you're managing commercial flights, private jets, or cargo aircraft.<br>

         Smooth Flight Support is more than a service provider; we are your trusted partner in achieving operational success. 
         Our dedication to continuous improvement and innovation drives us to exceed expectations and set new standards in 
         ground support services.<br><br>

         Thank you for choosing Smooth Flight Support. We look forward to soaring to new heights together and ensuring that 
         every journey with us is smooth and memorable.<br><br>

         Safe travels,
         <br>
         <br>
    </p>


       
      </div>
    </div>
  </div>


            <div class="classB">
                <div class="text">

                    <div class="Para">

                        <div class="topic1">Our Vision</div>
                        <div class="Para">
                            To be the leader in the ground flight support sector while providing our
                            clients exceptional service in every aspect comply with international
                            standards with the cutting-edge technology in Sri Lanka.
                        </div>
                        <div class="topic2">Our Mission</div>
                        <div class="Para">
                            To provide our clients the best solutions in the ground handling
                            services with reliable, safe, fast, and effective operation
                            ensuring the best quality service.

                        </div>
                        <br>
                    </div>


                    <a href="/services/allServices">
                        <button class="btnSubmit" type="submit"> <span class="mdi">READ MORE<font-awesome-icon
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>

                </div>
                <div class="Item">
                    <div class="rItemB">
                        <div class="rImgClass">
                            <div class="rImgOutL">
                                <img class="AImage" src="/CompanyI/Overview/Our vision  mision.jpg" alt="Image">
                            </div>
                        </div>

                        <div class="rBImgClass">
                            <!-- <div class="rBImgOutA">
                <img class="BImage" src="/Company/Overview/A2.jpg" alt="Image">
            </div> -->

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.classB {
    display: flex;
    margin-top: 3%;
    background-color:white;
}

.img {
    width: 78dvh;
    height: 55dvh;
  margin-top: 2%;
}



.imgClass {
    width: 50%;
    height: 100%;
}


.textClass {
    width: 55%;
    height: 100%;
    padding-bottom: 1.5%;
    padding-left: 5%;
    padding-right: 2%;
    color: rgb(126, 125, 125);
    margin-left: 5%;
   

}

.topicM {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 45px;
    font-weight: 900;
    margin-left: 10%;

}

.textP {
    font-family: 'SourceSansPro-Regular', sans-serif;
    color: rgb(126, 125, 125);
    font-size: 20px;
    text-align: justify;
    margin-left: 10%;
    margin-bottom: 8%;
    padding-right: 5%;


}

.btnClass {
    display: flex;
    justify-content: flex-start;
}

.btnSubmit {
    padding: 15px 50px;
    color: white;
    border-radius: 6px;
    background-color: #88c607;
    font-size: 15px;
    font-family: 'SourceSansPro-Regular';
    margin-left: 24%;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
}

.btnSubmit::after {
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
}

.topic1 {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 45px;
    font-weight: 900;
    margin-left: 13%;

}

.topic2 {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 45px;
    font-weight: 900;
    margin-left: 13%;
    margin-top: 3%;

}

.Para {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 21px;
    text-align: justify;
    margin-left: 13%;
    padding-top: 0.5%;
    color: rgb(126, 125, 125);

}

.text {
    width: 40%;
    height: 100%;
    margin-top: 3%;
}

.Item {
    width: 60%;
    height: 100%;
    margin-top: 2%;

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
    padding-bottom: 10%;
    padding-right: 2.5%;
    padding-left: 5%;
}

.rImgOutL {
    width: 100%;
    border: 0px solid black;
}

.AImage {
    width: 78dvh;
    height: 55dvh;
    margin-left: 22%;

}

.rBImgClass {
    width: 65%;
    height: 100%;
    padding-left: 2.5%;
    padding-right: 5%;
}

.Background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
    background-position: 70% 53%;
    opacity: 0.2;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.classC {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh; 
    padding: 10px;
    background-color: #f9f9f9; 
    width: 95%; 
    margin: 0 auto; 
}


.content-wrapper {
    display: flex;
    width: 100%; 
    background-color:rgb(3, 9, 25);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.image-section {
    flex: 0 0 35%; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-image {
    width: 100%;
    height: auto; 
    margin-left: 8%;
   
}


.text-section {
    flex: 0 0 60%; 
    font-family: Arial, sans-serif;
    color: #333; 
}



h1{
    color:rgb(195, 190, 190);
    margin-left: 5%;
}
.text-section p {
    line-height: 1.6;
    font-size: 17px;
    text-align: justify;
    color:   rgb(195, 190, 190);
    margin-left: 5%;
}
@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .imgClass {
        width: 40%;
        height: 100%;
    }

    .textClass {
        width: 60%;
        height: 100%;
    }

    .topicM {
        font-size: 35px;
        font-weight: 800;
        margin-left: 5%;
    }

    .img {
        width: 78dvh;
        height: 60dvh;
        margin-left: 10.5%;
        margin-top: 5%;
    }

    .textP {
        font-size: 14px;
        text-align: justify;
        margin-left: 5%;
    }

    .topic1 {
        font-family: 'Barlow-ExtraBold';
        color: #183862;
        font-size: 35px;
        font-weight: 900;
        margin-left: 8%;

    }

    .topic2 {
        font-family: 'Barlow-ExtraBold';
        color: #183862;
        font-size: 35px;
        font-weight: 900;
        margin-left: 8%;
        margin-top: 3%;

    }

    .btnSubmit {
        padding: 10px 30px;
        color: white;
        border-radius: 6px;
        background-color: #88c607;
        font-size: 12px;
        font-family: 'SourceSansPro-Regular';
        margin-left: 15%;
    }

    .Para {

        font-size: 14px;
        text-align: justify;
        margin-left: 8%;
        padding-top: 0.5%;
        color: rgb(126, 125, 125);
    }

    .text {
        width: 40%;
        height: 100%;
        margin-top: 2%;
    }

    .Item {

        width: 50%;
        height: 100%;

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
        padding-bottom: 10%;
        padding-right: 2.5%;
        padding-left: 5%;
    }

    .rImgOutL {
        width: 100%;
        border: 0px solid black;
    }

    .AImage {
        width: 80dvh;
        height: 60dvh;
        margin-left: 20%;
    }



    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 15% 52%;
        opacity: 0.2;
    }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .imgClass {
        width: 40%;
        height: 100%;
    }

    .textClass {
        width: 60%;
        height: 100%;
    }

    .topicM {
        font-size: 35px;
        font-weight: 800;
        margin-left: 5%;
    }

    .img {
        width: 70dvh;
        height: 45dvh;
        margin-left: 10.5%;
        margin-top: 5%;
    }

    .textP {
        font-size: 14px;
        text-align: justify;
        margin-left: 5%;
        padding-right: 5%;
    }

    .topic1 {
        font-family: 'Barlow-ExtraBold';
        color: #183862;
        font-size: 35px;
        font-weight: 900;
        margin-left: 8%;

    }

    .topic2 {
        font-family: 'Barlow-ExtraBold';
        color: #183862;
        font-size: 35px;
        font-weight: 900;
        margin-left: 8%;
        margin-top: 3%;

    }

    .btnSubmit {
        padding: 10px 30px;
        color: white;
        border-radius: 6px;
        background-color: #88c607;
        font-size: 12px;
        font-family: 'SourceSansPro-Regular';
        margin-left: 15%;
    }

    .Para {
        font-size: 14px;
        text-align: justify;
        margin-left: 8%;
        padding-top: 0.5%;
        color: rgb(126, 125, 125);
    }

    .text {
        width: 40%;
        height: 100%;
        margin-top: 3%;
    }

    .Item {

        width: 50%;
        height: 100%;

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
        padding-bottom: 10%;
        padding-right: 2.5%;
        padding-left: 5%;
    }

    .rImgOutL {
        width: 100%;
        border: 0px solid black;
    }

    .AImage {
        width: 70dvh;
        height: 45dvh;
        margin-left: 25%;
    }



    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 15% 58%;
        opacity: 0.2;
    }
}


@media only screen and (min-width:1281px) and (max-width: 1366px) {
    .classB {
        display: flex;


    }

    .img {
        
    width: 82dvh;
    height: 57dvh;
    margin-top:5%;
    }



    .imgClass {
        width: 50%;
        height: 100%;
    }


    .textClass {
        width: 60%;
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
        padding-left:2%;
        padding-right: 2%;
        color: rgb(126, 125, 125);
        margin-left: 5%;
        margin-top: 0;



    }

    .topicM {
        font-family: 'Barlow-ExtraBold';
        color: #183862;
        font-size: 30px;
        font-weight: 900;
        margin-top: 0;
        margin-left: 2%;

    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: rgb(126, 125, 125);
        font-size: 16.5px;
        text-align: justify;
        margin-right: 10%;
        padding-right: 0;
        padding-left: 0;
        margin-left: 2%;
    }

    .btnSubmit {
        padding: 12px 45px;
        color: white;
        border-radius: 6px;
        background-color: #88c607;
        font-size: 15px;
        font-family: 'SourceSansPro-Regular';
        margin-left: 20%;
    }

    .text {
        font-family: 'SourceSansPro-Regular', sans-serif;
        width: 40%;
        height: 100%;
        margin-top: 3%;
        text-align: justify;


    }

    .topic1 {
        font-family: 'Barlow-ExtraBold';
        color: #183862;
        font-size: 35px;
        font-weight: 900;
        margin-left: 11%;
    }

    .topic2 {
        font-family: 'Barlow-ExtraBold';
        color: #183862;
        font-size: 35px;
        font-weight: 900;
        margin-left: 11%;
    }

    .Para {

        font-size: 17px;
        text-align: justify;
        margin-left: 11%;
        padding-top: 0.5%;
        color: rgb(126, 125, 125);
    }

    .Item {

        width: 60%;
        height: 100%;

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
        padding-bottom: 10%;
        padding-right: 2.5%;
        padding-left: 5%;
    }

    .rImgOutL {
        width: 100%;
        border: 0px solid black;
    }

    .AImage {
        width: 95dvh;
        height: 62dvh;
        margin-left: 14%;

    }

  

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.classC {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh; 
    padding: 10px;
    background-color: #f9f9f9; 
    width: 95%; 
    margin: 0 auto; 
}


.content-wrapper {
    display: flex;
    width: 100%; 
    background-color:rgb(3, 9, 25);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.image-section {
    flex: 0 0 35%; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-image {
    width: 100%;
    height: auto; 
    margin-left: 8%;
   
}


.text-section {
    flex: 0 0 60%; 
    font-family: Arial, sans-serif;
    color: #333; 
}



h1{
    color:rgb(195, 190, 190);
    margin-left: 5%;
    font-size: 28px;
}
.text-section p {
    line-height: 1.6;
    font-size: 14px;
    text-align: justify;
    color:   rgb(195, 190, 190);
    margin-left: 5%;
}
}


@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .imgClass {
        width: 40%;
        height: 100%;

    }

    .textClass {
        width: 60%;
        height: 100%;
    }

    .topicM {
        font-size: 40px;
        font-weight: 800;
    }

    .textClass {
        padding-left: 2.5%;
        margin-top: 2%;
        padding-bottom: 0%;
    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: rgb(126, 125, 125);
        font-size: 17px;
        text-align: justify;
        margin-right: 10%;
        padding-right: 1%;

    }

    .btnSubmit {
        padding: 15px 45px;
        color: white;
        border-radius: 6px;
        background-color: #88c607;
        font-size: 15px;
        font-family: 'SourceSansPro-Regular';

    }

    .img {
        width: 70dvh;
        height: 50dvh;
        margin-left: 10.5%;
        margin-top: 8%;
    }



    .imgClass {
        width: 50%;
        height: 100%;
    }





    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 25% 52%;
        opacity: 0.2;
    }

    .text {
        width: 40%;
        height: 100%;
        margin-top: 2%;
    }

    .Item {
        width: 65%;
        height: 100%;
        margin-top: 2%;
    }

    .AImage {
        width: 70dvh;
        height: 50dvh;
        margin-left: 16%;
    }


    .topic1 {
        font-size: 40px;
        font-weight: 700;

    }

    .topic2 {
        font-size: 40px;
        font-weight: 700;

    }

    .Para {
        font-size: 17px;
        text-align: justify;


    }

}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .rightItem {
        width: 40%;
        height: 100%;
        margin-left:5%;
    }

    .textClass {
        width: 60%;
        height: 100%;
    }

    .topicM {
        font-size: 40px;
        font-weight: 800;
        margin-left: 5%;
    }

    .textClass {
        width: 60%;
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 8%;
        padding-right: 3%;
        color: rgb(126, 125, 125);
        margin-left: 2%;
        margin-top: 0;



    }

    .textP {
        font-family: 'SourceSansPro-Regular', sans-serif;
        color: rgb(126, 125, 125);
        font-size: 17px;
        text-align: justify;
        margin-right: 10%;
        padding-right: 0;
        padding-left: 0;
        margin-left: 5%;
    }

    .img {    
        width: 82dvh;
        height: 57dvh;
        margin-top:5%;
        margin-right: 2%;
        }


    .imgClass {
        width: 45%;
        height: 100%;
    }



    .btnSubmit {
        padding: 15px 50px;
        color: white;
        border-radius: 6px;
        background-color: #88c607;
        font-size: 15px;
        font-family: 'SourceSansPro-Regular';
        margin-left: 26%;
    }


    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 25% 53%;
        opacity: 0.2;
    }


    .text {
        width: 40%;
        height: 100%;
        margin-top: 1%;
    }

    .Item {
        width: 60%;
        height: 100%;
        margin-top: 2%;
    }

    .AImage {
        width: 80dvh;
        height: 60dvh;
        margin-left: 25%;
    }



    .topic1 {
        font-size: 40px;
        margin-left: 14%;
    }

    .topic2 {
        font-size: 40px;
        margin-left: 14%;
        margin-top: 3%;

    }

    .Para {
        font-size: 18px;
        text-align: justify;
        margin-left: 14%;
        padding-top: 0.5%;
        color: rgb(126, 125, 125);
    }


}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .imgClass {
        width: 40%;
        height: 100%;

    }

    .textClass {
        width: 60%;
        height: 100%;
    }

    .topicM {
        font-size: 45px;
        font-weight: 800;
    }

    .textP {
        font-size: 21px;
        padding-right: 2.5%;
    }

    .btnSubmit {
        padding: 18px 65px;
        font-size: 18px;
    }

    .img {
        width: 72dvh;
        height: 50dvh;
        margin-left: 10.5%;
        margin-top: 5%;
    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 30% 50%;
        opacity: 0.2;
    }

    .topic1 {
        font-size: 45px;
    }

    .topic2 {
        font-size: 45px;
    }

    .Para {
        font-size: 20px;
    }

    .AImage {
        width: 70dvh;
        height: 50dvh;
        margin-left: 20%;
    }

}

@media only screen and (max-width: 500px) {
    .classB {
        display: block;
        padding: 2.5%;

    }

    .topicM {
        font-size: 25px;
        font-weight: 600;
        margin-left: 1%;
    }

    .textClass {
        height: 100%;
        width: 100%;
    }

    .rightItem {
        width: 100%;
        height: 100%;
    }

    .textP {
        font-size: 17px;
        text-align: justify;
        margin-left: 1%;
        padding-right: 3%;
    }


    .imgClass {
        width: 100%;
        height: 100%;

    }

    .img {
        width: 78dvw;
        height: 30dvh;
        margin-left: 12%;


    }

    .rBImage {
        display: none;

    }

    .btnSubmit {
        padding: 12px 25px;
        font-size: 12px;
        margin-left: 30%;

    }

    .Background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
        background-position: 30% 50%;
        opacity: 0.2;
    }

    .classB {
        display: block;
        padding: 2.5%;
    }

    .topic1 {
        font-size: 25px;
        font-weight: 600;
        margin-left: 1%;
    }

    .topic2 {
        font-size: 25px;
        font-weight: 600;
        margin-left: 1%;
    }

    .text {
        width: 100%;
        height: 100%;
        padding-right: 4%;
        padding-left: 9%;

    }

    .Item {
        width: 100%;
        height: 100%;

    }

    .AImage {
        width: 78dvw;
        height: 30dvh;
        margin-left: 3%;
        margin-top: 10%;

    }


    .Para {

        font-size: 17px;
        text-align: justify;
        margin-left: 1%;



    }
}
</style>