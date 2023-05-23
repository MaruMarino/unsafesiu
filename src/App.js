import "./App.css";
import { useState } from "react";
import CardList from "./components/Classes/CardList";
import Form from "./components/Classes/Form";

function App() {
  const testData = [
    {
      name: "Dan Abramov",
      avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
      company: "@facebook",
    },
    {
      name: "Sophie Alpert",
      avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
      company: "Humu",
    },
    {
      name: "Sebastian Markbåge",
      avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
      company: "Facebook",
    },
  ];

  const [githubData, setGithubdata] = useState(testData);
  return (
    <div>
      <Form updateProfilesList={setGithubdata} listOfProfiles={testData} />
      <div className="header">The GitHub Cards App</div>
      <CardList profiles={githubData} />
    </div>
  );
}

export default App;
