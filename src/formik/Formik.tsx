import { Formik, Field, Form } from "formik";
import * as yup from "yup";

// type TFormUser = {
//   name: string;
//   age: string;
//   document: string;
//   infoMethod: string;
// };

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
    document: yup.string().required(),
    infoMethod: yup.string().required(),
  })
  .required();

// const validate = (values: TFormUser) => {
//   const errors = { name: "" };

//   if (!values.name) {
//     errors.name = "Введите имя";

//     return errors;
//   }

//   return {};
// };

export const FormikComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        age: "",
        document: "Паспорт",
        infoMethod: "phone",
      }}
      onSubmit={(values, actions) => {
        console.log("actions: ", actions);
        console.log("values: ", values);
      }}
      validationSchema={schema}
      // validate={validate}
    >
      {(props) => (
        <Form>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
          />
          <label htmlFor="name">Возраст</label>
          <Field id="name" type="number" name="age" />
          {props.errors.name && <div>{props.errors.name}</div>}

          <hr />
          <Field as="select" name="document">
            <option value="Паспорт">Паспорт</option>
            <option value="Удостоверение">Удостоверение</option>
          </Field>

          <hr />
          <input
            type="radio"
            id="infoMethodPhone"
            name="contact"
            value="phone"
          />
          <label htmlFor="infoMethodPhone">Phone</label>

          <input
            type="radio"
            id="infoMethodPhoneMail"
            name="contact"
            value="mail"
          />
          <label htmlFor="infoMethodPhoneMail">Mail</label>

          <hr />
          <button type="submit" disabled={!props.isValid}>
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};
