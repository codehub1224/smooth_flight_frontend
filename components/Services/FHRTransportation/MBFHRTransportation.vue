<template>
    <div>
        <div>
            <FTTopicLine />
        </div>
        <div style="width: 100%; padding: 5%;">


            <div style="background-color: white;">
                <div class="imgClass" style="width: 100%;">
                    <img class="imgGH" src="/ServicesImg/HotelRes/HotelReservation.jpg" alt="Image">
                </div>


                <div>
                    <FTParaLine />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import FTTopicLine from '~/components/Services/FHRTransportation/SubFT/FTTopicLine.vue'
import FTParaLine from '~/components/Services/FHRTransportation/SubFT/FTParaLine.vue'
// import FTImage from '~/components/Services/FHRTransportation/SubFT/FTImage.vue'

export default {

    components: {
        FTTopicLine,
        FTParaLine,

    }

}
</script>


<style scoped>
.imgGH {
    width: 100%;
    height: 35svh;
}
</style>