// import all the required module here

import { useDispatch, useSelector } from "react-redux";
import { actions, calculatorToggleSelector } from "../../Redux/Reducers/calculatorReducer";
import Style from "./Navbar.module.css";

// created the navbar function component here
function Navbar(){
    // assign all the required action into variable
    const toggleButton = useSelector(calculatorToggleSelector);
    const dispatch = useDispatch();

    return(
        <>
        {/* this my HTML code structure part here */}
        <div className={`${Style.mainNavbar} ${toggleButton ? Style.lightBlue : Style.darkBackground}`}>
            <h1 className={`${toggleButton? Style.title: Style.titleBlack}`}>Calculator</h1>
            <label className={Style.toggleContainer}>
                <input type="checkbox" className={Style.toggleCheck} onChange={()=>dispatch(actions.isToggle(!toggleButton))} />
                <span className={Style.toggleButton}></span>
            </label>
        </div>
        </>
    )
}

export default Navbar