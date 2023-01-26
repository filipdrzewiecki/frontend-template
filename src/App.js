import './App.css';
import Body from './layout/Body';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import mockServer from "./mock/MockServer";

function App() {
    mockServer();
    return (
        <div className="App">
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
