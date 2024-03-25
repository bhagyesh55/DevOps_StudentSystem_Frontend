import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage";
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      "Please put student name and address to register student"
      <LandingPage/>
      <p></p>
      <StudentList/>
    </div>
  );
}

export default App;
