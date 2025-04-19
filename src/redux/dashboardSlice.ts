// src/features/dashboard/dashboardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardState, Stats, UpcomingLecture, ActivityLogEntry, ConflictWarning, ChartData, InstructorAvailability } from './dashboardTypes';

const initialState: DashboardState = {
  stats: null,
  upcomingLectures: [],
  activityLog: [],
  conflictWarnings: [],
  chartData: null,
  availability: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchDashboardData(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardSuccess(
      state,
      action: PayloadAction<{
        stats: Stats;
        upcomingLectures: UpcomingLecture[];
        activityLog: ActivityLogEntry[];
        conflictWarnings: ConflictWarning[];
        chartData: ChartData;
        availability: InstructorAvailability[];
      }>
    ) {
      state.loading = false;
      state.stats = action.payload.stats;
      state.upcomingLectures = action.payload.upcomingLectures;
      state.activityLog = action.payload.activityLog;
      state.conflictWarnings = action.payload.conflictWarnings;
      state.chartData = action.payload.chartData;
      state.availability = action.payload.availability;
    },
    fetchDashboardFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDashboardData,
  fetchDashboardSuccess,
  fetchDashboardFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
