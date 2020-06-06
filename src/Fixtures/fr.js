import {
  DrillTypes,
  Intensities,
  Levels,
  FrisbeeGoals,
  FitnessGoals,
  SeasonTimings,
  EquipmentLabels,
  IllustrationType,
} from './config';

import animationSquare from './AnimationSquare';
import animationGoToTen from './AnimationGoToTen';

const basicThrowsDrill = {
  id: 1001,
  type: DrillTypes.FRISBEE,
  author: 'Rowan McDonnell',
  title: 'Lancers de base',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: 'Exercices de lancer simples pour apprendre à lancer le frisbee',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque pour 2 joueurs',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Revers',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '415565763',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: 'Follow him',
    },
    {
      id: 2,
      title: 'Coup droit',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '415569048',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: 'Follow him',
    },
    {
      id: 3,
      title: 'La Machine à lancer',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: 'En binôme, les joueurs lancent des revers et coup droits pendant 5 minutes.',
    },
    {
      id: 4,
      title: 'Montante - descendante',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'Les joueurs se font face en binôme, sur deux lignes pour se faire des passes. Le coach décide quel lancer ils font. Si le disque tombe, le binôme correspondant se déplace tout à droite de la ligne. A la fin du temps, la paire la plus à gauche gagne !',
    },
  ],
};

const breakDrill = {
  id: 1023,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: 'Cuts vers le côté fermé',
  image: 'https://zupimages.net/up/20/19/83fx.jpg',
  description: "Pour apprendre à jouer dans le côté fermé, et empêcher l'adversaire de le faire !",
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '6 disques - 6 plots',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.BREAK, FrisbeeGoals.MARK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      instruction:
        "Deux lignes de joueurs se font face, à environ 20 mètres de distance. Une force est décidée pour l'exercice. Le premier joueur d'une ligne est le lanceur, il est défendu par une marque qui applique la force. Le premier joueur de l'autre ligne faire un cut vers le lanceur dans le côté ouvert, puis quand le lanceur faire une feinte, il faire un contre-cut horizontal vers le côté fermé. Le lanceur doit alors casser sa marque pour réussir sa passe dans le côté fermé. Le lanceur fait ensuite le cut suivant vers l'autre ligne. La marque devient le prochain lanceur et le joueur suivant devient la marque. Les joueurs en attente doivent avoir quelques disques.",
    },
    {
      id: 2,
      title: 'La Grande Muraille de Chine',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      instruction:
        "Si l'on veut faire travailler la marque, on peut insister sur le fait de ne jamais se prendre 2 fois de suite le même break. Il s'agit d'observer quelle est la passe préférentielle de l'attaquant et de tout faire pour la bloquer. On peut compter les points en valorisant les marques qui ont provoqué une passe ratée ou hors-timing",
    },
  ],
};

const kyeDrill = {
  id: 1010,
  type: DrillTypes.FRISBEE,
  author: 'Kye',
  title: '3 vs 2',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: "Situation de match. L'équipe de 2 reste en défense s'ils arrivent à provoquer un turnover.",
  minimalPlayersNumber: 5,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 2 plots',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "La défense applique une force middle. Les attaquants ont seulement le droit de faire 2 cuts pour avoir le disque. Ils peuvent recevoir une passe de continuité en profondeur ou revenir vers le lanceur. L'objectif de l'exercice est d'apprendre à placer très vite sa marque et d'utiliser son corps et sa position pour contrôler les cuts des attaquants.",
    },
  ],
};

const trainDrill = {
  id: 1002,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le train',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'Idéal pour travailler la continuité sur un stack vertical',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Le train classique',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un stack vertcal de 5 attaquants, un lanceur et un handler de soutien. Choisir une force. Le dernier attaquant du stack déclenche un appel en longue tout en regardant le lanceur. Quand le lanceur fait une feinte, l'attaquant fait un contre-cut dans l'espace ouvert et reçoit le disque. L'attaquant suivant doit commencer son cut en longue pour être à pleine vitesse quand le précédent attrape le disque. Le reste du stack se replace à hauteur pour assurer la continuité, le lanceur devient handler de soutien et le soutien devient premier du stack. Répéter sur la longueur du terrain.",
    },
    {
      id: 2,
      title: 'Les aventuriers du rail',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Deux équipes effectuent le même exercice. Elles commencent au même niveau et font la course sur la longueur du terrain. Vous pouvez décider d'un nombre de passes à réaliser ou d'une distance à parcourir La première équipe qui y arrive gagne !",
    },
  ],
};

