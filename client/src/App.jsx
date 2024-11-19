import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Path sesuai struktur file
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ChakraProvider } from '@chakra-ui/react/preset';

export default function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}