import { ReactNode } from "react"
import ReactDOM from 'react-dom';



const Overlay = ({isOpen, onClose, children }) => {
    return (
        <>
            {isOpen ? (
                <div className="overlay">
                    <div className="overlay-background" onClick={(onClose)} />
                    <div className="overlay-container">
                        <div className="overlay-controls">
                            <button 
                                className="overlay-close" 
                                type="button" 
                                onClick={onClose} 
                            /> 
                        </div>
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    )
}
 

export default Overlay;