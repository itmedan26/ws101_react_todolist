import './App.css';
//import Navbar from './components/Navbar/navbar';  
//import Hero from './components/Hero/hero';
//import About from './components/About/about';
//import Contact from './components/Contact/contact';
//import Footer from './components/Footer/footer';
//import HandlingClass from './components/Hero/hero';
//import HandingFunction from './components/HandingFunctions';
// import Biodata from './Biodata/biodata';
import ToDoList from './ToDoListApp/todolist';

function App() {
  return (
    <div className="biodata">
      {/*<Navbar name="Daniel" lastname="Punzalan" />
      <Hero message="ILY"/>
      <About />
      <Contact />
      <Footer />
      <HandingFunction />
      <HandlingClass />
      <Biodata />*/}
      <ToDoList />
    </div>
  );
}
export default App;