import React from 'react'

const Cart = () => {
    const name = ["Sanjay","Kumar",'HeloWeb3',"Elon mUsk","Jeff"]
  return (
    <div>
        <ol>
            {name.map((list)=> (<li key={list}>{list}</li>))}
        </ol>

        {name[0] === "Sanjay" ? <h1>Owner Name Found</h1>: <h1>Who the fuck is this</h1>}
    </div>
  )
}

export default Cart