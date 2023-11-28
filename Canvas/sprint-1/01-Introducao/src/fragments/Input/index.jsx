export const Input = ({id, type, label}) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={id} />
    </fieldset>
  );
};
