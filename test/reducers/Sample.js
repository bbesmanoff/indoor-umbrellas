import expect from 'expect';
import reducer from '../../js/reducers/Sample';
import * as types from '../../js/constants/ActionTypes';

describe('the sample reducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual({title: 'Home'});
  });
});
