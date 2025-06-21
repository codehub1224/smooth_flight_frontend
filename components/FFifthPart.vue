<template>
    <div class="app-download-section">
        <div class="container">
            <div class="content-grid">
                <!-- Text Content -->
                <div class="text-content">
                    <div class="section-badge">
                        <span class="badge-icon">📱</span>
                        Mobile Experience
                    </div>
                    
                    <h2 class="section-title">
                        Download And Get More Benefits From Smooth Flight Mobile App
                    </h2>
                    
                    <div class="features-list">
                        <div class="features-column">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <font-awesome-icon :icon="['fas', 'mobile-alt']" />
                                </div>
                                <div class="feature-text">On-the-Go Accessibility</div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <font-awesome-icon :icon="['fas', 'user-shield']" />
                                </div>
                                <div class="feature-text">User Friendly Interface</div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <font-awesome-icon :icon="['fas', 'bell']" />
                                </div>
                                <div class="feature-text">Instant Notifications</div>
                            </div>
                        </div>
                        
                        <div class="features-column">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <font-awesome-icon :icon="['fas', 'plane']" />
                                </div>
                                <div class="feature-text">Comprehensive Aviation Service</div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <font-awesome-icon :icon="['fas', 'sync-alt']" />
                                </div>
                                <div class="feature-text">Dual Compatibility</div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <font-awesome-icon :icon="['fas', 'headset']" />
                                </div>
                                <div class="feature-text">24/7 Support</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="download-buttons desktop-buttons">
                        <a href="#" class="app-store-button">
                            <img src="/HomePage/DownloadGet/AppStore.png" alt="Download on App Store" class="store-icon">
                        </a>
                        
                        <a href="https://play.google.com/store/apps/details?id=com.codehub.smooth_flight_support&hl=en&gl=US" 
                           target="_blank" class="play-store-button">
                            <img src="/HomePage/DownloadGet/PlayStore.png" alt="Get it on Google Play" class="store-icon">
                        </a>
                    </div>
                </div>
                
                <!-- App Screenshots -->
                <div class="app-screenshots">
                    <div class="screenshots-container">
                        <div class="screenshot" v-for="i in 4" :key="i">
                            <img :src="`/HomePage/DownloadGet/${i}.png`" :alt="`App Screenshot ${i}`" class="screenshot-img">
                            <div class="screenshot-reflection"></div>
                        </div>
                    </div>
                    
                    <!-- Floating Elements -->
                    <div class="floating-elements">
                        <div class="floating-circle circle-1"></div>
                        <div class="floating-circle circle-2"></div>
                        <div class="floating-circle circle-3"></div>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Download Buttons -->
            <div class="download-buttons mobile-buttons">
                <a href="#" class="app-store-button">
                    <img src="/HomePage/DownloadGet/AppStore.png" alt="Download on App Store" class="store-icon">
                </a>
                
                <a href="https://play.google.com/store/apps/details?id=com.codehub.smooth_flight_support&hl=en&gl=US" 
                   target="_blank" class="play-store-button">
                    <img src="/HomePage/DownloadGet/PlayStore.png" alt="Get it on Google Play" class="store-icon">
                </a>
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
    name: 'AppDownloadSection'
}
</script>

<style scoped>
@import '../assets/fonts.css';

.app-download-section {
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

/* Text Content */
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
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 2rem;
    border: 1px solid rgba(136, 198, 7, 0.2);
}

.badge-icon {
    font-size: 1rem;
}

.section-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: #1e293b;
    margin-bottom: 3rem;
    line-height: 1.2;
}

/* Features List */
.features-list {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
}

.features-column {
    flex: 1;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.feature-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #183862 0%, #1e4a73 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    flex-shrink: 0;
    box-shadow: 0 8px 20px rgba(24, 56, 98, 0.2);
}

.feature-text {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1.125rem;
    color: #334155;
    font-weight: 600;
}

/* Download Buttons */
.download-buttons {
    display: flex;
    gap: 1.5rem;
}

.app-store-button,
.play-store-button {
    transition: all 0.3s ease;
}

.app-store-button:hover,
.play-store-button:hover {
    transform: translateY(-8px);
}

.store-icon {
    height: 60px;
    width: auto;
}

.mobile-buttons {
    display: none;
}

