import React from 'react';
import Home from './views/Home';
import PublicNavigation from './navigation/PublicNavigation';

function App() {
  return (
    <div className="App">
      <PublicNavigation />
      <Home />
    </div>
  );
}

export default App;
