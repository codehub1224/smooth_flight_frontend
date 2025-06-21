import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faPhoneAlt, 
  faCloudUploadAlt,
  faPhone,
  faUpload,
  faArrowRight,
  faArrowRightLong,
  faFilePlus,
  faEye,
  faEyeLowVision,
  faPeopleGroup,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faXTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faPhoneAlt,
  faCloudUploadAlt,
  faPhone,
  faUpload,
  faArrowRight,
  faArrowRightLong,
  faFilePlus,
  faEye,
  faEyeLowVision,
  faPeopleGroup,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faFacebookF,
  faTwitter,
  faXTwitter,
  faInstagram,
  faLinkedinIn
)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)