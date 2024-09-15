import Course from './components/Course'
const App = ({ courses }) => {

  console.log(courses)

  return (
    <div>
      <h1>{'Web development'}</h1>
      {courses.map((course) => (
      <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App
