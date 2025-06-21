<template>
    <div class="classM">
        <div class="contactPart">
            <div class="listB">
                <ul class="no-bullets">
                    <li class="mdiS"
                        style="font-size: 16px; font-family:'Roboto'; font-weight: 700; color: #AAAAAA; line-height: 0.5;">
                        <div class="mdi mdi-card-account-details-outline"></div>
                        <div class="coText" style="margin-left: 1%;">Smooth Flight Support(Pvt) Ltd</div>
                    </li>

                    <li class="mdiS" style="font-size: 16px; font-family: 'Roboto'; color: #AAAAAA; margin-left:5% ;">
                        <div class="coText">C.R.I.Road, Lunuwila ,<br> Sri Lanka</div>
                    </li>
                </ul>
                <br>
                <ul class="no-bullets" style="color: #AAAAAA; padding-bottom: 5%; line-height: 0.9;">

                    <li class="mdiS">
                        <div class="mdi mdi-phone"></div>
                        <div class="coText" style="margin-left: 1.3%;">+94) 314354400</div>
                    </li>

                    <li class=" mdiS">
                        <div class="coText" style="margin-left: 5%;">+94) 312249482</div>
                    </li>

                    <li class="mdiS">
                        <div class="coText" style="margin-left: 5%;">+94) 763061800</div>
                    </li>
                </ul>

                <ul class="no-bullets">
                    <li class="mdiA" style="font-size: 16px; font-family:'Roboto'; color: #AAAAAA;">
                        <div class="mdi mdi-email-open-multiple-outline"></div>
                        <div class="coText">General </div>
                    </li>

                    <li>
                        <div><a href="mailto:info@smoothflightsupport.lk"
                                class="address">info@smoothflightsupport.lk</a></div>

                    </li>


                    <li class=" mdiA" style="font-size: 16px; font-family: 'Roboto'; color: #AAAAAA; margin-left:3% ;">
                        <div class="TP">Operations</div>
                    </li>

                    <li>
                        <div><a href="mailto:ops@smoothflightsupport.lk" class="address">ops@smoothflightsupport.lk</a>
                        </div>
                    </li>


                    <li class="mdiA" style="font-size: 16px; font-family: 'Roboto'; color: #AAAAAA; margin-left:3% ;">
                        <div class="TP">Accounts</div>
                    </li>

                    <li>
                        <div><a href="mailto:accounts@smoothflightsupport.lk" class="address">
                                accounts@smoothflightsupport.lk</a></div>
                    </li>
                </ul>

            </div>
        </div>

        <div class="formOut">
            <h2 class="topic">SEND US AN EMAIL</h2>
            <p>Smooth Flight Support will relieve you, as a Local Handling Agent,
                of all your flight arrangements, giving you more time to concentrate on your crew,
                your passengers, and your flight. Whatever your needs, Smooth Flight Support is here to assist you.
            </p>

            <form @submit.prevent="submitForm">
                <div class="textDevide">
                    <div class="Tdc">
                        <input class="textA Text" v-model="formData.firstName" type="text" id="firstName"
                            placeholder="First Name" required />
                    </div>
                    <div>
                        <input class="textA Text" v-model="formData.lastName" type="text" id="lastName"
                            placeholder="Last Name" required />
                    </div>
                </div>
                <div class="textDevide">
                    <div class="Tdc">
                        <input class="textA Text" v-model="formData.email" type="email" id="email"
                            placeholder="Email Address" required />
                    </div>
                    <div>
                        <input class="textA Text" v-model="formData.phoneNumber" type="tel" id="phoneNumber"
                            placeholder="Phone Number" required />
                    </div>
                </div>
                <div style="padding-bottom: 20px;">
                    <input class="textB Text" v-model="formData.subject" type="text" id="subject" placeholder="Subject"
                        required />
                </div>
                <div style="padding-bottom: 20px;">
                    <textarea class="textC Text" v-model="formData.message" id="message" rows="4" placeholder="Message"
                        required></textarea>
                </div>
                <button class="Btn" type="submit">Send Message</button>

            </form>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: '',
            }
        };
    },

    methods: {
        async submitForm() {
            try {
                const response = await this.$axios.post('/api/submit-form', this.formData);
                console.log(response.data);
                alert('Thank you..! Your message has been successfully submitted.. ');
                this.resetForm();
            } catch (error) {
                console.error('Failed to submit form', error);
                alert('Failed to submit form');
            }
        },

        resetForm() {
            this.formData = {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: '',
            };
        }
    }

};
</script>
<style scoped>
.classM {
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 7.5%;
    padding-right: 7.5%;
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



.address {
    margin-left: 6%;
}

.TP {
    margin-left: 3%;
}

.contactPart {
    width: 30%;
    height: 100%;
    background-color: rgb(255, 255, 255);
}

.formOut {
    width: 70%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    padding-left: 2%;
    padding-bottom: 5%;
}

.textDevide {
    display: flex;
    gap: 20px;
    padding-bottom: 20px;
}

.topic {
    padding-bottom: 2%;
    color: #183862;
    font-size: 25px;
    font-weight: 900;
}

p {
    font-size: 16px;
    color: #AAAAAA;
    text-align: justify;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

a:hover {
    text-decoration: underline;
}

.textA {
    width: 300px;
    height: 50px;
    padding: 10px;
}


.textB {
    width: 620px;
    height: 50px;
    padding: 10px;
}

.textC {
    width: 620px;
    height: 200px;
    padding: 10px;
}

/* .mail {
    line-height: 1;
} */

.Text {
    background-color: #f5f5f5;
    border: 1px solid #eeeeee;
}

::placeholder {
    color: #797575;
    opacity: 1;
    /* Firefox */
}

::-ms-input-placeholder {
    /* Edge 12-18 */
    color: #797575;
}

.Btn {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    padding: 18px 45px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;

}

.Btn::after {
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

.Btn:hover::after {
    transform: scale(1);
    transform-origin: top left;
}

.listB.no-bullets {
    list-style: none;
    padding: 0;
    text-align: left;
    line-height: 10px;
}

.mdiS {
    display: flex;
    padding-bottom: 10px;
}

.mdiA {
    display: flex;
    padding-bottom: 2px;
}

.coText {
    padding-left: 11px;

}


.Text:hover {
    background-color: white;
}

.Text:focus {
    outline: none;
}




@media only screen and (min-width: 600px) and (max-width: 1024px) {
    .contactPart {
        width: 35%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        margin-top: 1%;
    }

    .formOut {
        width: 65%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        padding-left: 2%;
        padding-bottom: 5%;
    }

    .topic {
        padding-bottom: 2%;
        color: #183862;
        font-size: 20px;
        font-weight: 900;
    }

    p {
        font-size: 14px;
        color: #AAAAAA;
        text-align: justify;
    }

    .coText {
        font-size: 13px;
    }

    .address {
        margin-left: 9%;
        font-size: 13px;
    }

    .TP {
        margin-left: 6%;
        font-size: 13px;
    }

}

@media only screen and (min-width: 1025px) and (max-width: 1366px) {

    .contactPart {
        width: 35%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        margin-top: 1%;
    }

    .formOut {
        width: 65%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        padding-left: 2%;
        padding-bottom: 5%;
    }

    .Btn {
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 15px;
        padding: 15px 45px;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        background: #88c607;
        color: white;
        z-index: 1;

    }

    .address {
        margin-left: 7%;
    }

    .TP {
        margin-left: 4%;
    }

}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
    .address {
        margin-left: 7%;
    }

    .TP {
        margin-left: 4%;
    }

}

@media only screen and (max-width: 500px) {

    .classM {
        width: 100%;
        height: 100%;
        display: block;
        padding-left: 5%;
        padding-right: 5%;
    }

    .contactPart {
        width: 100%;
        height: 100%;
        padding-bottom: 5%;
        margin-top: 3%
    }

    .formOut {
        width: 100%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        padding-left: 0%;
        padding-bottom: 5%;
    }

    .topic {
        padding-bottom: 2%;
        color: #183862;
        font-size: 20px;
        font-weight: 900;
    }

    .Form {
        width: 100%;
    }


    .textDevide {
        display: block;
        gap: 20px;
        padding-bottom: 20px;
    }

    .Tdc {
        padding-bottom: 20px;
    }



    .textA,
    .textB {
        width: 100%;
        height: 50px;
        padding: 10px;
    }

    .textC {
        width: 100%;
        height: 100px;
        padding: 10px;
    }

    .Text {
        background-color: #f5f5f5;
        border: 1px solid #eeeeee;
    }

    .Btn {
        background-color: #88c607;
        border-radius: 6px;
        color: white;
        font-weight: 600;
        font-size: 13px;
        padding: 15px 40px;
        margin-left: 30%;
    }

    .address {
        margin-left: 7%;
    }

    .TP {
        margin-left: 4%;
    }


}
</style>
