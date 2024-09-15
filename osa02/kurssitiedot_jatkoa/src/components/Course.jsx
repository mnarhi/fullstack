const Course = ({ course }) => {    

    const Header = ({ name }) => {
    return (
      <div>
        <h2>{name}</h2>
      </div>
      )
    }
  
    const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
      )
    }
  
    const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
      )
    }

    const Total = ({ parts }) => {
      const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
      return (
        <p><strong>total of {totalExercises} exercises</strong></p>
      )
    }

    return (
      <div>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
      </div>
    )
}

export default Course