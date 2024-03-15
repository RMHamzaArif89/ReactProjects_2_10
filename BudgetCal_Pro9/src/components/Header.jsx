import React from 'react'

function Header({setShow}) {
  return (
    <>
    <div className="header d-flex justify-content-around bg-danger">
          <h1>Budgets</h1>
          <div className="btns d-flex align-items-center gap-3">
            <div className="btn btn-primary">Add Expence</div>
            <div className="btn btn-secondary" onClick={()=>{setShow()}}>Add Item</div>
          </div>
        </div>
    </>
  )
}

export default Header
