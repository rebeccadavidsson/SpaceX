import React, { useEffect } from 'react';
import './tailwind.output.css'
import './App.css';
import NavBar from './app/components/NavBar';
import Footer from './app/components/Footer';
import Home from './app/pages/Home';
import CrewPage from './app/pages/CrewPage';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectCompany } from './features/company/selectors';
import { getCompany } from './features/company/actions';
import { selectCrew } from './features/crew/selectors';
import { getCrew } from './features/crew/actions';


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


function App() {

    const dispatch = useAppDispatch();
    const companyData = useAppSelector(selectCompany);
    const crewData = useAppSelector(selectCrew);

    useEffect(() => {
        dispatch(getCompany());
        dispatch(getCrew());
    }, [dispatch]);


    return (
        <Router>
            <div className="App font-lato flex flex-col h-screen justify-between">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home companyData={companyData} crewData={crewData}/>} />
                    <Route path="/crew" element={<CrewPage crewData={crewData}/>} />

                </Routes>
                <Footer links={companyData?.links}/>
            </div>
        </Router>
    );
}

export default App;
