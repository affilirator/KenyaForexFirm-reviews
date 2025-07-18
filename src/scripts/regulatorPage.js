/**
 * Client-side script for regulator pages
 */

document.addEventListener('DOMContentLoaded', () => {
  // Handle table of contents generation
  generateTableOfContents();
  
  // Handle FAQ accordion functionality
  initializeFaqAccordion();
  
  // Handle smooth scrolling for anchor links
  initializeSmoothScrolling();
});

/**
 * Generate table of contents from section headings
 */
function generateTableOfContents() {
  const tocContainer = document.getElementById('table-of-contents');
  if (!tocContainer) return;
  
  const headings = document.querySelectorAll('h2[id], h3[id]');
  const toc = [];
  
  headings.forEach((heading) => {
    const id = heading.getAttribute('id');
    const text = heading.textContent;
    const level = heading.tagName === 'H2' ? 'toc-h2' : 'toc-h3';
    
    if (id && text) {
      toc.push(`
        <a href="#${id}" class="${level} block hover:text-primary-600 transition-colors ${
          level === 'toc-h3' ? 'pl-4 text-sm' : 'font-medium'
        }">
          ${text}
        </a>
      `);
    }
  });
  
  if (toc.length > 0) {
    tocContainer.innerHTML = toc.join('');
  } else {
    tocContainer.innerHTML = '<p class="text-neutral-500">No sections available</p>';
  }
}

/**
 * Initialize FAQ accordion functionality
 */
function initializeFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const answerId = question.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);
      const icon = question.querySelector('svg');
      
      // Toggle current FAQ
      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Update URL without scrolling
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
}