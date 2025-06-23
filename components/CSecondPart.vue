<template>
    <div class="welcome-section">
        <div class="container">
            <div class="content-grid">
                <!-- Text Content -->
                <div class="text-content">
                    <div class="section-badge">
                        <span class="badge-icon">✈</span>
                        Welcome to Excellence
                    </div>
                    
                    <div class="heading-group">
                        <h1 class="main-title">
                            <span class="title-line">Hello There and</span>
                            <span class="title-highlight">Welcome</span>
                        </h1>
                    </div>

                    <div class="description">
                        <p class="lead-text">
                            Smooth Flight Support, a leading provider of flight support services in Sri Lanka, was established in 2019 and is ISO 9001:2015 certified.
                        </p>
                        <p class="body-text">
                            Since its inception, the company has experienced significant growth. We specialize in providing unparalleled support for flight operations, including permit facilitation, ground handling, and refueling. Our commitment to excellence and professionalism has propelled us to the forefront of the industry, making us the preferred choice for aircraft operators in search of reliable and efficient flight support.
                        </p>
                        <p class="body-text">
                            As your local handling agent, Smooth Flight Support takes care of all your flight arrangements, freeing you to concentrate more on your crew, passengers, and the flight itself.
                        </p>
                    </div>
                </div>

                <!-- Image Gallery -->
                <div class="image-gallery">
                    <div class="gallery-grid">
                        <div class="image-card main-image">
                            <img src="/HomePage/RequestQQ/3.jpg" alt="Aviation Services" class="gallery-img">
                            <div class="image-overlay">
                                <span class="overlay-text">Professional Service</span>
                            </div>
                        </div>
                        
                        <div class="image-card secondary-image">
                            <img src="/HomePage/RequestQQ/2.jpg" alt="Ground Handling" class="gallery-img">
                            <div class="image-overlay">
                                <span class="overlay-text">Ground Handling</span>
                            </div>
                        </div>
                        
                        <div class="image-card secondary-image">
                            <img src="/HomePage/RequestQQ/1.jpg" alt="Aircraft Support" class="gallery-img">
                            <div class="image-overlay">
                                <span class="overlay-text">Aircraft Support</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Floating Stats -->
                    <div class="floating-stats">
                        <div class="stat-item">
                            <div class="stat-number">7+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">Support</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">ISO</div>
                            <div class="stat-label">Certified</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Background Elements -->
        <div class="bg-elements">
            <div class="bg-shape shape-1"></div>
            <div class="bg-shape shape-2"></div>
            <div class="bg-dots"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomeSection'
}
</script>

<style scoped>
@import '../assets/fonts.css';

.welcome-section {
    position: relative;
    padding: 120px 0;
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
    gap: 80px;
    align-items: center;
}

/* Text Content Styles */
.text-content {
    animation: slideInLeft 1s ease-out;
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(136, 198, 7, 0.1);
    color: #88c607;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 2rem;
    border: 1px solid rgba(136, 198, 7, 0.2);
}

.badge-icon {
    font-size: 1rem;
}

.heading-group {
    margin-bottom: 2.5rem;
}

.main-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
}

.title-line {
    display: block;
    color: #1e293b;
}

.title-highlight {
    display: block;
    background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.description {
    margin-bottom: 3rem;
}

.lead-text {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1.125rem;
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: justify;
}

.body-text {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1.125rem;
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: justify;
}

/* Image Gallery */
.image-gallery {
    position: relative;
    animation: slideInRight 1s ease-out;
}

.gallery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.5rem;
    height: 600px;
}

.image-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.main-image {
    grid-row: 1 / -1;
}

.image-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-card:hover .gallery-img {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.image-card:hover .image-overlay {
    transform: translateY(0);
}

.overlay-text {
    color: white;
    font-weight: 600;
    font-size: 1.125rem;
}

/* Floating Stats */
.floating-stats {
    position: absolute;
    top: -40px;
    right: -40px;
    display: flex;
    gap: 1rem;
    z-index: 10;
}

.stat-item {
    background: white;
    padding: 1.5rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    min-width: 100px;
}

.stat-number {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #88c607;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 600;
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
    z-index: 0;
}

.bg-shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(136, 198, 7, 0.1) 0%, rgba(157, 212, 9, 0.05) 100%);
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: -150px;
}

.shape-2 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    right: -100px;
    background: linear-gradient(135deg, rgba(24, 56, 98, 0.1) 0%, rgba(30, 74, 115, 0.05) 100%);
}

.bg-dots {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-image: radial-gradient(circle, rgba(136, 198, 7, 0.2) 2px, transparent 2px);
    background-size: 20px 20px;
    opacity: 0.3;
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
    
    .floating-stats {
        position: static;
        justify-content: center;
        margin-top: 2rem;
    }
}

@media (max-width: 768px) {
    .welcome-section {
        padding: 80px 0;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 200px);
        height: auto;
    }
    
    .main-image {
        grid-row: auto;
    }
    
    .floating-stats {
        flex-direction: column;
        align-items: center;
    }
    
    .stat-item {
        min-width: 80px;
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 1rem;
    }
    
    .floating-stats {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
}
</style>