import React from 'react';
import Failed from '../../Pictures/transaction_failed.png'


function TransactionFailed() {
    return (
        <div className='h-screen flex flex-col relative'
        style={{backgroundImage: `url(${Failed}), linear-gradient(to bottom, #053C5A, #020716)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        </div>
    );
  }
  
  export default TransactionFailed;