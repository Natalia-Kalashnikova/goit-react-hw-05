import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>
        Sorry, page is not found! Please go to <Link to="/">Home page</Link>!
      </p>
    </div>
  );
}
export default NotFoundPage;