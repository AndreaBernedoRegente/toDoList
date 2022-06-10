import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
const Header = ({showTaskCompleted,setShowTaskCompleted}) => {
    
    const toogleShowTask = () => {
        setShowTaskCompleted(!showTaskCompleted);
    }
    return (
        
        <header className="header">
            {showTaskCompleted?
                <button 
                    className="header__boton"
                    onClick={toogleShowTask}
                >
                    Don't show completed
                    <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
                </button>
            :
                <button className="header__boton" onClick={toogleShowTask}>
                    Show completed
                    <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
                </button>
            }
            
            
        </header>
      );
}
 
export default Header;