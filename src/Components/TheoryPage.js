import React, { useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  SectionList,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import VimeoVideo from './VimeoVideo';

import theme from '../styles/theme.style';

export const TheoryPage = (props, { label, value, onChangeText, placeholder, index }) => {
  const screenDimension = Dimensions.get('window');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemTest, setSelectedItemTest] = useState([]);
  const [theorySubject, setTheorySubject] = useState('Ultimate Vocabulary');
  const dataDropdown = [
    {
      value: 'Ultimate Vocabulary',
      pages: [
        {
          id: 1,
          title: 'Vocabulary',
          text: 'example de texte',
          video: '413628757',
          animation: '',
        },
      ],
    },
    {
      value: 'Throwing',
      pages: [
        {
          id: 1,
          title: 'Backhand',
          text: 'example de texte',
          video: '415565763',
          animation: '',
        },
        {
          id: 2,
          title: 'Forehand',
          text: ' ',
          video: '415569048',
          animation: '',
        },
        {
          id: 3,
          title: 'Hammer',
          text: '',
          video: '423999439',
          animation: '',
        },
        {
          id: 4,
          title: 'Scoober',
          text: ' ',
          video: '423999364',
          animation: '',
        },
      ],
    },
    {
      value: 'Cutting',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: 'example de texte',
          video: '424000350',
          animation: '',
        },
      ],
    },
    {
      value: 'Defense',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: 'example de texte',
          video: '413628757',
          animation: '',
        },
      ],
    },
    {
      value: 'Vertical Stack',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: 'example de texte',
          video: '424002454',
          animation: '',
        },
      ],
    },
    {
      value: 'Endzone Offense',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: 'example de texte',
          video: '413628757',
          animation: '',
        },
      ],
    },
    {
      value: 'Horizontal Stack',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: 'example de texte',
          video: '424002425',
          animation: '',
        },
      ],
    },
    {
      value: 'Handling',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: 'example de texte',
          video: '413628757',
          animation: '',
        },
      ],
    },
    {
      value: 'Others Stacks',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: 'example de texte',
          video: '413628757',
          animation: '',
        },
      ],
    },
  ];

  const sections = [
    {
      id: 1,
      title: 'B',
      data: [
        {
          id: 0,
          text: 'Break',
          definition:
            'When Forcing you are making the player holding the disc throw a certain direction. A break is when your attempt fails and they throw the direction you are guarding against. A teammate may yell “no break!” if there is an opposing player wide open on the guarded side, this means try extra hard to guard that side.',
        },
        {
          id: 1,
          text: 'Brick',
          definition:
            'Happens when a freshly pulled disc goes out-of-bounds. The receiving team take the disc to the brick-mark which is centrally located and 20 yards in-field from the first end zone line. A brick is signified by clapping hands once over head or by calling “Brick.”',
        },
      ],
    },
    {
      id: 2,
      title: 'C',
      data: [
        {
          id: 0,
          text: 'Callahan',
          definition:
            'It is when you catch an opponents pass in his/her end zone resulting in a point for the catchers team. This rarely ever happens, ever.',
        },
        {
          id: 1,
          text: 'Clear out',
          definition:
            'This can mean two things. 1) Clear out can mean an area is getting too clustered with people and to throw the disc to openness and 2) If someone is Clogging The Lane they may be told to “clear out.”',
        },
        {
          id: 2,
          text: 'Cup',
          definition: 'An extremely common and highly effective defensive zone tactic in Ultimate Frisbee.',
        },
        {
          id: 3,
          text: 'Cut',
          definition:
            'A juke or sudden change in direction while trying to get open to receive the disc. An in-cut is when you run towards the thrower while an out-cut is the opposite; Running away from the thrower in hope to catch a deeper pass.',
        },
        {
          id: 4,
          text: 'Cutter',
          definition:
            'The two main offensive positions in Ultimate are the handler and the cutter. The cutters job is to cut, juke, and get open for a handler to pass to them. The main job of the cutter is to catch at all costs, and then to return it to a handler and repeat.',
        },
      ],
    },
    {
      id: 3,
      title: 'D',
      data: [
        {
          id: 0,
          text: 'Double Team',
          definition:
            'When holding the disc only one player can be within 10 feet of you, usually the player stalling you. If another player is within the 10 feet you can call “double team” and the stall count will restart. Note: opposing players are allowed to run and defend teammates within the 10 feet as long as they aren’t intentionally trying to block you. ',
        },
        {
          id: 1,
          text: 'Dump',
          definition: 'Passing it backward to someone behind you, usually a Handler.',
        },
      ],
    },
    {
      id: 4,
      title: 'E',
      data: [
        {
          id: 0,
          text: 'Endzone',
          definition:
            'Just like in Football. In outdoor Ultimate the end zones are 25 yards deep. These dimensions can be altered as long as both end zones are equal. A player must catch the disc in the end zone to score a point.',
        },
      ],
    },
    {
      id: 5,
      title: 'F',
      data: [
        {
          id: 0,
          text: 'Flick',
          definition: 'Next to backhand, the flick is the most commonly used Ultimate Throw.',
        },
        {
          id: 1,
          text: 'Fast Stall',
          definition:
            'We all get antsy sometimes especially in the heat of play. Each stall count is supposed to be one-second long but in the midst of battle we may count faster then a second which can be called by the thrower, known as a stallout. If the staller doesn’t agree with the throwers call, they can Contest the call causing the stall count to move back only 2 seconds. If the play is not contested the count goes back to zero. A stall count for outdoor Ultimate is 10 seconds while an indoor game is usually 7 seconds.',
        },
        {
          id: 2,
          text: 'Forcing',
          definition:
            'You can force forehand, force backhand or force home/away. Forcing means to make the opposing thrower throw a certain way. For example to force backhand would mean to stand on their right side completely giving them the ability to backhand. But making it next to impossible to throw a Flick. You would have successfully forced them to throw a backhand which is huge when it comes to plays and strategy. Forcing flick would be stopping the opposing thrower from throwing a backhand. As you can see in the picture to the right the thrower is being forced to flick it. He has a wide open flick but it will be very challenging to backhand. The force is agreed upon and understood by the entire team before a play to maximize effectiveness. Please checkout Stack to learn more about why forcing is so important.',
        },
      ],
    },
    {
      id: 6,
      title: 'H',
      data: [
        {
          id: 0,
          text: 'Handler',
          definition:
            'There are really only two main positions in Ultimate, The handler and the cutter. The handler is the one that handles the disc. Typically, the handler is an experienced player that has mastered at least the three main throws of Ultimate.. the hammer, backhand, and forehand. The handlers job is to stay back while the cutters try to get open. The handler will throw to the cutter to hopefully progress up the field. Since not everyone is capable of being a handler, the term can also used to describe a person’s skill level.',
        },
        {
          id: 1,
          text: 'Hammer',
          definition: ' A very common used Ultimate Throw which is thrown over the head.',
        },
        {
          id: 2,
          text: 'Huck',
          definition: 'A long throw down field. Huck may be spelled differently depending on the country you play.',
        },
      ],
    },
    {
      id: 7,
      title: 'I',
      data: [
        {
          id: 1,
          text: 'Iso',
          definition:
            'On offense, A teammate may yell “Iso ______!” (The blank being someone’s name or nickname). This means for everyone else to clear away from that person so they can receive a pass. Opposing players usually don’t know your teammates names so this play is meant to take advantage of that.',
        },
      ],
    },
    {
      id: 8,
      title: 'L',
      data: [
        {
          id: 0,
          text: 'Layout',
          definition:
            'Basically another word for a Bid. A layout is more when you are running and dive forward with two hands out sliding flat on your chest to catch or block the disc. A bid is a more broad term meaning ANY type of dive.',
        },
      ],
    },
    {
      id: 9,
      title: 'M',
      data: [
        {
          id: 0,
          text: 'Man on Man D',
          definition:
            'The most common defensive tactic in Ultimate. Simply put, you are assigned one man (or woman) on the other team. It is up to you to guard that man at all costs, never leave him or let him out of your reach.',
        },
        {
          id: 1,
          text: 'Mark',
          definition:
            'When you are told to cover a specific person they are your mark. Stay on your mark at all costs.  It is your job to not let that single person get the disc, and to escape them when you are trying to get open for the disc.',
        },
        {
          id: 2,
          text: 'Mismatch',
          definition:
            'When playing Man Defense, you will be assigned a mark to cover and to stay on throughout the entire point. Typically, you will be marking someone equal, or close to equal, your height and skill level. A Mismatch occurs when one of the two opposing players is significantly better or worse than the other. An example could be putting a 5′ 2″ guy on an opposing 6′ 5″ guy or putting a rookie player on a veteran player. Mismatches will always occur especially if the other teams skill levels are unknown.',
        },
      ],
    },
    {
      id: 10,
      title: 'P',
      data: [
        {
          id: 0,
          text: 'Pancake',
          definition:
            'A type of catch where a player claps his/her hands on the top and bottom of the disc. This is the most secure way to catch but severely limits one’s reach.',
        },
        {
          id: 1,
          text: 'Pick',
          definition:
            'When guarding a man on defense you are given the right to guard them without interference. So say your on defense and guarding an opposing player by basically following them everywhere they go.',
        },
        {
          id: 2,
          text: 'Pivot Foot',
          definition:
            'Like in basketball you must establish a foot to twist and turn on when holding the disc. This is your pivot foot. If you are a righty your pivot should be your left foot and visa versa.',
        },
        {
          id: 3,
          text: 'Poach',
          definition:
            'A player would yell “Poach!” if he/she is WIDE open. Not just a little open but really open. 99% of the time the player yelling poach would receive the disc.',
        },
        {
          id: 4,
          text: 'Pull',
          definition: 'The first throw off to start the game or to start a new point.',
        },
      ],
    },
    {
      id: 11,
      title: 'S',
      data: [
        {
          id: 0,
          text: 'Scoober',
          definition: 'A type of Ultimate Throw commonly used in tight situations.',
        },
        {
          id: 1,
          text: 'Stack',
          definition: 'A very common strategy used by many teams.',
        },
        {
          id: 2,
          text: 'Stall',
          definition:
            'A player only has ten seconds to throw the disc. But only if an opposing player is within ten feet of them and stalling them. You would run up and say, loud enough for the thrower to hear, STALL 1, STALL 2, STALL 3…..STALL 10.',
        },
        {
          id: 3,
          text: 'Strike',
          definition:
            'When a player is forcing a particular way they are leaving a portion of the field completely open. It is your teams’ job to guard that open portion of the field. Sometimes an opposing player will stray away from a team member and become completely open. A team member would yell “Strike!” for you to change your force for about 3 seconds, long enough for them to get back on their man. Make sure you return to your normal force right after.',
        },
        {
          id: 4,
          text: 'Swing',
          definition:
            'When you have the disc someone may yell at you to “Swing!” meaning switch the field. In other words throw it to somebody on the opposite sideline. This usually happens when both teams starts clustering on one side of the field when the entire other side is vacant.',
        },
      ],
    },
    {
      id: 12,
      title: 'T',
      data: [
        {
          id: 0,
          text: 'Travel',
          definition:
            'Is a type of foul. When holding the disc you cannot move (you’re allowed to slow down to a stop if caught while running). Traveling is similar to Basketball. You must establish a pivot foot in which you can swing your body back and forth on. If you throw righty you would usually plant your left foot to pivot on. A travel is when your pivot foot lifts off the ground before you throw the disc.',
        },
        {
          id: 1,
          text: 'Turn/Turnover',
          definition:
            'A team has possession of the disc until there is a turnover. It is how it sounds, you turn it over to the other team. Players usually call it a “turn” for short. A turn is a result of a dropped or defended pass, a stall-out, an un-contested foul, or an out-of-bounds.',
        },
      ],
    },
    {
      id: 13,
      title: 'Z',
      data: [
        {
          id: 0,
          text: 'Zone',
          definition:
            'There are two types of defensive tactics in Ultimate, zone and man defense. Zone is when you guard a specific portion of the field while man defense focuses on guarding a specific player. The most effective form of zone defense in Ultimate is known as the Cup.',
        },
      ],
    },
  ];

  const extractKey = ({ id }) => id;

  const _showModal = item => {
    setModalVisible(true), setSelectedItemTest(item);
  };

  const _onPressItem = item => {
    _showModal(item);
  };

  const _renderNewItem = ({ item, section }) => {
    console.log('ITEM =============>', selectedItemTest, '   ');
    return (
      <View>
        <Modal animationType="slide" visible={modalVisible} transparent>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{item.text}</Text>
              <Text style={styles.modalText}>{item.definition}</Text>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: theme.COLOR_PRIMARY }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Return</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            _onPressItem();
          }}
        >
          <Text style={styles.row}>{item.text}</Text>
        </TouchableHighlight>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return <Text style={styles.header}>{section.title}</Text>;
  };

  const displayDictionary = () => {
    return (
      <View style={styles.container}>
        <SectionList
          style={styles.container}
          sections={sections}
          renderItem={(item, section) => _renderNewItem(item, section)}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={extractKey}
        />
      </View>
    );
  };

  const renderTheory = ({ item }) => {
    return (
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.container}>
          <VimeoVideo vimeoId={item.video} screenWidth={screenDimension.width} sounds={false} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.instruction}>{item.text}</Text>
        </View>
      </>
    );
  };

  const displayTheory = () => {
    if (selectedIndex === 0) {
      return (
        <View style={styles.container} width={screenDimension.width}>
          {displayDictionary()}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={dataDropdown[selectedIndex].pages}
            contentContainerStyle={styles.listContainer}
            keyExtractor={item => item.id.toString()}
            renderItem={renderTheory}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerDropdown}>
          <Dropdown
            data={dataDropdown}
            fontSize={theme.FONT_SIZE_MEDIUM}
            baseColor={theme.COLOR_SECONDARY}
            textColor={theme.COLOR_PRIMARY}
            selectedItemColor={theme.COLOR_PRIMARY}
            itemColor={theme.COLOR_SECONDARY}
            itemCount={6}
            dropdownOffset={{ top: 40, left: 0 }}
            containerStyle={styles.dropdown}
            value={'Ultimate Vocabulary'}
            onChangeText={(value, index) => {
              setTheorySubject(value);
              setSelectedIndex(index);
            }}
          />
          <View>{displayTheory()}</View>
        </View>
      </View>
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
  programNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  btnPrevNext: {
    position: 'absolute',
    left: 10,
  },
  btnPrevNextContent: {
    textAlign: 'center',
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  title: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  btnNext: {
    left: 'auto',
    right: 10,
  },
  lines: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  dropdown: {
    width: '80%',
  },
  containerDropdown: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  titleContainer: {
    paddingVertical: 15,
  },
  instruction: { fontSize: theme.FONT_SIZE_SMALL, paddingLeft: 10 },
  maxHeight: {
    height: '100%',
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 50,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: theme.COLOR_SECONDARY_LIGHT,
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: theme.COLOR_PRIMARY,
    color: 'white',
    fontWeight: 'bold',
  },
  containerPink: {
    flex: 1,
    backgroundColor: 'pink',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: theme.COLOR_PRIMARY,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  modalTitle: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
  },
  pink: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
