<template>
  <div>
    <div>
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
  name: 'ApplyPermitPage',
  components: {
    ATopic,
    BApplyPermit,
  },
  head() {
    return {
      title: 'Apply for Flight Permits',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Apply for flight permits and clearances through Smooth Flight Support. Our streamlined application process ensures fast approval for landing and overflight permits in Sri Lanka.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'flight permit application, aviation clearances, landing permits sri lanka, overflight clearances, permit application form, flight authorization'
        }
      ]
    }
  }
}
</script>