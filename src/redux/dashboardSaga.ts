// src/features/dashboard/dashboardSaga.ts
import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  fetchStats,
  fetchUpcomingLectures,
  fetchActivityLog,
  fetchConflictWarnings,
  fetchChartData,
  fetchInstructorAvailability,
} from './dashboardAPI';
import {
  fetchDashboardData,
  fetchDashboardSuccess,
  fetchDashboardFailure,
} from './dashboardSlice';
import {
  Stats,
  UpcomingLecture,
  ActivityLogEntry,
  ConflictWarning,
  ChartData,
  InstructorAvailability,
} from './dashboardTypes';

function* handleFetchDashboard() {
  try {
    const [
      stats,
      upcomingLectures,
      activityLog,
      conflictWarnings,
      chartData,
      availability,
    ]: [
      Stats,
      UpcomingLecture[],
      ActivityLogEntry[],
      ConflictWarning[],
      ChartData,
      InstructorAvailability[]
    ] = yield all([
      call(fetchStats),
      call(fetchUpcomingLectures),
      call(fetchActivityLog),
      call(fetchConflictWarnings),
      call(fetchChartData),
      call(fetchInstructorAvailability),
    ]);

    yield put(
      fetchDashboardSuccess({
        stats,
        upcomingLectures,
        activityLog,
        conflictWarnings,
        chartData,
        availability,
      })
    );
  } catch (err: any) {
    yield put(fetchDashboardFailure(err.message));
  }
}

export default function* dashboardSaga() {
  yield takeLatest(fetchDashboardData.type, handleFetchDashboard);
}
