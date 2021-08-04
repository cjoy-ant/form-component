import './App.css';
import Form from './Form/Form'

function App() {
  const structure = [
    {
      order: 1,
      field: 'first_name',
      display_name: 'First Name',
      type: 'string',
      required: true
    },
    {
      order: 2,
      field: 'last_name',
      display_name: 'Last Name',
      type: 'string',
      required: true
    },
    {
      order: 3, 
      field: 'age',
      display_name: 'Age',
      type: 'number',
      required: false
    },
    {
      order: 3,
      field: 'user_type',
      display_name: 'User Type',
      type: 'select',
      required: false,
      options: [
        'shareholder', 'investor', 'other'
      ]
    }, 
    {
      order: 4, 
      field:'investing_experience',
      display_name: 'Investing Experience',
      type: 'multiselect',
      required: false,
      options: [
        'public markets', 'early_stage_private', 'late_stage_private'
      ]
    },
    {
      order: 5,
      field: 'notes',
      display_name:'Notes',
      type: 'text',
      required: false
    }
  ]
  
  return (
    <div className="App">
      <Form structure={structure}/>
    </div>
  );
}

export default App;
