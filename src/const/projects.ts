export interface ProjectData {
  title: string;
  description: string;
  image: string[];
  technologies: {
    name: string;
    color: string;
  }[];
  links: {
    name: string;
    icon: string;
    url: string;
    color: string;
  }[];
}
const projects: ProjectData[] = [
  {
    title: "Anime Hoshi (Archivado)",
    description:
      "Recibe notificaciones de las ultimas emisiones de anime, de tus paginas como CrunchyRoll, animeFlv y más.",
    image: ["/images/projects/animehoshi.png"],
    technologies: [
      { name: "ScrapingWeb", color: "#000000" },
      { name: "Typescript", color: "#000000" },
      { name: "ReactJs", color: "#000000" },
      { name: "NodeJs", color: "#000000" },
      { name: "ExpressJs", color: "#000000" },
      { name: "MongoOse", color: "#000000" },
    ],
    links: [
      {
        name: "Github",
        icon: "IconBrandGithub",
        url: "https://github.com/FrovaHappy/anime-hoshi",
        color: "#000000",
      },
      {
        name: "Website",
        icon: "IconLink",
        url: "https://animehoshi.xyz/",
        color: "#000000",
      },
      {
        name: "Docs",
        icon: "IconFile",
        url: "https://docs.animehoshi.xyz/",
        color: "#000000",
      },
    ],
  },
  {
    title: "Beatriz ~ Dono",
    description:
      "Bot Multi-propósito, que actualmente cuenta con dos funciones principales /colors que permite cambiar el color del nombre y /welcome que personaliza las bienvenidas.",
    image: ["/images/projects/beatriz-bot.png"],
    technologies: [
      { name: "DiscordJs", color: "#000000" },
      { name: "Typescript", color: "#000000" },
      { name: "ReactJs", color: "#000000" },
      { name: "NodeJs", color: "#000000" },
      { name: "PrismaOrm", color: "#000000" },
    ],
    links: [
      {
        name: "Github | Bot",
        icon: "IconBrandGithub",
        url: "https://github.com/FrovaHappy/beatriz-bot",
        color: "#000000",
      },
      {
        name: "Github | WebPages",
        icon: "IconBrandGithub",
        url: "https://github.com/FrovaHappy/beatriz-bot-website",
        color: "#000000",
      },
      {
        name: "Website",
        icon: "IconLink",
        url: "https://beatriz-bot-website.vercel.app/",
        color: "#000000",
      },
      {
        name: "Docs",
        icon: "IconFile",
        url: "https://frovahappy.gitbook.io/beatriz-bot-docs/",
        color: "#000000",
      },
    ],
  },
  {
    title: "Primer Portafolio (Archivado)",
    description:
      "Este portafolio tenia un diseño y disposición diferente al actual, los datos se cargaban del los readmes de los proyectos",
    image: ["/images/projects/oldportafolio/0.webp", "/images/projects/oldportafolio/1.webp"],
    technologies: [
      { name: "Typescript", color: "#000000" },
      { name: "ReactJs", color: "#000000" },
    ],

    links: [
      {
        name: "Github",
        icon: "IconBrandGithub",
        url: "https://github.com/FrovaHappy/old-portafolio",
        color: "#000000",
      },
      {
        name: "Website",
        icon: "IconLink",
        url: "https://oldfrovahappy.vercel.app/",
        color: "#000000",
      },
    ],
  },
];

export default projects;
