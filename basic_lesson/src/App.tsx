import React, { useState, useEffect, FC } from "react"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import CleanUp from "./CleanUp"

const App: FC = () => {
	const [status, setStatus] = useState("text")
	const [input, setInput] = useState("")
	const [counter, setCounter] = useState(0)
	const [display, setDisplay] = useState(true)

	const onChangeHandler = (e: { target: HTMLInputElement }) => {
		setInput(e.target.value)
	}

	useEffect(() => {
		console.log(`useEffect in App.tsx invoked!`)
		document.title = `${counter}: the current value `
	}, [counter])
	return (
		<div className="App">
			<header className="App-header">
				<h4>{status}</h4>
				<button onClick={() => setStatus("text was set")}>change text</button>
				<h4>{input}</h4>
				<input type="text" value={input} onChange={onChangeHandler} />
				<h4>{counter}</h4>
				<button onClick={() => setCounter((preCounter) => ++preCounter)}>
					Increment
				</button>
				{display && <CleanUp />}
				<button onClick={() => {setDisplay(!display)}}>Toggle Display CurrentNum</button>
				<Counter />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<span>
					<span>Learn </span>
					<a
						className="App-link"
						href="https://reactjs.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						React
					</a>
					<span>, </span>
					<a
						className="App-link"
						href="https://redux.js.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Redux
					</a>
					<span>, </span>
					<a
						className="App-link"
						href="https://redux-toolkit.js.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Redux Toolkit
					</a>
					,<span> and </span>
					<a
						className="App-link"
						href="https://react-redux.js.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						React Redux
					</a>
				</span>
			</header>
		</div>
	)
}

export default App
