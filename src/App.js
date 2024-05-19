import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MedicinesPage from './pages/MedicinesPage';
import AddMedicinePage from './pages/AddMedicinePage';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/medicines">
          <MedicinesPage />
        </Route>

        <Route path="/add-medicine">
          <AddMedicinePage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
