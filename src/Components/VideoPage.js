import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import theme from '../styles/theme.style';
import VimeoVideo from '../Components/VimeoVideo';

const screenDimension = Dimensions.get('window');

export const VideoPage = props => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.videoAlone}>
        <VimeoVideo vimeoId="436151076" screenWidth={screenDimension.width} />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>La defense de zone de Buzz Bullet</Text>
        <View style={styles.authorWrapper}>
          <Text style={styles.textAuthor}>Ultiworld</Text>
        </View>
      </View>
      <View>
        <Text style={styles.description}>
          Ici faite attention au flow mise en place par l'équipe japonaise. Tout est fluide, sans prise de risque
          inutile. Au championnat du monde on va chercher à avoir le même savoir faire.
        </Text>
      </View>
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  contentWrapper: { flex: 1, backgroundColor: theme.COLOR_PRIMARY_LIGHT },
  videoAlone: { height: 250 },
  textAuthor: {
    flex: 1,
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 10,
  },
  text: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  description: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_SMALL,
    paddingHorizontal: 5,
  },
});
