import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Approutes';
import { AuthInfoProvider } from './state/UserAuthInfoState';

function App() {
  return (
    <AuthInfoProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthInfoProvider>
  );
}
export default App;