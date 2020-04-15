import animationMenageATrois from './AnimationMenageATrois';
import animationSquare from './AnimationSquare';

export const DrillTypes = {
  FITNESS: 'fitness',
  TECHNICAL: 'technical',
};

export const Intensities = {
  LOW: 'Low',
  MODERATE: 'Moderate',
  HIGH: 'High',
};

export const GoalsFrisbee = {
  DEFENSE: 'Defense',
  HANDLING: 'Handling',
  CUTTING: 'Cutting',
  THROWING: 'Throwing',
  COMMUNICATION: 'Communication',
  CATCH: 'Catch',
};

export const GoalsFitness = {
  LEGS: 'Legs',
  UPPER: 'Upper',
  FULL_BODY: 'Full body',
  CORE: 'CORE',
  CONDITIONING: 'Conditioning',
};

export const Levels = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
};

export const SeasonTimings = {
  OFF_SEASON: 'Off-season',
  PRE_SEASON: 'Pre-season',
  IN_SEASON: 'In-season',
  ANYTIME: 'Anytime',
};

export const EquipmentLabels = {
  NO_EQUIPMENT: 'No Equipment',
  BASIC: 'Basic Equipment',
  FULL_EQUIPMENT: 'Full equipment',
};

export const Sources = {
  VIMEO: 'vimeo',
  YOUTUBE: 'youtube',
  ANIMATION: 'animation',
};

export default {
  favoriteDrills: [],
  drills: [
    {
      id: 1,
      type: DrillTypes.FITNESS,
      source: 'Bart & Moby',
      title: 'Vimeo is working',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 8,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.INTERMEDIATE,
      steps: [
        {
          id: 1,
          title: 'Rower Hamstring',
          source: Sources.VIMEO,
          link:
            'https://vod-progressive.akamaized.net/exp=1586895936~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1349%2F16%2F406747830%2F1742364397.mp4~hmac=aff3cdfcc7f8438e94b7505697797b57ef7766146855ee2eb23774da58100331/vimeo-prod-skyfire-std-us/01/1349/16/406747830/1742364397.mp4',
          count: '20',
          rest: '90s',
          explanation: 'blabla bla blabl blalb ',
        },
        {
          id: 2,
          title: 'Full Clean',
          source: Sources.VIMEO,
          link:
            'https://vod-progressive.akamaized.net/exp=1586895936~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1349%2F16%2F406747830%2F1742364397.mp4~hmac=aff3cdfcc7f8438e94b7505697797b57ef7766146855ee2eb23774da58100331/vimeo-prod-skyfire-std-us/01/1349/16/406747830/1742364397.mp4',
          count: '8',
          rest: '90s',
          explanation: 'blabla bla blabl blalb ',
        },
        {
          id: 3,
          title: 'Kettlebell Russian Twist',
          source: Sources.VIMEO,
          link:
            'https://vod-progressive.akamaized.net/exp=1586895936~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1349%2F16%2F406747830%2F1742364397.mp4~hmac=aff3cdfcc7f8438e94b7505697797b57ef7766146855ee2eb23774da58100331/vimeo-prod-skyfire-std-us/01/1349/16/406747830/1742364397.mp4',
          count: '25',
          rest: '90s',
          explanation: 'blabla bla blabl blalb ',
        },
      ],
    },
    {
      id: 2,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.FULL_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.HIGH,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.INTERMEDIATE,
      steps: [
        {
          id: 1,
          title: 'Rower Hamstring',
          source: Sources.YOUTUBE,
          link: 'https://www.youtube.com/embed/JkVHrA5o23o',
          count: '20',
          rest: '90s',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 3,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.FULL_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.MODERATE,
      goals: [GoalsFitness.FULL_BODY],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.ADVANCED,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 4,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.DEFENSE],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 5,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.BASIC,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 6,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.HIGH,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 7,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 22,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 8,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 9,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 10,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 11,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 12,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 22,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 13,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 14,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 15,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 16,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 22,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 17,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 18,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 19,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 20,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 22,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 21,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 22,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 23,
      type: DrillTypes.FITNESS,
      source: 'Author',
      title: 'Fitness Drill Title',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description: 'Description of the drill',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NO_EQUIPMENT,
      equipment: 'Equipment needs for the drill',
      durationInMinutes: 35,
      intensity: Intensities.LOW,
      goals: [GoalsFitness.UPPER],
      seasonTiming: SeasonTimings.PRE_SEASON,
      level: Levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 1001,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Exercice à tester',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */

      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      animation: animationSquare,
      steps: [
        {
          id: 1,
          title: 'Rower Hamstring',
          source: Sources.ANIMATION,
          link: animationSquare,
          count: '20',
          rest: '90s',
        },
        {
          id: 2,
          title: 'Full Clean',
          source: Sources.VIMEO,
          link:
            'https://vod-progressive.akamaized.net/exp=1586786042~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1305%2F16%2F406527537%2F1741432797.mp4~hmac=a73c3100819e25c8a5a29652fed8ae0f654c0d684b0a10da601b7eb78df9f737/vimeo-prod-skyfire-std-us/01/1305/16/406527537/1741432797.mp4',
          count: '8',
          rest: '90s',
        },
        {
          id: 3,
          title: 'Kettlebell Russian Twist',
          source: Sources.VIMEO,
          link:
            'https://vod-progressive.akamaized.net/exp=1586786087~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1294%2F16%2F406472362%2F1741204458.mp4~hmac=6be48c6956eae9cc924d9f634d208b32b69a9aa7f4d92380ba84b094ca707686/vimeo-prod-skyfire-std-us/01/1294/16/406472362/1741204458.mp4',
          count: '25',
          rest: '90s',
        },
      ],
    },
    {
      id: 1002,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1003,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1004,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1005,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1006,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1007,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1008,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1009,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1010,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1011,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1012,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1013,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1014,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1015,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1016,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1017,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1018,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1019,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1020,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 10,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1021,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1022,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 1023,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 20,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
  ],
  trainings: [
    {
      id: 1,
      source: 'Rise Up',
      title: 'Dump & Swing',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      drills: [1, 2, 3, 4],
    },
    {
      id: 2,
      source: '** Ultimate App **',
      title: 'First practice',
      image:
        'https://cdn3.sportngin.com/attachments/photo/be7e-106813275/Screen_Shot_2018-07-19_at_3.53.39_PM_large.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      drills: [5, 6, 7, 8],
    },
  ],
};
