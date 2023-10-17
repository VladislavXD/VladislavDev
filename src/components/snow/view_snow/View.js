import { useState } from "react"
import Snow from "./../snow";
import { useLocation } from "react-router-dom";
const View_snow = () => {
    


    const [snow, setSnow] = useState(true);
    const handleClick = () => { setSnow((prevSnow) => !prevSnow) }


    const [isChecked, setIsChecked] = useState(true);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);}


   
    return (
        <div className="snow_container">  
            <h2 className="snow__title">Snow</h2>
            <div className="toggle-switch">
                
                <input onClick={handleClick} className="toggle-input" id="toggle" type="checkbox"  checked={isChecked} onChange={handleCheckboxChange} />
                
                <label className="toggle-label" htmlFor="toggle"></label>
            </div>
            {snow && <Snow />}

        </div>
    )
}

export default View_snow