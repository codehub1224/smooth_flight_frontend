<template>
    <div class="quick-quote-section">
        <div class="container">
            <div class="content-grid">
                <!-- Form Section -->
                <div class="form-section">
                    <div class="section-badge">
                        <span class="badge-icon">
                            <font-awesome-icon :icon="['fas', 'paper-plane']" />
                        </span>
                        Get in Touch
                    </div>
                    
                    <h2 class="section-title">Request a Quick Quote</h2>
                    
                    <p class="section-description">
                        Submit your Quick Quote request, and our team will contact you shortly with a customized solution for your aviation needs.
                    </p>
                    
                    <form @submit.prevent="submitForm" class="quote-form">
                        <div class="form-grid">
                            <div class="form-column">
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        v-model="formData.name" 
                                        class="form-input" 
                                        placeholder="Name" 
                                        required
                                    />
                                </div>
                                
                                <div class="form-group">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        v-model="formData.email" 
                                        class="form-input" 
                                        placeholder="Email" 
                                        required
                                    />
                                </div>
                                
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        id="service" 
                                        v-model="formData.service" 
                                        class="form-input" 
                                        placeholder="Service" 
                                        required
                                    />
                                </div>
                                
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        v-model="formData.subject" 
                                        class="form-input" 
                                        placeholder="Subject" 
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div class="form-column">
                                <div class="form-group message-group">
                                    <textarea 
                                        id="message" 
                                        v-model="formData.message" 
                                        class="form-textarea" 
                                        placeholder="Message" 
                                        rows="5"
                                    ></textarea>
                                </div>
                                
                                <button type="submit" class="submit-button">
                                    <span>Submit Request</span>
                                    <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
                <!-- Image Section -->
                <div class="image-section">
                    <div class="image-container">
                        <img src="/HomePage/RequestQQ/QuikQuote.jpg" alt="Quick Quote" class="quote-image">
                        <div class="image-overlay"></div>
                    </div>
                    
                    <!-- Experience Badge -->
                    <div class="experience-badge">
                        <div class="badge-content">
                            <div class="badge-number">7</div>
                            <div class="badge-text">
                                <div class="badge-label">Years</div>
                                <div class="badge-sublabel">Experience in the Industry</div>
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
    name: 'QuickQuoteSection',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                service: '',
                subject: '',
                message: '',
            }
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await this.$axios.post('/api/send', this.formData);
                console.log(response.data);
                alert('Thank you! Your message has been successfully submitted.');
                this.resetForm();
            } catch (error) {
                console.error('Failed to submit form', error);
                alert('Failed to submit form');
            }
        },
        resetForm() {
            this.formData = {
                name: '',
                email: '',
                service: '',
                subject: '',
                message: '',
            };
        }
    }
}
</script>

<style scoped>
@import '../assets/fonts.css';

.quick-quote-section {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    overflow: hidden;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.content-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 60px;
    align-items: center;
}

/* Form Section */
.form-section {
    animation: fadeInLeft 1s ease-out;
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
    margin-bottom: 2.5rem;
    max-width: 600px;
}

/* Form Styles */
.quote-form {
    background: white;
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.8);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-size: 1rem;
    color: #334155;
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
    resize: none;
    height: 100%;
    min-height: 150px;
}

.message-group {
    height: calc(100% - 70px);
}

.submit-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #88c607 0%, #9dd409 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-family: 'SourceSansPro-Regular', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(136, 198, 7, 0.3);
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.submit-button::after {
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

.submit-button:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

/* Image Section */
.image-section {
    position: relative;
    animation: fadeInRight 1s ease-out;
}

.image-container {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    height: 500px;
}

.quote-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.image-container:hover .quote-image {
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

/* Experience Badge */
.experience-badge {
    position: absolute;
    top: -30px;
    right: -30px;
    background: #88c607;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(136, 198, 7, 0.3);
    z-index: 10;
}

.badge-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;
}

.badge-number {
    font-family: 'Barlow-ExtraBold', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
}

.badge-label {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
}

.badge-sublabel {
    font-size: 0.875rem;
    opacity: 0.9;
    max-width: 120px;
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
    
    .experience-badge {
        padding: 1.5rem;
        top: -20px;
        right: -20px;
    }
    
    .badge-number {
        font-size: 2.5rem;
    }
}

@media (max-width: 992px) {
    .quick-quote-section {
        padding: 80px 0;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    
    .form-grid {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    .message-group {
        height: auto;
    }
    
    .form-textarea {
        min-height: 120px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1.5rem;
    }
    
    .quote-form {
        padding: 1.5rem;
    }
    
    .image-container {
        height: 350px;
    }
    
    .experience-badge {
        position: relative;
        top: auto;
        right: auto;
        margin-top: -40px;
        margin-right: 20px;
        margin-left: auto;
        width: fit-content;
        padding: 1rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .quick-quote-section {
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
    
    .image-container {
        height: 250px;
    }
    
    .badge-content {
        gap: 0.5rem;
    }
    
    .badge-number {
        font-size: 2rem;
    }
    
    .badge-label {
        font-size: 1rem;
    }
    
    .badge-sublabel {
        font-size: 0.75rem;
        max-width: 100px;
    }
}
</style>