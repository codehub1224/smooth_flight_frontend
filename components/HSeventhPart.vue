<template>
    <div class="classM">
        <div class="cardClass">
            <form @submit.prevent="submitForm" method="POST">
                <div class="topicLine">
                    <br>
                    <div class="topic topicA">Request a Quick Quote</div>
                    <div class="topic topicB">Submit your Quick Quote request, and our team will contact you shortly
                    </div>
                </div>
                <div class="textField">
                    <div class="insideTField ITFA">
                        <input class="textA" v-model="formData.name" type="text" id="Name" placeholder="Name"
                            required />
                        <input class="textA" v-model="formData.email" type="email" id="email" placeholder="Email"
                            required />
                        <input class="textA" v-model="formData.service" type="text" id="service" placeholder="Service"
                            required />
                        <input class="textA" v-model="formData.subject" type="text" id="subject" placeholder="Subject"
                            required />
                    </div>
                    <div class="insideTField ITFB">
                        <textarea v-model="formData.message" class="textB" type="text" name="message"
                            placeholder="Message" />
                        <button class="btnSubmit" type="submit">Submit</button>
                    </div>
                </div>
            </form>



        </div>
        <div class="imageClass">
            <img class="BannerImg" src="/HomePage/RequestQQ/QuikQuote.jpg" alt="Image">

        </div>
        <div class="greenClass">
            <div class="Square">
                <div class="textOut">
                    <div class="textN">7</div>
                    <div class="subText">
                        <div class="txtYD">Years</div>
                        <div class="txtEX">Experience in the Industry</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                service: '',
                subject: '',
                message: '',
            }
        };

    },
    methods: {
        async submitForm() {
            try {
                const response = await this.$axios.post('/api/send', this.formData);
                console.log(response.data);
                alert('Thank you..! Your message has been successfully submitted.. ');
                this.resetForm();
            } catch (error) {
                console.error('Failed to submit form', error);
                alert('Failed to submit form');
            }
        },
        resetForm() {
      // Reset each form field to its initial value
      this.formData.name = '';
      this.formData.email = '';
      this.formData.service = '';
      this.formData.subject = '';
      this.formData.message = '';
    }
  } 
    };


</script>


<style scoped>
@import '../assets/fonts.css';

.classM {
    width: 100%;
    height: 100%;
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

.cardClass {
    width: 70%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    padding-top: 0%;
    padding-bottom: 0%;
}

.textField {
    display: flex;
    justify-content: center;
}

.insideTField {
    width: 50%;
    height: 100%;
}

.ITFA {
    /* background-color: yellow; */
    padding: 1%;
}

.ITFB {
    /* background-color: red; */
    padding: 1%;
}

.imageClass {
    width: 30%;
}

.BannerImg {
    width: 100%;



}

.topicLine {
    margin-bottom: 2.5%;
    padding-top: 2.5%;
    padding-left: 0%;
}

.topicB {
    font-size: 28px;
    margin-left: 11%;
}

.topicA {
    color: black;
    font-size: 50px;
    font-weight: 700;
    padding-left: 30%;
}

.textA {
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    padding: 5px 8px;
    margin-bottom: 1.5svh;
    width: 85%;
    height: 6.5svh;
    margin-left: 15%;
}

.textB {
    width: 84%;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 1.5svh;
    border: 2px solid #dfdfdf;
    height: 21.8svh !important;
}

.btnSubmit {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    padding: 18px 225px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
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




.greenClass {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: right;
}

.Square {
    background-color: #88c607;
    width: 300px;
    height: 180px;
    position: relative;
    margin-top: -70px;
    justify-content: center;
    display: flex;
}

.textOut {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    color: white;
}

.textN {
    align-items: center;
    font-size: 55px;
    font-family: 'SourceSansPro-Regular', sans-serif;
}

.subText {
    display: inline-block;
    line-height: 20px;
}

.txtYD {
    font-size: 25px;
}

.txtEX {
    font-size: 12px;
}


@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .topicB {
        font-size: 18px;
        margin-left: 7%;

    }

    .topicA {
        font-size: 30px;
        margin-right: 5%;


    }

    .btnSubmit {
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        padding: 9px 110px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        background: #88c607;
        color: white;
        z-index: 1;

    }




    .textB {
        height: 23svh !important;
    }




    .Square {
        width: 160px;
        height: 110px;
        position: relative;
        margin-top: -45px;
    }

    .txtYD {
        font-size: 17px;
    }

    .txtEX {
        font-size: 10px;
    }

    .textN {

        font-size: 35px;

    }

    .textA {
        margin-bottom: 1.5svh;
        width: 85%;
        height: 7svh;
        margin-left: 15%;
    }

}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
    .textB {
        height: 21.5svh !important;
    }

    .btnSubmit {
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        padding: 15px 145px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        background: #88c607;
        color: white;
        z-index: 1;

    }

    .topicB {
        font-size: 23px;
        margin-left: 6%;

    }

    .topicA {
        color: black;
        font-size: 35px;
        margin-right: 5%;


    }

    .Square {
        width: 200px;
        height: 130px;
        margin-top: -55px;
        display: flex;
    }

    .textOut {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        color: white;
    }

    .textN {
        align-items: center;
        font-size: 55px;
        font-family: 'SourceSansPro-Regular', sans-serif;
    }

    .subText {
        display: inline-block;
        line-height: 20px;
    }
}

