import { Main } from './pages';
import { Header } from './components';
import { AccountContextProvider } from './pages/AccountContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 function App() {
  return (
    <AccountContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
            <Main />
        } exact />
      </Routes>
    </Router>
    </AccountContextProvider>
  );
}

export default App;
