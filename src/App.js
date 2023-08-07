import './App.css';
import Container from './template/Container';
import Subscription from './Subscription/Subscription';


const App = () => {
  let subscriptions=[
  {
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
    
  return (
    
    <Container>
       <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
       <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
       <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>
    </Container>
  );
}
export default App;
