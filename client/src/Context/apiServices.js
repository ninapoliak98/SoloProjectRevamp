import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";

function ApiServices(param) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const result = await axios(param);
            setResponse(result.data);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param);
    }, []);

    return {
        response, loading, error
    }
}

export default ApiServices;
