import React from 'react';
import { ScrollView, View, StyleSheet, Text, Dimensions } from 'react-native';

import VimeoVideo from './VimeoVideo';

import theme from '../styles/theme.style';

export const TheoryPage = props => {
  const screenDimension = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Text style={styles.texte}> Scrolling menu</Text>
      <ScrollView>
        <View style={styles.container}>
          <VimeoVideo vimeoId="406747038" screenWidth={screenDimension.width} sounds={false} />
        </View>
        <Text>
          Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texteBeaucoup de
          texteBeaucoup de texteBeaucoup de texteBeaucoup de texte Beaucoup de texteBeaucoup de texte Beaucoup de texte
        </Text>
      </ScrollView>
    </View>
  );
};

export default TheoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  texte: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
