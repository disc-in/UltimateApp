import React, { useState, useEffect, useRef } from 'react';

import { Video } from 'expo-av';

const VimeoVideo = props => {
  const [urlVideo, setUrlVideo] = useState('');
  const vimeoUrlSource = `https://player.vimeo.com/video/${props.vimeoId}/config`;
  const videoElem = useRef(null);

  useEffect(() => {
    async function fetchVimeoData() {
      console.log('urlSource is ', vimeoUrlSource);
      await fetch(vimeoUrlSource)
        .then(res => res.json())
        .then(res => {
          // console.log('res from Vimeo ', JSON.stringify(res));
          const videoArray = res.request.files.progressive;
          const videoVimeoQuality = videoArray.find(videoObject => videoObject.quality === '540p');
          console.log('video url for vimeo is ', videoVimeoQuality.url);
          if (videoVimeoQuality) {
            // setUrlVideo(videoVimeoQuality.url);
            return videoVimeoQuality.url;
          }
        })
        .then(async url => {
          console.log(' bim url is ', url);
          try {
            await videoElem.current.loadAsync({
              uri: url,
              intialStatus: {
                rate: 1.0,
                isMuted: true,
                resizeMode: 'cover',
                shouldPlay: true,
                isLooping: true,
              },
              downloadFirst: true,
            });
          } catch (e) {
            console.log('ERROR Loading Video', e);
          }
        });
    }
    fetchVimeoData();

    return () => {
      console.log('Error loading video content');
    };
  }, [vimeoUrlSource]);

  return <Video ref={videoElem} style={{ width: props.screenWidth, height: 300 }} />;
};

export default VimeoVideo;