const giveAndGoDrill = {
  id: 1013,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Give and Go',
  image: 'https://zupimages.net/up/20/19/s9fe.jpg',
  description: 'Suivez votre disque après la passe aussi vite que possible',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 12 plots',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: "Les joueurs doivent réaliser l'exercice aussi vite que possible. Attention à éviter les travels",
    },
    {
      id: 2,
      title: 'Ça compte !',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: 'Une course entre 2 équipes. La première à 25 passes gagne !',
    },
  ],
};

const menageATroisDrill = {
  id: 1003,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Ménage à trois',
  image: 'https://zupimages.net/up/20/19/ai3z.jpg',
  description: "Le lanceur essaie de faire sa passe au receveur en s'aidant de n'importe quelle feinte",
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.DEFENSE, FrisbeeGoals.BREAK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Marque à plat',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le défenseur place une marque à plat (marque straight). Il fait 3 passages en défense avant d'être remplacé.",
    },
    {
      id: 2,
      title: 'Rédemption',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Même placement que pour un ménage à trois classique, mais avec des joueurs en attente derrière le lanceur et le receveur. L'ordre est recevoir-lancer-défendre, puis le joueur se place à la fin de la file. Le lanceur doit réussir sa passe pour que le receveur attrape le frisbee en gardant 1 pied au sol. S'il n'y arrive pas, il doit ensuite provoquer une erreur lorsqu'il est en défense, sous peine d'être éliminé ! Le jeu continue jusqu'à ce qu'il n'y ait plus que 2 joueurs en jeu.",
    },
  ],
};

const dwarfDuelDrill = {
  id: 1012,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le duel des nains',
  image: 'https://zupimages.net/up/20/19/3m3k.jpg',
  description: 'Interdiction de sauter, tout est dans le positionnement !',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 2 plots',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le coach ou un joueur expérimenté lance des longues.\nQuand l'attaquant commence à courir, le défenseur peur se déplacer. Aucun des deux joueurs n'a le droit de sauter pour attraper le frisbee.",
    },
  ],
};

const triangleOfDeathdrill = {
  id: 1019,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le Triangle de la mort',
  image: 'https://zupimages.net/up/20/19/kmlc.jpg',
  description: 'Lancer 10 longues à la suite aussi loin et aussi vite que possible',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '10 disque - 3 plots',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Installer un petit triangle de 3 plots à environ 3 mètres de distance, pointe vers le terrain. On lanceur commence à une extrémité. Un joueur se place à quelques mètres en retrait avec une dizaine de disques. Les autres joueurs forment un stack vertical.\n\nLe lanceur court vers la point du triangle puis vers l'autre extrémité, reçoit une petite passe flottante du joueur en retrait et lance une longue sur le premier cutter. Il fait ensuite immédiatement la même chose de l'autre côté. A répéter une dizaine de fois d'affilée, ou jusqu'à ce que tous les attaquants aient reçu un disque.",
    },
  ],
};

const chevronDrill = {
  id: 1022,
  type: DrillTypes.FRISBEE,
  author: 'Author',
  title: 'Passes en chevrons',
  image: 'https://zupimages.net/up/20/19/1y4x.jpg',
  description: 'Faire des cuts dans le bon timing, attraper puis lancer immédiatement',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 2 plots',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.CATCH, FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const trainOfFakeDrill = {
  id: 1020,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le Train des feintes',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'Idéal pour travailler la continuité sur un stack vertical',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Le train classique',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un stack vertical de 5 attaquants, un lanceur et un handler de soutien. Choisir une force. Le dernier attaquant du stack déclenche un appel en longue tout en regardant le lanceur. Quand le lanceur fait une feinte, l'attaquant fait un contre-cut dans l'espace ouvert et reçoit le disque. L'attaquant suivant doit commencer son cut en longue pour être à pleine vitesse quand le précédent attrape le disque. Le reste du stack se replace à hauteur pour assurer la continuité, le lanceur devient handler de soutien et le soutien devient premier du stack. Répéter sur la longueur du terrain.",
    },
    {
      id: 2,
      title: 'Avec 1 feinte',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un train classique. Cette fois, le lanceur peut décider de faire une deuxième feinte quand le cutter fait son deuxième appel. Si c'est le cas, le cutter libère l'espace et retourne dans le stack en 2e position. Le lanceur regarde alors le handler de soutien qui fait un appel vers l'avant et reçoit la passe. L'exercice continue.",
    },
    {
      id: 3,
      title: 'Avec 2 feintes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un train classique. Cette fois, quand le soutien fait son cut vers l'avant, le lanceur peut faire une deuxième feinte. Si c'est le cas, le premier joueur du stack fait un cut pour recevoir un dump. L'exercice continue.",
    },
  ],
};

