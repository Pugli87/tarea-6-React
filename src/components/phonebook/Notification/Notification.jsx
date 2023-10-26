import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <p className={css.notification}>
      <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;
      {message}
    </p>
  );
};

export default Notification;
