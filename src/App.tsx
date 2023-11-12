import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from '@modules/main/Main';
import { useWindowSize } from '@app/hooks/useWindowSize';
import { calculateWindowSize } from '@app/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setWindowSize } from '@app/store/reducers/ui';

import Dashboard from '@pages/Dashboard';
import Blank from '@pages/Blank';
import Messages from './pages/Messages';
import SubMenu from '@pages/SubMenu';
import Profile from '@pages/profile/Profile';

import { setAuthentication } from './store/reducers/auth';
import {
  GoogleProvider,
  getAuthStatus,
  getFacebookLoginStatus,
} from './utils/oidc-providers';

declare const FB: any;

const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();
  const [isAppLoading, setIsAppLoading] = useState(true);

  const checkSession = async () => {
    try {
      let responses: any = await Promise.all([
        getFacebookLoginStatus(),
        GoogleProvider.getUser(),
        getAuthStatus(),
      ]);

      responses = responses.filter((r: any) => Boolean(r));

      if (responses && responses.length > 0) {
        dispatch(setAuthentication(responses[0]));
      }
    } catch (error: any) {
      console.log('error', error);
    }
    setIsAppLoading(false);
  };

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  if (isAppLoading) {
    return <p>Loading</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/sub-menu-2" element={<Blank />} />
            <Route path="/sub-menu-1" element={<SubMenu />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile"   element={<Profile />} />
            <Route path="/" element={<Profile />} />
          </Route>
      </Routes>
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default App;
