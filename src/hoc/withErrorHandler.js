import React, { useState, useEffect } from 'react';

import Aux from '../hoc/Auxilary';
import Modal from '../Atoms/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return (props) => {

        const [err, setErr] = useState(null);

        /*Component Will Mount*/
        const reqInterceptor = axios.interceptors.request.use(req => {
            setErr(null);
            return req;
        });
        const resInterceptor = axios.interceptors.response.use(res => res, error => {
            setErr(error);
        });

        useEffect(() => {
           return () => {
               axios.interceptors.request.eject(reqInterceptor);
               axios.interceptors.responsea.eject(resInterceptor);
           }
        }, [])

        const errorConfirmedHandler = () => {
            setErr(null);
        }

        return (
            <Aux>
                <Modal 
                    show={err} modalClicked={errorConfirmedHandler}>
                    {err ? err.message : null}
                </Modal>    
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

export default  withErrorHandler;