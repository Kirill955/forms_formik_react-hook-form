import { Formik, Form, Field, FieldArray } from "formik";

export const FriendList = () => (
  <div>
    <h1>Friend List</h1>

    <Formik
      initialValues={{ friends: ["jared", "ian", "brent"] }}
      onSubmit={(values) => {
        console.log("values: ", values);
      }}
      render={({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={(arrayHelpers) => (
              <div>
                {values?.friends.length > 0 ? (
                  values.friends.map((_, index) => (
                    <div key={index}>
                      <Field name={`friends.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")}
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);
