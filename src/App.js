import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import ContentScreen from './components/ContentScreen';
import MapScreen from './components/MapScreen';
import ProfileScreen from './components/ProfileScreen';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={
            <>
              <HomeScreen />
              <BottomNavigation />
            </>
          } />
          <Route path="/chat" element={
            <>
              <ChatScreen />
              <BottomNavigation />
            </>
          } />
          <Route path="/content" element={
            <>
              <ContentScreen />
              <BottomNavigation />
            </>
          } />
          <Route path="/map" element={
            <>
              <MapScreen />
              <BottomNavigation />
            </>
          } />
          <Route path="/profile" element={
            <>
              <ProfileScreen />
              <BottomNavigation />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
