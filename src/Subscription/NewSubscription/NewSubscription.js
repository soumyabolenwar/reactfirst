import './NewSubscription.css';
import FormSubscription from './FormSubscription';
const NewSubscription=(props)=>{
    const onSaveHandler=(data)=>{
       const SubscripionData={...data,id:Math.random().toString()};
       props.onAddSubscription(SubscripionData);
       console.log("on save",SubscripionData)
    }
    return <div className="new_subscription"><FormSubscription onSave={onSaveHandler}/></div>
}
export default NewSubscription