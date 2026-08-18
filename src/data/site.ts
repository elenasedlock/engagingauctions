export const site = {
  name: 'Engaging Auctions',
  tagline: 'Transforming Fundraising Events Into High-Energy Auction Experiences',
  email: 'elena@engagingauctions.com',
  phone: '(206) 478-0686',
  phoneHref: 'tel:+12064780686',
  locationContact: 'New York, New York',
  locationFooter: 'New York, United States',
  calendly: 'https://calendly.com/elena-engagingauctions/30min',
  raised: '$150,000',
  footerBlurb:
    'Engaging Auctions is led by experienced auction professionals specializing in live event auctions, audience engagement strategies, and high-impact fundraising experiences that help organizations achieve meaningful results.',
  copyright: 'Copyright © 2026 – Engaging Auctions – All Rights Reserved',
  // The live WordPress site renders social icons with no href at all, so there
  // are no real URLs to carry over. Fill these in and they appear automatically;
  // left empty, the icons stay hidden rather than linking nowhere.
  social: {
    facebook: '',
    instagram: '',
    x: '',
    tiktok: '',
  } as Record<string, string>,
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/services/' },
    { label: 'Testimonials', href: '/testimonials/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
