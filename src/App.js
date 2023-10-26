import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/common/Header';
import Routes from './routes';
import { NewsFeedProvider } from './Context/NewsFeedContext';
import { TokenProvider } from './Context/TokenContext'; // Import your context

function App() {
  return (
    <Router>
    <TokenProvider>
      <NewsFeedProvider>
        <Header />
        <Routes />
        {/* Other components or routes */}
      </NewsFeedProvider>
      </TokenProvider>
    </Router>
  );
}

export default App;
