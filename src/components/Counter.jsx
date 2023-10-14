import React, { useState } from 'react'

const Counter = () => {
    var initialNumber=0;
    const [state,setState]=useState(initialNumber);
    const inc=()=>{
        setState(state+1);
    }
    const dec=()=>{
        setState(state>0?state-1:0);
        
    }
  return (
    <div>
        {/* Output */}
        <p className='text-center fs-1'>{state}</p>

        <div className="row">

            {/* Increment */}

            <div className="col-sm-6 mb-3 mb-sm-0 ">
                <div className="card bg-success text-white m-5 text-center" id="inc" onClick={()=>{inc()}}>
                    <div className="card-body">
                        <h5 className="card-title">Increment</h5>
                    </div>
                </div>
            </div>
            
            {/* Decrement */}

            <div className="col-sm-6">
                <div className="card bg-danger text-white m-5 text-center" id="dec" onClick={()=>{dec()}}>
                    <div className="card-body">
                        <h5 className="card-title">Decrement</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter