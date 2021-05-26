import React, { useState, useEffect } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import  './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import { updateOject, checkValidity } from '../../shared/utility';


const Auth = (props) => {

    const [controls, setControls] = useState({
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false,
      }
  });
        
        
    const[isSignUp, setIsSignUp]  = useState(true);

    const { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

      useEffect(() => {
        if(!buildingBurger && authRedirectPath !== '/'){
            onSetAuthRedirectPath();
        }
      }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);
      

     
      const inputChangedHandler = (e, controlName) => {
        const updatedControls = updateOject(controls, {
          [controlName]: updateOject(controls[controlName], {
            value: e.target.value,
            valid: checkValidity(e.target.value, controls[controlName].validation),
            touched: true
          })
        });

        setControls(updatedControls);
      }

      const switchAuthHandler = () => {
          setIsSignUp(!isSignUp);
      }

      const submitHandler = (event) => {
          event.preventDefault();
          props.onAuth(controls.email.value, controls.password.value, isSignUp);
      }

        const formElementsArray = [];
        for(let key in controls){
        formElementsArray.push({
            id: key,
            config: controls[key]
        })
        }

        let form = formElementsArray.map(formEl => (
            <Input
              key={formEl.id}
              elementType={formEl.config.elementType}
              elementConfig={formEl.config.elementConfig}
              value={formEl.config.value}
              invalid={!formEl.config.valid}
              shouldValidate={formEl.config.validation}
              touched={formEl.config.touched}
              changed={(event) => inputChangedHandler(event, formEl.id)}
            />
      
          ))

          if(props.loading) {
              form = <Spinner />
          }

          let errorMessage = null;

          if (props.error) {
              errorMessage = (
                  <p>{props.error.message}</p>
              )
          }

          let authRedirect = null;

          if(props.isAuthenticated) {
            authRedirect = <Redirect to={props.authRedirectPath} />
          }

          return (
            <div className="Auth">
                {authRedirect}
                {errorMessage}
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success">
                        Submit
                    </Button>

                    <Button btnType="Danger" clicked={switchAuthHandler}>
                        Switch to {isSignUp ? "SIGNIN" : "SIGNUP"}
                    </Button>
                </form>
            </div>
          );
      };


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);