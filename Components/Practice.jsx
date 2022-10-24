import { useState } from "react";

const Practice = () => {
    const initialData={fullname:"",email:"",password:""}
    const [formValues,setFormValues]=useState(initialData)
    function handleSubmit (e){
        e.preventDefault()
    }
    function handleChange(e){
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})
        
    }
    const [textClass,setTextClass]=useState("p-2 outline-none rounded-md")
    return ( <>
    <pre>
        {JSON.stringify(formValues,undefined,2)}
    </pre>
    <form onSubmit={handleSubmit} className="flex flex-col text-center w-1/4 mx-auto rounded-lg bg-slate-200 gap-y-2 text-lg p-5 " >
        <h2 className="text-2xl">Sign Up</h2>
            <input type="text" name="fullname" value={formValues.fullname} onChange={handleChange} placeholder="Fullname" className={textClass} />
            <input type="text" name="email" value={formValues.email} onChange={handleChange} placeholder="Email" className={textClass}/>
            <input type="password" name="password" value={formValues.password} onChange={handleChange}placeholder="Password" className={textClass} />
            <input type="submit" value="Sign Up" className="bg-green-500 text-white rounded-md p-2"/>
    </form>
    </> );
}
 
export default Practice;