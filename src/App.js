
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Content} from './component/Content';

function App() {
  return (
    <div className="container-sm d-flex justify-content-center mt-sm-4 mt-2">
      <div className="content">
        <header>
          <h1 className='text-primary text-center'>BMI kalkulátor</h1>
        </header>
        <main>
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
