export type GameData = {
  name: string
  released: boolean
  images: {
    logo: string
    icon: string
    banner: string
    preview: string
  }
  texts: {
    title: string
    description: string
  }
}

export const GAME_DATA: GameData[] = [
  {
    name: 'Diablo IV',
    released: true,
    images: {
      logo: '/games/diablo-logo.png',
      icon: '/games/diablo-icon.png',
      banner: '/games/diablo-bg.png',
      preview: '/games/diablo-animation.gif',
    },
    texts: {
      title: 'Retorna à escuridão com o game Diablo IV',
      description: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    },
  },
  {
    name: 'Hearthstone',
    released: false,
    images: {
      logo: '/games/hearthstone-logo.png',
      icon: '/games/hearthstone-icon.png',
      banner: '/games/hearthstone-bg.png',
      preview: '/games/hearthstone-animation.gif',
    },
    texts: {
      title: 'Novo pacote de expansão de Hearthstone',
      description: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    },
  },
  {
    name: 'WOW',
    released: false,
    images: {
      logo: '/games/wow-logo.png',
      icon: '/games/wow-icon.png',
      banner: '/games/wow-bg.png',
      preview: '/games/wow-animation.gif',
    },
    texts: {
      title: 'Desbrave as Terras Sombrias em Shadowlands!',
      description: 'O que jaz além do mundo que você conhece?',
    },
  },
  {
    name: 'Diablo IVV3',
    released: false,
    images: {
      logo: '/games/diablo-logo.png',
      icon: '/games/diablo2-icon.png',
      banner: '/games/diablo-bg.png',
      preview: '/games/diablo-animation.png',
    },
    texts: {
      title: 'Retorna à escuridão com o game Diablo IV',
      description: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    },
  },
  {
    name: 'StarCraft',
    released: false,
    images: {
      logo: '/games/diablo-logo.png',
      icon: '/games/starcraft-icon.png',
      banner: '/games/diablo-bg.png',
      preview: '/games/diablo-animation.png',
    },
    texts: {
      title: 'Retorna à escuridão com o game Diablo IV',
      description: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    },
  },
]
