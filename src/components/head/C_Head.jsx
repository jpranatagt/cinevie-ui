import React from 'react'
import { Helmet } from 'react-helmet-async'

import T_RA_NormalFonts from '@statics/fonts/T_RA_NormalFonts.woff2'

export const C_Head = (props) => {
  const {
    title = 'Discover your movies information | CineVie',
    description = 'A comprehensive movie information website',
    canonical = '/',
  } = props

  const DOMAIN = 'https://cinevie.jpranata.tech'
  const usedCanonical = `${DOMAIN}${canonical}`

  const EMAIL = 'jepri@jpranata.tech'

  return (
    <Helmet
      title={`${title} | CineVie`}
      meta={[
        // General
        {
          name: 'subject',
          content:
            'Self Development, Computer Science, Programming, Technology',
        },
        {
          name: 'description',
          content: `${description}`,
        },
        {
          name: 'theme-color',
          content: '#161616',
        },
        {
          name: 'application-name',
          content: 'Jepri Pranata',
        },
        {
          name: 'msapplication-config',
          content: '/browserconfig.xml',
        },
        {
          name: 'msapplication-TileColor',
          content: '#f2f2f2',
        },
        {
          name: 'msapplication-TileImage',
          content: '/ms-icon-144x144.png',
        },
        {
          name: 'msapplication-square70x70logo',
          content: '/ms-icon-70x70.png',
        },
        {
          name: 'msapplication-square150x150logo',
          content: '/ms-icon-150x150.png',
        },
        {
          name: 'msapplication-square310x310logo',
          content: '/ms-icon-310x310.png',
        },
        // Social Media
        // General & FB
        {
          property: 'og:url',
          content: `${usedCanonical}`,
        },
        {
          property: 'og:type',
          content: `website`,
        },
        {
          property: 'og:title',
          content: `${title}`,
        },
        /* {
          property: 'og:image',
          content: ogImage,
        }, */
        {
          property: 'og:image:alt',
          content: title,
        },
        {
          property: 'og:description',
          content: `${description}`,
        },
        {
          property: 'og:site_name',
          content: title,
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          property: 'article:author',
          content: 'Jepri Pranata',
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: title,
        },
        {
          name: 'twitter:site',
          content: '@jpranatagt',
        },
        {
          name: 'twitter:creator',
          content: '@jpranatagt',
        },
        {
          name: 'twitter:url',
          content: `${usedCanonical}`,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: `${description}`,
        },
        /* {
          name: 'twitter:image',
          content: ogImage,
        }, */
        {
          name: 'twitter:image:alt',
          content: title,
        },
        // Android add to home screen
        {
          name: 'mobile-web-app-capable',
          content: 'yes',
        },
        // Microsoft IE
        {
          'http-equiv': 'x-ua-compatible',
          content: 'ie=edge',
        },
        // Fix twitter card react-helmet-data
        {
          'http-equiv': 'Content-Type',
          content: 'text/html',
        },
      ]}
      link={[
        {
          rel: 'preconnect',
          href: usedCanonical,
        },
        // Preload important files
        {
          rel: 'preload',
          as: 'font',
          href: T_RA_NormalFonts,
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        /*{
          rel: 'prefetch',
          as: 'font',
          href: T_CES_NormalFonts,
          type: 'font/woff2',
          crossorigin: 'anonymous',
        }, */
        // Linked
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/apple-icon-57x57.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/apple-icon-60x60.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/apple-icon-72x72.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/apple-icon-76x76.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/apple-icon-114x114.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/apple-icon-120x120.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/apple-icon-144x144.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/apple-icon-152x152.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-icon-180x180.png',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#4DBA87',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon-96x96.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '36x36',
          href: '/android-icon-36x36.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '48x48',
          href: '/android-icon-48x48.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '72x72',
          href: '/android-icon-72x72.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/android-icon-96x96.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '144x144',
          href: '/android-icon-144x144.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-icon-192x192.png',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'canonical',
          href: `${usedCanonical}`,
        },
        {
          rel: 'author',
          href: `${DOMAIN}/about`,
        },
        {
          rel: 'me',
          href: `mailto:${EMAIL}`,
        },
        {
          rel: 'index',
          href: DOMAIN,
        },
      ]}
    />
  )
}
