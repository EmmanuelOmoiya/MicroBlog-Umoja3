import { ConnectAccount, Sub, Main } from './pages';
import { Header } from './components';
import { AccountContextProvider } from './pages/AccountContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Protected from './ProtectedRoute';
 function App() {
  const isConnected = window.sessionStorage.getItem('user');
  return (
    <AccountContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/connect-account" element={<ConnectAccount />} />
        <Route path="/" element={
          <Protected isConnected={isConnected}>
            <Main />
          </Protected>
        } exact />
      </Routes>
    </Router>
    </AccountContextProvider>
  );
}

export default App;
