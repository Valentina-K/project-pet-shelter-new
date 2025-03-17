import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import CheckBox from '../../CheckBox/CheckBox';
import role from '../../../../constants/role';
import styles from './RegisterForm.module.css';

const RegisterForm = ({ chooseRole, onFormSubmit }) => {
  const title =
    chooseRole === role.USER
      ? 'Register as User'
      : chooseRole === role.SHELTER
        ? 'Register as Shelter'
        : 'Register as Volunteers';
  const placeholderFirstName =
    chooseRole === role.USER
      ? 'First name'
      : chooseRole === role.SHELTER
        ? 'Shelter name'
        : 'Volunteers first name';
  const placeholderLastName =
    chooseRole === role.USER ? 'Last name' : 'Volunteers last name';
  // Валидационная схема с Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Минимум 2 символа')
      .max(50, 'Максимум 50 символов')
      .required('Обязательное поле'),
    lastName: Yup.string()
      .min(2, 'Минимум 2 символа')
      .max(50, 'Максимум 50 символов'),
    email: Yup.string()
      .email('Некорректный email')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(8, 'Minimum 6 characters')
      .max(24, 'Maximum 24 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], '* Password does not match')
      .required('Обязательное поле'),
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
    console.log('Регистрация:', values);
    const { email, password, firstName, lastName } = values;
    const userRole = chooseRole === role.USER ? 'INDIVIDUAL' : chooseRole;
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
            {chooseRole !== role.SHELTER && (
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

            <label>
              <Field
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
            <Field name="agree" component={CheckBox} />
            <button type="submit" disabled={!isValid || !dirty}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

RegisterForm.propTypes = {
  chooseRole: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
