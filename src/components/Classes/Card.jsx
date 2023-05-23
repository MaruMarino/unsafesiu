import { Component } from "react";
import "../../../src/App.css";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img className="github-img" src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
