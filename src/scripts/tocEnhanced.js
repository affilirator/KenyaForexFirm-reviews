/**
 * Enhanced Table of Contents Script
 *
 * This script creates a more user-friendly table of contents with:
 * - Active section highlighting
 * - Smooth scrolling
 * - Responsive layout
 */

document.addEventListener('DOMContentLoaded', () => {
  const tocContainer = document.getElementById('table-of-contents');
  if (!tocContainer) return;

  // Get all section headings
  const headings = document.querySelectorAll('h2[id]');
  const toc = [];

  // Create TOC entries
  headings.forEach((heading) => {
    const id = heading.getAttribute('id');
    const text = heading.textContent?.trim();

    if (id && text) {
      toc.push(`
        <a href="#${id}" class="toc-item" data-target="${id}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          ${text}
        </a>
      `);
    }
  });

  // Add TOC to the container
  if (toc.length > 0) {
    tocContainer.innerHTML = toc.join('');

    // Add intersection observer to highlight active sections
    const tocLinks = document.querySelectorAll('.toc-item');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(
              `.toc-item[data-target="${id}"]`
            );

            if (entry.isIntersecting && tocLink) {
              // Remove active class from all links
              tocLinks.forEach((link) =>
                link.classList.remove('text-primary-600', 'font-medium')
              );

              // Add active class to current link
              tocLink.classList.add('text-primary-600', 'font-medium');
            }
          });
        },
        { rootMargin: '-20% 0px -80% 0px' }
      );

      // Observe all section headings
      headings.forEach((heading) => {
        observer.observe(heading);
      });
    }

    // Add smooth scrolling
    tocLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth',
          });

          // Update URL hash without scrolling
          history.pushState(null, null, `#${targetId}`);
        }
      });
    });
  } else {
    tocContainer.innerHTML =
      '<p class="text-neutral-500 text-sm italic">No sections available</p>';
  }
});
