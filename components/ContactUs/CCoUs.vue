<template>
  <div class="contact-section">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Information -->
        <div class="contact-info">
          <div class="info-header">
            <div class="info-badge">
              <font-awesome-icon :icon="['fas', 'headset']" class="badge-icon" />
              <span>Get in Touch</span>
            </div>
            <h2 class="info-title">Contact Information</h2>
            <p class="info-description">
              Our team is available 24/7 to assist you with all your aviation support needs. Reach out to us through any of the following channels.
            </p>
          </div>
          
          <div class="info-cards">
            <div class="info-card">
              <div class="card-icon">
                <font-awesome-icon :icon="['fas', 'building']" />
              </div>
              <div class="card-content">
                <h3 class="card-title">Company Address</h3>
                <p class="card-text">
                  Smooth Flight Support (Pvt) Ltd<br>
                  C.R.I.Road, Lunuwila,<br>
                  Sri Lanka
                </p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="card-icon">
                <font-awesome-icon :icon="['fas', 'phone-alt']" />
              </div>
              <div class="card-content">
                <h3 class="card-title">Phone Numbers</h3>
                <p class="card-text">
                  <a href="tel:+94314354400">(+94) 314354400</a><br>
                  <a href="tel:+94312249482">(+94) 312249482</a><br>
                  <a href="tel:+94763061800">(+94) 763061800</a>
                </p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="card-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div class="card-content">
                <h3 class="card-title">Email Addresses</h3>
                <p class="card-text">
                  <span class="email-label">General:</span>
                  <a href="mailto:info@smoothflightsupport.lk">info@smoothflightsupport.lk</a><br>
                  <span class="email-label">Operations:</span>
                  <a href="mailto:ops@smoothflightsupport.lk">ops@smoothflightsupport.lk</a><br>
                  <span class="email-label">Accounts:</span>
                  <a href="mailto:accounts@smoothflightsupport.lk">accounts@smoothflightsupport.lk</a>
                </p>
              </div>
            </div>
          </div>
          
          <div class="social-links">
            <h3 class="social-title">Connect With Us</h3>
            <div class="social-icons">
              <a href="https://www.facebook.com/SmoothflightCmb" target="_blank" class="social-icon" aria-label="Facebook">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
              <a href="https://twitter.com/flight_smooth" target="_blank" class="social-icon" aria-label="Twitter">
                <font-awesome-icon :icon="['fab', 'x-twitter']" />
              </a>
              <a href="https://www.instagram.com/smoothflightsupport/" target="_blank" class="social-icon" aria-label="Instagram">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="https://www.linkedin.com/company/smooth-flight-support-pvt-ltd" target="_blank" class="social-icon" aria-label="LinkedIn">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="contact-form-container">
          <div class="form-header">
            <h2 class="form-title">Send Us a Message</h2>
            <p class="form-description">
              Smooth Flight Support will relieve you, as a Local Handling Agent, of all your flight arrangements, giving you more time to concentrate on your crew, your passengers, and your flight.
            </p>
          </div>
          
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="formData.firstName" 
                  class="form-input" 
                  placeholder="Enter your first name" 
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="formData.lastName" 
                  class="form-input" 
                  placeholder="Enter your last name" 
                  required
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  class="form-input" 
                  placeholder="Enter your email address" 
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="phoneNumber">Phone Number</label>
                <input 
                  type="tel" 
                  id="phoneNumber" 
                  v-model="formData.phoneNumber" 
                  class="form-input" 
                  placeholder="Enter your phone number" 
                  required
                />
              </div>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                class="form-input" 
                placeholder="Enter message subject" 
                required
              />
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                class="form-textarea" 
                placeholder="Enter your message" 
                rows="6" 
                required
              ></textarea>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
                <font-awesome-icon :icon="['fas', 'paper-plane']" v-if="!isSubmitting" />
              </button>
            </div>
          </form>
          
          <div v-if="showSuccessMessage" class="success-message">
            <font-awesome-icon :icon="['fas', 'check-circle']" class="success-icon" />
            <p>Thank you! Your message has been successfully submitted. We will contact you soon.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Background Elements -->
    <div class="bg-elements">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-pattern"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      },
      isSubmitting: false,
      showSuccessMessage: false
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      try {
        const response = await this.$axios.post('/api/submit-form', this.formData);
        console.log('Form submitted successfully:', response.data);
        
        // Reset form and show success message
        this.resetForm();
        this.showSuccessMessage = true;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      } catch (error) {
        console.error('Failed to submit form:', error);
        alert('There was an error submitting your message. Please try again later.');
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      };
    }
  }
};
</script>

