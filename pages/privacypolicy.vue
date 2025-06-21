<template>
  <div>
    <div>
      <AFrontHeader />
    </div>
    
    <div>
      <APrivacy />
    </div>

    <div>
      <PrivacyPolicy />
    </div>

    <div>
      <ZFooter />
    </div>
  </div>
</template>

<script>
import APrivacy from '~/components/PrivacyPolicy/APrivacy.vue'
import PrivacyPolicy from '~/components/PrivacyPolicy/PrivacyPolicy.vue'

export default {
  name: 'PrivacyPolicyPage',
  components: {
    APrivacy,
    PrivacyPolicy,
  },
  head() {
    return {
      title: 'Privacy Policy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Smooth Flight Support privacy policy. Learn how we collect, use, and protect your personal information when using our aviation services in Sri Lanka.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'privacy policy, data protection, aviation services privacy, information security, user privacy'
        }
      ]
    }
  }
}
</script>