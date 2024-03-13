import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Coin } from "@/app/sharedinterfaces";

interface chartCoinsState {
  value: any;
  coins: Coin[];
}

const initialState: chartCoinsState = {
  coinsForChart: [],
  value: "",
};

const chartCoinsSlice = createSlice({
  name: "chartCoins",
  initialState,
  reducers: {
    handleSelect: (state, action) => {
      const coin = {
        id: action.payload.id,
        coin: action.payload.coin,
        priceData: action.payload.priceData,
        volumeData: action.payload.volumeData,
      };
      if (state.coins.includes(coin)) {
        const removed = state.coins.filter((c) => c !== coin);
        if (state.coins.length === 1) return;
        setChartCoins(removed);
        return;
      }
      if (state.chartCoins.length === 3) return;
      getChartInfo(coin);
      state.coins = [...coins, coin];
    },
  },
});

export const selectAllCoins = (state) => state.coins;
export const { handleSelect } = chartCoinsSlice.actions;

export default chartCoinsSlice.reducer;