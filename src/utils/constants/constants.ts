export const PATHS = {
  home: '/',
  about: '/about',
  serviceproviders: '/serviceproviders',
  exporterbase: '/exporterbase',
  usefulmaterials: '/usefulmaterials',
  tradeinformation: '/tradeinformation',
  exportdevelopment: '/exportdevelopment',
  exportpromotion: '/exportpromotion',
}

export const navItem = [
  {
    link: 'navbar.about',
    to: PATHS.about,
  },
  {
    link: 'navbar.serviceproviders',
    to: PATHS.serviceproviders,
    subItems: [
      { link: 'navbar.tradeinformation', to: PATHS.tradeinformation },
      { link: 'navbar.exportdevelopment', to: PATHS.exportdevelopment },
      { link: 'navbar.exportpromotion', to: PATHS.exportpromotion },
    ],
  },
  {
    link: 'navbar.exporterbase',
    to: PATHS.exporterbase,
  },
  {
    link: 'navbar.usefulmaterials',
    to: PATHS.usefulmaterials,
  },
]

export const navItemContact = {
  contacts: 'navbar.contacts',
}

export const aboutText = {
  title: 'about.title',
  desc: 'about.description',
}

export const exporterBaseText = {
  title: 'exporterbase.title',
}

export const usefulmaterials = {
  title: 'usefulmaterials.title',
}

export const tradeinformation = {
  title: 'tradeinformation.title',
}

export const exportdevelopment = {
  title: 'exportdevelopment.title',
}

export const exportpromotion = {
  title: 'exportpromotion.title',
}
