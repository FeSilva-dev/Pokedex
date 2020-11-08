import react from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Index from './components/index'
import Pokedex from './components/page'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Index} path="/" exact/>
            <Route component={Pokedex} path="/pokedex" />
        </BrowserRouter>
    )
}

export default Routes