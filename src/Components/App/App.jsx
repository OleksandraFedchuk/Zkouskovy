import { useState } from "react";
import Langswitcher from "../Langswitcher/Langswitcher";
import Coffee from "../Coffee/Coffee";
import "./App.css";
import Checkbox from "../Checkbox/Checkbox";

export default function App() {
  const [lang, setLang] = useState("en");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  0;

  const handleCoffeeSize = (event) => {
    setCoffeeSize(event.target.value);
  };

  return (
    <>
      <p>Select language : {lang}</p>
      <Langswitcher value={lang} onSelect={setLang} />
      <Coffee value={coffeeSize} onSelect={handleCoffeeSize} />
      <Checkbox />
    </>
  );
}
