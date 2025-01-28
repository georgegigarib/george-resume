import { IconName } from '@/constants/ToolsIconsList'

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
    hint: 'dev.templates.templates.template1.hint',
    bgColor: '#FF4500',
    description: 'dev.templates.templates.template1.description',
  },
  {
    tools: [IconName.TypeScript, IconName.NextJS, IconName.TailwindCSS, IconName.Docker, IconName.React],
    url: 'https://github.com/example/next-ssr-template',
    hint: 'dev.templates.templates.template2.hint',
    bgColor: '#FF1493',
    description: 'dev.templates.templates.template2.description',
  },
  {
    tools: [IconName.TypeScript, IconName.VueJs, IconName.TailwindCSS, IconName.Pinia, IconName.Docker, IconName.HTML],
    url: 'https://github.com/example/vue-pinia-template',
    hint: 'dev.templates.templates.template3.hint',
    bgColor: '#FFA500',
    description: 'dev.templates.templates.template3.description',
  },
  {
    tools: [IconName.JavaScript, IconName.Angular, IconName.Sass, IconName.Docker, IconName.NodeJS],
    url: 'https://github.com/example/angular-enterprise-template',
    hint: 'dev.templates.templates.template4.hint',
    bgColor: '#A26B5AFF',
    description: 'dev.templates.templates.template4.description',
  },
  {
    tools: [IconName.TypeScript, IconName.React, IconName.Mui, IconName.Graphql, IconName.Django],
    url: 'https://github.com/example/react-graphql-template',
    hint: 'dev.templates.templates.template5.hint',
    bgColor: '#877F95FF',
    description: 'dev.templates.templates.template5.description',
  },
  {
    tools: [IconName.TypeScript, IconName.Svelte, IconName.TailwindCSS, IconName.Python, IconName.Postgresql],
    url: 'https://github.com/example/svelte-minimal-template',
    hint: 'dev.templates.templates.template6.hint',
    bgColor: '#687969FF',
    description: 'dev.templates.templates.template6.description',
  },
  {
    tools: [IconName.JavaScript, IconName.React, IconName.Redux, IconName.Bootstrap, IconName.Php],
    url: 'https://github.com/example/ecommerce-template',
    hint: 'dev.templates.templates.template7.hint',
    bgColor: '#908C63FF',
    description: 'dev.templates.templates.template7.description',
  },
  {
    tools: [IconName.TypeScript, IconName.React, IconName.Graphql, IconName.MongoDb, IconName.Docker],
    url: 'https://github.com/example/data-intensive-template',
    hint: 'dev.templates.templates.template8.hint',
    bgColor: '#96659FFF',
    description: 'dev.templates.templates.template8.description',
  },
]
