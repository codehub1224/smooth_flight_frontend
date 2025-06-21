<template>
    <footer class="site-footer">
        <!-- Main Footer -->
        <div class="footer-main">
            <div class="container">
                <div class="footer-grid">
                    <!-- Logo & Social Column -->
                    <div class="footer-column brand-column">
                        <div class="footer-logo">
                            <NuxtLink to="/" class="logo-link">
                                <img src="/Footer/SmothLogoW.png" alt="Smooth Flight Support" class="logo-image">
                            </NuxtLink>
                        </div>
                        
                        <p class="company-description">
                            Your trusted partner for comprehensive flight support services, delivering excellence in every aspect of aviation operations across Sri Lanka.
                        </p>
                        
                        <div class="social-links">
                            <a href="https://www.facebook.com/SmoothflightCmb" target="_blank" class="social-link" aria-label="Facebook">
                                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                            </a>
                            <a href="https://twitter.com/flight_smooth" target="_blank" class="social-link" aria-label="Twitter">
                                <font-awesome-icon :icon="['fab', 'x-twitter']" />
                            </a>
                            <a href="https://www.instagram.com/smoothflightsupport/" target="_blank" class="social-link" aria-label="Instagram">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                            </a>
                            <a href="https://www.linkedin.com/company/smooth-flight-support-pvt-ltd" target="_blank" class="social-link" aria-label="LinkedIn">
                                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                            </a>
                        </div>
                    </div>
                    
                    <!-- Services Column -->
                    <div class="footer-column">
                        <h3 class="column-title">Our Services</h3>
                        <ul class="footer-links">
                            <li>
                                <NuxtLink to="/services/allServices" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>All Services</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/permitsA" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Permits</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/groundHandling" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Ground Handling</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/aircraftFueling" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Aircraft Fueling</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/catering" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Catering</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/crewpassengerservice" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Crew & Passenger Service</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/hotelReservationTransportation" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>HOTAC</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Quick Links Column -->
                    <div class="footer-column">
                        <h3 class="column-title">Quick Links</h3>
                        <ul class="footer-links">
                            <li>
                                <NuxtLink to="/company/overview" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>About Us</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/company/careers" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Careers</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <a href="https://blog.smoothflightsupport.lk" target="_blank" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <NuxtLink to="/apermit/applypermit" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Apply Permit</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/eServices/getTripCostEstimate" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Trip Cost Estimate</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/privacypolicy" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Privacy Policy</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <a href="/Quality-Policy.pdf" target="_blank" class="footer-link">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="link-icon" />
                                    <span>Quality Policy</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Contact Column -->
                    <div class="footer-column contact-column">
                        <h3 class="column-title">Contact Us</h3>
                        <ul class="contact-info">
                            <li class="contact-item">
                                <div class="contact-icon">
                                    <font-awesome-icon :icon="['fas', 'building']" />
                                </div>
                                <div class="contact-text">
                                    <strong>Smooth Flight Support (Pvt) Ltd</strong><br>
                                    C.R.I.Road, Lunuwila,<br>
                                    Sri Lanka
                                </div>
                            </li>
                            <li class="contact-item">
                                <div class="contact-icon">
                                    <font-awesome-icon :icon="['fas', 'phone-alt']" />
                                </div>
                                <div class="contact-text">
                                    <div>(+94) 314354400</div>
                                    <div>(+94) 312249482</div>
                                    <div>(+94) 763061800</div>
                                </div>
                            </li>
                            <li class="contact-item">
                                <div class="contact-icon">
                                    <font-awesome-icon :icon="['fas', 'envelope']" />
                                </div>
                                <div class="contact-text">
                                    <div><strong>General:</strong> <a href="mailto:info@smoothflightsupport.lk" class="email-link">info@smoothflightsupport.lk</a></div>
                                    <div><strong>Operations:</strong> <a href="mailto:ops@smoothflightsupport.lk" class="email-link">ops@smoothflightsupport.lk</a></div>
                                    <div><strong>Accounts:</strong> <a href="mailto:accounts@smoothflightsupport.lk" class="email-link">accounts@smoothflightsupport.lk</a></div>
                                </div>
                            </li>
                        </ul>
                        
                        <div class="cta-button-container">
                            <NuxtLink to="/contactUs" class="footer-cta-button">
                                <span>Contact Us</span>
                                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="container">
                <div class="bottom-content">
                    <div class="copyright">
                        &copy; Smooth Flight Support {{ startYear }}-{{ currentYear }}
                    </div>
                    
                    <div class="bottom-links">
                        <a href="/Quality-Policy.pdf" target="_blank" class="bottom-link">Quality Policy</a>
                        <NuxtLink to="/privacypolicy" class="bottom-link">Privacy Policy</a>
                    </div>
                    
                    <div class="credits">
                        Web Design & App Development by Codehub Software
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SiteFooter',
    data() {
        const startYear = 2016;
        const currentYear = new Date().getFullYear();

        return {
            startYear,
            currentYear,
        };
    }
}
</script>

