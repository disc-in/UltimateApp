import React, { useEffect, useRef } from 'react';

import { Video } from 'expo-av';

const VimeoVideo = props => {
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
          try {
            await videoElem.current.loadAsync({
              uri: url,
            });
            await videoElem.current.setStatusAsync({
              rate: 1.0,
              isMuted: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              shouldPlay: true,
              isLooping: true,
            });
            const status = await videoElem.current.getStatusAsync();
            console.log(' status is ', status);
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

  return (
    <Video ref={videoElem} resizeMode={Video.RESIZE_MODE_CONTAIN} style={{ width: props.screenWidth, height: 250 }} />
  );
};

export default VimeoVideo;
