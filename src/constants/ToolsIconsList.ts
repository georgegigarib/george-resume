import BunIcon from '@/assets/icons/tools/Bun.svg'

export type ToolInfo = {
  name: string
  icon: IconName
  color: string
  bgColor: string
  borderColor: string
  svg?: string
  custom?: boolean
}

export type ToolIconProps = {
  tool: IconName
  size?: '5x' | '4x' | '3x' | '2x' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}

export enum IconName {
  React = 'react',
  TailwindCSS = 'tailwind',
  JavaScript = 'js',
  TypeScript = 'ts-circle',
  VueJs = 'vuejs',
  NextJS = 'nextjs',
  NodeJS = 'nodejs',
  HTML = 'html',
  CSS = 'css',
  Express = 'express',
  Spotify = 'spotify',
  Git = 'git',
  Redis = 'redis',
  Bun = 'bun',
  Docker = 'docker',
  Pinia = 'pinia',
  Sass = 'sass',
  Bootstrap = 'bootstrap',
  Angular = 'angular',
  C = 'c',
  CSharp = 'csharp',
  Django = 'django',
  FramerMotion = 'framer-motion',
  Go = 'go',
  Graphql = 'graphql',
  java = 'java',
  Laravel = 'laravel',
  Mui = 'mui',
  MongoDb = 'mongodb2',
  Php = 'php',
  Postgresql = 'postgresql',
  Python = 'python',
  Redux = 'redux',
  Svelte = 'svelte'
}

export const toolsIconsList: ToolInfo[] = [
  {
    name: 'React',
    icon: IconName.React,
    color: '#61DAFB',
    bgColor: '#282c34',
    borderColor: '#61DAFB'
  },
  {
    name: 'Tailwind CSS',
    icon: IconName.TailwindCSS,
    color: '#38BDF8',
    bgColor: '#E5F6FC',
    borderColor: '#38BDF8'
  },
  {
    name: 'JavaScript',
    icon: IconName.JavaScript,
    color: '#F7DF1E',
    bgColor: '#323330',
    borderColor: '#F7DF1E'
  },
  {
    name: 'TypeScript',
    icon: IconName.TypeScript,
    color: '#3178C6',
    bgColor: '#F5F5F5',
    borderColor: '#3178C6'
  },
  {
    name: 'Next.js',
    icon: IconName.NextJS,
    color: '#FFFFFF',
    bgColor: '#000000',
    borderColor: '#FFFFFF'
  },
  {
    name: 'Node.js',
    icon: IconName.NodeJS,
    color: '#539E43',
    bgColor: '#EAF5EA',
    borderColor: '#539E43'
  },
  {
    name: 'HTML',
    icon: IconName.HTML,
    color: '#E44D26',
    bgColor: '#F5F5F5',
    borderColor: '#E44D26'
  },
  { name: 'CSS', icon: IconName.CSS, color: '#264DE4', bgColor: '#F5F5F5', borderColor: '#264DE4' },
  {
    name: 'Express',
    icon: IconName.Express,
    color: '#333333',
    bgColor: '#FFFFFF',
    borderColor: '#CCCCCC'
  },
  {
    name: 'Spotify',
    icon: IconName.Spotify,
    color: '#1DB954',
    bgColor: '#191414',
    borderColor: '#1DB954'
  },
  { name: 'Git', icon: IconName.Git, color: '#F05032', bgColor: '#F5F5F5', borderColor: '#F05032' },
  {
    name: 'Redis',
    icon: IconName.Redis,
    color: '#D82C20',
    bgColor: '#F5F5F5',
    borderColor: '#D82C20'
  },
  {
    name: 'Bun',
    icon: IconName.Bun,
    color: '#ffffff',
    bgColor: '#303030',
    borderColor: '#bababa',
    custom: true,
    svg: BunIcon
  },
  {
    name: 'Docker',
    icon: IconName.Docker,
    color: '#2496ED',
    bgColor: '#EAF3FB',
    borderColor: '#2496ED'
  },
  {
    name: 'Bun',
    icon: IconName.Bun,
    color: '#ffffff',
    bgColor: '#303030',
    borderColor: '#bababa',
    custom: true,
    svg: BunIcon
  },
  {
    name: 'Pinia',
    icon: IconName.Pinia,
    color: '#FFD939',
    bgColor: '#2C2C2C',
    borderColor: '#FFD939'
  },
  {
    name: 'Sass',
    icon: IconName.Sass,
    color: '#CC6699',
    bgColor: '#F5F5F5',
    borderColor: '#CC6699'
  },
  {
    name: 'Bootstrap',
    icon: IconName.Bootstrap,
    color: '#7952B3',
    bgColor: '#F5F5F5',
    borderColor: '#7952B3'
  },
  {
    name: 'Angular',
    icon: IconName.Angular,
    color: '#DD0031',
    bgColor: '#F5F5F5',
    borderColor: '#DD0031'
  },
  {
    name: 'C',
    icon: IconName.C,
    color: '#00599C',
    bgColor: '#F5F5F5',
    borderColor: '#00599C'
  },
  {
    name: 'C#',
    icon: IconName.CSharp,
    color: '#239120',
    bgColor: '#F5F5F5',
    borderColor: '#239120'
  },
  {
    name: 'Django',
    icon: IconName.Django,
    color: '#092E20',
    bgColor: '#F5F5F5',
    borderColor: '#092E20'
  },
  {
    name: 'Framer Motion',
    icon: IconName.FramerMotion,
    color: '#EC5990',
    bgColor: '#1A1A1A',
    borderColor: '#EC5990'
  },
  {
    name: 'Go',
    icon: IconName.Go,
    color: '#00ADD8',
    bgColor: '#F5F5F5',
    borderColor: '#00ADD8'
  },
  {
    name: 'GraphQL',
    icon: IconName.Graphql,
    color: '#E10098',
    bgColor: '#F5F5F5',
    borderColor: '#E10098'
  },
  {
    name: 'Java',
    icon: IconName.java,
    color: '#007396',
    bgColor: '#F5F5F5',
    borderColor: '#007396'
  },
  {
    name: 'Laravel',
    icon: IconName.Laravel,
    color: '#FF2D20',
    bgColor: '#F5F5F5',
    borderColor: '#FF2D20'
  },
  {
    name: 'Material UI',
    icon: IconName.Mui,
    color: '#0081CB',
    bgColor: '#F5F5F5',
    borderColor: '#0081CB'
  },
  {
    name: 'MongoDB',
    icon: IconName.MongoDb,
    color: '#47A248',
    bgColor: '#F5F5F5',
    borderColor: '#47A248'
  },
  {
    name: 'Vue Js',
    icon: IconName.VueJs,
    color: '#47A248',
    bgColor: '#F5F5F5',
    borderColor: '#47A248'
  },
  {
    name: 'PHP',
    icon: IconName.Php,
    color: '#777BB4',
    bgColor: '#F5F5F5',
    borderColor: '#777BB4'
  },
  {
    name: 'PostgreSQL',
    icon: IconName.Postgresql,
    color: '#336791',
    bgColor: '#F5F5F5',
    borderColor: '#336791'
  },
  {
    name: 'Python',
    icon: IconName.Python,
    color: '#3776AB',
    bgColor: '#FFE873',
    borderColor: '#3776AB'
  },
  {
    name: 'Redux',
    icon: IconName.Redux,
    color: '#764ABC',
    bgColor: '#F5F5F5',
    borderColor: '#764ABC'
  },
  {
    name: 'Svelte',
    icon: IconName.Svelte,
    color: '#FF3E00',
    bgColor: '#F5F5F5',
    borderColor: '#FF3E00'
  }
]
