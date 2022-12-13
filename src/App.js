import { useEffect, useState } from "react";
import { getLessons } from "./api";
import "./App.css";

function App() {
  const [lessonData, setLessonData] = useState([]);
  useEffect(() => {
    getLessons().then((data) => {
      setLessonData(data[0].lesson_data);
    });
  }, []);
  console.log(lessonData);
  return (
    <div className="App">
      {lessonData.map((tags) => {
        return (
          <ul>
            <li>{tags.text}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
