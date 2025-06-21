import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faPhoneAlt, 
  faPhone,
  faUpload,
  faArrowRight,
  faArrowRightLong,
  faEye,
  faPeopleGroup,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faBuilding,
  faEnvelope,
  faMobileAlt,
  faUserShield,
  faBell,
  faPlane,
  faSyncAlt,
  faHeadset,
  faCertificate,
  faPaperPlane,
  faHandshake,
  faFileAlt,
  faTimes,
  faChartLine,
  faGlobe,
  faBalanceScale,
  faMapMarkerAlt,
  faStar,
  faBriefcase,
  faBullseye,
  faAward,
  faShieldAlt,
  faHardHat,
  faLightbulb,
  faClock,
  faHeart,
  faUser,
  faUsers,
  faListAlt,
  faUtensils,
  faHotel,
  faTruck
  // faFilePlus, // Removed: does not exist
  // faGasStation // Removed: does not exist
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faXTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

// Let Nuxt handle the CSS
if (config) {
  config.autoAddCss = false
}

library.add(
  faPhoneAlt,
  faPhone,
  faUpload,
  faArrowRight,
  faArrowRightLong,
  faEye,
  faPeopleGroup,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faFacebookF,
  faTwitter,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faBuilding,
  faEnvelope,
  faMobileAlt,
  faUserShield,
  faBell,
  faPlane,
  faSyncAlt,
  faHeadset,
  faCertificate,
  faPaperPlane,
  faHandshake,
  faFileAlt,
  faTimes,
  faChartLine,
  faGlobe,
  faBalanceScale,
  faMapMarkerAlt,
  faStar,
  faBriefcase,
  faBullseye,
  faAward,
  faShieldAlt,
  faHardHat,
  faLightbulb,
  faClock,
  faHeart,
  faUser,
  faUsers,
  faListAlt,
  faUtensils,
  faHotel,
  faTruck
  // faFilePlus, // Removed
  // faGasStation // Removed
)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)