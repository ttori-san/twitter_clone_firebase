import React, { useState, useEffect, FC } from "react"
import { increment } from "./features/counter/counterSlice"

const CleanUp: FC = () => {
	const [currentNum, setCurrentNum] = useState(0)
	const incrementNum = () => {
		console.log(`mouse event invoked!`)
		setCurrentNum((prevNum) => prevNum + 1)
	}
	useEffect(() => {
		console.log(`useEffect in CleanUp component invoked!`)
		window.addEventListener("mousedown", incrementNum)
		return () => {
			console.log(`Cleanup invoked!`)
			window.removeEventListener("mousedown", incrementNum)
		}
	}, [])

	return <div>{currentNum}</div>
}

export default CleanUp
