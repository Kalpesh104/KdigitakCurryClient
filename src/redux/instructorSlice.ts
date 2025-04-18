import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Instructor } from '../components/InstructorModal';

interface InstructorState {
  list: Instructor[];
}

const initialState: InstructorState = {
  list: [],
};

const instructorSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {
    addInstructor(state, action: PayloadAction<Instructor>) {
      const id = Date.now();
      state.list.push({ ...action.payload, id });
    },
    updateInstructor(state, action: PayloadAction<Instructor>) {
      const index = state.list.findIndex(i => i.id === action.payload.id);
      if (index > -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addInstructor, updateInstructor } = instructorSlice.actions;
export default instructorSlice.reducer;
