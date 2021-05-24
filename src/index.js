/**
 * @author Allen Liu
 * @desc A component of React Hook based on setTimeout and clearTimeout that supports multi-timeout management.
 */
import { useRef, useEffect } from 'react'
export default () => {
	const ids = useRef([])
	//set timeout
	function setTimeout() {
		let id = window.setTimeout.apply(null, arguments)
		ids.current.push(id)
		return id
	}
	//clear timeout
	function clearTimeout(id) {
		if (typeof id !== 'number') return
		for (let i = 0, len = ids.current.length; i < len; i++) {
			if (ids.current[i] == id) {
				window.clearTimeout(id)
				ids.current.splice(i, 1)
				break
			}
		}
	}
	useEffect(() => {
		return () => {
			//remove all
			ids.current.length > 0 && ids.current.map(window.clearTimeout)
		}
	}, [])
	return {
		setTimeout,
		clearTimeout
	}
}
