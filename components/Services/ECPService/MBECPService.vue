<template>
    <div>
        <div>
            <ESTopicLine />
        </div>
        <div style="width: 100%; padding: 5%;">


            <div style="background-color: white;">
                <div class="imgClass" style="width: 100%;">
                    <img class="imgGH" src="/ServicesImg/CrewPassenger/CrewAndPaxServices.jpg" alt="Image">
                </div>


                <div>
                    <ESParaLine />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import ESTopicLine from '~/components/Services/ECPService/SubES/ESTopicLine.vue'
import ESParaLine from '~/components/Services/ECPService/SubES/ESParaLine.vue'
// import ESImage from '~/components/Services/ECPService/SubES/ESImage.vue'

export default {

    components: {
        ESTopicLine,
        ESParaLine,


    }

}
</script>


<style scoped>
.imgGH {
    width: 100%;
    height: 35svh;
}
</style>