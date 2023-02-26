import Form from "./components/form";
import pic from "./img/bg.jpeg";
import "./sass/index.css";

function App() {
  return (
    <div className="container">
      <img className="banner" src={pic} alt="banner" />
      <Form />
    </div>
  );
}

export default App;
