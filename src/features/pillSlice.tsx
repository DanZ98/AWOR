import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PillsData } from "../data";

interface PillState {
   filteredPills: typeof PillsData;
}

const initialState: PillState = {
   filteredPills: [],
};

const pillSlice = createSlice({
   name: "pill",
   initialState,
   reducers: {
      filterPills: (state, action: PayloadAction<number>) => {
         const iconId = action.payload;
         const ranges: { [key: number]: { start: number; end: number } } = {
            1: { start: 1, end: 3 },
            2: { start: 4, end: 5 },
            3: { start: 6, end: 6 },
            4: { start: 7, end: 9 },
            5: { start: 10, end: 14 },
            6: { start: 15, end: 21 },
            7: { start: 22, end: 23 },
            8: { start: 24, end: 26 },
         };
         const range = ranges[iconId];
         state.filteredPills = PillsData.filter(
            (pill) => pill.id >= range.start && pill.id <= range.end
         );
      },
   },
});

export const { filterPills } = pillSlice.actions;

export default pillSlice.reducer;
