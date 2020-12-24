import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import ActivePageProvider from './contexts/ActivePageContext';
import SearchItemsProvider from './contexts/SearchItemsProvider';
import Main from './screens/main';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <ActivePageProvider>
        <SearchItemsProvider>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </SearchItemsProvider>
      </ActivePageProvider>
    </Provider>
  );
}

export default App;
