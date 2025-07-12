import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { ScaleLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <ScaleLoader color="#4557b6" height={50} width={6} />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoutes;