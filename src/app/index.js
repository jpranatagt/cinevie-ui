import React from 'react'

import { P_Routes } from '@pages'

import { U_useThemeContextProvider } from '@utils'

import Routes from './Routes'

const App = () => {
	return (
		<U_useThemeContextProvider>
			<Routes routes={P_Routes} />
		</U_useThemeContextProvider>
	)
}

export default App
