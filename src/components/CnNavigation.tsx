import React, { useState, forwardRef } from 'react';
import { Button } from './ui/button';


// --- Helper Functions & Data ---
// A helper function to combine class names


// --- Icon Components (using inline SVG for simplicity) ---
const MountainIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const PlayCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

const BookOpenIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

// Navigation data
const navLinks = [
  {
    title: 'Solutions',
    subLinks: [
      { title: 'Analytics', description: 'Real-time data insights.', href: '#' },
      { title: 'Commerce', description: 'Build your online store.', href: '#' },
      { title: 'CRM', description: 'Manage customer relationships.', href: '#' },
      { title: 'Cloud', description: 'Scalable infrastructure.', href: '#' },
    ],
    featuredLink: {
        title: 'Book a Demo',
        description: 'See our platform in action.',
        href: '#demo',
        icon: PlayCircleIcon
    }
  },
  {
    title: 'Developers',
    subLinks: [
      { title: 'API Documentation', description: 'Integrate with our services.', href: '#' },
      { title: 'SDKs', description: 'Tools for every platform.', href: '#' },
      { title: 'Community Forum', description: 'Get help and connect.', href: '#' },
      { title: 'Open Source', description: 'Our contributions.', href: '#' },
    ],
    featuredLink: {
        title: 'Read the Docs',
        description: 'Dive into our comprehensive documentation.',
        href: '#docs',
        icon: BookOpenIcon
    }
  },
  { href: '#', title: 'Pricing' },
  { href: '#', title: 'About' },
];


// --- Reusable UI Components (inspired by shadcn/ui) ---




// --- Main Application Component ---
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-[200vh]">
      {/* The Header component is what you can reuse */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">

          {/* Left Section: Logo and Site Name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <MountainIcon className="h-6 w-6" />
              <span className="font-bold text-lg">Acme Inc.</span>
            </a>
          </div>

          {/* Center Section: Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link, index) =>
                link.subLinks ? (
                  <li key={index} className="group">
                    <button className="flex items-center space-x-1 hover:text-gray-900 text-gray-600 transition-colors">
                      <span>{link.title}</span>
                      <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {/* --- Megamenu --- */}
                    <div className="absolute top-full left-0 right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white rounded-b-lg shadow-lg border-x border-b border-gray-200 flex overflow-hidden">
                            <div className="w-2/3 p-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                    {link.subLinks.map((subLink, subIndex) => (
                                        <a key={subIndex} href={subLink.href} className="block group/item -m-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                            <p className="font-semibold text-gray-900">{subLink.title}</p>
                                            <p className="text-sm text-gray-500 mt-1">{subLink.description}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {link.featuredLink && (
                                <div className="w-1/3 bg-gray-50 p-8 border-l border-gray-200">
                                    <a href={link.featuredLink.href} className="block -m-3 p-3 rounded-lg hover:bg-gray-100 transition-colors h-full">
                                        <div className="flex items-center justify-center flex-col text-center h-full">
                                            <div className="flex-shrink-0 bg-white h-12 w-12 rounded-lg flex items-center justify-center border shadow-sm">
                                                <link.featuredLink.icon className="h-6 w-6 text-indigo-600"/>
                                            </div>
                                            <div className="mt-4">
                                                <p className="font-semibold text-gray-900">{link.featuredLink.title}</p>
                                                <p className="text-sm text-gray-500 mt-1">{link.featuredLink.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                  </li>
                ) : (
                  <li key={index}>
                    <a href={link.href} className="hover:text-gray-900 text-gray-600 transition-colors">{link.title}</a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Right Section: CTA and Mobile Menu Button */}
          <div className="flex items-center justify-end space-x-2">
            <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
            <Button className="hidden sm:inline-flex">Get Started</Button>
            
            {/* Mobile Menu Trigger */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sheet (Overlay) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed left-0 top-0 h-full w-full max-w-[20rem] bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <a href="#" className="flex items-center space-x-2">
                <MountainIcon className="h-6 w-6" />
                <span className="font-bold text-lg">Acme Inc.</span>
              </a>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XIcon className="h-6 w-6" />
              </Button>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                {navLinks.map((link, index) =>
                  link.subLinks ? (
                     <li key={index}>
                       <details>
                         <summary className="font-semibold py-2 list-none flex justify-between items-center cursor-pointer">
                            {link.title}
                            <svg className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                         </summary>
                         <ul className="pl-4 pt-2 space-y-2">
                           {link.subLinks.map((subLink, subIndex) => (
                              <li key={subIndex}>
                                <a href="#" className="block text-gray-600 hover:text-gray-900">{subLink.title}</a>
                              </li>
                           ))}
                         </ul>
                       </details>
                     </li>
                  ) : (
                    <li key={index}>
                      <a href={link.href} className="block font-semibold py-2 hover:text-gray-900">{link.title}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className="absolute bottom-0 left-0 w-full p-4 border-t">
                <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}

      {/* Example Page Content */}
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold tracking-tight">Page Content</h1>
        <p className="mt-4 text-gray-600">Scroll down to see the sticky header in action.</p>
      </main>
    </div>
  );
}

