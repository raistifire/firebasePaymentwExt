import React, {
    useContext
} from 'react'

import { AuthContext } from '../auth/authProvider';
import {
    Link, useParams
} from "react-router-dom";

interface DashboardPageProps {}

export const TokenPage: React.FC<DashboardPageProps> = () => {
    // @ts-ignore
    let { id } = useParams();

    return (
        <div>
            <h3>Is: {id}</h3>
        </div>
    );



}
