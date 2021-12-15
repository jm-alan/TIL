import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import { Load } from './store/session';

export default function App () {
  const dispatch = useDispatch();

  const loaded = useSelector((state: State) => state.session.loaded);

  useEffect(() => {
    dispatch(Load());
  }, [dispatch]);

  return (loaded && (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )) || null;
}
