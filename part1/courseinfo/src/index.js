import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>
const Part = ({part, exercises}) => {
  return <>
    <p>{part}  {exercises}</p>
  </>
}
const Content = ({parts}) => {
	const lists = parts.map(function(Elem) {
		return (
			<div>
				<Part part={Elem.name} exercises={Elem.exercises}/>
			</div>
		)
	})
	
	return lists
};

const Total = ({parts}) => {
  let R = 0
  const sum = parts.map(function(part){
    R = R + part.exercises
    return R
  })
  return (<p>Number of exercises: {sum[sum.length-1]}</p>)
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>

    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))