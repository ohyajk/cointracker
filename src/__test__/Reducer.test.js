import CoinSlice, { addCoin } from '../Redux/Coins/CoinSlice';

const initialState = {
  data: [],
  selectedCoin: [],
  loading: false,
  error: null,
};

describe('test redux', () => {
  it('if is eth', () => {
    expect(CoinSlice(initialState, addCoin(['eth']))).toEqual({
      data: [],
      selectedCoin: ['eth'],
      loading: false,
      error: null,
    });
  });

  it('if is btc', () => {
    expect(CoinSlice(initialState, addCoin(['btc']))).toEqual({
      data: [],
      selectedCoin: ['btc'],
      loading: false,
      error: null,
    });
  });
  it('if it is sol', () => {
    expect(CoinSlice(initialState, addCoin(['sol']))).toEqual({
      data: [],
      selectedCoin: ['sol'],
      loading: false,
      error: null,
    });
  });
});
