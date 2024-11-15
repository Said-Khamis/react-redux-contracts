import { useState } from "react";
import { useDispatch , useSelector  } from "react-redux";
import { login } from '../redux/actions/loginActions'
import { useNavigate } from 'react-router-dom';

const Login = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const loading = useSelector(state => state.login.loading);
     const error = useSelector(state => state.login.error);

     const [username , setUsername ] = useState('');
     const [password , setPassword ] = useState('');

    const handleUsername = (name) => {
        setUsername(name);
    } 

    const handlePass = (pass) => {
        setPassword(pass);
    } 

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(login(username, password, navigate))
    }

    return (
        <div className='container' 
         style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh'
      }}>
          <div className="d-flex">
            <div className='w-100'>
                 { loading && <span>Loading.....</span>}
                 { error && <span className="text-danger">{error}</span>}

                <form action="" method="POST">
                      <div className='d-flex flex-column'>
                          <div className='form-group'>
                            <label htmlFor="username">Username</label>
                            <input type='text' name='name' id='username' 
                                   value={username} onChange={(e) => handleUsername(e.target.value)} 
                                   placeholder='Username' className='form-control'/>
                          </div>
                          <div className='form-group mt-3'>
                            <label htmlFor="username">Password</label>
                            <input type='password' name='pass' id='pass'  
                                value={password}  onChange={(e) => handlePass(e.target.value)} 
                                placeholder='Username' className='form-control'/>
                          </div>
                          <div className='mt-3'>
                            <button className='btn btn-primary' onClick={handleLogin}>Sign In</button>
                          </div>
                      </div>
                </form>
            </div>
            
          </div>
      </div>
    );
};

export default Login;