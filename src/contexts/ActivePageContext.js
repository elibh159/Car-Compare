import { createContext, useState } from 'react';
export const ActivePageContext = createContext(null);

const ActivePageProvider = (props) => {
  const [activePage, setActivePage] = useState("");
  return (
    <ActivePageContext.Provider value={[activePage, setActivePage]}>
      {props.children}
    </ActivePageContext.Provider>
  )
}
export default ActivePageProvider;