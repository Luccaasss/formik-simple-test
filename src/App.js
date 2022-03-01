import './App.css';
import { Formik, Field, Form} from 'formik';

function App() {
  return (
    <div className="App">
      <h1>Form with Formik</h1>

      <h1>Contact Us</h1>

      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      
    </div>
  );
}

export default App;
