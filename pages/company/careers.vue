<template>
  <div>
    <div>
      <AFrontHeader />
    </div>

    <div>
      <ABCareers />
    </div>

    <div>
      <BBCareers />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import ABCareers from '~/components/ACompany/BCareers/ABCareers.vue'
import BBCareers from '~/components/ACompany/BCareers/BBCareers.vue'

export default {
  name: 'CareersPage',
  components: {
    ABCareers,
    BBCareers,
  },
  head() {
    return {
      title: 'Careers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Join our team at Smooth Flight Support. Explore career opportunities with Sri Lanka\'s premier aviation services company and be part of our journey to excellence.'
        }
      ]
    }
  }
}
</script>