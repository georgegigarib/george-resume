import image1 from '@/assets/images/projects/movie-app.gif'
import image2 from '@/assets/images/projects/mobile-2.jpeg'
import image3 from '@/assets/images/projects/mobile-1.jpg'
import image4 from '@/assets/images/projects/desktop-app-1.png'
import image5 from '@/assets/images/projects/desktop-app-2.png'
import image6 from '@/assets/images/projects/desktop-app-3.png'
import { IconName } from './ToolsIconsList'

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
    title: 'Movie App',
    description:
      'Aplicación para explorar películas y series. aqui estoy dejando una descripcion un poco mas lagra para pobar que pasa sies muy largo el texto y debo alargarlo mas y mas y mas',
    url: 'https://movie-app.example.com',
    tools: [IconName.React, IconName.TailwindCSS, IconName.JavaScript]
  },
  {
    src: image2,
    title: 'Proyecto Mobile 1',
    description:
      'Aplicación para explorar películas y series. aqui estoy dejando una descripcion un poco mas lagra para pobar que pasa sies muy largo el texto',
    url: 'https://project1.example.com',
    tools: [IconName.HTML, IconName.CSS, IconName.JavaScript]
  },
  {
    src: image3,
    title: 'Proyecto Mobile 2',
    description:
      ' Aplicación para explorar películas y series. aqui estoy dejando una descripcion un poco mas lagra para pobar que pasa sies muy largo el texto, Aplicación para explorar películas y series. aqui estoy dejando una descripcion un poco mas lagra para pobar que pasa sies muy largo el texto',
    url: 'https://project2.example.com',
    tools: [IconName.React, IconName.TypeScript, IconName.JavaScript]
  },
  {
    src: image1,
    title: 'Proyecto Mobile 2',
    description:
      'Aplicación para explorar películas y series. aqui estoy dejando una descripcion un poco mas lagra para pobar que pasa sies muy largo el texto, Aplicación para explorar películas y series. aqui estoy dejando una descripcion un poco mas lagra para pobar que pasa sies muy largo el texto',
    url: 'https://project2.example.com',
    tools: [IconName.React, IconName.TypeScript]
  },
  {
    src: image2,
    title: 'Proyecto Mobile 1',
    description: 'Proyecto con animaciones personalizadas.',
    url: 'https://project1.example.com',
    tools: [IconName.HTML, IconName.CSS]
  }
]

export const desktopProjects: ProjectInfoType[] = [
  {
    src: image6,
    title: 'Proyecto Desktop 1',
    description: 'Dashboard avanzado.',
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
      IconName.Git
    ]
  },
  {
    src: image5,
    title: 'Proyecto Desktop 2',
    description:
      'Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada.',
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
      IconName.Git
    ]
  },
  {
    src: image4,
    title: 'Proyecto Desktop 3',
    description: 'Aplicación de escritorio personalizada.',
    url: 'https://desktop2.example.com',
    tools: [IconName.React, IconName.TailwindCSS, IconName.TypeScript, IconName.Redis, IconName.Git]
  },
  {
    src: image5,
    title: 'Proyecto Desktop 2',
    description: 'Aplicación de escritorio personalizada.',
    url: 'https://desktop2.example.com',
    tools: [IconName.NextJS, IconName.NodeJS, IconName.TailwindCSS, IconName.Redis, IconName.Git]
  },
  {
    src: image6,
    title: 'Proyecto Desktop 2',
    description: 'Aplicación de escritorio personalizada.',
    url: 'https://desktop2.example.com',
    tools: [IconName.React, IconName.TailwindCSS, IconName.TypeScript, IconName.Redis, IconName.Git]
  },
  {
    src: image6,
    title: 'Proyecto Desktop 2',
    description: 'Aplicación de escritorio personalizada.',
    url: 'https://desktop2.example.com',
    tools: [IconName.React, IconName.TailwindCSS, IconName.TypeScript, IconName.Redis, IconName.Git]
  }
]
