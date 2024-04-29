import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  batteryPacks:[],
  finalisedBatteryPacks:[]
};

const dataSlice = createSlice({
  name: "batteryPack",
  initialState: initialState,
  reducers: {
    setBatteryPacks: (state, action)=>{
      const batteryPack = action.payload;
      state.batteryPacks.push(batteryPack);
    },
    setFinalisedBatteryPacks: (state, action)=>{
        console.log( action.payload);
        const batteryPacks = state.batteryPacks;
        const batteryPack = batteryPacks.find((item)=>item.batteryPackUniqueId === action.payload.batteryPackUniqueId);
        batteryPack.masterBms = action.payload.masterBms;
        batteryPack.slaveBms = action.payload.slaveBms;
        const filteredBatteryPacks = batteryPacks.filter((item)=>item.batteryPackUniqueId !== action.payload.batteryPackUniqueId);
        state.finalisedBatteryPacks.push(batteryPack);
        state.batteryPacks = filteredBatteryPacks;
    }
  },
});

export const dataAction = dataSlice.actions;

const store = configureStore({ reducer: dataSlice.reducer });

export default store;
