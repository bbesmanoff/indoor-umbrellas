import expect from 'expect';
import reducer from '../../js/reducers/Sample';
import * as types from '../../js/constants/ActionTypes';

describe('the sample reducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual({title: 'Home'});
  });

  it('should add the next state', () => {
    const action = {
      type: types.TITLE_CHANGED,
      text: 'Hello World'
    };

    expect(reducer({title: 'Home'}, action)).toEqual({title: 'Hello World'});
  });
});
