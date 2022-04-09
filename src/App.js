import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Korzina from './components/Korzina/Korzina';
import Layout from './components/Layout/Layout';
import { Provider } from 'react-redux'
import store, { persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index  element={<Homepage />} />
              <Route path='/link' element={<Korzina />} />
            </Route> 
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
