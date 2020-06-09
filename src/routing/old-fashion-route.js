import React from 'react';
import { BrowseRouter as Router, Route} from "react-router-dom";


const Home = () => <div>Home</div>
const About = () => <div>About</div>
const BlogPosts = () => <div>404</div>

class ReactRouterRout extends React.Component {
    
    
    render() {

        return (
            <Router>
                    <Route path="/" component ={Home} />

            </Router>
        )
    }
}

export default ReactRouterRout