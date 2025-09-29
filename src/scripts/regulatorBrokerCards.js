/**
 * Script to enhance the broker cards on regulator pages
 */
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to broker cards
  const brokerCards = document.querySelectorAll('.broker-card');

  brokerCards.forEach((card) => {
    // Add hover animation
    card.addEventListener('mouseenter', () => {
      card.classList.add('scale-102');

      // Animate the rating badge
      const ratingBadge = card.querySelector('.rating-badge');
      if (ratingBadge) {
        ratingBadge.classList.add('pulse-once');

        // Remove the class after animation completes
        setTimeout(() => {
          ratingBadge.classList.remove('pulse-once');
        }, 1000);
      }
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('scale-102');
    });
  });

  // Add lazy loading for broker logos
  const brokerLogos = document.querySelectorAll('.broker-logo');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.setAttribute('src', src);
            img.classList.add('fade-in');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    brokerLogos.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    brokerLogos.forEach((img) => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
      }
    });
  }
});
