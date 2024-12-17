import React from "react";
import style from "./style.module.css";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import data from "../../utils/tickets.json";

function App() {
  const [state, setState] = React.useState(data.tickets);
  const [selectedFilter, setSelectedFilter] = React.useState("all");
  function handleChange(filter) {
    setSelectedFilter(filter);
    const filters = {
      none: () => data.tickets.filter((el) => el.stops === 0),
      one: () => data.tickets.filter((el) => el.stops === 1),
      two: () => data.tickets.filter((el) => el.stops === 2),
      three: () => data.tickets.filter((el) => el.stops === 3),
    };

    setState(filters[filter] ? filters[filter]() : data.tickets);
  }
  return (
    <div className={style.app__wrapper}>
      <div className={style.filters}>
        <h4>КОЛИЧЕСТВО ПЕРЕСАДОК:</h4>
        <ul className={style.filters__list}>
          <li>
            <Checkbox
              filter="all"
              handleChange={handleChange}
              label="Все"
              isChecked={selectedFilter === "all"}
            />
          </li>
          <li>
            <Checkbox
              filter="none"
              handleChange={handleChange}
              label="Без пересадок"
              isChecked={selectedFilter === "none"}
            />
          </li>
          <li>
            <Checkbox
              filter="one"
              handleChange={handleChange}
              label="1 пересадка"
              isChecked={selectedFilter === "one"}
            />
          </li>
          <li>
            <Checkbox
              filter="two"
              handleChange={handleChange}
              label="2 пересадки"
              isChecked={selectedFilter === "two"}
            />
          </li>
          <li>
            <Checkbox
              filter="three"
              handleChange={handleChange}
              label="3 пересадки"
              isChecked={selectedFilter === "three"}
            />
          </li>
        </ul>
      </div>
      <div className={style.card__wrapper}>
        {state
          .sort((a, b) => a.price - b.price)
          .map((el) => (
            <Card information={el} />
          ))}
      </div>
    </div>
  );
}

export default App;
