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
 function App() {
  const isConnected = window.sessionStorage.getItem('user');
  return (
    <AccountContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <Protected isConnected={isConnected}>
            <Home />
          </Protected>
        } exact/>
        <Route path="/connect-account" element={<ConnectAccount />} />
        <Route path="/write-post" element={
          <Protected isConnected={isConnected}>
            <WritePost />
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
