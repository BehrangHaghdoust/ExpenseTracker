import './App.css';
import Header from './components/Header'
import {Balance} from './components/Balance'
import IncomeEspenses from './components/IncomeEspenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState'

const App =() =>{
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeEspenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
