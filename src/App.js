import {loadStdlib} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { useEffect, useState } from 'react';
import { Home, Login, Signup, ConnectAccount, WritePost, MyBlogPosts } from './pages';
import { Header } from './components';
import { AccountContextProvider } from './pages/AccountContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Protected from './ProtectedRoute';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const fmt = (x) => reach.formatCurrency(x, 4);
 function App() {
  const isConnected = window.sessionStorage.getItem('user');
  const [account, setAccount] = useState({});
  return (
    <AccountContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <Protected isConnected={isConnected}>
            <Home reachsh={reach} account={account}/>
          </Protected>
        } exact/>
        <Route path="/login" element={<Login reachsh={reach}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/connect-account" element={<ConnectAccount account={account} setAccount={setAccount}/>} />
        <Route path="/write-post" element={
          <Protected isConnected={isConnected}>
            <WritePost account={account} setAccount={setAccount}/>
          </Protected>
          } />
        <Route path="/my-posts" element={
          <Protected isConnected={isConnected}>
            <MyBlogPosts />
          </Protected>
        } />
      </Routes>
    </Router>
    </AccountContextProvider>
  );
}

export default App;
