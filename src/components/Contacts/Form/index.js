import {useState} from 'react'

const initialFormValues={fullname:'',phone_number:''};

function Form({addContacts,contacts}) {
    const [form,setForm]=useState(initialFormValues);
     
    const onChangeInput=(e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    }

    const formSubmit=(e)=>{
        e.preventDefault();
    if(form.fullname==='' || form.phone_number==='')   
    {
        return false;
    }

    addContacts([...contacts,form]);
    setForm(initialFormValues);

    }   



  return (
    <form onSubmit={formSubmit}>
        <div>
            <input name="fullname" 
            placeholder='add name' 
            onChange={onChangeInput}
            value={form.fullname}
            >

            </input>
        </div>
        <div>
            <input name="phone_number" 
            placeholder='add phone number' 
            onChange={onChangeInput}
            value={form.phone_number}
            >

            </input>
        </div>

         <div className='btn'>
                <button >Add</button>   
         </div>
        
        

    </form>
  )
}

export default Form