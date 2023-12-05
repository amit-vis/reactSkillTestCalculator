
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { actions, calculatorSelector, calculatorToggleSelector } from "../../Redux/Reducers/calculatorReducer";
import Style from './Calculator.module.css';

function Calculator(){
    const dispatch = useDispatch();
    const displayValue = useSelector(calculatorSelector);
    const toggle = useSelector(calculatorToggleSelector)

    function handleClickButton(value){
        if(value==="C"){
            dispatch(actions.updateDisplay("0"))
        }else{
            const newDisplay = displayValue === "0"? String(value): displayValue + String(value);
            dispatch(actions.updateDisplay(newDisplay))

        }
    }

    const handleNegation = ()=>{
        const newDisplay = displayValue.startsWith("-")? displayValue.slice(1):`-${displayValue}`;
        dispatch(actions.updateDisplay(newDisplay));
    }

    const calculateResult = ()=>{
        try {
            const result = eval(displayValue);
            dispatch(actions.updateDisplay(result.toString()))
        } catch (error) {
            dispatch(actions.updateDisplay("Error", error))
        }
    }
    return(
        <>
        <div className={Style.mainContainer}>
            <div className={`${toggle?Style.allButton:Style.allButtonToggle}`}>
            <div className={`${toggle?Style.mainScreen:Style.mainScreenToggle}`}>{displayValue}</div>
                <div className={Style.firstGroup}>
                    <div className={Style.plainButton} onClick={()=>handleClickButton("C")}>C</div>
                    <div className={Style.plainButton} onClick={handleNegation}>&#xb1;</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton("%")}>%</div>
                    <div className={Style.orgButton} onClick={()=>handleClickButton('/')}>&#xf7;</div>
                </div>
                <div className={Style.firstGroup}>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(7)}>7</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(8)}>8</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(9)}>9</div>
                    <div className={Style.orgButton} onClick={()=>handleClickButton('*')}>&#xd7;</div>
                </div>
                <div className={Style.firstGroup}>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(4)}>4</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(5)}>5</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(6)}>6</div>
                    <div className={Style.orgButton} onClick={()=>handleClickButton('-')}>&#x2212;</div>
                </div>
                <div className={Style.firstGroup}>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(1)}>1</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(2)}>2</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(3)}>3</div>
                    <div className={Style.orgButton} onClick={()=>handleClickButton('+')}>+</div>
                </div>
                <div className={Style.firstGroup}>
                    <div className={Style.plainButtonExt} onClick={()=>handleClickButton(0)}>0</div>
                    <div className={Style.plainButton} onClick={()=>handleClickButton(".")}>.</div>
                    <div className={Style.orgButton} onClick={calculateResult}>=</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Calculator;