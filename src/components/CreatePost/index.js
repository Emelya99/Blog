import styles from './CreatePost.module.scss';
import TitleBox from '../TitleBox';

const CreatePost = () => {
    return (
        <div className={styles.wrapper}>
            <TitleBox
                title="Create post "
                desc="What's new?"
            />
            <form className={styles.form}>
                <input 
                    type="text"
                    placeholder="Enter title"
                />
                <input 
                    type="text"
                    placeholder="Enter tags"
                />
                <textarea 
                    placeholder="Enter text"
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreatePost;