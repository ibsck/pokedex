import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: FunctionComponent = () => {
    return (
        <Router>
            <div>
                { /*la barre de navigation*/ }
                <nav>
                    <div className="nav-wrapper teal">
                        <a href="/" className="brand-logo center">Pokédex</a>
                    </div>
                </nav>

                { /*le contenu de la page*/ }
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route exact path="/pokemons/:id" component={PokemonsDetail} />
                </Switch>
            </div>
                    
        </Router>
    )
}

export default App;