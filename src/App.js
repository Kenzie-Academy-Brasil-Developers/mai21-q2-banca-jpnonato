import {useState} from 'react'
import RegisterNewTransaction from './components/RegisterNewTransaction'
import TotalBalance from './components/TotalBalance'
import Transactions from './components/Transactions'
import './App.css';

function App() {

  const [list,setList] = useState([
    { title: "Salário", type: "Entrada", value: 2500 },
    { title: "Aluguel", type: "Saída", value: -800 },
  ])
  
  return (
    <div className="App">
      <header className="App-header">
        <RegisterNewTransaction  setList={setList} list={list}/>
        <Transactions list={list}/>
        <TotalBalance list={list}/>
      </header>
    </div>
  );
}

export default App;
