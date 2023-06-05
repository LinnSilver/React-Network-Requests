import './App.css';
import HTTPHooks from './components/HTTPHooks';
import HTTPPost from './components/HTTPPost';
import HTTPRequests from "./components/HTTPRequests";

function App() {
  return (
    <div className="App">
      <HTTPRequests />
      <HTTPPost />
      <HTTPHooks />
    </div>
  );
}

export default App;