<style scoped>
@import '../assets/fonts.css';

.site-footer {
    background-color: #183862;
    color: white;
    position: relative;
    overflow: hidden;
}

.site-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/HomePage/WhyChUs/BackgroundImgB.png');
    background-position: center;
    background-size: cover;
    opacity: 0.05;
    pointer-events: none;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
}

/* Main Footer */
.footer-main {
    padding: 80px 0 60px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 60px;
}

/* Brand Column */
.brand-column {
    animation: fadeInUp 1s ease-out;
    animation-delay: 0.1s;
    animation-fill-mode: both;
}

.footer-logo {
    margin-bottom: 1.5rem;
}

.logo-link {
    display: inline-block;
    transition: transform 0.3s ease;
}

.logo-link:hover {
    transform: translateY(-5px);
}

.logo-image {
    height: 80px;
    width: auto;
    filter: brightness(0) invert(1);
}

.company-description {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 2rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.social-link:hover {
    background: #88c607;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(136, 198, 7, 0.3);
}

/* Footer Columns */
.footer-column {
    animation: fadeInUp 1s ease-out;
    animation-fill-mode: both;
}

.footer-column:nth-child(2) {
    animation-delay: 0.2s;
}

.footer-column:nth-child(3) {
    animation-delay: 0.3s;
}

.footer-column:nth-child(4) {
    animation-delay: 0.4s;
}

.column-title {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.75rem;
}

.column-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: #88c607;
    border-radius: 3px;
}

/* Footer Links */
.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 0.75rem;
}

.footer-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.footer-link:hover {
    color: #88c607;
    transform: translateX(5px);
}

.link-icon {
    font-size: 0.75rem;
    color: #88c607;
}

/* Contact Info */
.contact-info {
    list-style: none;
    padding: 0;
    margin: 0;
}

.contact-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #88c607;
    font-size: 1rem;
    flex-shrink: 0;
}

.contact-text {
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
}

.email-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
}

.email-link:hover {
    color: #88c607;
}

.cta-button-container {
    margin-top: 2rem;
}

.footer-cta-button {
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

.footer-cta-button:hover {
    background: white;
    color: #183862;
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2);
}

/* Footer Bottom */
.footer-bottom {
    background: rgba(0, 0, 0, 0.2);
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
}

.bottom-links {
    display: flex;
    gap: 2rem;
}

.bottom-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
}

.bottom-link:hover {
    color: #88c607;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 1200px) {
    .footer-grid {
        gap: 40px;
    }
}

@media (max-width: 992px) {
    .footer-main {
        padding: 60px 0 40px;
    }
    
    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px 30px;
    }
    
    .brand-column {
        grid-column: 1 / -1;
        text-align: center;
    }
    
    .company-description {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .social-links {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1.5rem;
    }
    
    .bottom-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .bottom-links {
        order: 1;
    }
    
    .copyright {
        order: 3;
    }
    
    .credits {
        order: 2;
    }
}

@media (max-width: 576px) {
    .footer-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-main {
        padding: 40px 0 30px;
    }
    
    .column-title {
        font-size: 1.25rem;
    }
    
    .logo-image {
        height: 60px;
    }
    
    .contact-item {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }
    
    .contact-icon {
        margin-bottom: 0.5rem;
    }
    
    .bottom-links {
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .footer-cta-button {
        width: 100%;
        justify-content: center;
        padding: 0.875rem 1.5rem;
    }
}
</style>