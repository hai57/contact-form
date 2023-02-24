import Form from "./components/form";
import pic from "./img/bg.jpeg";
import "./sass/index.css";

function App() {
  return (
    <div className="container">
      <div className="background">
        <img className="banner" src={pic} alt="banner" />
        <Form />
      </div>
    </div>
  );
}

export default App;
