import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

const secondsToMinutes = seconds => {
  const date = new Date();
  date.setSeconds(seconds);
  return date.getMinutes();
};

const DrillListPage = props => {
  const { navigation } = props;
  const type = props.route.params.type;
  const drills = props.drills.filter(drill => drill.type === type);

  return (
    <View style={styles.drillListPage}>
      <Text style={styles.counter}>{drills.length} drills available</Text>
      <FlatList
        data={drills}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.drill} onPress={() => navigation.navigate('DrillPage', { drill: item })}>
            <Image style={styles.image} source={{ uri: item.img }} />
            <View style={styles.contentContainer}>
              <Text style={styles.source}>{item.source}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.numberOfPlayers}>
                Duration: {secondsToMinutes(item.duration)} min - players: {item.nbPlayers}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {}}
      />
    </View>
  );
};

export default connect(mapStateToProps)(DrillListPage);

const styles = StyleSheet.create({
  drillListPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
    height: '100%',
  },
  counter: {
    color: '#767676',
    marginBottom: 20,
  },
  drill: {
    height: 80,
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  contentContainer: {
    padding: 5,
    paddingBottom: 10,
  },
  title: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
  },
  source: {
    flex: 2,
    color: '#A6A6A6',
  },
  numberOfPlayers: {
    flex: 2,
    color: '#AFAFAF',
    fontSize: 14,
  },
});
