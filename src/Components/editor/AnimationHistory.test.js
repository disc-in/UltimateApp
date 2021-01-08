import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';

import Drill from '../animation/Drill';

import AnimationHistory from './AnimationHistory';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<AnimationHistory />', () => {
  afterEach(() => jest.clearAllMocks());

  const onAnimationHistoryChange = jest.fn();
  const animation1 = new Drill({ background: 'background1' });
  const animation2 = new Drill({ background: 'background2' });
  const animation3 = new Drill({ background: 'background3' });

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() =>
      render(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation1} />),
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('does undo and redo', async () => {
    const { rerender, getByTestId } = await waitFor(() =>
      render(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation1} />),
    );

    // Animation is changed in the editor
    await rerender(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation2} />);
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();

    await fireEvent.press(getByTestId('undoButton'));
    expect(onAnimationHistoryChange).toHaveBeenCalledWith(animation1);

    await fireEvent.press(getByTestId('redoButton'));
    expect(onAnimationHistoryChange).toHaveBeenCalledWith(animation2);
  });

  it('cannot undo if on the first animation', async () => {
    const { rerender, getByTestId } = await waitFor(() =>
      render(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation1} />),
    );

    // No changes in the editor
    await fireEvent.press(getByTestId('undoButton'));
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();

    // Animation is changed in the editor
    await rerender(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation2} />);
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();

    await fireEvent.press(getByTestId('undoButton'));
    expect(onAnimationHistoryChange).toHaveBeenCalledWith(animation1);

    // Already reached the beginning of history
    onAnimationHistoryChange.mockReset();
    await fireEvent.press(getByTestId('undoButton'));
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();
  });

  it('cannot redo if on the last animation', async () => {
    const { rerender, getByTestId } = await waitFor(() =>
      render(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation1} />),
    );

    // No changes in the editor
    await fireEvent.press(getByTestId('redoButton'));
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();

    // Animation is changed in the editor
    await rerender(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation2} />);
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();

    // Going to the beginning of history
    await fireEvent.press(getByTestId('undoButton'));
    onAnimationHistoryChange.mockReset();

    await fireEvent.press(getByTestId('redoButton'));
    expect(onAnimationHistoryChange).toHaveBeenCalledWith(animation2);

    // Already reached the end of history
    onAnimationHistoryChange.mockReset();
    await fireEvent.press(getByTestId('redoButton'));
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();
  });

  it('clears redo if animation changes while not at the end', async () => {
    const { rerender, getByTestId } = await waitFor(() =>
      render(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation1} />),
    );

    // Animation is changed in the editor
    await rerender(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation2} />);
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();

    await fireEvent.press(getByTestId('undoButton'));
    expect(onAnimationHistoryChange).toHaveBeenCalledWith(animation1);

    onAnimationHistoryChange.mockReset();
    // Animation is changed in the editor
    await rerender(<AnimationHistory onAnimationHistoryChange={onAnimationHistoryChange} animation={animation3} />);
    await fireEvent.press(getByTestId('redoButton'));
    expect(onAnimationHistoryChange).not.toHaveBeenCalled();
  });
});
