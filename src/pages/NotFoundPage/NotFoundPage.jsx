import { Link } from 'react-router-dom';
import css from '../NotFoundPage/NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <p className={css.text}>
        Sorry, page is not found! Please go to &nbsp;<Link to="/">Home page</Link>!
      </p>
    </div>
  );
}
export default NotFoundPage;