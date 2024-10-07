import './App.css';
import './components/TaskBar'
import TaskBar from './components/TaskBar';
import TODOitem from './components/TODOitem';
import DONEitem from './components/DONEitem';
import Button from './components/Button';
function App() {

  return (
    <div className="TODOlist">
      <TaskBar/>
      <div className='TODOlist__body'>
        <div className='TODOlist__body_add-new-task'>
          <span className='text-style'>ADD TASK</span>
          <div className='TODOlist__body_add-new-task_input'>
            <input className='TODOlist__body_add-new-task_input_text-field'/>
            <Button name='ADD'/>
          </div>      
        </div>
        <div className='TODOlist__body_current-task'>
          <span className='text-style'>TODO LIST</span>
          <TODOitem TODOname='ITEM A'/>
          <TODOitem TODOname='ITEM B'/>
        </div>
        <div className='TODOlist__body_previous-task'>
          <span className='text-style'>DONE TASK</span>
          <DONEitem DONEname='TASK C'/>
        </div>
      </div>
    </div>
  );
}

export default App;
