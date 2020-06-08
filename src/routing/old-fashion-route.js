import React from 'react';

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const NotFaund = () => <div>404</div>

class HistoryAPIRoute extends React.Component {
    state = {location: window.location}
    
    render() {

        let RouteItem

        const {location} = this.state;
        switch (location.parthname) {
            case '/':
                RouteItem = Home;
                break;
            case '/about':
                RouteItem = About;
                break;
            default: 
                RouteItem = NotFaund
        }
        return (
            <ul>
                <li><a href ="/">{Home}</a></li>
                <li><a href ="/about">{About}</a></li>
            </ul>
        )
    }
}

export default HistoryAPIRoute