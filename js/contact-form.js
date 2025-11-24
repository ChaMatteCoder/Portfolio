// ==================== CONTACT FORM HANDLER ====================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(contactForm);
                
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                showFormMessage('Sorry, there was an error sending your message. Please try again or email me directly at chamattheus@gmail.com', 'error');
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    function showFormMessage(message, type) {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        formMessage.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
        formMessage.style.color = type === 'success' ? '#155724' : '#721c24';
        formMessage.style.border = type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
});