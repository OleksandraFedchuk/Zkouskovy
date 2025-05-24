import { useId } from "react";

export default function Langswitcher({ value, onSelect }) {
  const selectID = useId();

  return (
    <div>
      <label htmlFor={selectID}>Choose language</label>
      <select
        id={selectID}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="ua">Ukrainan</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}
