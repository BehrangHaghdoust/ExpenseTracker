import './App.css';
import Header from './components/Header'
import {Balance} from './components/Balance'
import IncomeEspenses from './components/IncomeEspenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './AddTransaction';

const App =() =>{
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeEspenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
