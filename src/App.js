import Footer from "./components/Footer";
import Header from "./components/Header";
import IceCreamList from "./components/Icecream/IceCreamList";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <IceCreamList />
      <Footer />
    </div>
  );
}

export default App;
