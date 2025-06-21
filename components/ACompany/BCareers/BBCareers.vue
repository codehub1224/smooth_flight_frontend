<template>
  <div class="careers-page">
    <!-- Main Content Section -->
    <section class="careers-section">
      <div class="container">
        <div class="content-grid">
          <!-- Image Section -->
          <div class="image-section">
            <div class="main-image-container">
              <img class="banner-image" src="/CompanyI/Careers/Carrer.jpg" alt="Join Our Team">
              <div class="image-overlay"></div>
              
              <!-- Floating Elements -->
              <div class="floating-elements">
                <div class="experience-badge">
                  <div class="badge-number">7+</div>
                  <div class="badge-text">Years of Excellence</div>
                </div>
                
                <div class="values-badge">
                  <div class="badge-icon">
                    <font-awesome-icon :icon="['fas', 'star']" />
                  </div>
                  <div class="badge-text">ISO 9001:2015 Certified</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Text Content -->
          <div class="text-content">
            <div class="section-badge">
              <span class="badge-icon">
                <font-awesome-icon :icon="['fas', 'briefcase']" />
              </span>
              Career Opportunities
            </div>
            
            <h2 class="section-title">Join Our Team</h2>
            
            <div class="section-text">
              <p>
                At Smooth Flight Support, excellence is our journey, guided by core values of quality, integrity, professionalism, confidentiality, and compliance. These aren't just ideals but the essence of our team.
              </p>
              <p>
                If you're a driven individual seeking a rewarding career, consider joining us. We offer a chance to be part of a global team united by shared values and goals.
              </p>
              <p>
                If you see these qualities in yourself, supported by your professional background, we invite you to apply. Join us in a place where excellence flourishes and your efforts are recognized and appreciated.
              </p>
            </div>
            
            <!-- Benefits Section -->
            <div class="benefits-section">
              <h3 class="benefits-title">Why Work With Us</h3>
              
              <div class="benefits-grid">
                <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
                  <div class="benefit-icon">
                    <font-awesome-icon :icon="benefit.icon" />
                  </div>
                  <div class="benefit-content">
                    <h4 class="benefit-title">{{ benefit.title }}</h4>
                    <p class="benefit-description">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Application Section -->
    <section class="application-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-icon">
              <font-awesome-icon :icon="['fas', 'paper-plane']" />
            </span>
            Apply Now
          </div>
          <h2 class="section-title">Submit Your Application</h2>
          <p class="section-description">
            Please upload your CV and cover letter to apply for available positions at Smooth Flight Support.
          </p>
        </div>
        
        <div class="application-form-container">
          <div class="application-form">
            <div class="form-group">
              <label for="fileInput" class="file-label">
                <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" class="upload-icon" />
                <span class="label-text">Upload Your CV & Cover Letter</span>
                <span class="file-hint">PDF, DOC, or DOCX format (Max 5MB)</span>
              </label>
              <input type="file" ref="fileInput" class="file-input" @change="handleFileUpload" />
            </div>
            
            <div class="file-list" v-if="files.length > 0">
              <div v-for="(file, index) in files" :key="index" class="file-item">
                <div class="file-info">
                  <font-awesome-icon :icon="['fas', 'file-alt']" class="file-icon" />
                  <span class="file-name">{{ file.name }}</span>
                </div>
                <button @click="removeFile(index)" class="remove-button">
                  <font-awesome-icon :icon="['fas', 'times']" />
                </button>
              </div>
            </div>
            
            <button @click="uploadPdf" class="submit-button" :disabled="files.length === 0">
              <span>Apply Now</span>
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- Background Elements -->
      <div class="bg-elements">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-pattern"></div>
      </div>
    </section>
    
    <!-- Open Positions Section -->
    <section class="positions-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-icon">
              <font-awesome-icon :icon="['fas', 'list-alt']" />
            </span>
            Opportunities
          </div>
          <h2 class="section-title">Current Openings</h2>
          <p class="section-description">
            Explore our current job openings and find the perfect role for your skills and experience.
          </p>
        </div>
        
        <div class="positions-grid">
          <div class="position-card" v-for="(position, index) in openPositions" :key="index">
            <div class="position-header">
              <h3 class="position-title">{{ position.title }}</h3>
              <div class="position-badge" :class="position.type === 'Full-time' ? 'full-time' : 'part-time'">
                {{ position.type }}
              </div>
            </div>
            
            <div class="position-details">
              <div class="detail-item">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="detail-icon" />
                <span>{{ position.location }}</span>
              </div>
              <div class="detail-item">
                <font-awesome-icon :icon="['fas', 'briefcase']" class="detail-icon" />
                <span>{{ position.department }}</span>
              </div>
            </div>
            
            <p class="position-description">{{ position.description }}</p>
            
            <div class="position-requirements">
              <h4 class="requirements-title">Requirements:</h4>
              <ul class="requirements-list">
                <li v-for="(requirement, i) in position.requirements" :key="i">{{ requirement }}</li>
              </ul>
            </div>
            
            <button class="apply-button" @click="scrollToApplication">
              <span>Apply for this Position</span>
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      benefits: [
        {
          title: "Professional Growth",
          description: "Continuous learning and development opportunities to advance your career",
          icon: ['fas', 'chart-line']
        },
        {
          title: "Global Exposure",
          description: "Work with international clients and gain valuable industry experience",
          icon: ['fas', 'globe']
        },
        {
          title: "Collaborative Environment",
          description: "Join a supportive team that values innovation and teamwork",
          icon: ['fas', 'users']
        },
        {
          title: "Work-Life Balance",
          description: "Flexible schedules and policies that respect your personal time",
          icon: ['fas', 'balance-scale']
        }
      ],
      openPositions: [
        {
          title: "Ground Operations Specialist",
          type: "Full-time",
          location: "Colombo, Sri Lanka",
          department: "Operations",
          description: "We're looking for an experienced Ground Operations Specialist to join our team and ensure smooth aircraft handling operations.",
          requirements: [
            "3+ years of experience in aviation ground operations",
            "Knowledge of airport procedures and regulations",
            "Excellent communication and problem-solving skills",
            "Ability to work in shifts including nights and weekends"
          ]
        },
        {
          title: "Flight Permits Coordinator",
          type: "Full-time",
          location: "Colombo, Sri Lanka",
          department: "Regulatory Affairs",
          description: "Join our team as a Flight Permits Coordinator to facilitate timely permit approvals for our clients' flight operations.",
          requirements: [
            "Experience in aviation regulatory affairs",
            "Strong attention to detail and organizational skills",
            "Excellent communication abilities in English",
            "Knowledge of international aviation regulations"
          ]
        },
        {
          title: "Customer Service Representative",
          type: "Part-time",
          location: "Remote",
          department: "Customer Relations",
          description: "We're seeking a dedicated Customer Service Representative to provide exceptional support to our aviation clients.",
          requirements: [
            "Previous customer service experience",
            "Excellent communication and interpersonal skills",
            "Problem-solving abilities and attention to detail",
            "Availability for flexible hours"
          ]
        }
      ]
    };
  },
  methods: {
    handleFileUpload(event) {
      const fileList = event.target.files;
      this.files = Array.from(fileList);
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    async uploadPdf() {
      if (this.files.length === 0) {
        alert('Please select a file to upload.');
        return;
      }

      const formData = new FormData();
      this.files.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });

      try {
        const response = await this.$axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Server Response:', response.data);
        alert('Thank you! Your application has been successfully submitted. We will contact you soon.');
        this.files = [];
      } catch (error) {
        console.error('Error uploading files:', error);
        alert('Failed to upload files. Please try again later.');
      }
    },
    scrollToApplication() {
      const applicationSection = document.querySelector('.application-section');
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
@import '../../../assets/fonts.css';

.careers-page {
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

.section-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

/* Careers Section Styles */
.careers-section {
  background: white;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.image-section {
  position: relative;
}

.main-image-container {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  height: 500px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.main-image-container:hover .banner-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(24, 56, 98, 0.6), transparent);
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  z-index: 2;
}

.experience-badge {
  position: absolute;
  top: -20px;
  right: -20px;
  background: #88c607;
  color: white;
  padding: 1.25rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(136, 198, 7, 0.3);
  text-align: center;
}

.badge-number {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 600;
}

.values-badge {
  position: absolute;
  bottom: 30px;
  left: -20px;
  background: white;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.badge-icon {
  width: 36px;
  height: 36px;
  background: #f1f5f9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #183862;
  font-size: 1.125rem;
}

/* Text Content */
.text-content {
  animation: fadeInRight 1s ease-out;
}

.section-text p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;
}

/* Benefits Section */
.benefits-section {
  margin-top: 3rem;
}

.benefits-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 1.5rem;
  position: relative;
}

.benefits-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #88c607;
  border-radius: 2px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: #f8fafc;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-color: rgba(136, 198, 7, 0.3);
}

