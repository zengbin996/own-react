import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';

export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