/* App Screenshots */
.app-screenshots {
    position: relative;
    animation: slideInRight 1s ease-out;
}

.screenshots-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 500px;
}

.screenshot {
    position: absolute;
    width: 220px;
    height: 440px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    transform-origin: center bottom;
}

.screenshot:nth-child(1) {
    transform: translateX(-240px) scale(0.85) rotate(-5deg);
    z-index: 1;
}

.screenshot:nth-child(2) {
    transform: translateX(-80px) scale(0.9) rotate(-2deg);
    z-index: 2;
}

.screenshot:nth-child(3) {
    transform: translateX(80px) scale(0.9) rotate(2deg);
    z-index: 2;
}

.screenshot:nth-child(4) {
    transform: translateX(240px) scale(0.85) rotate(5deg);
    z-index: 1;
}

.screenshot:hover {
    transform: translateY(-30px) scale(1) rotate(0);
    z-index: 10;
}

.screenshot-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.screenshot-reflection {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    pointer-events: none;
}

/* Floating Elements */
.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.floating-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(136, 198, 7, 0.1);
}

.circle-1 {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
    animation: float 8s ease-in-out infinite;
}

.circle-2 {
    width: 60px;
    height: 60px;
    bottom: 20%;
    right: 15%;
    background: rgba(24, 56, 98, 0.1);
    animation: float 6s ease-in-out infinite 1s;
}

.circle-3 {
    width: 40px;
    height: 40px;
    bottom: 40%;
    left: 20%;
    background: rgba(255, 255, 255, 0.2);
    animation: float 7s ease-in-out infinite 2s;
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
    background: linear-gradient(135deg, rgba(136, 198, 7, 0.05) 0%, rgba(157, 212, 9, 0.02) 100%);
    top: -200px;
    right: -200px;
}

.shape-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, rgba(24, 56, 98, 0.05) 0%, rgba(30, 74, 115, 0.02) 100%);
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

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

/* Responsive Design */
@media (max-width: 1200px) {
    .content-grid {
        gap: 60px;
    }
    
    .screenshot {
        width: 180px;
        height: 360px;
    }
    
    .screenshot:nth-child(1) {
        transform: translateX(-200px) scale(0.85) rotate(-5deg);
    }
    
    .screenshot:nth-child(4) {
        transform: translateX(200px) scale(0.85) rotate(5deg);
    }
}

@media (max-width: 992px) {
    .app-download-section {
        padding: 80px 0;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    
    .desktop-buttons {
        display: none;
    }
    
    .mobile-buttons {
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
    
    .screenshots-container {
        height: 400px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1.5rem;
    }
    
    .features-list {
        flex-direction: column;
        gap: 0;
    }
    
    .screenshot {
        width: 140px;
        height: 280px;
    }
    
    .screenshot:nth-child(1) {
        transform: translateX(-150px) scale(0.85) rotate(-5deg);
    }
    
    .screenshot:nth-child(2) {
        transform: translateX(-50px) scale(0.9) rotate(-2deg);
    }
    
    .screenshot:nth-child(3) {
        transform: translateX(50px) scale(0.9) rotate(2deg);
    }
    
    .screenshot:nth-child(4) {
        transform: translateX(150px) scale(0.85) rotate(5deg);
    }
}

@media (max-width: 480px) {
    .app-download-section {
        padding: 60px 0;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .section-title {
        font-size: 1.75rem;
    }
    
    .feature-item {
        margin-bottom: 1rem;
    }
    
    .feature-icon {
        width: 36px;
        height: 36px;
        font-size: 0.875rem;
    }
    
    .feature-text {
        font-size: 1rem;
    }
    
    .screenshots-container {
        height: 300px;
    }
    
    .screenshot {
        width: 100px;
        height: 200px;
        border-radius: 20px;
    }
    
    .screenshot:nth-child(1) {
        transform: translateX(-110px) scale(0.85) rotate(-5deg);
    }
    
    .screenshot:nth-child(2) {
        transform: translateX(-40px) scale(0.9) rotate(-2deg);
    }
    
    .screenshot:nth-child(3) {
        transform: translateX(40px) scale(0.9) rotate(2deg);
    }
    
    .screenshot:nth-child(4) {
        transform: translateX(110px) scale(0.85) rotate(5deg);
    }
    
    .store-icon {
        height: 50px;
    }
}
</style>