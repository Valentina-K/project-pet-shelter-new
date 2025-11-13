import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import CheckBox from '../../CheckBox/CheckBox';
import role from '../../../../constants/role';
import styles from './RegisterForm.module.css';

const RegisterForm = ({ chooseRole, onFormSubmit }) => {
  const title =
    chooseRole === role.USER[1]
      ? 'Register as User'
      : chooseRole === role.SHELTER[1]
        ? 'Register as Shelter'
        : 'Register as Volunteers';
  const placeholderFirstName =
    chooseRole === role.USER[1]
      ? 'First name'
      : chooseRole === role.SHELTER[1]
        ? 'Shelter name'
        : 'Volunteers first name';
  const placeholderLastName =
    chooseRole === role.USER[1] ? 'Last name' : 'Volunteers last name';
  // Валидационная схема с Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Minimum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Minimum 2 characters')
      .max(50, 'Maximum 50 characters'),
    email: Yup.string().email('Incorrect email').required('Required'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .max(24, 'Maximum 24 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], '* Password does not match')
      .required('Required'),
    agree: Yup.bool().oneOf([true], 'Required'),
  });

  // Начальные значения формы
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  };

  // Функция отправки формы
  const handleSubmit = (values, { resetForm }) => {
    const { email, password, firstName, lastName } = values;
    const userRole = chooseRole;
    onFormSubmit({ email, password, userRole, firstName, lastName });
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className={styles.registerForm}>
            <label>
              <Field
                type="text"
                name="firstName"
                placeholder={placeholderFirstName}
                className={styles.input}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className={styles.error}
              />
            </label>
            {chooseRole !== role.SHELTER[1] && (
              <label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder={placeholderLastName}
                  className={styles.input}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={styles.error}
                />
              </label>
            )}

            <label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </label>

            <label>
              <Field
                type="password"
                name="password"
                placeholder="Create password"
                className={styles.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </label>

            <ConfirmPasswordField />
            <Field name="agree" component={CheckBox} className={styles.agry} />
            <button type="submit" disabled={!isValid || !dirty}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const ConfirmPasswordField = () => {
  const [field, meta] = useField('confirmPassword'); // useField должен быть вызван внутри компонента

  return (
    <label className={`${meta.touched && meta.error ? styles.inputError : ''}`}>
      <Field
        {...field}
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        className={styles.input}
      />
      <ErrorMessage
        name="confirmPassword"
        component="div"
        className={styles.error}
      />
    </label>
  );
};

RegisterForm.propTypes = {
  chooseRole: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
