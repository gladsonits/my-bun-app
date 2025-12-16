import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from '@/components/ui/button';

import './App.css';

function App() {
   const [message, setMessage] = useState('');

   useEffect(() => {
      fetch('api/hello')
         .then((res) => res.json())
         .then((data) => setMessage(data.message))
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="p-4">
         <p className="font-bold text-3xl">{message}</p>
         <Button>Click me</Button>
      </div>
   );
}

export default App;
