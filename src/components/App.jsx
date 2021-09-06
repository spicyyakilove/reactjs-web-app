import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Signup from './Signup';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <div className='App'>
                    <Navbar />
                    <Route path='/reactjs-web-app' exact component={Homepage} />
                    <Route path='/reactjs-web-app/signup' component={Signup} />
                </div>
            </Switch>
        </Router>
    );
}

export default App;
