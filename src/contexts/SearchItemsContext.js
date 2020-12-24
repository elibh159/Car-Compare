import { createContext, useState } from 'react';
export const SearchItemsContext = createContext(null);

const SearchItemsProvider = (props) => {
  const [searchItems, setSearchItems] = useState({
    color: "",
    price: ""
  });
  return (
    <SearchItemsContext.Provider value={[searchItems, setSearchItems]}>
      {props.children}
    </SearchItemsContext.Provider>
  )
}
export default SearchItemsProvider;