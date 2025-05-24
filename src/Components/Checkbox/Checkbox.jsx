import { useState } from "react";

export default function Checkbox() {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (event) => {
    setHasAccepted(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
}
