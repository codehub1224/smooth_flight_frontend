<template>
    <div>
        <div>
            <AHTopicLine />
        </div>
        <div style="width: 100%; padding: 5%;">


            <div style="background-color: white;">
                <div class="imgClass" style="width: 100%;">
                    <img class="imgGH" src="/ServicesImg/GroundHandle/GroundHadling.jpg" alt="Image">

                </div>


                <div>
                    <AHParaLine />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import AHTopicLine from '~/components/Services/AGroundHandling/SubAG/AHTopicLine.vue'
import AHParaLine from '~/components/Services/AGroundHandling/SubAG/AHParaLine.vue'
// import AHImage from '~/components/Services/AGroundHandling/SubAG/AHImage.vue'
export default {

    components: {
        AHTopicLine,
        AHParaLine,
        // AHImage,
    }

}
</script>


<style scoped>
.imgGH {
    width: 100%;
    height: 35svh;
}
</style>