import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <div className='App'>
                    <Navbar />
                    <Route path='/reactjs-web-app' exact component={Homepage} />
                    <Route path='/reactjs-web-app/auth/login' component={Login} />
                    <Route path='/reactjs-web-app/auth/signup' component={Signup} />
                </div>
            </Switch>
        </Router>
    );
}

export default App;
