import { createContext, useState } from 'react';
export const ActivePageContext = createContext(null);

export const ActivePageProvider = (props) => {
  const [activePage, setActivePage] = useState("SearchForm");
  return (
    <ActivePageContext.Provider value={[activePage, setActivePage]}>
      {props.children}
    </ActivePageContext.Provider>
  )
}