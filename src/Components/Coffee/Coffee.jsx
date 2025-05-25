export default function Coffee({ value, onSelect }) {
  // event вирішується в компоненті, компоненту App не потрібно знати що там відбувається за event
  const handleCoffeeSize = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <h1>Select coffee size : {value}</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={value === "sm"}
          onChange={handleCoffeeSize}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={value === "md"}
          onChange={handleCoffeeSize}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lr"
          checked={value === "lr"}
          onChange={handleCoffeeSize}
        />
        Large
      </label>
    </div>
  );
}
