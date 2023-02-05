import './App.css';
import Cover from './component/Cover';
import MyDocument from './component/MyDocument';
import Header from './component/Header';



function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Cover />
      </div>
    </>
  );
 
}

export default App;
