import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Medicines from './pages/Medicines';
import AddMedicine from './pages/AddMedicine';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/medicines">
          <Medicines />
        </Route>

        <Route path="/add-medicine">
          <AddMedicine />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
