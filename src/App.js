import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter.jsx';
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
          <AppRouter />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
