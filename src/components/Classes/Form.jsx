import "../../../src/App.css";
import React from "react";

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    const username = this.state.userName;
    const newUsercard = {
      name: username,
      avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
      company: "My Company",
    };

    let profiles = [...this.props.listOfProfiles];
    profiles.push({ ...newUsercard });
    this.props.updateProfilesList([...profiles]);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
