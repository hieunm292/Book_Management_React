import { Routes, Route } from 'react-router-dom'
import FormPage from './page/FormPage'
import SearchPage from './page/SearchPage'
import NavBar from './component/NavBar'

const App = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<NavBar />}>
					<Route path={'/search'} element={<SearchPage />} />
					<Route path={'/form'} element={<FormPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
