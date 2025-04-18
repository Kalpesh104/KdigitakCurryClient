import React from 'react';

const Lectures: React.FC = () => {
  const lectures = [
    { id: 1, instructor: 'John Doe', course: 'Intro to Programming', date: '04/03/2025', time: '06:00 pm to 08:00 pm', duration: '2 Hours' },
    { id: 2, instructor: 'Jane Smith', course: 'Data Structures', date: '06/03/2025', time: '12:00 pm to 01:30 pm', duration: '1 Hour 30 Minutes' },
    { id: 3, instructor: 'Mark Johnson', course: 'Algorithms', date: '07/03/2025', time: '10:00 am to 11:30 am', duration: '1 Hour 30 Minutes' },
    { id: 4, instructor: 'Emily White', course: 'Web Development', date: '06/03/2025', time: '04:00 pm to 06:30 pm', duration: '2 Hours 30 Minutes' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Lecture</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Lecture</button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Sr No.</th>
            <th className="border p-2">Instructor Name</th>
            <th className="border p-2">Course Name</th>
            <th className="border p-2">Lecture Date</th>
            <th className="border p-2">Lecture Time</th>
            <th className="border p-2">Duration</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {lectures.map((lecture, index) => (
            <tr key={lecture.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{lecture.instructor}</td>
              <td className="border p-2">{lecture.course}</td>
              <td className="border p-2">{lecture.date}</td>
              <td className="border p-2">{lecture.time}</td>
              <td className="border p-2">{lecture.duration}</td>
              <td className="border p-2 text-center">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lectures;
