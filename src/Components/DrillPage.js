import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Animation from './Animation';

const DrillPage = ({ route }) => {
  const [currentStep, setCurrentStep] = useState(route.params.drill.steps[0]);
  const drill = route.params.drill;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        {currentStep.animation ? (
          <Animation animation={currentStep.animation} />
        ) : currentStep.video ? (
          <Text>Soon a Video here</Text>
        ) : currentStep.webview ? (
          <Text>Soon a Webpage here</Text>
        ) : (
          <Text>No visual content for this step</Text>
        )}
      </View>
      <View style={styles.stepsList}>
        <FlatList
          data={drill.steps}
          // keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.step,
                currentStep === item ? styles.currentStep : styles.other_step,
              ]}
              onPress={() => setCurrentStep(item)}
            >
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descriptionText}>{item.subtitle}</Text>
            </TouchableOpacity>
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 6,
  },
  stepsList: {
    flex: 4,
    backgroundColor: 'lightgrey',
  },
  step: {
    backgroundColor: 'lightgrey',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  currentStep: {
    backgroundColor: 'white',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
  },
  descriptionText: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15,
  },
});

const mapStateToProps = (state, _props) => {
  return {
    favoritesFilm: state.favoritesFilm,
  };
};

export default connect(mapStateToProps)(DrillPage);
