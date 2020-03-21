import animationMenageATrois from './AnimationMenageATrois'
import animationSquare from './AnimationSquare'


export default fixtureStore = {
    drills: [{
        id: 1,
        type: 'fitness', // vs technical vs collectif
        source: "Rise Up",
        title: "Hot Box",
        img: "https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-a-savoir.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 2,
        duration: 900, // seconds
        goals: ['Catch', 'Handling'],
        level: ['intermediate'],
        steps: [
            {
                title: "Warmup",
                subtitle: "Text",
                video: "http://google.com"
            },
            {
                title: "Do the drill",
                subtitle: "Text",
                animation: animationMenageATrois
            },
            {
                title: "Last step",
                subtitle: "Text",
                webview: "http://google.com"
            },
        ]

    }, {
        id: 2,
        type: 'tactics', // vs technical vs collectif
        source: "Flikulti",
        title: "Defense Positionning",
        img: "https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 2,
        duration: 1200, // seconds
        goals: ['Catch', 'Handling'],
        level: ['intermediate'],
        steps: [
            {
                title: "Only the animation",
                subtitle: "Text",
                animation: animationSquare
            }
        ]
    } , {
        id: 3,
        type: 'tactics', // vs technical vs collectif
        source: "Rise up",
        title: "Backhand",
        img: "https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 5,
        duration: 1, // seconds
        goals: ['Catch', 'Technical'],
        level: ['Beginner'],
        steps: [
            {
                title: "Only the animation",
                subtitle: "Text",
                animation: animationSquare
            }
        ]
    } , {
        id: 4,
        type: 'tactics', // vs technical vs collectif
        source: "Moby Book",
        title: "3 vs 2",
        img: "https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 5,
        duration: 1000, // seconds
        goals: ['Catch', 'Technical'],
        level: ['Beginner'],
        steps: [
            {
                title: "Only the animation",
                subtitle: "Text",
                animation: animationSquare
            }
        ]
    } , {
        id: 5,
        type: 'tactics', // vs technical vs collectif
        source: "Ultimate Project",
        title: "Treasure hunt",
        img: "https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 5,
        duration: 1000, // seconds
        goals: ['Catch', 'Technical'],
        level: ['Beginner'],
        steps: [
           {
            title: "Only the animation",
            subtitle: "Text",
            animation: animationSquare
            }
        ]
    } , {
        id: 6,
        type: 'tactics', // vs technical vs collectif
        source: "Moby book",
        title: "The big 8",
        img: "https://cms.qz.com/wp-content/uploads/2015/08/h_00486649-e1438606606764.jpg?quality=75&strip=all&w=1600&h=900",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 5,
        duration: 1000, // seconds
        goals: ['Catch', 'Technical'],
        level: ['Intermediate'],
        steps: [
           {
            title: "Only the animation",
            subtitle: "Text",
            animation: animationSquare
            }
        ]
    } , {
        id: 7,
        type: 'tactics', // vs technical vs collectif
        source: "The kie",
        title: "Force middle",
        img: "https://gazettesports.fr/wp-content/uploads/2018/11/ultimate_frisbee_gloves.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 10,
        duration: 1000, // seconds
        goals: ['Catch', 'Technical'],
        level: ['Beginner'],
        steps: [
           {
            title: "Only the animation",
            subtitle: "Text",
            animation: animationSquare
            }
        ]
    } , {
        id: 8,
        type: 'tactics', // vs technical vs collectif
        source: "Mooncatchers",
        title: "Long & dishies",
        img: "https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 7,
        duration: 1000, // seconds
        goals: ['Catch', 'Technical'],
        level: ['Beginner'],
        steps: [
           {
            title: "Only the animation",
            subtitle: "Text",
            animation: animationSquare
            }
        ]
    } ,
]
}