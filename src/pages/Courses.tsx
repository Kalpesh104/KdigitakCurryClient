import React from 'react';

const Courses= () => {
  const courses = [
    { id: 1, name: 'Introduction to Programming', level: 'Beginner', description: 'Learn the basics of programming.' },
    { id: 2, name: 'Data Structures', level: 'Intermediate', description: 'Study advanced data structures and algorithms.' },
    { id: 3, name: 'Algorithms', level: 'Intermediate', description: 'Deep dive into complex algorithms.' },
    { id: 4, name: 'Web Development', level: 'Advance', description: 'Master the principles of object-oriented programming.' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Course</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Course</button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Sr No.</th>
            <th className="border p-2">Course Name</th>
            <th className="border p-2">Course Level</th>
            <th className="border p-2">Course Description</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{course.name}</td>
              <td className="border p-2">{course.level}</td>
              <td className="border p-2">{course.description}</td>
              <td className="border p-2 text-center">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;