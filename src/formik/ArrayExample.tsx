import { Formik, Form, Field } from "formik";

export const BasicArrayExample = () => (
  <Formik
    initialValues={{
      friends: ["jared", "ian"],
    }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    <Form>
      <Field name="friends[0]" />
      <Field name="friends[1]" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);
