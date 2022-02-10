import Counter from './components/Counter'
import CounterActions from './components/CounterActions'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useSelector} from "react-redux";


function App() {

    const {dark} = useSelector(state=>state.site)

  return (
    <div className={dark ? 'dark' : 'light'}>
        <Header/>
        <Counter/>
        <CounterActions/>
        <Footer/>
    </div>
  );
}

export default App;
