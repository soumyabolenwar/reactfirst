import './App.css';
import {useState} from 'react';
import Container from './templates/Container';
import Subscription from './Subscription/Subscription';
import NewSubscription from './Subscription/NewSubscription/NewSubscription';
import Filter from './Subscription/Filter';
const INITIAL_SUBSCRIPTION=[{
    id:"1",
    date:(new Date('2023','08','04')),
    title:"Monthly Subscripion",
    amount:"125.60"
  },
  {
    date:(new Date('2024','06','25')),
    title:"Annual Subscripion",
    amount:"1125.60"
  },
  {
    id:"3",
    date:(new Date('2020','09','20')),
    title:"Quarterly Subscripion",
    amount:"425.60"
  }
]
const App=()=>{
const [subscriptions,setSubscriptions]=useState(INITIAL_SUBSCRIPTION)
const [filteredYear,setFilteredYear]=useState('2022');
const addSubscriptionHandler=(data)=>{
      //subscriptions.push(data);
      setSubscriptions(prevState=>{return[data,...subscriptions]})
      console.log("on add Subscription",subscriptions)
}
const filterChangeHandler=(data)=>{
  setFilteredYear(data);    
  console.log('filter Change handler',data)
}
const filteredSubscriptions=subscriptions.filter((item)=>{
  return item.date.getFullYear().toString() === filteredYear
})
  return (
    
    <Container>
      <NewSubscription onAddSubscription={addSubscriptionHandler}/>
       <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}/>
       {filteredSubscriptions.length===0 && <h3>No data found</h3>}
       {filteredSubscriptions.length !==0 && 
       filteredSubscriptions.map((subscription)=>
       <Subscription key={subscription.id} date={subscription.date} 
       title={subscriptions.title} 
       amount={subscriptions.amount}/>)
       }
       {/*filteredSubscriptions.length===0 ? <h2>No data found</h2>:
       filteredSubscriptions.map((subscription)=>
       <Subscription key={subscription.id} date={subscription.date} 
       title={subscriptions.title} 
       amount={subscriptions.amount}/>)
      */}
       {/*filteredSubscriptions.map((subscription)=>
        <Subscription key={subscription.id} date={subscription.date} 
        title={subscriptions.title} 
        amount={subscriptions.amount}/>)*/}
       {/*<Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
       <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
       <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>*/}
    </Container>
  );
}
export default App;
