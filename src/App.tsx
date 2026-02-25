import "./App.css";
import { Button, Label, Input } from "../";

function App() {
  return (
    <>
      <h1>Campstack UI Demo Page</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button>Submit</Button>
        <Label>This is something that is now labeled!</Label>
        <Input />
      </div>
    </>
  );
}

export default App;
