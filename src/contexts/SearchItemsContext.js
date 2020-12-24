import { createContext, useState } from 'react';
export const SearchItemsContext = createContext(null);

export const SearchItemsProvider = (props) => {
  const [searchItems, setSearchItems] = useState({
    color: "",
    price: "",
    availability: false
  });
  return (
    <SearchItemsContext.Provider value={[searchItems, setSearchItems]}>
      {props.children}
    </SearchItemsContext.Provider>
  )
}