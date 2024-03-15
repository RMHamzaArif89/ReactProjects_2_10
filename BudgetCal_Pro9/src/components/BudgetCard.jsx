import React from 'react'

function BudgetCard({id,title,amount,expense,ProgressVal,setShow2,editItem}) {
    return (
        <div className="card d-flex flex-column justify-content-around p-3 my-3" style={{ height: '200px' }}>

          <div className="header d-flex align-items-center justify-content-between">
            <h1>{title}</h1>
            <div className="text">{expense}$/{amount}$</div>
          </div>
          <div className="progress">
            <div className={ProgressVal>=75?'progress-bar bg-danger':'progress-bar bg-primary'} role="progressbar" style={{width:`${ProgressVal}%`}} aria-valuenow={ProgressVal} aria-valuemin="0" aria-valuemax="100">{ProgressVal}%</div>
          </div>
          <div className="btns d-flex align-items-center gap-3">
            <div className="btn btn-danger" onClick={() => { editItem(id) }}>Add Expence</div>
            <div className="btn btn-dark" onClick={()=>{setShow2()}} >Add Budget</div>
          </div>



        </div>
      )
}

export default BudgetCard
