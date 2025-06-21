<template>
    <div>
        <div class="mapLocation">
            <iframe class="Iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15828.562943643603!2d79.8701047!3d7.3380878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a9464e6bb4e921a!2sSmooth%20Flight%20Support%20(Pvt)Ltd!5e0!3m2!1sen!2slk!4v1581834786788!5m2!1sen!2slk" width="1300" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
                
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.mapLocation{
    margin-top: 0%;
    width: 100%;
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 1.5%;
    padding-right: 1.5%;
    display: flex;
}

.Iframe{
    width: 100%;
    height: 80dvh;
}

@media only screen and (max-width: 500px) {

    .Iframe{
    width: 100%;
    height: 35dvh;
}

}

</style>