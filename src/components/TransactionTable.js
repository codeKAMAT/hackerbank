import React,{useState} from "react";
import "./index.css"

function TransactionTable({txns}) {

  const [taxesList,setTaxesList] = useState(txns)

  const sort = (e,amount=false) => {
    const pickdate = document.getElementById('date')

    if(!amount){
      setTaxesList(
        txns.filter((item,index)=>{
          // console.log('compare date',String(item.date) === String(pickdate.value))
          return String(item.date) === String(pickdate.value)
        })
      )
    }else{
      //sort by amount ascending
      setTaxesList(
        txns.sort(function(x,y){
          return y.amount - x.amount
        }).map((item)=>item)
      )
    }
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue="2019-11-29" onChange=""  />
        <button className="small" onClick={e=>sort(e)}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header" onClick={e=>sort(e,true)}>
                      <span id="amount" >Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              
              <tbody>
              {taxesList.map((item,index)=>
              <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td>{item.type === 1 ? "Debit" : "Credit"}</td>
                  <td>{item.amount}</td>
                  <td>{item.balance}</td>
              </tr>
              )}
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
