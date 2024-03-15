import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header';
import BudgetModel from './components/BudgetModel';
import BudgetCard from './components/BudgetCard';
import ExpenseModule from './components/ExpenseModule';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [cardId, setCardId] = useState('')

  let [expense, setExpense] = useState('')
  let [show, setShowModule] = useState(false)
  let [show2, setShowModule2] = useState(false)


  let [addCard, setAddCard] = useState([])

  let [title, setTitle] = useState('')
  let [amount, setAmount] = useState('')



  let addBudgetCard = () => {
    

    // e.preventDefault()

    let t = title;
    let a = amount
    setAddCard((pre) => [...pre, { name: t, amount: a,expense:''}])




  }




  let setShow=()=>{
 
    setShowModule(!show)
  }
  let setShow2=()=>{
    
    setShowModule2(!show2)
  }

  let setE=(e)=>{
    setExpense(e.target.value)
  }



 
  const addExp = () => {
  
    setAddCard(
      addCard.map((elem, i) => {
        
        if (i === cardId) {
         
          return { ...elem, name: elem.name, amount: elem.amount, expense: expense }
          
        }
        return elem;
      })
    )
    

  }




  let editItem = (id) => {
    setCardId(id)
    setShowModule2(!show)

  }



  return (
    <>
      <div className="con">
        
    <Header setShow={setShow} />





{/* card */}
        <div className="container w-50">
          {addCard.map((item, index) => {
          // if(item.expense!==isNaN){
            let ProgressVal=item.expense/item.amount*100
          // }
            return(
              <BudgetCard ProgressVal={ProgressVal}
               title={item.name} id={index} amount={item.amount}  expense={item.expense}
                editItem={editItem} setShow2={setShow2}/>
            )
          })}

        </div>





       {/* BodgetModule */}

<BudgetModel addBudgetCard={addBudgetCard} show={show}
 title={title} amount={amount} setTitle={setTitle}
  setAmount={setAmount} setShowModule={setShowModule}/>













        {/* form 2 */}
     <ExpenseModule show2={show2} setShow2={setShow2} 
     expense={expense} setE={setE}
      addExp={addExp}/>


      </div>




    </>
  )
}

export default App
