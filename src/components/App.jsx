import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Route path='/' component={Homepage} />
                <Route path='/signup' component={Signup} /> {/* ERROR: going to '/signup' will not load the page. */}
            </Router>
        </div>
    );
}

export default App;
