import React, { useState , useEffect} from 'react';
import Model from '../../components/UI/Model/Model';
import Aux from '../Aux1';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandle = (WrapperComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Aux>
                <Model 
                show={error}
                modelClosed={clearError}>
                    {error ? error.message : null}
                </Model>
                <WrapperComponent {...props} />
            </Aux>
        );
    }
}

export default withErrorHandle;