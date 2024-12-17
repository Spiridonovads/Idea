import style from "./style.module.css";

function Checkbox({ handleChange, filter, label, isChecked }) {
  return (
    <label className={style.checkbox}>
      <input
        type="radio"
        onChange={() => handleChange(filter)}
        checked={isChecked}
      />
      {label}
    </label>
  );
}

export default Checkbox;
