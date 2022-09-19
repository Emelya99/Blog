import styles from './CreatePost.module.scss';
import TitleBox from '../TitleBox';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CreatePost = ({user=[]}) => {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        text: Yup.string().required()
    })

    const months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];
    const month = months[new Date().getMonth()];

    return (
        <div className={styles.wrapper}>
            <TitleBox
                title="Create post"
                desc="What's new?"
            />
            <Formik
                initialValues={{
                    title: '',
                    tags: [],
                    text: ''
                }}
                validateOnBlur
                onSubmit={(values) => {
                    axios.post('https://62d964d85d893b27b2e556a2.mockapi.io/posts', {
                        title: values.title,
                        text: values.text,
                        dataDay: new Date().getDate(),
                        dataMonth: month,
                        dataYear: new Date().getUTCFullYear(),
                        userName: user.userName,
                        views: 0
                    })
                }}
                validationSchema={validationSchema}
            >
                {({ values, handleSubmit, touched, errors }) => (
                    <Form className={styles.form}>
                        <Field
                            className={touched.title && errors.title && 'error'}
                            type="text"
                            name="title"
                            value={values.title}
                            placeholder="Enter title"
                            autoComplete="off"
                        />
                        <Field
                            type="text"
                            name="tags"
                            value={values.tags}
                            placeholder="Enter tags"
                            autoComplete="off"
                        />
                        <Field
                            className={touched.text && errors.text && 'error'}
                            as="textarea"
                            name="text"
                            value={values.text}
                            placeholder="Enter text"
                        />
                        <button type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CreatePost;