.benefit-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.benefit-content {
  flex: 1;
}

.benefit-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #183862;
  margin: 0 0 0.5rem;
}

.benefit-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

/* Application Section Styles */
.application-section {
  background: #f1f5f9;
  position: relative;
}

.application-form-container {
  max-width: 800px;
  margin: 0 auto;
}

.application-form {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.form-group {
  margin-bottom: 2rem;
}

.file-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: #f8fafc;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-label:hover {
  border-color: #88c607;
  background: rgba(136, 198, 7, 0.05);
}

.upload-icon {
  font-size: 3rem;
  color: #88c607;
  margin-bottom: 1rem;
}

.label-text {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #183862;
  margin-bottom: 0.5rem;
}

.file-hint {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
}

.file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.file-list {
  margin-bottom: 2rem;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.file-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.file-icon {
  color: #183862;
  font-size: 1.25rem;
}

.file-name {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #334155;
}

.remove-button {
  width: 32px;
  height: 32px;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-button:hover {
  background: #ef4444;
  color: white;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(136, 198, 7, 0.2);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(136, 198, 7, 0.3);
}

.submit-button:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
}

/* Background Elements */
.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
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

/* Open Positions Section */
.positions-section {
  background: white;
}

.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.position-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.position-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  border-color: rgba(136, 198, 7, 0.3);
}

