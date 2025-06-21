<template>
  <div>

    <div style="margin: 0%;">
      <AFrontHeader />
    </div>

    <div>
      <ATopic />
    </div>

    <div>
      <BApplyPermit />
    </div>

    <div>
      <ZFooter />
    </div>

  </div>

</template>

<script>

import ATopic from '~/components/APermit/ATopic.vue'
import BApplyPermit from '~/components/APermit/BApplyPermit.vue'


export default {
  name: 'Apply-Permit',
  components: {

    ATopic,
    BApplyPermit,
  },

}
</script>