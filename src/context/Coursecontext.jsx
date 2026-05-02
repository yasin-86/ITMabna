import { createContext } from "react";
import useCourses from "../hooks/useCourses";

export const CoursesContext = createContext();
export function CourseProvider({children}) {
    const {courses , loading , error} = useCourses()

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error loading courses</div>
    }
    return(
        <CoursesContext.Provider value={{courses}}>
            {children}
        </CoursesContext.Provider>
    )
}