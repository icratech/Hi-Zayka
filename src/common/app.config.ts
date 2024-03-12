/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Zarina-AGI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'Zarina-AGI',
  },
  Meta: {
    Description: 'Launch Zarina-AGI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'Zarina-AGI | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@pigmentoloji',
  },
  URIs: {
    Home: 'https://big-agi.com',
    // App: 'https://zarina.io.com',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/icr-A',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://discord.gg/',
    // Twitter: 'https://www.twitter.com/pigmentoloji',
    PrivacyPolicy: 'https://big-agi.com/privacy',
  },
} as const;