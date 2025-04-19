// src/features/dashboard/dashboardAPI.ts
import axios from 'axios';
import {
  Stats,
  UpcomingLecture,
  ActivityLogEntry,
  ConflictWarning,
  ChartData,
  InstructorAvailability,
} from './dashboardTypes';

export const fetchStats = async (): Promise<Stats> => {
  const { data } = await axios.get<Stats>('/api/dashboard/stats');
  return data;
};

export const fetchUpcomingLectures = async (): Promise<UpcomingLecture[]> => {
  const { data } = await axios.get<UpcomingLecture[]>('/api/dashboard/lectures/upcoming');
  return data;
};

export const fetchActivityLog = async (): Promise<ActivityLogEntry[]> => {
  const { data } = await axios.get<ActivityLogEntry[]>('/api/dashboard/activity-log');
  return data;
};

export const fetchConflictWarnings = async (): Promise<ConflictWarning[]> => {
  const { data } = await axios.get<ConflictWarning[]>('/api/dashboard/conflicts');
  return data;
};

export const fetchChartData = async (): Promise<ChartData> => {
  const { data } = await axios.get<ChartData>('/api/dashboard/charts');
  return data;
};

export const fetchInstructorAvailability = async (): Promise<InstructorAvailability[]> => {
  const { data } = await axios.get<InstructorAvailability[]>('/api/dashboard/instructors/availability');
  return data;
};
