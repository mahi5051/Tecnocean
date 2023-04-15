import React from 'react';
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventScreen from './screens/EventScreen';

function App() {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/event/:id" element={<EventScreen />} exact />
        </Routes>
      </Container>
    </main>
  </Router>
  );
}

export default App;
