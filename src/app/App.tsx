import { useEffect } from 'react'

import Loading from '../components/Loading'
import LoginPage from '../pages/login/LoginPage'
import HomePage from '../pages/home/HomePage'
import useStore from '../store/useStore'
import { AuthState } from '../store/createAppSlice'

const App = () => {
	const { authState, isLoggedIn } = useStore((state) => state)

	useEffect(() => {
		isLoggedIn()
	}, [isLoggedIn])

	switch (authState) {
		case AuthState.loading:
			return <Loading />
		case AuthState.authenticated:
			return <HomePage />
		case AuthState.unauthenticated:
			return <LoginPage />
	}
}

export default App
