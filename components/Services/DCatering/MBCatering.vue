<template>
    <div>
        <div>
            <DCTopicLine />
        </div>
        <div style="width: 100%; padding: 5%;">


            <div style="background-color: white;">
                <div class="imgClass" style="width: 100%;">
                    <img class="imgGH" src="/ServicesImg/CateringI/Catering.jpg" alt="Image">
                </div>


                <div>
                    <DCParaLine />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import DCTopicLine from '~/components/Services/DCatering/SubDC/DCTopicLine.vue'
import DCParaLine from '~/components/Services/DCatering/SubDC/DCParaLine.vue'
// import DCImage from '~/components/Services/DCatering/SubDC/DCImage.vue'

export default {

    components: {
        DCTopicLine,
        DCParaLine,

    }

}
</script>


<style scoped>
.imgGH {
    width: 100%;
    height: 35svh;
}
</style>