import { useState } from "react";
import Langswitcher from "./Langswitcher/Langswitcher";
import "./App.css";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
      <p>Select language : {lang}</p>
      <Langswitcher value={lang} onSelect={setLang} />
    </>
  );
}
