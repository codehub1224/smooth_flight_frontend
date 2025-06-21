<template>
    <div class="why-choose-section">
        <div class="container">
            <div class="content-grid">
                <!-- Text Content -->
                <div class="text-content">
                    <div class="section-badge">
                        <span class="badge-icon">⭐</span>
                        Excellence & Trust
                    </div>
                    
                    <h2 class="section-title">Why Choose Us?</h2>
                    
                    <div class="intro-text">
                        <p>
                            Choose Smooth Flight Support for a journey where excellence, reliability, and seamless experiences converge. Elevate your aviation adventure with us — where every takeoff is smooth, and every landing is seamless.
                        </p>
                    </div>

                    <!-- Features Grid -->
                    <div class="features-grid">
                        <div class="feature-item" v-for="(feature, index) in features" :key="index">
                            <div class="feature-icon">
                                <font-awesome-icon :icon="['fas', 'check']" />
                            </div>
                            <div class="feature-content">
                                <h3 class="feature-title">{{ feature.title }}</h3>
                                <p class="feature-description">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="cta-section">
                        <NuxtLink to="/company/overview" class="cta-button">
                            <span>Learn More About Us</span>
                            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="image-section">
                    <div class="main-image-container">
                        <img src="/HomePage/WhyChUs/whychoose.jpg" alt="Why Choose Us" class="main-image">
                        <div class="image-overlay">
                            <div class="overlay-content">
                                <div class="certification-badge">
                                    <span class="cert-text">ISO 9001:2015</span>
                                    <span class="cert-label">Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Floating Achievement Cards -->
                    <div class="achievement-cards">
                        <div class="achievement-card">
                            <div class="achievement-icon">
                                <font-awesome-icon :icon="['fas', 'award']" />
                            </div>
                            <div class="achievement-text">
                                <div class="achievement-number">24/7</div>
                                <div class="achievement-label">Support</div>
                            </div>
                        </div>
                        
                        <div class="achievement-card">
                            <div class="achievement-icon">
                                <font-awesome-icon :icon="['fas', 'shield-alt']" />
                            </div>
                            <div class="achievement-text">
                                <div class="achievement-number">100%</div>
                                <div class="achievement-label">Reliable</div>
                            </div>
                        </div>
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
    name: 'WhyChooseSection',
    data() {
        return {
            features: [
                {
                    title: "ISO 9001:2015 Certified",
                    description: "We are committed to providing high-quality services that meet international standards and exceed expectations."
                },
                {
                    title: "High Quality, Excellence and Confidentiality",
                    description: "We use the latest technology and best practices to ensure that your flight is safe, efficient and confidential."
                },
                {
                    title: "Accountability & Reliability",
                    description: "We are responsible for our actions and deliver on our promises with complete transparency and integrity."
                },
                {
                    title: "Safety, Hospitality & Fast",
                    description: "We prioritize safety and customer service, and we are always willing to go the extra mile for our clients."
                },
                {
                    title: "Priority on Service",
                    description: "We are dedicated to meeting your needs and exceeding your expectations with personalized attention."
                },
                {
                    title: "Latest Technology",
                    description: "We utilize cutting-edge technology and modern equipment to ensure efficient and reliable operations."
                },
                {
                    title: "Friendly & Experienced Team",
                    description: "Our professional team brings years of aviation expertise combined with exceptional customer service."
                }
            ]
        }
    }
}
</script>

<style scoped>
@import '../assets/fonts.css';

.why-choose-section {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
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
    gap: 80px;
    align-items: center;
}

/* Text Content */
.text-content {
    position: relative;
    z-index: 2;
    animation: slideInLeft 1s ease-out;
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 50px;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
}

.badge-icon {
    font-size: 1rem;
}

.section-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.1;
}

.intro-text {
    margin-bottom: 3rem;
}

.intro-text p {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    text-align: justify;
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    transition: all 0.3s ease;
    padding: 1rem;
    border-radius: 16px;
}

.feature-item:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(8px);
}

.feature-icon {
    width: 40px;
    height: 40px;
    background: #88c607;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    flex-shrink: 0;
    box-shadow: 0 8px 20px rgba(136, 198, 7, 0.3);
}

.feature-content {
    flex: 1;
}

.feature-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: white;
    margin: 0 0 0.5rem;
}

.feature-description {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
    margin: 0;
    text-align: justify;
}

/* CTA Section */
.cta-section {
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
    border-radius: 50px;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(136, 198, 7, 0.3);
}

.cta-button:hover {
    background: white;
    color: #183862;
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2);
}

/* Image Section */
.image-section {
    position: relative;
    z-index: 2;
    animation: slideInRight 1s ease-out;
}

.main-image-container {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.main-image {
    width: 100%;
    height: auto;
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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    display: flex;
    align-items: flex-end;
    padding: 2rem;
}

.certification-badge {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.5rem;
    background: rgba(136, 198, 7, 0.9);
    border-radius: 16px;
    color: white;
    backdrop-filter: blur(10px);
}

.cert-text {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
}

.cert-label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Achievement Cards */
.achievement-cards {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    top: -30px;
    right: -30px;
    z-index: 3;
}

.achievement-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.achievement-icon {
    width: 40px;
    height: 40px;
    background: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #183862;
    font-size: 1.25rem;
}

.achievement-number {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 1.25rem;
    font-weight: 900;
    color: #183862;
}

.achievement-label {
    font-size: 0.75rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
    background: radial-gradient(circle, rgba(136, 198, 7, 0.2) 0%, rgba(136, 198, 7, 0) 70%);
    top: -200px;
    left: -200px;
}

.shape-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    bottom: -150px;
    right: -150px;
}

.bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
    background-position: center;
    background-size: cover;
    opacity: 0.1;
}

/* Animations */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
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
        gap: 60px;
    }
    
    .achievement-cards {
        position: static;
        margin-top: 2rem;
    }
}

@media (max-width: 992px) {
    .why-choose-section {
        padding: 80px 0;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .achievement-cards {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1.5rem;
    }
    
    .feature-item {
        padding: 0.75rem;
    }
    
    .feature-icon {
        width: 36px;
        height: 36px;
        font-size: 0.875rem;
    }
    
    .feature-title {
        font-size: 1rem;
    }
    
    .feature-description {
        font-size: 0.9rem;
    }
    
    .achievement-cards {
        flex-direction: column;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .why-choose-section {
        padding: 60px 0;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .intro-text p {
        font-size: 1rem;
    }
    
    .feature-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }
    
    .cta-button {
        width: 100%;
        justify-content: center;
        padding: 1rem;
    }
}
</style>