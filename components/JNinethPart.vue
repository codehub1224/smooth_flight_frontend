<template>
    <div class="partners-section">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header">
                <div class="section-badge">
                    <span class="badge-icon">
                        <font-awesome-icon :icon="['fas', 'handshake']" />
                    </span>
                    Trusted Partners
                </div>
                <h2 class="section-title">Our Partners & Affiliations</h2>
                <p class="section-description">
                    We're proud to collaborate with leading organizations in the aviation industry to deliver exceptional service.
                </p>
            </div>
            
            <!-- Partners Slider -->
            <div class="partners-slider">
                <div class="slider-track">
                    <div class="slider-item" v-for="(logo, index) in logos" :key="index">
                        <div class="logo-container">
                            <img :src="logo.src" :alt="logo.alt" class="partner-logo">
                        </div>
                    </div>
                    
                    <!-- Duplicated for continuous scrolling -->
                    <div class="slider-item" v-for="(logo, index) in logos" :key="`dup-${index}`">
                        <div class="logo-container">
                            <img :src="logo.src" :alt="logo.alt" class="partner-logo">
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- CTA Section -->
            <div class="cta-section">
                <div class="cta-content">
                    <h3 class="cta-title">Ready to Experience Excellence?</h3>
                    <p class="cta-description">
                        Join our growing list of satisfied clients and discover the difference of working with Sri Lanka's premier aviation services provider.
                    </p>
                    <div class="cta-buttons">
                        <NuxtLink to="/contactUs" class="cta-button primary">
                            <span>Contact Us</span>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                        </NuxtLink>
                        <NuxtLink to="/apermit/applypermit" class="cta-button secondary">
                            <span>Apply for Permit</span>
                            <font-awesome-icon :icon="['fas', 'file-alt']" />
                        </NuxtLink>
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
    name: 'PartnersSection',
    data() {
        return {
            logos: [
                { src: '/HomePage/LogoFile/Logo01.png', alt: 'Partner Logo' },
                { src: '/HomePage/LogoFile/Logo02.png', alt: 'Partner Logo' },
                { src: '/HomePage/LogoFile/LogoC.png', alt: 'Partner Logo' },
                { src: '/HomePage/LogoFile/NBAA.png', alt: 'NBAA Logo' },
                { src: '/HomePage/LogoFile/LogoB.png', alt: 'Partner Logo' },
                { src: '/HomePage/LogoFile/surabi.png', alt: 'Surabi Logo' }
            ]
        }
    }
}
</script>

<style scoped>
@import '../assets/fonts.css';

.partners-section {
    position: relative;
    padding: 100px 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    overflow: hidden;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 60px;
    animation: fadeInUp 1s ease-out;
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(24, 56, 98, 0.1);
    color: #183862;
    border-radius: 50px;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(24, 56, 98, 0.2);
}

.badge-icon {
    font-size: 0.875rem;
}

.section-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: #1e293b;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.section-description {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1.125rem;
    color: #64748b;
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto;
}

/* Partners Slider */
.partners-slider {
    position: relative;
    padding: 2rem 0;
    margin-bottom: 60px;
    overflow: hidden;
    background: white;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.slider-track {
    display: flex;
    animation: scroll 35s linear infinite;
    width: fit-content;
}

.slider-item {
    flex: 0 0 auto;
    padding: 0 3rem;
}

.logo-container {
    width: 180px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.logo-container:hover {
    transform: scale(1.1);
}

.partner-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(1) opacity(0.7);
    transition: all 0.3s ease;
}

.logo-container:hover .partner-logo {
    filter: grayscale(0) opacity(1);
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

/* CTA Section */
.cta-section {
    text-align: center;
    padding: 60px 40px;
    background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(24, 56, 98, 0.2);
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/HomePage/WhyChUs/BackgroundImgB.png') center/cover;
    opacity: 0.1;
}

.cta-content {
    position: relative;
    z-index: 2;
}

.cta-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.cta-description {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin-bottom: 2.5rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    text-decoration: none;
    border-radius: 50px;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    transition: all 0.3s ease;
}

.cta-button.primary {
    background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(136, 198, 7, 0.3);
}

.cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button.primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(136, 198, 7, 0.4);
}

.cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-4px);
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
    left: -200px;
}

.shape-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(24, 56, 98, 0.05) 0%, rgba(24, 56, 98, 0) 70%);
    bottom: -150px;
    right: -150px;
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
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 1200px) {
    .logo-container {
        width: 150px;
        height: 80px;
    }
    
    .slider-item {
        padding: 0 2rem;
    }
}

@media (max-width: 992px) {
    .partners-section {
        padding: 80px 0;
    }
    
    .cta-section {
        padding: 40px 30px;
    }
    
    .cta-title {
        font-size: 2rem;
    }
    
    .cta-description {
        font-size: 1.125rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1.5rem;
    }
    
    .logo-container {
        width: 120px;
        height: 70px;
    }
    
    .slider-item {
        padding: 0 1.5rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        gap: 1rem;
        max-width: 300px;
        margin: 0 auto;
    }
    
    .cta-button {
        width: 100%;
        justify-content: center;
        padding: 1rem 2rem;
    }
}

@media (max-width: 480px) {
    .partners-section {
        padding: 60px 0;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .section-title {
        font-size: 1.75rem;
    }
    
    .section-description {
        font-size: 1rem;
    }
    
    .logo-container {
        width: 100px;
        height: 60px;
    }
    
    .slider-item {
        padding: 0 1rem;
    }
    
    .cta-title {
        font-size: 1.5rem;
    }
    
    .cta-description {
        font-size: 1rem;
    }
}
</style>