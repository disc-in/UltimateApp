import React from 'react';
import { ScrollView, View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import VimeoVideo from './VimeoVideo';

import theme from '../styles/theme.style';

export const TheoryPage = props => {
  const screenDimension = Dimensions.get('window');
  const data = [
    {
      value: 'Throwing',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
          animation: '',
        },
      ],
    },
    {
      value: 'Catching',
      pages: [
        {
          id: 1,
          title: 'How does horizontal stacks work?',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
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
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
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
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
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
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
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
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
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
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
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
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
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
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 2,
          title: 'Key points',
          text: ' ',
          video: '',
          animation: '',
        },
        {
          id: 3,
          title: 'Flow',
          text: ' ',
          video: '',
          animation: '',
        },
      ],
    },
  ];
  const title = 'TITLE';
  const dataTheory = [{ id: 1, title: '', text: '', video: '' }];
  const horizontalStack = {
    id: 1,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const verticalStack = {
    id: 2,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const diagonalStack = {
    id: 3,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const endzoneOffence = {
    id: 4,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const Handling = {
    id: 5,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const defense = {
    id: 6,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const throwing = {
    id: 7,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const cutting = {
    id: 8,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };
  const catching = {
    id: 9,
    pages: [
      {
        id: 1,
        title: 'How does horizontal stacks work?',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 2,
        title: 'Key points',
        text: ' ',
        video: '',
        animation: '',
      },
      {
        id: 3,
        title: 'Flow',
        text: ' ',
        video: '',
        animation: '',
      },
    ],
  };

  // const titleNavigation = (title, index) => {
  //   const isFirstPage = index === 0;
  //   const isLastPage = index === props.drill.steps.length - 1;
  //   return (
  //     <View style={styles.line}>
  //       <View>
  //         {!isFirstPage && (
  //           <TouchableOpacity style={styles.btnPrevNext} onPress={onPrevPress}>
  //             <Text style={styles.btnPrevNextContent}>{'<'}</Text>
  //           </TouchableOpacity>
  //         )}
  //       </View>
  //       <Text style={styles.title}>{title}</Text>
  //       <View>
  //         {!isLastPage && (
  //           <TouchableOpacity style={styles.btnPrevNext} onPress={onNextPress}>
  //             <Text style={styles.btnPrevNextContent}>{'>'}</Text>
  //           </TouchableOpacity>
  //         )}
  //       </View>
  //     </View>
  //   );
  // };

  const onPrevPress = () => {
    return <View></View>;
  };

  const onNextPress = () => {
    return <View></View>;
  };

  const titleNavigation = () => {
    return (
      <View style={styles.programNavigation}>
        <TouchableOpacity style={styles.btnPrevNext} onPress={onPrevPress}>
          <Text style={styles.btnPrevNextContent}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity style={[styles.btnPrevNext, styles.btnNext]} onPress={onNextPress}>
          <Text style={styles.btnPrevNextContent}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerDropdown}>
        <Dropdown
          data={data}
          fontSize={theme.FONT_SIZE_MEDIUM}
          baseColor={theme.COLOR_SECONDARY}
          textColor={theme.COLOR_PRIMARY}
          selectedItemColor={theme.COLOR_PRIMARY}
          itemColor={theme.COLOR_SECONDARY}
          itemCount={6}
          dropdownOffset={{ top: 15, left: 0 }}
          containerStyle={styles.dropdown}
          value={'Throwing'}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <VimeoVideo vimeoId="406556796" screenWidth={screenDimension.width} sounds={false} />
        </View>
      </ScrollView>
      <View style={styles.lines} />
      <View>{titleNavigation()}</View>
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
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
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
  },
});
