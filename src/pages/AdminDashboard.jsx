// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend } from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalInstructors: 0,
    lecturesToday: 0,
    missedLectures: 0,
    attendanceRate: 0,
  });

  const [upcomingLectures, setUpcomingLectures] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [conflictWarnings, setConflictWarnings] = useState([]);
  const [chartData, setChartData] = useState({ lecturesPerCourse: [], attendanceTrends: [] });

  useEffect(() => {
    fetchStats();
    fetchUpcomingLectures();
    fetchActivityLog();
    fetchConflicts();
    fetchCharts();
  }, []);

  const fetchStats = async () => {
    const res = await axios.get('/api/admin/stats');
    setStats(res.data);
  };

  const fetchUpcomingLectures = async () => {
    const res = await axios.get('/api/lectures/upcoming');
    setUpcomingLectures(res.data);
  };

  const fetchActivityLog = async () => {
    const res = await axios.get('/api/admin/activity-log');
    setActivityLog(res.data);
  };

  const fetchConflicts = async () => {
    const res = await axios.get('/api/admin/conflicts');
    setConflictWarnings(res.data);
  };

  const fetchCharts = async () => {
    const res = await axios.get('/api/admin/charts');
    setChartData(res.data);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card><CardContent>📚 Total Courses: {stats.totalCourses}</CardContent></Card>
        <Card><CardContent>👨‍🏫 Total Instructors: {stats.totalInstructors}</CardContent></Card>
        <Card><CardContent>📅 Lectures Today: {stats.lecturesToday}</CardContent></Card>
        <Card><CardContent>❌ Missed Lectures: {stats.missedLectures}</CardContent></Card>
        <Card><CardContent>✅ Attendance Rate: {stats.attendanceRate}%</CardContent></Card>
      </div>

      {/* Upcoming Lectures */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Upcoming Lectures</h2>
        <ul className="bg-white rounded-xl shadow divide-y">
          {upcomingLectures.map(lec => (
            <li key={lec._id} className="p-3">
              <strong>{lec.courseName}</strong> - {lec.instructorName} - {new Date(lec.date).toLocaleString()} - {lec.status}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructor Availability */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Instructor Availability</h2>
        <p>🔴 Booked / 🟢 Available — fetched in real-time per instructor (can be implemented via color-coded tags)</p>
      </div>

      {/* Activity Log */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Activity Log</h2>
        <ul className="bg-white rounded-xl shadow divide-y">
          {activityLog.map(log => (
            <li key={log._id} className="p-2 text-sm">{log.message} ({new Date(log.timestamp).toLocaleString()})</li>
          ))}
        </ul>
      </div>

      {/* Conflict Warnings */}
      <div>
        <h2 className="text-xl font-semibold text-red-600 mb-2">Conflict Warnings</h2>
        <ul className="bg-red-100 rounded-xl p-3">
          {conflictWarnings.map((warn, i) => (
            <li key={i}>{warn}</li>
          ))}
        </ul>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold">Lectures per Course</h2>
          <BarChart width={400} height={250} data={chartData.lecturesPerCourse}>
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="lectures" fill="#8884d8" />
          </BarChart>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Attendance Trends</h2>
          <LineChart width={400} height={250} data={chartData.attendanceTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="attendance" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mt-4">
        <Button>➕ Add New Course</Button>
        <Button>➕ Add Instructor</Button>
        <Button>📆 Schedule Lecture</Button>
        <Button>🧾 View All Lectures</Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
