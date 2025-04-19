// src/features/dashboard/dashboardTypes.ts

export interface Stats {
    totalCourses: number;
    totalInstructors: number;
    scheduledLecturesToday: number;
    missedLectures: number;
    attendanceRate: number; // percent, e.g. 87.5
  }
  
  export interface UpcomingLecture {
    id: string;
    courseName: string;
    instructorName: string;
    dateTime: string; // ISO string
    attendanceStatus?: 'Attended' | 'Not Attended';
  }
  
  export interface ActivityLogEntry {
    id: string;
    message: string;
    timestamp: string; // ISO string
  }
  
  export interface ConflictWarning {
    id: string;
    message: string;
  }
  
  export interface ChartData {
    lecturesPerCourse: Array<{ courseName: string; count: number }>;
    attendanceTrends: Array<{ date: string; rate: number }>;
  }
  
  export interface InstructorAvailability {
    id: string;
    name: string;
    availabilityStatus: 'Available' | 'Booked';
  }
  
  export interface DashboardState {
    stats: Stats | null;
    upcomingLectures: UpcomingLecture[];
    activityLog: ActivityLogEntry[];
    conflictWarnings: ConflictWarning[];
    chartData: ChartData | null;
    availability: InstructorAvailability[];
    loading: boolean;
    error: string | null;
  }
  