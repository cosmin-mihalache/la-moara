import './myName.css';

const MyName = (props) => {
  return (
    <div>
      <h2
        className={props.toggle ? 'red-toggle' : null}
        onClick={props.onClickHandler}
      >
        Cosmin
      </h2>
      {props.toggle ? <p>Numele de alaturi este colorat cu rosu.</p> : null}
    </div>
  );
};

export default MyName;
