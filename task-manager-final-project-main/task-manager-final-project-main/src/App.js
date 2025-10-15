/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  React Router Boiler Plate 
   FE Lab Week 16
*/

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import components
import Home from './Components/Home.js'
import TaskList from './Components/TaskList.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import Navbar from './Components/Navbar.js'

/** Instruction:
 *    This is a boiler plate, or a "starting point" for React Router.
 *    This boiler plate uses React Router 5.3. You MUST read and use the documentation
 *       for React Router 5.3 if you decide to use this boiler plate.
 *
 *    You are not required to use RR 5.3 for your final.
 *    You may use this boiler plate for your final if you want to.
 *
 */

/*------------------------ Creating a New Route ------------------------*/

/**
 * Step 1: npm install to install your node_modules folder
 * Step 2: npm start inside this project directory to see how the boiler plate is already set up.
 * Step 3: Rename: the Home and About components & routes to something you want
 *         to use for your final.
 * Step 4: Connect a third component so your nav now goes to three places instead
 *         of just two.
 *
 *         Make sure for this new component you have done the following:
 *           - Create a new <li></li> element in your nav component.
 *           - Put a <Link> component in that element with a name, and a to attribute.
 *           - Create a new <Route> component inside of your <Switch> component.
 *               It should sit on the upper level of the other two <Route> components.
 *               Make sure the syntax is the same as the other two components.
 *           - Test to make sure that all three components navigate correctly.
 */

/**
 * Main App Component - Task Management Application
 * 
 * This component sets up the React Router with multiple pages:
 * - Home: Dashboard with task statistics
 * - Tasks: Full task management with CRUD operations
 * - About: Information about the application
 * - Contact: Contact information
 * 
 * Features:
 * - React Router for navigation
 * - Bootstrap for styling
 * - API integration for CRUD operations
 * - Responsive design
 */
export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation component with Bootstrap styling */}
        <Navbar />
        
        {/* Main content area */}
        <main className="container-fluid">
          <Switch>
            {/* About page route */}
            <Route path="/about">
              <About />
            </Route>
            
            {/* Contact page route */}
            <Route path="/contact">
              <Contact />
            </Route>
            
            {/* Tasks management page route */}
            <Route path="/tasks">
              <TaskList />
            </Route>
            
            {/* Home/Dashboard page route (default) */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}
