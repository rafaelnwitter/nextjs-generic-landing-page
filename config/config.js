const packageJson = require('../package.json')
const manifest = require('../public/manifest.json')

const appSlug = packageJson.name
const serverPort = process.env.PORT || 3010

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: `https://${"pwa-for-med"}.vercel.app/`,
    appName: manifest.name,
    appTagline: 'Medicina',
    appDescription: 'Um exemplo simples de um site de medicina',
    appFeatures: [
      {
        name: 'Tornar-se um socio',
        description: 'Venha fazer parte',
        imageSrc: 'https://integrae.com.br/wp-content/uploads/2021/03/doacao-medula-ossea.jpg',
      },
      {
        name: 'Beneficios',
        description: 'Veja os beneficios de se tornar um membro.',
        imageSrc: 'https://integrae.com.br/wp-content/uploads/2021/04/estilo-isometrico-de-marketing-movel_23-2148896785.jpg'
      },
      {
        name: 'Eventos',
        description: 'Veja os eventos mais proximos programados pela Staff e garanta seu ingresso.',
        imageSrc: 'https://integrae.com.br/wp-content/uploads/2021/09/2018-12-05-Atletica-Espartanoz-JUNFRI-2018-Foto-JUNFRI-e-Divulgacao-25-1.jpeg'
      }
    ],
    appProducts: [
      {
        reference: 'basic',
        name: 'Basic package',
        features: [
          'Complete source code',
          'Template ready to use'
        ],
        action: {
          label: 'Free download',
          href: 'https://github.com/tomsoderlund/nextjs-generic-landing-page',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      },
      {
        reference: 'complete',
        name: 'Complete package',
        features: [
          'Support a developer',
          'Get gratitude'
        ],
        action: {
          label: 'Donate $9',
          href: 'https://ko-fi.com/tomsoderlund',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }
    ],
    appTestimonials: [
      {
        name: 'Ida Lowry',
        description: '“I loved it!”',
        imageSrc: 'https://screens.tomorroworld.com/image?width=400&height=240&dpr=1&time=networkidle0&url=https://m.media-amazon.com/images/M/MV5BZTc0ZjU5ZWEtYzVhZC00N2QwLWE4OWQtYzExMGZiYWJiNDAwXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg'
      },
      {
        name: 'Sam Lowry',
        description: '“This was amazing!”',
        imageSrc: 'https://screens.tomorroworld.com/image?width=400&height=240&dpr=1&time=networkidle0&url=https://m.media-amazon.com/images/M/MV5BMjU5ZWFjZWMtNjRjZi00ZGFiLWI4NmUtNmRiMDU1MmEwZDMwXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg'
      }
    ],
    locale: 'en_US',
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    leadService: `https://login-as-a-service.vercel.app/api/${appSlug}/lead`
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null
    // loginService: `http://localhost:3002/api/${appSlug}`
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}
