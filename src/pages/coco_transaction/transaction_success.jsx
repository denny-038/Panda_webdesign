import React from 'react';
import Sucess from '../../Pictures/transaction_succes.gif'

function TransactionSuccess() {
    return (
        <div className='h-screen flex flex-col relative'
        style={{backgroundImage: `url(${Sucess}), linear-gradient(to bottom, #053C5A, #020716)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        </div>
    );
  }
  
  export default TransactionSuccess;