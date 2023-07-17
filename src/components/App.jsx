import css from "./App.module.css"
import { Feedback } from "./Feedback/Feedback";

export const App = () => {
  return (
    <div className={css.main}>
      <h1>React homework template</h1>
      <Feedback />
    </div>
  );
};
