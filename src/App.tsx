import './App.css';
import {  routes } from './router';
import { RouterProvider } from 'react-router';
function App() {
  return (
    <div className="App">
        <RouterProvider router={routes} fallbackElement={<></>} />
    </div>
  );
}

export default App;
