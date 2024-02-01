import React from "react";
import { Form } from "./form/Form";
import { ReactHookForm } from "./react-hook-form/ReactHookForm";
import { FormikComponent } from "./formik/Formik";

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <ReactHookForm />
      <hr />
      <FormikComponent />
    </div>
  );
}

export default App;
