import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const authInfo = { cart, setCart}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}