import styles from '../Form.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ onClickLoginOrSign, setNotific, setNotificContent }) => {

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required()
    })

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
                axios.post('https://62d964d85d893b27b2e556a2.mockapi.io/users', {
                    userName: values.name,
                    email: values.email,
                    password: values.password,
                    auth: true,
                })
                setNotific(true);
                setNotificContent(true);
                navigate("/");
            }}
            validationSchema={validationSchema}
        >
            {({ values, handleSubmit, touched, errors }) => (
                <Form>
                    <Field
                        className={touched.name && errors.name && 'error'}
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Enter your name"
                        autoComplete="off"
                    />
                    <Field
                        className={touched.email && errors.email && 'error'}
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Enter your email"
                        autoComplete="off"
                    />
                    <Field
                        className={touched.password && errors.password && 'error'}
                        type="password"
                        name="password"
                        value={values.password}
                        placeholder="Enter password"
                        autoComplete="off"
                    />
                    <Field
                        className={touched.confirmPassword && errors.confirmPassword && 'error'}
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        placeholder="Confirm password"
                        autoComplete="off"
                    />
                    <div className={styles.formBottom}>
                        <button type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                        <p>
                            already have an account?<br />
                            <a href="/" onClick={onClickLoginOrSign}>log-in</a>
                        </p>
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default SignUpForm;