<style scoped>
@import '../../assets/fonts.css';

.contact-section {
  padding: 80px 0;
  background: white;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
}

/* Contact Information */
.contact-info {
  animation: fadeInLeft 1s ease-out;
}

.info-header {
  margin-bottom: 40px;
}

.info-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(136, 198, 7, 0.1);
  color: #88c607;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.badge-icon {
  font-size: 0.875rem;
}

.info-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 16px;
}

.info-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  max-width: 500px;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  border-color: rgba(136, 198, 7, 0.3);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.card-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 12px;
}

.card-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
}

.card-text a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-text a:hover {
  color: #88c607;
}

.email-label {
  font-weight: 600;
  color: #334155;
  margin-right: 5px;
}

.social-links {
  margin-top: 40px;
}

.social-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  gap: 16px;
}

.social-icon {
  width: 48px;
  height: 48px;
  background: #f8fafc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #183862;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.social-icon:hover {
  background: #88c607;
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(136, 198, 7, 0.2);
  border-color: transparent;
}

/* Contact Form */
.contact-form-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: fadeInRight 1s ease-out;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.form-header {
  padding: 30px;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  color: white;
}

.form-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.form-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.contact-form {
  padding: 30px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group:last-child {
  margin-bottom: 0;
}

label {
  display: block;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  color: #334155;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #334155;
  background: #f8fafc;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #88c607;
  box-shadow: 0 0 0 3px rgba(136, 198, 7, 0.1);
  background: white;
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.form-actions {
  margin-top: 30px;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 30px;
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(136, 198, 7, 0.2);
}

.submit-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(24, 56, 98, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(136, 198, 7, 0.1);
  border: 1px solid rgba(136, 198, 7, 0.3);
  border-radius: 8px;
  margin-top: 20px;
}

.success-icon {
  font-size: 1.5rem;
  color: #88c607;
}

.success-message p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #334155;
  margin: 0;
}

/* Background Elements */
.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(136, 198, 7, 0.05) 0%, rgba(136, 198, 7, 0) 70%);
  top: -200px;
  right: -200px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(24, 56, 98, 0.05) 0%, rgba(24, 56, 98, 0) 70%);
  bottom: -150px;
  left: -150px;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle, rgba(136, 198, 7, 0.05) 2px, transparent 2px);
  background-size: 30px 30px;
  opacity: 0.5;
}

/* Animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .contact-grid {
    gap: 40px;
  }
}

@media (max-width: 992px) {
  .contact-section {
    padding: 60px 0;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .info-title {
    font-size: 2rem;
  }
  
  .info-description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 0;
  }
  
  .info-cards {
    gap: 16px;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .card-title {
    font-size: 1.125rem;
  }
}

@media (max-width: 576px) {
  .contact-section {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .info-title {
    font-size: 1.75rem;
  }
  
  .info-description {
    font-size: 0.9375rem;
  }
  
  .form-header {
    padding: 20px;
  }
  
  .form-title {
    font-size: 1.5rem;
  }
  
  .contact-form {
    padding: 20px;
  }
  
  .submit-button {
    width: 100%;
    justify-content: center;
  }
}
</style>