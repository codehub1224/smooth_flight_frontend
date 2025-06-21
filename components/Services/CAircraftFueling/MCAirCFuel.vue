<template>
    <div>
        <div>
            <ACTopicLine />
        </div>
        <div style="width: 100%; padding: 5%;">


            <div style="background-color: white;">
                <div class="imgClass" style="width: 100%;">
                    <img class="imgGH" src="/ServicesImg/Fueling/Fueling.jpg" alt="Image">
                </div>


                <div>
                    <ACParaLine />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import ACTopicLine from '~/components/Services/CAircraftFueling/SubAF/ACTopicLine.vue'
import ACParaLine from '~/components/Services/CAircraftFueling/SubAF/ACParaLine.vue'
// import ACImage from '~/components/Services/CAircraftFueling/SubAF/ACImage.vue'

export default {

    components: {
        ACTopicLine,
        ACParaLine,
        // ACImage,

    }

}
</script>


<style scoped>
.imgGH {
    width: 100%;
    height: 35svh;
}
</style>