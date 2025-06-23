<template>
  <div class="company-overview">
    <!-- About Us Section -->
    <section class="about-section">
      <div class="container">
        <div class="section-grid">
          <div class="text-content">
            <div class="section-badge">
              <span class="badge-icon">✈</span>
              About Our Company
            </div>
            
            <h2 class="section-title">Our Story</h2>
            
            <div class="section-text">
              <p>
                Founded in 2019, Smooth Flight Support has rapidly established itself as Sri Lanka's premier aviation services provider. Our ISO 9001:2015 certification reflects our commitment to excellence and international standards.
              </p>
              <p>
                As your trusted local handling agent, we meticulously manage all aspects of your flight arrangements, allowing you to focus on your crew, passengers, and ensuring a seamless flight experience. Our core mission is delivering exceptional service quality while prioritizing the wellbeing of our clients.
              </p>
              <p>
                Our 24/7 team is dedicated to fulfilling your flight requirements with efficiency and expertise. From permit facilitation to ground handling and refueling, we cover all facets of flight support to ensure your operations remain hassle-free.
              </p>
            </div>
            
            <div class="cta-container">
              <a href="/services/allServices" class="cta-button">
                <span>Explore Our Services</span>
                <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
              </a>
            </div>
          </div>
          
          <div class="image-content">
            <div class="image-container">
              <img src="/HomePage/RequestQQ/3.jpg" alt="About Smooth Flight Support" class="about-image">
              <div class="image-overlay"></div>
            </div>
            
            <div class="floating-badge">
              <div class="badge-content">
                <div class="badge-icon">
                  <font-awesome-icon :icon="['fas', 'certificate']" />
                </div>
                <div class="badge-text">ISO 9001:2015 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Director Message Section -->
    <section class="director-section">
      <div class="container">
        <div class="message-card">
          <div class="message-grid">
            <div class="director-image">
              <img src="/CompanyI/Overview/CEO.jpeg" alt="Director" class="director-photo">
              <div class="image-overlay"></div>
            </div>
            
            <div class="message-content">
              <h2 class="message-title">Director's Message</h2>
              
              <div class="message-text">
                <p>
                  Welcome to Smooth Flight Support, where excellence meets efficiency in aviation services. It's my privilege to lead a team dedicated to providing unparalleled support for your aviation needs.
                </p>
                <p>
                  At Smooth Flight Support, we understand that time is precious in aviation, and our mission is to ensure every second counts. Our comprehensive services range from passenger handling to aircraft maintenance, all delivered with precision and care.
                </p>
                <p>
                  The aviation industry demands precision, safety, and reliability—values we uphold in everything we do. Our team of professionals is equipped with the latest technology to support your operations, whether you're managing commercial flights, private jets, or cargo aircraft.
                </p>
                <p class="signature">
                  Safe travels,<br>
                  <span class="director-name">Director</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Vision & Mission Section -->
    <section class="vision-mission-section">
      <div class="container">
        <div class="vm-grid">
          <div class="image-content">
            <div class="image-container">
              <img src="/HomePage/SmoothFS/ManWPlane.jpg" alt="Vision and Mission" class="vm-image">
              <div class="image-overlay"></div>
            </div>
          </div>
          
          <div class="text-content">
            <div class="vm-cards">
              <div class="vm-card vision-card">
                <div class="card-header">
                  <div class="card-icon">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                  </div>
                  <h3 class="card-title">Our Vision</h3>
                </div>
                <p class="card-text">
                  To be the leader in the ground flight support sector while providing our clients exceptional service in every aspect comply with international standards with the cutting-edge technology in Sri Lanka.
                </p>
              </div>
              
              <div class="vm-card mission-card">
                <div class="card-header">
                  <div class="card-icon">
                    <font-awesome-icon :icon="['fas', 'bullseye']" />
                  </div>
                  <h3 class="card-title">Our Mission</h3>
                </div>
                <p class="card-text">
                  To provide our clients the best solutions in the ground handling services with reliable, safe, fast and effective operation ensuring the best quality service.
                </p>
              </div>
            </div>
            
            <div class="cta-container">
              <a href="/contactUs" class="cta-button">
                <span>Contact Us Today</span>
                <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Core Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-icon">
              <font-awesome-icon :icon="['fas', 'star']" />
            </span>
            Our Principles
          </div>
          <h2 class="section-title">Core Values</h2>
          <p class="section-description">
            Our core values guide everything we do and define who we are as an organization.
          </p>
        </div>
        
        <div class="values-grid">
          <div class="value-item" v-for="(value, index) in coreValues" :key="index">
            <div class="value-icon">
              <font-awesome-icon :icon="value.icon" />
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyOverview',
  data() {
    return {
      coreValues: [
        {
          title: "Excellence",
          description: "We strive for excellence in every aspect of our service, consistently exceeding client expectations.",
          icon: ['fas', 'award']
        },
        {
          title: "Integrity",
          description: "We conduct our business with the highest ethical standards, honesty, and transparency.",
          icon: ['fas', 'shield-alt']
        },
        {
          title: "Safety",
          description: "Safety is our top priority in all operations, ensuring the wellbeing of passengers, crew, and aircraft.",
          icon: ['fas', 'hard-hat']
        },
        {
          title: "Innovation",
          description: "We continuously seek innovative solutions to enhance our services and improve efficiency.",
          icon: ['fas', 'lightbulb']
        },
        {
          title: "Reliability",
          description: "We deliver consistent, dependable service that our clients can count on every time.",
          icon: ['fas', 'clock']
        },
        {
          title: "Customer Focus",
          description: "We place our customers at the center of everything we do, tailoring our services to meet their unique needs.",
          icon: ['fas', 'heart']
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../../../assets/fonts.css';

.company-overview {
  background: #f8fafc;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Common Section Styles */
section {
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(136, 198, 7, 0.1);
  color: #88c607;
  border-radius: 50px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(136, 198, 7, 0.2);
}

.badge-icon {
  font-size: 1rem;
}

.section-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #183862;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-text p, 
.message-text p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.section-text p:last-child,
.message-text p:last-child {
  margin-bottom: 0;
}

.image-container {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.about-image,
.vm-image,
.director-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.image-container:hover .about-image,
.image-container:hover .vm-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(24, 56, 98, 0.4), transparent);
}

/* About Section Styles */
.about-section {
  background: white;
}

.floating-badge {
  position: absolute;
  bottom: 30px;
  left: -20px;
  background: #88c607;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(136, 198, 7, 0.3);
  z-index: 10;
}

.badge-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-text {
  font-weight: 600;
  font-size: 1rem;
}

.cta-container {
  margin-top: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #88c607;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(136, 198, 7, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.cta-button::after {
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

.cta-button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Director Message Section Styles */
.director-section {
  background: #f1f5f9;
}

.message-card {
  background: #0c1e35;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.message-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0;
}

.director-image {
  height: 100%;
  position: relative;
}

.director-photo {
  height: 100%;
}

.message-content {
  padding: 3rem;
}

.message-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: white;
  margin-bottom: 2rem;
  position: relative;
}

.message-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #88c607;
  border-radius: 2px;
}

.message-text p {
  color: rgba(255, 255, 255, 0.8);
}

.signature {
  font-style: italic;
  margin-top: 2rem;
}

.director-name {
  font-weight: 700;
  color: white;
}

/* Vision & Mission Section Styles */
.vision-mission-section {
  background: white;
}

.vm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.vm-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.vm-card {
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.vm-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.vision-card {
  background: #88c607;
  color: white;
}

.mission-card {
  background: #183862;
  color: white;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.vision-card .card-icon {
  background: rgba(255, 255, 255, 0.2);
}

.mission-card .card-icon {
  background: rgba(255, 255, 255, 0.2);
}

.card-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.card-text {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
}

/* Core Values Section Styles */
.values-section {
  background: #f1f5f9;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.value-item {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.value-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  border-color: rgba(136, 198, 7, 0.3);
}

.value-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: white;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.value-item:hover .value-icon {
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  transform: rotateY(180deg);
}

.value-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 1rem;
}

.value-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .section-grid,
  .vm-grid,
  .message-grid {
    gap: 40px;
  }
  
  .message-content {
    padding: 2rem;
  }
}

@media (max-width: 992px) {
  section {
    padding: 60px 0;
  }
  
  .section-grid,
  .vm-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .message-grid {
    grid-template-columns: 1fr;
  }
  
  .director-image {
    height: 300px;
  }
  
  .values-grid,
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-text p, 
  .message-text p {
    font-size: 1rem;
  }
  
  .message-title {
    font-size: 1.75rem;
  }
  
  .vm-cards {
    gap: 1.5rem;
  }
  
  .vm-card {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .card-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  section {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .message-content {
    padding: 1.5rem;
  }
  
  .message-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
  
  .value-item,
  .team-member {
    padding: 1.5rem;
  }
}
</style>