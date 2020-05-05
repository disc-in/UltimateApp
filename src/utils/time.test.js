import React from 'react';
import { convertMinsToTime } from './time';

describe('convertMinsToTime', () => {
  it('minutes as hours', () => {
    expect(convertMinsToTime(0)).toEqual('0 h');
    expect(convertMinsToTime(20)).toEqual('0 h 20');
    expect(convertMinsToTime(60)).toEqual('1 h');
    expect(convertMinsToTime(80)).toEqual('1 h 20');
  });
});
