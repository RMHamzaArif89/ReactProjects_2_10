import React from 'react'

function BudgetModel({addBudgetCard,show,title,amount,setTitle,setAmount,setShowModule}) {
  return (
    <>
     <div className="modal" style={{ display: show ? `block` : 'none'}}>
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


    </>
  )
}

export default BudgetModel
