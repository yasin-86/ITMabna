import { useContext } from "react";
import Card from "./Card";
import { CoursesContext } from "../context/Coursecontext";

function Courselist() {
  const {courses} = useContext(CoursesContext);

  return (
    <div className="px-20">
      <h1 className="font-bold text-4xl mb-10">دوره های آموزشی:</h1>
      <div className="flex flex-wrap justify-between items-center gap-5 mb-10">
        {courses.map((item) => {
          return <Card title={item.title} price={item.price} imageUrl={item.imageUrl} key={item.id}/>;
        })}
      </div>
    </div>
  );
}

export default Courselist;
