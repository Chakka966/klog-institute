import React, { useEffect, useState } from "react";
import db  from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const UserCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const courseList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(courseList);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h3>{course.name}</h3>
              <p>Description: {course.description}</p>
              <p>Duration: {course.duration}</p>
              <p>Fees: {course.fees}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserCourses;
