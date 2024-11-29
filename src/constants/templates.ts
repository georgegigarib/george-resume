import { IconName } from './ToolsIconsList'

export interface Template {
  tools: IconName[]
  url: string
  hint: string
  bgColor: string
  description: string
}

export const devTemplates: Template[] = [
  {
    tools: [IconName.TypeScript, IconName.React, IconName.TailwindCSS, IconName.Bun, IconName.CSS],
    url: 'https://github.com/example/fast-render-template',
    hint: 'fast rendering',
    bgColor: '#919469FF',
    description: 'A lightweight template designed for fast rendering with modern tools.'
  },
  {
    tools: [
      IconName.TypeScript,
      IconName.NextJS,
      IconName.TailwindCSS,
      IconName.Docker,
      IconName.React
    ],
    url: 'https://github.com/example/next-ssr-template',
    hint: 'server rendering',
    bgColor: '#B99E4CFF',
    description: 'A server-side rendering starter template using Next.js and Docker.'
  },
  {
    tools: [
      IconName.TypeScript,
      IconName.VueJs,
      IconName.TailwindCSS,
      IconName.Pinia,
      IconName.Docker
    ],
    url: 'https://github.com/example/vue-pinia-template',
    hint: 'vue simplicity',
    bgColor: '#6E8C9AFF',
    description: 'A clean Vue.js starter with Pinia and TailwindCSS for simplicity and scalability.'
  },
  {
    tools: [IconName.JavaScript, IconName.Angular, IconName.Sass, IconName.Docker, IconName.NodeJS],
    url: 'https://github.com/example/angular-enterprise-template',
    hint: 'enterprise apps',
    bgColor: '#A26B5AFF',
    description: 'A robust template for building enterprise-grade Angular applications.'
  },
  {
    tools: [IconName.TypeScript, IconName.React, IconName.Mui, IconName.Graphql, IconName.Django],
    url: 'https://github.com/example/react-graphql-template',
    hint: 'full stack',
    bgColor: '#877F95FF',
    description: 'Full-stack development made easy with React, MUI, and GraphQL backend.'
  },
  {
    tools: [
      IconName.TypeScript,
      IconName.Svelte,
      IconName.TailwindCSS,
      IconName.Python,
      IconName.Postgresql
    ],
    url: 'https://github.com/example/svelte-minimal-template',
    hint: 'minimalist setup',
    bgColor: '#687969FF',
    description:
      'A minimalist yet powerful template using Svelte and Python with a PostgreSQL database.'
  },
  {
    tools: [IconName.JavaScript, IconName.React, IconName.Redux, IconName.Bootstrap, IconName.Php],
    url: 'https://github.com/example/ecommerce-template',
    hint: 'ecommerce base',
    bgColor: '#908C63FF',
    description: 'A ready-to-use base for building eCommerce solutions with React and PHP.'
  },
  {
    tools: [
      IconName.TypeScript,
      IconName.React,
      IconName.Graphql,
      IconName.MongoDb,
      IconName.Docker
    ],
    url: 'https://github.com/example/data-intensive-template',
    hint: 'data intensive',
    bgColor: '#96659FFF',
    description: 'A powerful template for data-intensive applications using MongoDB and GraphQL.'
  },
  {
    tools: [
      IconName.TypeScript,
      IconName.React,
      IconName.TailwindCSS,
      IconName.FramerMotion,
      IconName.NodeJS
    ],
    url: 'https://github.com/example/firebase-react-template',
    hint: 'real-time apps',
    bgColor: '#3E848DFF',
    description: 'A template for real-time apps with Firebase backend and React frontend.'
  }
]
