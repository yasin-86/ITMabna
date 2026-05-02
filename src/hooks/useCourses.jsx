import { useEffect, useState } from "react";

function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchcourses() {
      try {
        const response = await fetch("http://localhost:3000/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchcourses();
  }, []);
  return { courses, loading, error };
}

export default useCourses;
