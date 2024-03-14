import './App.css';
import Counter from './components/counter/Counter';
import CounterProvider from './context/CounterProvider';
// import CountriesList from './components/countries/CountriesList';

function App() {
  return (
  <>
  <CounterProvider>
  <div className="container">
    {/* <CountriesList /> */}
    <Counter />
  </div>

  </CounterProvider>
  
  </>
  );
}

export default App;
