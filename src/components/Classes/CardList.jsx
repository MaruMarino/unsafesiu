import Card from "./Card";
import "../../../src/App.css";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card {...profile} key={profile.name} />
      ))}
    </div>
  );
};

export default CardList;
