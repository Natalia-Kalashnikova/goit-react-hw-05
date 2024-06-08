import { toast, Toaster } from 'react-hot-toast';
import { Field, Form, Formik } from 'formik';
import css from './SearchBar.module.css';


const SearchBar = ({ onSearch })=> {
  return (
    <header className={css.searchbar}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === '') {
            toast.error('Please enter a keyword of search!');
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.search_panel}>
          <Field
            className={css.search_field}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
          ></Field>
          <button className={css.searchBtn} type="submit">
            Search
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;