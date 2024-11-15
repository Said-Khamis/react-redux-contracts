import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//inimport './index.css' 
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import NoFoundPage from './components/error/NoFoundPage.jsx';
import Home from './components/home/Home.jsx';
import Contracts from './components/home/contracts/Contracts.jsx';
import { Provider } from 'react-redux';
import  store  from './redux/store/store';
import ContractDetails from './components/home/contracts/ContractDetails.jsx';

const router = createBrowserRouter([
    {
      path : "/",
      element: <App />
    },
    {
      path : "*",
      element: <NoFoundPage />
    },
    {
      path : "/home",
      element: <Home />
    },
    {
      path : "/contracts",
      element: <Contracts />
    },
    {
      path: "contracts/:contractId/show",
      element: <ContractDetails />
    },
    {
      path : "/settings",
      element: <Home />
    }        
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
        <RouterProvider router={router}/>   
      </Provider>
  </StrictMode>,
)
