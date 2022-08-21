import { Navigate } from "react-router";
const Protected = ({isConnected, children}) => {
    if(!isConnected){
        return <Navigate to="/connect-account" replace />;
    }
    return children
}

export default Protected;