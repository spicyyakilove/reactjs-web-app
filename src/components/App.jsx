import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Signup from './Signup';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Route path='/' exact component={Homepage} />
                <Route path='/signup' component={Signup} />
            </div>
        </Router>
    );
}

export default App;
