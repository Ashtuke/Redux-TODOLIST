import './App.css';
import Addtask from './components/Addtask';
import Displaytodos from './components/Filter'




function App() {
  return (
    <div className='App'>
      <h1> Welcome to My TODOLIST</h1>
   <Addtask/>
   <Displaytodos/>

   </div>
  );
}

export default App;
