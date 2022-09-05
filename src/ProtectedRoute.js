import { Navigate } from "react-router";
import { useAccountContext } from './pages/AccountContext';
const Protected = ({isConnected, children}) => {
const {setView} = useAccountContext();

    if(!isConnected){
       return setView('Connect');
    }
    return children
}

export default Protected;