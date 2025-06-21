
  <template>
    <div>
  
      <div style="margin: 0%;">
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
    name: 'Privacy-Policy',
    components: {
   
      APrivacy,
      PrivacyPolicy,
    },
    
  }
  </script>
  