<template>
    <div>
        <div>
            <BPTopicLine />
        </div>
        <div style="width: 100%; padding: 5%;">


            <div style="background-color: white;">
                <div class="imgClass" style="width: 100%;">
                    <img class="imgGH" src="/ServicesImg/PermitsI/Permits.jpg" alt="Image">
                </div>


                <div>
                    <BPParaLine />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import BPTopicLine from '~/components/Services/BPermits/SubBP/BPTopicLine.vue'
import BPParaLine from '~/components/Services/BPermits/SubBP/BPParaLine.vue'

export default {

    components: {
        BPTopicLine,
        BPParaLine,

    }

}
</script>


<style scoped>
.imgGH {
    width: 100%;
    height: 35svh;
}
</style>