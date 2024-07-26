import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Languages from './Languages';
import Experience from './Experience';

const Home = () => (
    <div>
        <Hero />
        <About />
        <Languages />
        <Projects />
        <Experience />
    </div>
);

export default Home;