.position-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.position-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #183862;
  margin: 0;
}

.position-badge {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
}

.full-time {
  background: rgba(136, 198, 7, 0.1);
  color: #88c607;
}

.part-time {
  background: rgba(24, 56, 98, 0.1);
  color: #183862;
}

.position-details {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.9375rem;
}

.detail-icon {
  color: #88c607;
}

.position-description {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.position-requirements {
  margin-bottom: 2rem;
}

.requirements-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #183862;
  margin: 0 0 1rem;
}

.requirements-list {
  padding-left: 1.5rem;
  margin: 0;
}

.requirements-list li {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.apply-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: #183862;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.apply-button:hover {
  background: #88c607;
  transform: translateY(-5px);
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
  .content-grid {
    gap: 40px;
  }
  
  .main-image-container {
    height: 450px;
  }
  
  .benefits-grid {
    gap: 1rem;
  }
  
  .positions-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 992px) {
  section {
    padding: 60px 0;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .text-content {
    order: 1;
  }
  
  .image-section {
    order: 2;
  }
  
  .application-form {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .main-image-container {
    height: 350px;
  }
  
  .experience-badge {
    top: -15px;
    right: -15px;
    padding: 1rem;
  }
  
  .values-badge {
    bottom: 15px;
    left: -15px;
    padding: 0.75rem;
  }
  
  .badge-number {
    font-size: 1.75rem;
  }
  
  .file-label {
    padding: 2rem;
  }
  
  .upload-icon {
    font-size: 2.5rem;
  }
  
  .label-text {
    font-size: 1.125rem;
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
  
  .section-text p {
    font-size: 1rem;
  }
  
  .benefit-item {
    padding: 1rem;
  }
  
  .benefit-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .benefit-title {
    font-size: 1rem;
  }
  
  .benefit-description {
    font-size: 0.875rem;
  }
  
  .main-image-container {
    height: 250px;
  }
  
  .application-form {
    padding: 1.5rem;
  }
  
  .file-label {
    padding: 1.5rem;
  }
  
  .upload-icon {
    font-size: 2rem;
  }
  
  .label-text {
    font-size: 1rem;
  }
  
  .position-card {
    padding: 1.5rem;
  }
  
  .position-title {
    font-size: 1.25rem;
  }
  
  .position-details {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>