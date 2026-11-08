export const appRoutes = [
  { path: '/home', id: 'home', label: 'Home' },
  { path: '/what-we-do', id: 'what-we-do', label: 'What We Do' },
  { path: '/services', id: 'services', label: 'Services' },
  { path: '/work', id: 'work', label: 'Our Work' },
  { path: '/about', id: 'about', label: 'About' },
  { path: '/expertise', id: 'expertise', label: 'Expertise' },
  { path: '/process', id: 'process', label: 'Process' },
  { path: '/pricing', id: 'pricing', label: 'Pricing' },
  { path: '/maintenance', id: 'maintenance', label: 'Maintenance' },
  { path: '/contact', id: 'contact', label: 'Contact' },
]

export const navLinks = [
  { path: '/home', id: 'home', label: 'Home' },
  { path: '/services', id: 'services', label: 'Services' },
  { path: '/work', id: 'work', label: 'Our Work' },
  { path: '/about', id: 'about', label: 'About' },
  { path: '/contact', id: 'contact', label: 'Contact' },
]

export const footerLinks = [
  { path: '/home', id: 'home', label: 'Home' },
  { path: '/what-we-do', id: 'what-we-do', label: 'What We Do' },
  { path: '/services', id: 'services', label: 'Services' },
  { path: '/work', id: 'work', label: 'Our Work' },
  { path: '/about', id: 'about', label: 'About' },
  { path: '/pricing', id: 'pricing', label: 'Pricing' },
  { path: '/contact', id: 'contact', label: 'Contact' },
]

export function getRouteByPath(pathname) {
  if (pathname === '/' || pathname === '') {
    return appRoutes.find((route) => route.id === 'home')
  }

  return appRoutes.find((route) => route.path === pathname)
}

export function getPathBySection(sectionId) {
  const route = appRoutes.find((item) => item.id === sectionId)
  return route?.path || '/home'
}
