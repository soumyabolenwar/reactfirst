import './FormSubscription.css';
import {useState} from 'react';
const FormSubscription=(props)=>{
    //const [userTitle,setUserTitle]=useState("");
    //const [userDate,setUserDate]=useState("");
    //const [userAmount,setUserAmount]=useState("");
    const [form,setForm]=useState({userTitle:'Enter Subscription Title',userDate:'',userAmount:'Enter Amount'})
    const titleChangeHandler=(events)=>{
        //setUserTitle(events.target.value)
        //setForm({...form,userTitle:events.target.value})
        setForm=((prevState)=>{
          return {...prevState,userTitle:events.target.value}
        })
        console.log(form)
    }
    const dateChangeHandler=(events)=>{
        //setUserDate(events.target.value)
        //setForm({...form,userDate:events.target.value})
        setForm=((prevState)=>{
          return {...prevState,userDate:events.target.value}
        })
        console.log(form)
      }
    const amountChangeHandler=(events)=>{
        //setUserAmount(events.target.value)
        //setForm({...form,userAmount:events.target.value})
        setForm=((prevState)=>{
          return {...prevState,userAmount:events.target.value}
        })
        console.log(form)
      }
      const submitHandler=(events)=>{
        events.preventDefault();
        const Subscripion={title:form.userTitle,amount:form.userAmount,date:new Date(form.userDate)};
        props.onSave(Subscripion)
        console.log("on submit",Subscripion)
      }
return(
    <form onSubmit={submitHandler}>
        <div className="new_subscription_controls">
          <div className="new_subscription_control">
            <label>Title</label>
            <input type="text" value={form.userTitle} onChange={titleChangeHandler}></input>
          </div>
          <div className="new_subscription_control">
            <label>Date</label>
            <input type="date" value={form.userDate} onChange={dateChangeHandler}></input>
          </div>
          <div className="new_subscription_control">
            <label>Amount</label>
            <input type="text" value={form.userAmount} onChange={amountChangeHandler}></input>
          </div>
        </div>
          <div className="new_subscription_actions">
             <button type="submit">Add Subscripion</button>
          </div>
       
    </form>
)
}
export default FormSubscription