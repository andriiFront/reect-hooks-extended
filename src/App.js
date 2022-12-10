import Alert from './alert/Alert'
import Main from './Main'
import { AlertProvider } from './alert/AlertContext';


function App() {

  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}

export default App;
