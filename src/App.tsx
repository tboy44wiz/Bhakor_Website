import './App.css';
import { RouterProvider } from 'react-router'
import routes from './routes/router';

function App() {

  return (
    <main className="h-screen w-full bg-gray-100 overflow-x-hidden overflow-y-auto
      [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-green-700
    ">
      <RouterProvider router={routes} />
    </main>
  )
}

export default App;
