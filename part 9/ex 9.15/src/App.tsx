import Header from "./components/header";
import Content from './components/content';
import Total from './components/total';
import { CoursePart } from "./types/CourseParts";


export const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the easy course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the hard course part",
    type: "normal"
  },
   {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
  }
]
const App = () => {
  const courseName = "Half Stack application development";
  

  return (
    <div>
      <Header name = {courseName}/>
      <Content courseparts = {courseParts}/>

      <Total courseparts = {courseParts}/>
    </div>
  );
};

export default App;