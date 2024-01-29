import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu'; // Import your Menu component
import Header from './components/Header'; // Import the new Header component
import EmployeeHome from './components/EmployeeHome'; // Import the EmployeeHome component

function App() {
  const isLoggedIn = false; // Replace with your actual login logic

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header isLoggedIn={isLoggedIn} /> {/* Use the Header component */}
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Menu /> : <LoginForm />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/EmployeeHome" element={<EmployeeHome />} />
            {/* Other routes for your app */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
