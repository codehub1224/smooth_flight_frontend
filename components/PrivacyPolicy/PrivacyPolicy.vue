<template>
  <div style="width: 100%; height: 100%;">
    <div class="Background">
      <div class="classB">

        <div class="textClass">
          <br>
          <div class="topicM">Privacy Policy</div>
          <br>
          <div class="topicS">Smooth Flight Support Privacy Policy</div>
          <div class="textP">
            We are a ground support management company in Sri Lanka. We are committed to protecting
            the privacy of our users. This privacy policy explains how we collect, use, and share the
            information that we collect from our users.
          </div>

          <div class="topicS">Information Collection and Use</div>
          <div class="textP">We collect the following information from our users
            <ul>
              <li class="list">Name</li>
              <li class="list">Email address</li>
              <li class="list">Phone number</li>
              <li class="list">Travel information (such as flight numbers, departure and arrival dates, and passport
                numbers)</li>

            </ul>
            <div class="textP">We use this information to provide services, such as permits, Security purpose, and
              providing customer support.</div>
          </div>


          <div class="topicS">Information Sharing and Disclosure</div>

          <div class="textP">We do not share user information with third parties without the user's consent. We may
            share
            user information with third parties in the following cases:
            <ul>
              <li class="list">To provide services to our users, such as when we book a flight on behalf of a user.</li>
              <li class="list">To comply with legal requirements,such as when we are required to disclose information to
                law enforcement.</li>
              <li class="list">To protect the safety of our users orthe public,such as when we report fraudulent
                activityto the authorities.</li>
            </ul>
            <div class="textP">We do not sell user information to third parties.</div>
          </div>


          <div class="topicS">Data Retention and Security</div>
          <div class="textP">We retain user information for aslong as necessary to provide services to our users and to
            comply
            with legal requirements. We protect user information from unauthorized access, use, or
            disclosure by using a variety of security measures, such as encryption and access control.</div>


          <div class="topicS">User Choices and Controls</div>
          <div class="textP">Users can opt out of having their information collected, used, orshared by contacting us at
            [email protected]
            Users can access and update their information by contacting us at [email protected]
            Users can delete their information by contacting us at [email protected]</div>


          <div class="topicS">Changes to the Privacy Policy</div>
          <div class="textP">We may update this privacy policy from time to time. If we make any material changes to
            this
            privacy policy, we will notify users by posting the updated privacy policy on our website.</div>


          <div class="topicS">Contact Information</div>
          <div class="textP"> If you have any questions about this privacy policy, please contact us at
            <a href="mailto:info@smoothflightsupport.lk">info@smoothflightsupport.lk</a>
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
  animation: fade 1.5s 1.5s both;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translate(0, 4rem);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }

}

.textClass {
  width: 100%;
  height: 100%;
  color: rgb(126, 125, 125);
  display: block;
  padding-left: 10%;
  padding-right: 5%;
}

.topicM {
  font-family: 'Barlow-ExtraBold';
  color: #183862;
  font-size: 45px;
  font-weight: 900;
  /* margin-left: 30%; */
}

.topicS {
  font-family: 'Barlow-ExtraBold';
  color: #88c607;
  ;
  font-size: 25px;
  font-weight: 900;
}

.list {
  font-size: 20px;
}

.textP {
  font-family: 'SourceSansPro-Regular', sans-serif;
  color: rgb(126, 125, 125);
  font-size: 25px;
  text-align: justify;
  margin-right: 10%;
  margin-bottom: 5%;

}



.Background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
  background-position: 30% 55%;
  opacity: 0.2;
}


@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .textClass {
    width: 100%;
    height: 100%;
    color: rgb(126, 125, 125);
    display: block;
    padding-left: 10%;
    padding-right: 5%;
  }

  .topicM {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 30px;
    font-weight: 900;

  }

  .topicS {
    font-family: 'Barlow-ExtraBold';
    color: #88c607;
    ;
    font-size: 18px;
    font-weight: 900;
  }

  .list {
    font-size: 15px;
  }

  .textP {
    font-family: 'SourceSansPro-Regular', sans-serif;
    color: rgb(126, 125, 125);
    font-size: 16px;
    text-align: justify;
    margin-right: 10%;
    margin-bottom: 5%;

  }

}

@media only screen and (min-width:1025px) and (max-width: 1366px) {
  .textClass {
    width: 100%;
    height: 100%;
    color: rgb(126, 125, 125);
    display: block;
    padding-left: 10%;
    padding-right: 5%;
  }

  .topicM {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 40px;
    font-weight: 900;
    /* margin-left: 30%; */
  }

  .topicS {
    font-family: 'Barlow-ExtraBold';
    color: #88c607;
    ;
    font-size: 20px;
    font-weight: 900;
  }

  .list {
    font-size: 15px;
  }

  .textP {
    font-family: 'SourceSansPro-Regular', sans-serif;
    color: rgb(126, 125, 125);
    font-size: 16px;
    text-align: justify;
    margin-right: 10%;
    margin-bottom: 5%;

  }



  .Background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
    background-position: 85% 35%;
    opacity: 0.2;
  }
}

@media only screen and (min-width: 1367px) and (max-width: 1440px) {
  .textClass {
    width: 100%;
    height: 100%;
    color: rgb(126, 125, 125);
    display: block;
    padding-left: 10%;
    padding-right: 5%;
  }

  .topicM {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 40px;
    font-weight: 900;
    /* margin-left: 30%; */
  }

  .topicS {
    font-family: 'Barlow-ExtraBold';
    color: #88c607;
    ;
    font-size: 20px;
    font-weight: 900;
  }

  .list {
    font-size: 15px;
  }

  .textP {
    font-family: 'SourceSansPro-Regular', sans-serif;
    color: rgb(126, 125, 125);
    font-size: 18px;
    text-align: justify;
    margin-right: 10%;
    margin-bottom: 5%;

  }



  .Background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
    background-position: 30% 55%;
    opacity: 0.2;
  }

}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
  .textClass {
    width: 100%;
    height: 100%;
    color: rgb(126, 125, 125);
    display: block;
    padding-left: 10%;
    padding-right: 5%;
  }

  .topicM {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 40px;
    font-weight: 900;
    /* margin-left: 30%; */
  }

  .topicS {
    font-family: 'Barlow-ExtraBold';
    color: #88c607;
    ;
    font-size: 20px;
    font-weight: 900;
  }

  .list {
    font-size: 15px;
  }

  .textP {
    font-family: 'SourceSansPro-Regular', sans-serif;
    color: rgb(126, 125, 125);
    font-size: 16px;
    text-align: justify;
    margin-right: 10%;
    margin-bottom: 5%;

  }
}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {}

@media only screen and (max-width: 500px) {

  .classB {
    display: block;

  }

  .topicM {
    font-family: 'Barlow-ExtraBold';
    color: #183862;
    font-size: 25px;
    font-weight: 900;

  }

  .topicS {
    font-family: 'Barlow-ExtraBold';
    color: #88c607;
    ;
    font-size: 18px;
    font-weight: 900;
  }

  .list {
    font-size: 15px;
  }

  .textP {
    font-family: 'SourceSansPro-Regular', sans-serif;
    color: rgb(126, 125, 125);
    font-size: 16px;
    text-align: justify;
    margin-right: 10%;
    margin-bottom: 5%;

  }

}
</style>