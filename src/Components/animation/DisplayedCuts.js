import React from 'react';
import { StyleSheet, View } from 'react-native';

import Animated from 'react-native-reanimated';

/** Enables to display the cuts of a given step */
class DisplayedCuts extends React.Component {
  /** Props must contain:
	- step: the step to display
	- drillCuts: the DrillCuts which contain the position of all the cuts at each step of the drill
    */
  constructor(props) {
    super(props);

    this.state = {
      drillCuts: this.props.drillCuts,
    };
  }

  _display(element) {
    return element.render();
  }

  _displayCut = cut => {
    return (
      <View key={cut.key + 4000} style={[StyleSheet.absoluteFill]} height="100%" width="100%">
        <Animated.View
          style={[
            { height: 2 },
            { width: cut.d1 },
            { borderRadius: 1 },
            { borderWidth: 1 },
            { borderColor: 'green' },
            { borderStyle: 'dashed' },
            { position: 'absolute' },
            { top: cut.top1 },
            { left: cut.left1 },
            { transform: [{ rotate: cut.angle1.__getValue() }] },
          ]}
        />

        <Animated.View
          style={[
            { height: 1 },
            { width: cut.d2 },
            { borderRadius: 1 },
            { borderWidth: 1 },
            { borderColor: 'green' },
            { borderStyle: 'dashed' },
            { position: 'absolute' },
            { top: cut.top2 },
            { left: cut.left2 },
            { transform: [{ rotate: cut.angle2.__getValue() }] },
          ]}
        />
        {cut.cutCircle !== null && cut.cutCircle !== undefined ? cut.cutCircle.render() : undefined}
        {cut.countercutCircle !== null && cut.countercutCircle !== undefined
          ? cut.countercutCircle.render()
          : undefined}
      </View>
    );
  };

  render() {
    return (
      <Animated.View key="1" style={[{ position: 'absolute', left: 0, top: 0 }]} height="100%" width="100%">
        {this.props.drillCuts.cuts.length >= this.props.step &&
        this.props.drillCuts.cuts[this.props.step] !== undefined &&
        this.props.drillCuts.cuts[this.props.step] !== null
          ? this.props.drillCuts.cuts[this.props.step].map(this._displayCut)
          : undefined}
      </Animated.View>
    );
  }
}

export default DisplayedCuts;
