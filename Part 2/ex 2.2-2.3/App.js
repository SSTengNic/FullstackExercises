

const Header =({course}) => {
  return (
  <>
    <h1>
      {course.name}
    </h1>
  </>
  )
}

const Parts =({parts,Num})=> {
  console.log("Num is", Num)
  return(
    <>
    <p>
      {parts.name} {parts.exercises}
    </p>
    </>
  )

}

const Content = ({parts})=> {
  return(
    <>
      {parts.map(parts => 
        <Parts key = {parts.id} parts = {parts}/>
      )}
    </>
  )
}

const Total =({parts})=> {
  var total = parts.reduce(function(start,part)
   {
    return part.exercises+start
  },0)

  return(
    <>
    <b>
      total of {total} exercises
    </b>
    </>
  )
}

const Course = ({course}) => {
  return(
    <div>
    <Header course = {course}/>
    <Content parts = {course.parts}/>
    <Total parts = {course.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
  <Course course={course} />
  )
}

export default App