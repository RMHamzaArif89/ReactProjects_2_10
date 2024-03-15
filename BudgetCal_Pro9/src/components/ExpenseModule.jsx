import React from 'react'

function ExpenseModule({show2,setShow2,expense,setE,addExp }) {
  return (
    <>
    
    <div className="modal" style={{ display: show2 ? `block` : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" onClick={() => { setShow2()}}></button>
              </div>

              {/* form */}
              <form action="" className='p-4'>


                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Expense</label>
                  <input type="number" value={expense} className="form-control" id="exampleInput" onChange={(e) => {setE(e)}} />
                </div>

              </form>
              <div className="modal-footer">
                <button type="btn" className="btn btn-primary" onClick={() => {addExp()}}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ExpenseModule
