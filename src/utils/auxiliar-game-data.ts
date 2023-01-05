export type GameData = {
  name: string
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
    name: 'Diablo IVVP',
    images: {
      logo: '/games/diablo-logo.png',
      icon: '/games/diablo-icon.png',
      banner: '/games/diablo-bg.png',
      preview: '/games/diablo-animation.png',
    },
    texts: {
      title: 'Retorna à escuridão com o game Diablo IVVP',
      description: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    },
  },
  {
    name: 'Diablo IVV3',
    images: {
      logo: '/games/diablo-logo.png',
      icon: '/games/diablo-icon.png',
      banner: '/games/diablo-bg.png',
      preview: '/games/diablo-animation.png',
    },
    texts: {
      title: 'Retorna à escuridão com o game Diablo IV',
      description: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    },
  },
  {
    name: 'Diablo IVXV',
    images: {
      logo: '/games/diablo-logo.png',
      icon: '/games/diablo-icon.png',
      banner: '/games/diablo-bg.png',
      preview: '/games/diablo-animation.png',
    },
    texts: {
      title: 'Retorna à escuridão com o game Diablo IV',
      description: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    },
  },
]
