import "./App.css";
import Header from "./components/Header/Header";
import LoginModal from "./components/LoginModal/LoginModal";
// import SendOriginalDataClubsComponent from "./assets/originalData/ordiginalData";
function App() {
  return (
    <div className="App">
      <Header />
      <LoginModal />
      {/* <SendOriginalDataClubsComponent /> */}
    </div>
  );
}
export default App;
