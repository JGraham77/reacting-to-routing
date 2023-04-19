import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Films from './routes/Films';
import FilmDetails from './routes/FilmDetails';
import PersonDetails from './routes/PersonDetails';
import People from './routes/People';
import Locations from './routes/Locations';
import LocationDetails from './routes/LocationDetails';

const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container m-2">
                <div className="row justify-content-center">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/films' element={<Films />} />
                        <Route path='/films/:filmid' element={<FilmDetails />} />
                        <Route path='/people' element={<People />} />
                        <Route path='/people/:personid' element={<PersonDetails />} />
                        <Route path='/locations' element={<Locations />} />
                        <Route path='/locations/:locationid' element={<LocationDetails />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;