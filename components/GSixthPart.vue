<template>
    <div class="trusted-provider-section">
        <div class="container">
            <div class="content-grid">
                <!-- Image Section -->
                <div class="image-section">
                    <div class="main-image-container">
                        <img src="/HomePage/SmoothFS/ManWPlane.jpg" alt="Aviation Professional" class="main-image">
                        <div class="image-overlay"></div>
                    </div>
                    
                    <!-- Floating Elements -->
                    <div class="floating-elements">
                        <div class="experience-badge">
                            <div class="badge-number">7+</div>
                            <div class="badge-text">Years of Excellence</div>
                        </div>
                        
                        <div class="certification-badge">
                            <div class="badge-icon">
                                <font-awesome-icon :icon="['fas', 'certificate']" />
                            </div>
                            <div class="badge-text">ISO 9001:2015</div>
                        </div>
                    </div>
                </div>
                
                <!-- Text Content -->
                <div class="text-content">
                    <div class="content-wrapper">
                        <div class="heading-group">
                            <h2 class="section-title">
                                <span class="title-line">Smooth Flight Support is the</span>
                                <span class="title-highlight">Most Trusted Provider</span>
                                <span class="title-line">Of Flight Support Services in Sri Lanka</span>
                            </h2>
                        </div>
                        
                        <div class="description">
                            <p class="body-text">
                                Embark on an extraordinary journey with Smooth Flight Support, the premier flight support company in Sri Lanka, where our steadfast dedication to exceptional service and unwavering reliability sets us apart.
                            </p>
                            <p class="body-text">
                                Our team of seasoned aviation professionals is committed to delivering top-tier support, tailored to meet the unique needs of each journey. From meticulous flight planning to seamless ground handling, we provide comprehensive solutions for all your aviation requirements.
                            </p>
                        </div>
                        
                        <div class="cta-section">
                            <a href="/company/overview" class="cta-button">
                                <span class="button-text">READ MORE</span>
                                <font-awesome-icon class="button-icon" :icon="['fas', 'arrow-right-long']" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Background Elements -->
        <div class="bg-elements">
            <div class="bg-shape shape-1"></div>
            <div class="bg-shape shape-2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrustedProviderSection'
}
</script>

<style scoped>
@import '../assets/fonts.css';

.trusted-provider-section {
    position: relative;
    padding: 80px 0; /* Reduced padding */
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    overflow: hidden;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px; /* Reduced gap */
    align-items: center;
}

/* Image Section */
.image-section {
    position: relative;
    animation: fadeInLeft 1s ease-out;
}

.main-image-container {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    height: 500px; /* Reduced height */
}

.main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.main-image-container:hover .main-image {
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
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
}

.certification-badge {
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
    position: relative;
    z-index: 2;
    animation: fadeInRight 1s ease-out;
}

.content-wrapper {
    max-width: 600px;
}

.heading-group {
    margin-bottom: 1.5rem; /* Reduced margin */
}

.section-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: clamp(1.75rem, 3vw, 2.5rem); /* Reduced font size */
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 1.5rem; /* Reduced margin */
}

.title-line {
    display: block;
    color: #1e293b;
    margin-bottom: 0.25rem; /* Reduced margin */
}

.title-highlight {
    display: block;
    color: #88c607;
    font-size: 1.2em;
    margin-bottom: 0.25rem; /* Reduced margin */
}

.description {
    margin-bottom: 2rem; /* Reduced margin */
}

.body-text {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1rem; /* Reduced font size */
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1rem; /* Reduced margin */
    text-align: justify;
}

/* CTA Section */
.cta-section {
    margin-top: 1.5rem; /* Reduced margin */
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem; /* Reduced padding */
    background: #88c607;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-weight: 600;
    font-size: 0.9rem; /* Reduced font size */
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(136, 198, 7, 0.2);
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

.button-icon {
    transition: transform 0.3s ease;
}

.cta-button:hover .button-icon {
    transform: translateX(4px);
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
}

@media (max-width: 992px) {
    .trusted-provider-section {
        padding: 60px 0;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .text-content {
        order: 1;
    }
    
    .image-section {
        order: 2;
    }
    
    .content-wrapper {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1.5rem;
    }
    
    .main-image-container {
        height: 350px;
    }
    
    .experience-badge {
        top: -15px;
        right: -15px;
        padding: 0.75rem;
    }
    
    .certification-badge {
        bottom: 15px;
        left: -15px;
        padding: 0.75rem;
    }
    
    .badge-number {
        font-size: 1.75rem;
    }
    
    .badge-icon {
        width: 32px;
        height: 32px;
        font-size: 0.875rem;
    }
}

@media (max-width: 480px) {
    .trusted-provider-section {
        padding: 40px 0;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .main-image-container {
        height: 250px;
    }
    
    .section-title {
        font-size: 1.5rem;
    }
    
    .body-text {
        font-size: 0.9rem;
    }
    
    .cta-button {
        width: 100%;
        justify-content: center;
        padding: 0.875rem 1.5rem;
    }
}
</style>