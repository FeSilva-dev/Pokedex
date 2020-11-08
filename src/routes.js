import react from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Pokedex from './components/page'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Pokedex} path="/" exact/>
        </BrowserRouter>
    )
}

export default Routes