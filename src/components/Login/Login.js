import React, { useContext } from 'react';
import logo from '../../logo2.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(true);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    // google login
    const googleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            handleResponse(res)
          })
          .catch(error => {
            handleError(error)   
          });
    }

    // facebook login
    const facebookLogin = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            handleResponse(res)
          })
          .catch(error => {
            handleError(error)
          });
    }

    // handle blur
    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if(e.target.name === 'password'){
            isFormValid = e.target.value.length > 6 && /\d{1}/.test (e.target.value)
        }
        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    // handle submit
    const handleSubmit = (e) => {
        if(newUser){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                handleResponse(res);
                updateUserName(user.name)
            })
            .catch(error => {
                handleError(error)
            });
        }
        if(!newUser){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                handleResponse(res)
            })
            .catch(error => {
                handleError(error)
            });
        }
        e.preventDefault()
    }

    // update user name
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        })
        .then(res => {
            console.log('username updated successfully')
        })
        .catch(function(error) {
            handleError(error)
        });
    }

    // handle response
    const handleResponse = res => {
        const {displayName, email} = res.user;
        const signedInUser = {
            name:displayName,
            email:email,
            isLoggedIn:true
        };
        setUser(signedInUser);
        history.replace(from);
    }

    // handle error
    const handleError = error => {
        const signedInUser = {
            error:error.message,
            isLoggedIn:false
        };
        setUser(signedInUser)
    }
    
    return (
        <div className='text-center mt-5 '>
            <img className='w-25' src={logo} alt=""/>
            <br/>
            <button onClick={googleLogin
            } className='text-white border-0 bg-danger p-2 w-25 rounded my-2 mt-4'>Google sign in</button>
            <br/>
            <button onClick={facebookLogin
            } className='text-white border-0 bg-danger p-2 w-25 rounded my-2'>Facebook login</button>
            <form onSubmit={handleSubmit} className='mt-2' >
                {
                    newUser && 
                    <input onBlur={handleBlur} className='border-0 bg-light p-2 w-25 rounded my-2' type="text"  name='name' placeholder='Name' required/>
                }
                <br/>
                <input onBlur={handleBlur} className='border-0 bg-light p-2 w-25 rounded my-2' type="email"  name='email' placeholder='Email' required/>
                <br/>
                <input onBlur={handleBlur} className='border-0 bg-light p-2 w-25 rounded my-2' type="password"  name='password' placeholder='Password' required/>
                <br/>
                <input className='text-white border-0 bg-danger p-2 w-25 rounded my-3' type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
            </form>
            <p onClick={() => setNewUser(!newUser)} className={newUser ? 'text-danger' : 'text-secondary'} style={{cursor:'pointer'}}>Already have an account</p>
            {
                user.isLoggedIn ? <p style={{color:'green'}}>User {newUser ? 'created' : 'logged in'} successfully</p> : <p style={{color:'red'}}>{user.error}</p>
            }
        </div>
    );
};

export default Login;