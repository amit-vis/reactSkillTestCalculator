import { useDispatch, useSelector } from "react-redux";
import { actions, calculatorToggleSelector } from "../../Redux/Reducers/calculatorReducer";
import Style from "./Navbar.module.css";

function Navbar(){
    const toggleButton = useSelector(calculatorToggleSelector);
    console.log("Toggle Button Before Dispatch:", toggleButton);
    const dispatch = useDispatch();

    return(
        <>
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