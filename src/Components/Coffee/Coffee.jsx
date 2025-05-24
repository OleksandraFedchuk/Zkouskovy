export default function Coffee({ value, onSelect }) {
  return (
    <div>
      <h1>Select coffee size : {value}</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={value === "sm"}
          onChange={onSelect}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={value === "md"}
          onChange={onSelect}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lr"
          checked={value === "lr"}
          onChange={onSelect}
        />
        Large
      </label>
    </div>
  );
}
