import React, { createContext, useState } from 'react';

const NewsFeedContext = createContext();

const NewsFeedProvider = ({ children }) => {
  // Load the user preferences from local storage
  const savedPreferences = JSON.parse(localStorage.getItem('userPreferences'));

  const [userPreferences, setUserPreferences] = useState(savedPreferences || {
    source1: '',
    source2: '',
    source3: '',
  });

  return (
    <NewsFeedContext.Provider value={{ userPreferences, setUserPreferences }}>
      {children}
    </NewsFeedContext.Provider>
  );
};

export { NewsFeedContext, NewsFeedProvider };
