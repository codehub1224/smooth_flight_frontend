<template>
  <div class="privacy-policy-container">
    <div class="container">
      <div class="policy-content">
        <div class="policy-section">
          <h2 class="section-title">Smooth Flight Support Privacy Policy</h2>
          <p class="section-text">
            We are a ground support management company in Sri Lanka. We are committed to protecting
            the privacy of our users. This privacy policy explains how we collect, use, and share the
            information that we collect from our users.
          </p>
        </div>

        <div class="policy-section">
          <h2 class="section-title">Information Collection and Use</h2>
          <p class="section-text">We collect the following information from our users:</p>
          <ul class="policy-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Travel information (such as flight numbers, departure and arrival dates, and passport numbers)</li>
          </ul>
          <p class="section-text">
            We use this information to provide services, such as permits, security purposes, and
            providing customer support.
          </p>
        </div>

        <div class="policy-section">
          <h2 class="section-title">Information Sharing and Disclosure</h2>
          <p class="section-text">
            We do not share user information with third parties without the user's consent. We may
            share user information with third parties in the following cases:
          </p>
          <ul class="policy-list">
            <li>To provide services to our users, such as when we book a flight on behalf of a user.</li>
            <li>To comply with legal requirements, such as when we are required to disclose information to
              law enforcement.</li>
            <li>To protect the safety of our users or the public, such as when we report fraudulent
              activity to the authorities.</li>
          </ul>
          <p class="section-text">We do not sell user information to third parties.</p>
        </div>

        <div class="policy-section">
          <h2 class="section-title">Data Retention and Security</h2>
          <p class="section-text">
            We retain user information for as long as necessary to provide services to our users and to
            comply with legal requirements. We protect user information from unauthorized access, use, or
            disclosure by using a variety of security measures, such as encryption and access control.
          </p>
        </div>

        <div class="policy-section">
          <h2 class="section-title">User Choices and Controls</h2>
          <p class="section-text">
            Users can opt out of having their information collected, used, or shared by contacting us at
            <a href="mailto:info@smoothflightsupport.lk" class="email-link">info@smoothflightsupport.lk</a>
          </p>
          <p class="section-text">
            Users can access and update their information by contacting us at
            <a href="mailto:info@smoothflightsupport.lk" class="email-link">info@smoothflightsupport.lk</a>
          </p>
          <p class="section-text">
            Users can delete their information by contacting us at
            <a href="mailto:info@smoothflightsupport.lk" class="email-link">info@smoothflightsupport.lk</a>
          </p>
        </div>

        <div class="policy-section">
          <h2 class="section-title">Changes to the Privacy Policy</h2>
          <p class="section-text">
            We may update this privacy policy from time to time. If we make any material changes to
            this privacy policy, we will notify users by posting the updated privacy policy on our website.
          </p>
        </div>

        <div class="policy-section">
          <h2 class="section-title">Contact Information</h2>
          <p class="section-text">
            If you have any questions about this privacy policy, please contact us at
            <a href="mailto:info@smoothflightsupport.lk" class="email-link">info@smoothflightsupport.lk</a>
          </p>
        </div>

        <div class="policy-footer">
          <p class="footer-text">Last updated: January 2025</p>
          <div class="footer-actions">
            <NuxtLink to="/contactUs" class="footer-button">
              <span>Contact Us</span>
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyContent'
}
</script>

<style scoped>
@import '../../assets/fonts.css';

.privacy-policy-container {
  background-color: #f8fafc;
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

.privacy-policy-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
  background-position: center;
  opacity: 0.05;
  pointer-events: none;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.policy-content {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.policy-section {
  margin-bottom: 40px;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: #88c607;
  border-radius: 2px;
}

.section-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 20px;
  text-align: justify;
}

.section-text:last-child {
  margin-bottom: 0;
}

.policy-list {
  padding-left: 25px;
  margin-bottom: 20px;
}

.policy-list li {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 10px;
  position: relative;
}

.policy-list li::before {
  content: '';
  position: absolute;
  left: -25px;
  top: 12px;
  width: 8px;
  height: 8px;
  background: #88c607;
  border-radius: 50%;
}

.email-link {
  color: #88c607;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: #183862;
  text-decoration: underline;
}

.policy-footer {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.875rem;
  color: #94a3b8;
  margin: 0;
}

.footer-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: #88c607;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(136, 198, 7, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.footer-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #183862;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.footer-button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Responsive Design */
@media (max-width: 768px) {
  .privacy-policy-container {
    padding: 40px 0;
  }
  
  .policy-content {
    padding: 30px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .section-text,
  .policy-list li {
    font-size: 1rem;
  }
  
  .policy-footer {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .footer-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .privacy-policy-container {
    padding: 30px 0;
  }
  
  .policy-content {
    padding: 25px;
    border-radius: 12px;
  }
  
  .section-title {
    font-size: 1.35rem;
  }
  
  .section-text,
  .policy-list li {
    font-size: 0.95rem;
  }
  
  .policy-section {
    margin-bottom: 30px;
  }
  
  .policy-footer {
    margin-top: 40px;
    padding-top: 20px;
  }
}
</style>