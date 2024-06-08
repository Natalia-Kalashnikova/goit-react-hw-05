import css from './ErrorMessage.module.css';

const ErrorMessage =()=> {
  return (
    <div>
      <p className={css.network_mistake}>
        Ooops... Something is wrong, please, reload the page.
      </p>
    </div>
  );
}

export default ErrorMessage;