@media only screen and (min-width:1281px) and (max-width: 1366px) {
    .textB {
        height: 21.5svh !important;
    }


    .btnSubmit {
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        padding: 14px 155px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        background: #88c607;
        color: white;
        z-index: 1;
    }

    .topicB {
        font-size: 25px;
        margin-left: 6%;

    }

    .topicA {
        color: black;
        font-size: 40px;
        margin-right: 5%;


    }

    .Square {
        background-color: #88c607;
        width: 220px;
        height: 130px;
        position: relative;
        margin-top: -50px;
        justify-content: center;
        display: flex;
    }

    .textOut {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        color: white;
    }

    .textN {
        align-items: center;
        font-size: 55px;
        font-family: 'SourceSansPro-Regular', sans-serif;
    }

    .subText {
        display: inline-block;
        line-height: 20px;
    }

    .textA {
        margin-bottom: 1.5svh;
        width: 85%;
        height: 9svh;
        margin-left: 15%;
    }

    .textB {
        width: 84%;
        padding: 5px 10px;
        margin-bottom: 1.5svh;
        height: 29.5svh !important;

    }
}


@media only screen and (min-width: 1367px) and (max-width: 1440px) {
    .topicB {
        font-size: 25px;
        margin-left: 8%;

    }

    .topicA {
        font-size: 40px;
        margin-right: 5%;


    }

    .btnSubmit {
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        padding: 15px 165px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        background: #88c607;
        color: white;
        z-index: 1;


    }

    .Square {
        width: 200px;
        height: 130px;
        position: relative;
        margin-top: -45px;
    }

}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .topicB {
        font-size: 25px;
        margin-left: 10%;


    }

    .topicA {
        font-size: 35px;
        margin-right: 5%;
        margin-top: 3%;


    }



    .btnSubmit {
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        padding: 16px 185px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        background: #88c607;
        color: white;
        z-index: 1;


    }

    .Square {
        width: 250px;
        height: 160px;
        position: relative;
        margin-top: -70px;
    }

    .textA {
        margin-bottom: 1.5svh;
        width: 85%;
        height: 7svh;
        margin-left: 15%;
    }

    .textB {
        width: 84%;
        padding: 5px 10px;
        margin-bottom: 1.5svh;
        height: 23svh !important;
    }


}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
    .textB {
        height: 22svh !important;
    }

    .Square {
        width: 250px;
        height: 170px;
        position: relative;
        margin-top: -70px;
    }

    .btnSubmit {
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        padding: 19px 195px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        background: #88c607;
        color: white;
        z-index: 1;


    }
}

@media only screen and (max-width: 500px) {
    .topicB {
        font-size: 16px;
        margin-left: 5%;
        font-weight: 400;
    }

    .topicA {
        font-size: 22px;
        font-weight: 700;
        padding-left: 22%;
    }

    .classM {
        display: block;
        height: 100%;
    }

    .cardClass {
        width: 100%;
        height: 60%;
        padding-bottom: 0svh;
    }

    .imageClass {
        width: 100%;
        height: 30%;
        margin-top: 5svh;
    }

    .Square {

        width: 200px;
        height: 130px;
        position: relative;
        display: flex;

    }

    .BannerImg {
        width: 75dvw;
        height: 55dvh;
        margin-left: 10%;
    }

    .greenClass {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .textField {
        display: block;
    }

    .insideTField {
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    }


    .textA {
        border: 2px solid #dfdfdf;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 5px 10px;
        width: 90%;
        height: 50px;
    }

    .textB {
        width: 90%;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 5px 10px;
        border: 2px solid #dfdfdf;
        height: 100px;
    }

    .btnSubmit {
        font-size: 15px;
        padding: 14px 55px;
        margin-left: 25%;
        margin-top: 5%;
    }

    .textN {

        font-size: 55px;

    }

    .txtYD {
        font-size: 20px;
    }

    .txtEX {
        font-size: 12px;
    }
}
</style>