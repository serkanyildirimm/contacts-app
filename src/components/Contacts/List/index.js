import  { useState } from 'react'

function List({contacts}) {
  const [filterText,setFilterText]=useState("");

    const filtered=contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{
      return item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    })
  })

  
  return (
    <div>
      <input placeholder='filter contact'
        value={filterText} 
        onChange={(e)=>setFilterText(e.target.value)}
        >
        </input>



      <ul id="list">
        
        <h3>TOTAL CONTACT ({filtered.length})</h3>
        <div id="header">
          <li>
            <h4>Name</h4>
          </li>
          <li>
            <h4>Number</h4>
          </li>
        </div>
        {filtered.map((contact,i)=>
        <li key={i}>
        

          <span>
            {contact.fullname}
          </span>

          <span>
           {contact.phone_number}
          </span>

        </li>)}
      </ul>


    </div>
  )
}

export default List