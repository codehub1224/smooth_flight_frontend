<template>
  <div>
    <div>
      <AFrontHeader />
    </div>
    
    <div>
      <ACoUs />
    </div>
    
    <div>
      <BCoUs />
    </div>
    
    <div>
      <CCoUs />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import ACoUs from '~/components/ContactUs/ACoUs.vue'
import BCoUs from '~/components/ContactUs/BCoUs.vue'
import CCoUs from '~/components/ContactUs/CCoUs.vue'

export default {
  name: 'ContactUsPage',
  components: {
    ACoUs,
    BCoUs,
    CCoUs,
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Smooth Flight Support for all your aviation service needs in Sri Lanka. Our 24/7 team is ready to assist with flight permits, ground handling, fueling, and more.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'contact aviation services, flight support contact, aviation support sri lanka, smooth flight support contact, aviation services contact'
        }
      ]
    }
  }
}
</script>