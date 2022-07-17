import React, { useEffect } from 'react';
import './tailwind.output.css'
import './App.css';
import NavBar from './app/components/NavBar';
import Footer from './app/components/Footer';
import Home from './app/pages/Home';
import CrewPage from './app/pages/CrewPage';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectCompany } from './features/company/selectors';
import { selectCrew } from './features/crew/selectors';
import { getCrew } from './features/crew/actions';


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import ScrollReveal from './utils/ScrollReveal';
import { getCompany } from './features/company/actions';


function App() {

    const dispatch = useAppDispatch();
    const companyData = useAppSelector(selectCompany);
    const crewData = useAppSelector(selectCrew);

    useEffect(() => {
        dispatch(getCrew());
        dispatch(getCompany());
    }, [dispatch]);

    return (
        <Router>
            <ScrollReveal delay={600}>
                <div className="App font-lato flex flex-col h-screen">
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home companyData={companyData} crewData={crewData}/>}/>
                        <Route path="/crew" element={<CrewPage crewData={crewData}/>}/>
                    </Routes>
                    <Footer links={companyData?.links}/>
                </div>
            </ScrollReveal>
        </Router>
    );
}

export default App;
