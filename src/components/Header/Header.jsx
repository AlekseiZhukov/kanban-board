import React from 'react';
import userMenuUp from '../images/userMenuUp.jpg';
import userMenuDown from '../images/userMenuDown.jpg';


class Header extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            clicked: false
        }
    }
    onClickAvatar = () => {
        this.setState ({
            clicked: !this.state.clicked,
        })
    }

    handleClickOutside = (event) => {
        
        if (!event.target.alt) {
            
            this.setState({
                clicked: false
            })
        
        } 
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const {clicked} = this.state;
        return (
            <div className="header_conteiner">
                <div className="header_conteiner_block">
                    {clicked ? 
                         <img onClick={this.onClickAvatar} src={userMenuUp} alt={"avatar"}/>
                        :
                        <img onClick={this.onClickAvatar} src={userMenuDown} alt={"avatar"} />
                            
                        
                    }
                    {clicked ? 
                        <div className='dropDownMenu'>
                            <ul >
                                <li className='dropDownMenu_menuItem'>Profile</li>
                                <li className='dropDownMenu_menuItem'>Log out</li>
                            </ul>
                        </div>
                    : null }

                            
                </div>
                
                
            </div>

        ) 
    }
     
 
}


export default Header;