import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../../styles/theme.style';

// Stack of the values taken by a drill in the editor. Each time the drill is modified, a copy of the drill is added to the stack.
// Used to enable undo/redo actions
function AnimationHistory({ animation, onAnimationHistoryChange }) {
  const [currentId, setId] = useState(0);
  const [stack, setStack] = useState([animation]);

  const mustUpdate = useRef(false); // Flag used to trigger onAnimationHistoryChange with the correct animation

  useEffect(() => {
    if (!animation.isEqualTo(stack[currentId])) push();
  }, [animation]);

  useEffect(() => {
    if (mustUpdate.current) {
      mustUpdate.current = false;
      onAnimationHistoryChange(stack[currentId]);
    }
  }, [currentId]);

  // Add a drill to the stack (used when the user modifies the drill in the editor)
  const push = () => {
    // Remove all the drill status in the stack which are after the currently displayed status
    while (stack.length > currentId + 1) stack.pop();

    setStack([...stack, animation]);
    setId(currentId + 1);
  };

  // Restore the drill to its previous value
  const undo = () => {
    mustUpdate.current = true;
    setId(currentId - 1);
  };

  // Restore the drill to its next value
  const redo = () => {
    mustUpdate.current = true;
    setId(currentId + 1);
  };

  const canUndo = currentId !== 0;
  const canRedo = currentId !== stack.length - 1;
  return (
    <View style={styles.history}>
      <TouchableOpacity onPress={undo} disabled={!canUndo} style={styles.touchable}>
        <MaterialCommunityIcons
          name="undo-variant"
          color={canUndo ? theme.COLOR_PRIMARY_LIGHT : theme.COLOR_SECONDARY}
          size={30}
          testID="undoButton"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={redo} disabled={!canRedo} style={styles.touchable}>
        <MaterialCommunityIcons
          name="redo-variant"
          color={canRedo ? theme.COLOR_PRIMARY_LIGHT : theme.COLOR_SECONDARY}
          size={30}
          testID="redoButton"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    flex: 1,
    flexDirection: 'row',
  },
  touchable: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimationHistory;
