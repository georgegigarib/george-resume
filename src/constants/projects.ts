import image1 from '@/assets/images/projects/movie-app.gif'
import image4 from '@/assets/images/projects/desktop-app-1.png'
import image6 from '@/assets/images/projects/desktop-app-2.png'
import { IconName } from '@/constants/ToolsIconsList'

export type ProjectInfoType = {
  src: string
  title: string
  description: string
  url: string
  tools: IconName[]
}

export const mobileProjects: ProjectInfoType[] = [
  {
    src: image1,
    title: 'dev.projects.projects.mobile.project1.title',
    description: 'dev.projects.projects.mobile.project1.description',
    url: 'https://movie-app.example.com',
    tools: [
      IconName.React,
      IconName.TailwindCSS,
      IconName.TypeScript,
      IconName.JavaScript,
      IconName.CSS,
      IconName.NextJS,
      IconName.NodeJS,
      IconName.TailwindCSS,
      IconName.Redis,
      IconName.Git,
    ],
  },
  {
    src: image1,
    title: 'dev.projects.projects.mobile.project2.title',
    description: 'dev.projects.projects.mobile.project2.description',
    url: 'https://project1.example.com',
    tools: [IconName.HTML, IconName.CSS, IconName.JavaScript],
  },
  {
    src: image1,
    title: 'dev.projects.projects.mobile.project3.title',
    description: 'dev.projects.projects.mobile.project3.description',
    url: 'https://project2.example.com',
    tools: [
      IconName.React,
      IconName.TailwindCSS,
      IconName.TypeScript,
      IconName.JavaScript,
      IconName.CSS,
      IconName.NextJS,
      IconName.NodeJS,
      IconName.TailwindCSS,
      IconName.Redis,
      IconName.Git,
    ],
  },
]

export const desktopProjects: ProjectInfoType[] = [
  {
    src: image6,
    title: 'dev.projects.projects.desktop.project1.title',
    description: 'dev.projects.projects.desktop.project1.description',
    url: 'https://desktop1.example.com',
    tools: [
      IconName.React,
      IconName.TailwindCSS,
      IconName.TypeScript,
      IconName.JavaScript,
      IconName.CSS,
      IconName.NextJS,
      IconName.NodeJS,
      IconName.TailwindCSS,
      IconName.Redis,
      IconName.Git,
    ],
  },
  {
    src: image4,
    title: 'dev.projects.projects.desktop.project2.title',
    description: 'dev.projects.projects.desktop.project2.description',
    url: 'https://desktop2.example.com',
    tools: [
      IconName.NextJS,
      IconName.NodeJS,
      IconName.TypeScript,
      IconName.JavaScript,
      IconName.CSS,
      IconName.NextJS,
      IconName.NodeJS,
      IconName.TailwindCSS,
      IconName.Redis,
      IconName.Git,
    ],
  },
  {
    src: image4,
    title: 'dev.projects.projects.desktop.project3.title',
    description: 'dev.projects.projects.desktop.project3.description',
    url: 'https://desktop2.example.com',
    tools: [IconName.React, IconName.TailwindCSS, IconName.TypeScript, IconName.Redis, IconName.Git],
  },
  {
    src: image6,
    title: 'dev.projects.projects.desktop.project4.title',
    description: 'dev.projects.projects.desktop.project4.description',
    url: 'https://desktop2.example.com',
    tools: [IconName.NextJS, IconName.NodeJS, IconName.TailwindCSS, IconName.Redis, IconName.Git],
  },
  {
    src: image4,
    title: 'dev.projects.projects.desktop.project5.title',
    description: 'dev.projects.projects.desktop.project5.description',
    url: 'https://desktop2.example.com',
    tools: [IconName.React, IconName.TailwindCSS, IconName.TypeScript, IconName.Redis, IconName.Git],
  },
]
