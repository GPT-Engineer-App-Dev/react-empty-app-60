import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from './integrations/supabase/auth.jsx';
import { Button } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        {session ? (
          <Button onClick={logout} colorScheme="teal" size="sm">Logout</Button>
        ) : (
          <Button as="a" href="/login" colorScheme="teal" size="sm">Login</Button>
        )}
      </div>
    </Router>
  );
}

export default App;