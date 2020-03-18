// Store/configureStore.js

import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'

const noreducer = (x) => x

export default createStore(noreducer, {
    drills: [{
        id: 1,
        type: 'fitness', // vs technical vs collectif
        title: "First drill",
        img: "https://gazettesports.fr/wp-content/uploads/2018/11/ultimate_frisbee_gloves.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget",
        nbPlayers: 4,
        duration: 3600, // seconds
        goals: ['Catch', 'Handling'],
        level: ['intermediate'],
        steps: [
            {
                title: "Text",
                subtitle: "Text",
                animation: { /* format à déterminer */ }
            },
            {
                title: "Text",
                subtitle: "Text",
                videoYoutube: "url"
            },
            {
                title: "Text",
                subtitle: "Text",
                webview: "url"
            },
        ]

    }]
})