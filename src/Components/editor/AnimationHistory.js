import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Drill from '../animation/Drill';
import theme from '../../styles/theme.style';

// Stack of the values taken by a drill in the editor. Each time the drill is modified, a copy of the drill is added to the stack.
// Used to enable undo/redo actions
function AnimationHistory({ animation, updateAnimation }) {
  const [currentId, setId] = useState(0);
  const [stack, setStack] = useState([animation]);
  const mustUpdate = useRef(false);

  useEffect(() => {
    console.log('AH: animation updated (id, ', currentId, ' stack size = ', stack.length, ')'); //, elemCount: ', animation.positions[0].length, ',  ')')

    if (!animation.isEqualTo(stack[currentId])) {
      console.log('  animation is different');
      push();
    }
  }, [animation]);

  useEffect(() => {
    console.log('AH: id changed (id = ', currentId, ', stack size = ', stack.length, ')');

    if (mustUpdate.current) {
      mustUpdate.current = false;
      updateAnimation(stack[currentId]);
    }
  }, [currentId]);

  // Add a drill to the stack (used when the user modify the drill in the editor)
  const push = () => {
    console.log('    push');

    // Remove all the drill status in the stack which are after the currently displayed status
    while (stack.length > currentId + 1) {
      stack.pop();
    }

    const newStack = [...stack];
    newStack.push(animation);

    setStack(newStack);
    setId(currentId + 1);
  };

  // Restore the drill to its next value
  const redo = () => {
    console.log('\n> redo');
    if (currentId !== stack.length - 1) {
      mustUpdate.current = true;
      console.log('set id to ', currentId + 1, ' stack size = ', stack.length);
      setId(currentId + 1);
    }
  };

  // Restore the drill to its previous value
  const undo = () => {
    console.log('\n> undo');
    if (currentId !== 0) {
      mustUpdate.current = true;
      console.log('set id to ', currentId - 1, ' stack size = ', stack.length);
      setId(currentId - 1);
    }
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => undo()} style={{ marginRight: 10 }}>
        <MaterialCommunityIcons name="undo" color={theme.COLOR_PRIMARY} size={22} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => redo()}>
        <MaterialCommunityIcons name="redo" color={theme.COLOR_PRIMARY} size={22} />
      </TouchableOpacity>
    </View>
  );
}

export default AnimationHistory;
