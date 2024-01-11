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
    Base: 'VAULTY',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'VAULTY',
  },
  Meta: {
    Description: 'Launch Vaulty AGI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'Vaulty| Blockchain Asset Insurance AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@Vaulty',
  },
  URIs: {
    Home: 'https://nftgenerator.pages.dev',
    // App: 'https://nftgenerator.pages.dev/privacy',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://nftgenerator.pages.dev/privacy',
    OpenProject: 'https://nftgenerator.pages.dev/privacy',
    SupportInvite: 'https://discord.gg/97SGjeVz',
    // Twitter: 'https://nftgenerator.pages.dev',
    PrivacyPolicy: 'https://nftgenerator.pages.dev/privacy',
  },
};