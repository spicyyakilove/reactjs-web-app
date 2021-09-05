// import './App.css';
// import Navbar from './Navbar';
// import Homepage from './Homepage';
// import Signup from './Signup';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function App() {
//     return (
//         <Router>
//             <div className='App'>
//                 <Switch>
//                     <Navbar />
//                     <Route exact path='/'>
//                         <Homepage />
//                     </Route>
//                     <Route path='/signup'>
//                         <Signup />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Homepage = () => <div>homepage</div>;
const Signup = () => <div>signup</div>;

function App() {
    return (
        <Router>
            <div className='App'>
                <h1>NAV</h1>
                <Route path='/homepage' component={Homepage} />
                <Route path='/signup' component={Signup} />
            </div>
        </Router>
    );
}

export default App;
