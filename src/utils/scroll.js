const NAV_OFFSET = 88

export function scrollToSection(id, { behavior = 'smooth' } = {}) {
  if (!id || id === 'home' || id === 'top') {
    window.scrollTo({ top: 0, behavior })
    return
  }

  const element = document.getElementById(id)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior })
}
