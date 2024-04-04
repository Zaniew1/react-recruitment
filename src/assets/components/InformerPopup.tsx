import { ErrorContext } from "../store/Error-Context";
import { useContext } from "react";
export const InformerPopup:React.FC = ():JSX.Element => {
    const {errorType, errorMessage} = useContext(ErrorContext)
    return (
        <>
        {errorMessage && errorType && (
            <div className={`${'popup'} ${errorType}`}>
                <p style={{padding:"5px 10px"}}>{errorType}</p>
                <p style={{padding:"5px 10px"}}>{errorMessage}</p>
            </div>
        )}
        </>
    );
}