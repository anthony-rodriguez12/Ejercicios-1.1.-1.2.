import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>
const Content = () => {
  const Lists = List.map( 
    function(List){
      return (
        <div key={List.exercises.toString()}>
          <Part part={List.part} exercises={List.exercises} />
        </div>
      )
    }
  )
  return Lists
}

const Part = ({part, exercises}) => {
  return <>
    <p>{part}  {exercises}</p>
  </>
}

const List = [
  {id: 1,
  part: 'Fundamentals of React',
  exercises: 10
  },
  {id: 2,
  part: 'Using props to pass data',
  exercises: 7
  },
  {id: 3,
  part:'State of a component',
  exercises: 14
  }
]
const Total = () => {
  const L = List.map(function(List){ 
      return (List.exercises)
    }
  )
  const R = L[0] + L[1] + L[2]

  return  <p> Number of exercises {R}</p>
}


const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content></Content>

      <Total />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))