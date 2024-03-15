import { useRef, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [cardId, setCardId] = useState('')

  let [expense, setExpense] = useState('')
  let [show, setShowModule] = useState(false)
  let [show2, setShowModule2] = useState(false)


  let [addCard, setAddCard] = useState([])

  let [title, setTitle] = useState('')
  let [amount, setAmount] = useState('')



  let addBudgetCard = (e) => {
    console.log('add')

    e.preventDefault()

    let t = title;
    let a = amount
    setAddCard((pre) => [...pre, { name: t, amount: a,expense:''}])




  }




  const addBud = () => {


  }
  let [val, setVal] = useState('')
  const addExp = () => {
    // console.log('addexpense')
    setAddCard(
      addCard.map((elem, i) => {
        
        if (i === cardId) {
          setVal(expense*100/elem.amount)
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
        <div className="header d-flex justify-content-around bg-danger">
          <h1>Budgets</h1>
          <div className="btns d-flex align-items-center gap-3">
            <div className="btn btn-primary">Add Expence</div>
            <div className="btn btn-secondary" onClick={() => { setShowModule(!show) }}>Add Item</div>
          </div>
        </div>

        <div className="container w-50">
          {addCard.map((item, index) => {
          // if(item.expense!==isNaN){
            let ProgressVal=item.expense/item.amount*100
          // }
            return (
              <div className="card d-flex flex-column justify-content-around p-3 my-3" style={{ height: '200px' }}>

                <div className="header d-flex align-items-center justify-content-between">
                  <h1>{item.name}</h1>
                  <div className="text">{item.expense}$/{item.amount}$</div>
                </div>
                <div className="progress">
                  <div className={ProgressVal>=75?'progress-bar bg-danger':'progress-bar bg-primary'} role="progressbar" style={{width:`${ProgressVal}%`}} aria-valuenow={ProgressVal} aria-valuemin="0" aria-valuemax="100">{ProgressVal}%</div>
                </div>
                <div className="btns d-flex align-items-center gap-3">
                  <div className="btn btn-danger" onClick={() => { editItem(index) }}>Add Expence</div>
                  <div className="btn btn-dark" onClick={()=>{setShowModule(!show)}} >Add Budget</div>
                </div>



              </div>
            )
          })}

        </div>





        <div className="modal" style={{ display: show ? `block` : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" onClick={() => { setShowModule(!show) }}></button>
              </div>

              {/* form */}
              <form action="" className='p-4'>

                <div className="mb-3">
                  <label for="exampleInput" className="form-label">Title</label>
                  <input type="text" value={title} className="form-control" id="exampleInput" onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Budget</label>
                  <input type="number" value={amount} className="form-control" id="exampleInput" onChange={(e) => { setAmount(e.target.value) }} />
                </div>

              </form>
              <div className="modal-footer">
                <button type="btn" className="btn btn-primary" onClick={addBudgetCard}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
















        {/* form 2 */}



        <div className="modal" style={{ display: show2 ? `block` : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" onClick={() => { setShowModule2(!show2) }}></button>
              </div>

              {/* form */}
              <form action="" className='p-4'>


                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Expense</label>
                  <input type="number" value={expense} className="form-control" id="exampleInput" onChange={(e) => { setExpense(e.target.value) }} />
                </div>

              </form>
              <div className="modal-footer">
                <button type="btn" className="btn btn-primary" onClick={() => { addExp() }}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>


















    </>
  )
}

export default App