const resetOpenDrill = {
  id: 1005,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Open',
  image: 'https://zupimages.net/up/20/19/tzk3.jpg',
  description: 'Faire des cuts dans le bon timing, attraper puis lancer immédiatement',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Par derrière',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le lanceur est défendu par une marque qui applique une force et son handler de soutien se place à 45° derrière lui, du côté ouvert.\nLe lanceur  commence par regarder vers l'avant pour simuler une situationde jeu, avant de se tourner vers son soutien et d'établir un contact visuel avec lui. Ensuite, le soutien fait un cut derrière le lanceur et reçoit le disque.\nLe disque est alors renvoyé au lanceur pour refaire l'exercice de l'autre côté en inversant la force.",
    },
    {
      id: 2,
      title: 'Power position',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même que pour la première version. Cette fois, quand le contact visuel est établi, le soutien fait un cut vers l'avant et reçoit une passe devant lui.",
    },
    {
      id: 3,
      title: 'Situation de match',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même. La défense sur le soutien est à 100%. L'attaquant doit choisir une des deux options de cut pour se démarquer. Il ne peut faire qu'une feinte. Chaque équipe de 2 faire le même nombre d'essais, et celle qui réussi le plus de passes gagne !",
    },
  ],
};

const resetBreakDrill = {
  id: 1006,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Break',
  image: 'https://zupimages.net/up/20/19/w90f.jpg',
  description: 'Faire des cuts dans le bon timing, attraper puis lancer immédiatement',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'The 45° Upline',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le lanceur est défendu par une marque qui applique une force et son handler de soutien se place à sa hauteur, du côté fermé.\n. Le soutien se déplace tranquillement vers l'avant jusqu'à se trouver à 45° par rapport au lanceur. Quand le lanceur établit le contact visuel, le soutien fait un cut incisif vers l'avant.\nUne fois la passe réalisée, le disque est renvoyé au lanceur et l'exercice est répété plusieurs fois, en changeant la force.",
    },
    {
      id: 2,
      title: 'The Easy Reset',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même. Quane le contact visuel est établi, le lanceur contourne sa marque par l'arrière pour faire sa passe au soutien. La passe doit arriver à peu près à hauteur du lanceur, là où le soutien se trouvait initialement. C'est la passe qui déclenche le cut du soutien.",
    },
    {
      id: 3,
      title: 'Situation de match',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même. La défense est à 100%. Le soutien doit choisir une des deux solutions pour faire son cut et recevoir le disque. Le soutien ne peut changer de direction qu'une fois. Chaque équipe de 2 faire le même nombre d'essais, et celle qui réussi le plus de passes gagne !",
    },
  ],
};

const youShallNotPassDrill = {
  id: 1007,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Vous ne passerez pas',
  image: 'https://zupimages.net/up/20/19/90z6.jpg',
  description: "Utiliser son corps pour empêcher l'attaquant de recevoir le disque",
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 4 plots',
  durationInMinutes: 12,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Bloquer les passes courtes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "L'attaquant et le défenseur courrent vers le carré central puis vers le fond du terrain. L'attaquant doit faire un contre-cut vers le disque pour recevoir une passe dans le carré. Il ne peut pas rechanger de direction. Le défenseur doit se positionner pour empêcher l'attaquant de le dépasser pour atteindre le carré. Le lanceur ne peut pas lancer sur le premier cut en longue",
    },
    {
      id: 2,
      title: 'Bloquez tout !',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: "Même exercice, mais le lanceur a le droit de lancer la longue si c'est pertinent",
    },
    {
      id: 3,
      title: 'Comptez les points',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Faites deux équipes et mette en place l'exercice précédent. Cette fois, si une passe n'est pas réussie, la défense marque un point. Inversez attaque et défense après un certain nombre d'essais. L'équipe qui a le plus de points gagne !",
    },
  ],
};

const defensePositionDrill = {
  id: 1021,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Positionnement défensif',
  image: 'https://zupimages.net/up/20/19/zigu.jpg',
  description: "Se positionner correctement en fonction de la stratégie de l'équipe",
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque - 5 plots',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Bloquer les passes courtes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        "Un lanceur est en place avec une marque qui applique une force. Un receveur commence à n'importe quel plot, avec un défenseur qui se place à 45° devant lui, dans le côté ouvert. Le receveur court vers les cones dans n'importe quel ordre et le défenseur doit maintenir son positionnement par rapport au receveur en permanence.",
    },
    {
      id: 2,
      title: 'Bloquer les passes longues',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: 'Même exercice. Cette fois, le défenseur doit toujours se positionner à 45° derrière le receveur.',
    },
  ],
};
