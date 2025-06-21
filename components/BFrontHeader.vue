<template>
    <div class="Mobile">
        <div class="headLine">
            <div style="background-color: #081729; width: 100%; height: 100%;"></div>
            <div style="background-color: rgb(255, 255, 255); width: 100%; height: 100%; padding-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="logoClass">
                        <NuxtLink class="nlink" to="/">
                            <img class="pngLogo" src="/Header/smoothLogo.png" alt="Smooth LOGO">
                        </NuxtLink>
                    </div>
                    <div class="buttonClass" style="background-color: red; display: flex; align-items: center;">
                        <button class="Button" @click="toggleDrawer">Menu <font-awesome-icon
                                :icon="['fas', 'bars']" /></button>
                    </div>
                </div>
                <div class="headerItem">
                    <div class="headLine LineA" style="display: flex;">
                        <span class="mdi mdi-phone Icons"></span>
                        <div class="outlineClass ouClassA" style="display: inline-block !important;">
                            <div>Call Us Anytime</div>
                            <div class="seOuClass">(+94) 314354400</div>
                        </div>
                    </div>

                    <div class="headLine LineB" style="display: flex;">
                        <span class="mdi mdi-timer-outline Icons"></span>
                        <div class="outlineClass ouClassB" style="display: inline-block;">
                            <div>Openning Time</div>
                            <div class="seOuClass">24 Hrs</div>
                        </div>
                    </div>

                    <div class="headLine LineC" style="display: flex;">
                        <span class="mdi mdi-email-multiple-outline Icons"></span>
                        <div class="outlineClass" style="display: inline-block;">
                            <div>Email Us</div>
                            <div class="seOuClass">info@smoothflightsupport.lk</div>
                        </div>
                    </div>

                </div>

                <div class="faIconList dropbtn">
                    <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'facebook']" /></div>
                    <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'twitter']" /></div>
                    <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'instagram']" /></div>
                    <div class="Fcn fontFA"><font-awesome-icon class="fAIcon" :icon="['fab', 'linkedin-in']" /></div>
                </div>
                <div>
                    <a href="/apermit/applypermit" class="headLine btn">

                        <button>

                            <span class="mdi">Apply Permit<font-awesome-icon style="padding-left: 5px; font-size: 13px;"
                                    :icon="['fas', 'arrow-right-long']" /></span>
                        </button>
                    </a>

                </div>

                <div v-if="isDrawerOpen" class="drawer">
                    <!-- Include the DrawerComponent here -->
                    <DrawerComponent />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DrawerComponent from "@/components/DrawerComponent.vue"; // Adjust the path as needed

export default {
    components: {
        DrawerComponent,
    },
    data() {
        return {
            isDrawerOpen: false,
        };
    },
    methods: {
        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;
        },
    },
    // Your component logic goes here
};
</script>

<style scoped>
.faIconList {
    display: flex;
    justify-content: space-between;
    padding-right: 40%;
    padding-left: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
}

.fontFA {
    padding: 10px;
    align-items: center;
    display: flex;
    background-color: #183862;
}

.fAIcon {
    font-size: 25px;
    color: white;
}

.headerItem {
    justify-content: center;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
}

.LineA,
.LineB,
.LineC {
    border-bottom: 2px solid rgba(0, 0, 0, 0.466);
    width: 100%;
    padding: 5px;
    font-size: 16px;
}

.logoClass {
    width: 150px;
    height: 100px;
    padding: 20px;
}

img {
    width: 100%;
    height: 100%;
}

.btn {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    padding-top: 1.9%;
    padding-bottom: 1.9%;
    padding-left: 4.5%;
    padding-right: 4.5% !important;
    margin-left: 60%;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;
}

.btn::after {
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

.btn:hover::after {
    transform: scale(1);
    transform-origin: top left;
}

.Button {
    width: 140px;
    height: 40px;
    background-color: #183862;
    color: white;
}

.Button:hover {
    background-color: #454546;
    color: white;
}


.Icons {
    font-size: 17px;
    color: #88c607;
    padding-right: 5px;
}

.seOuClass {
    font-weight: 700;
}
</style>
