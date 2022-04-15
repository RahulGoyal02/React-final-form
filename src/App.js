// import logo from './logo.svg';
import './App.css';
import { Form, Field } from 'react-final-form'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values =>{
await sleep(500)
window.alert(JSON.stringify(values, undefined,2))
}
const required = value => (value ? undefined : 'Required')
function App() {
  return (
   <>
   <h1 className="App">React Final Form</h1>
   <Form  onSubmit={showResults} >
     {({handleSubmit,values, submitting}) =>(
       <form onSubmit={handleSubmit}>
         <div>
          {/* <label>First Name</label> */}
           <Field name="firstName" component="input" placeholder="First Name"
           validate={required}>
             {({input,meta,placeholder}) => (
             <div>
               <label>First Name</label>
               <input {...input} placeholder={placeholder}/>
               {meta.error && meta.touched && <span>{meta.error}</span>}
             </div>
           )} 

             {/* --------fieldState----------- */}

             {/* {fieldState => (
             <pre className="App-header">{JSON.stringify(fieldState, undefined,2)}</pre>
           )} */}
           </Field>
         </div>

         <div>
           <label>Last Name</label>
           <Field name="lastName" component="input" placeholder="Last Name" validate={required} />
         </div>
         
         <div>
           <label>Email</label>
           <Field name="email" component="input" placeholder="Email" validate={required}/>
         </div> 
    
         <button type="submit" disabled={submitting}>Submit</button>
         <pre className="App-header">
           {JSON.stringify(values,undefined,2)}
         </pre>
       </form>
       
     )}

   </Form>

   </>
  );
}

export default App;
