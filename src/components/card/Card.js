import style from "./style.module.css";
import image from "../../images/image.png";

function Card({ information }) {
  return (
    <div className={style.wrapper}>
      <div className={style.airline}>
        <img alt="airline" src={image} />
        <button className={style.button}>
          <span
            className={style.button__content}
          >{`Купить \n за ${information.price}`}</span>
        </button>
      </div>
      <div className={style.info}>
        <ul className={style.departure}>
          <li>{information.departure_time}</li>
          <li>{`${information.origin},${information.origin_name}`}</li>
          <li>{information.departure_date}</li>
        </ul>

        <div className={style.animation}>
          <span className={style.stops}>
            {information.stops === 0
              ? "БЕЗ ПЕРЕСАДОК"
              : information.stops === 1
              ? `${information.stops} ПЕРЕСАДКА`
              : `${information.stops} ПЕРЕСАДКИ`}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(203, 201, 201)"
            className={style.airplane}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>

        <ul className={style.arrival}>
          <li>{information.arrival_time}</li>
          <li>{`${information.destination},${information.destination_name}`}</li>
          <li>{information.arrival_date}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
