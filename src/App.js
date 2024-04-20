import Home from './components'
import { HashRouter ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
