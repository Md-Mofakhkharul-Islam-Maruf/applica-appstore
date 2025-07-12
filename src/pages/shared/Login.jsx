import Swal from 'sweetalert2';  // Import SweetAlert2
import Lottie from 'lottie-react';
import login from '../../assets/login.json';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthContext';

const Login = () => {
    const { singInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        singInUser(email, password)
            .then(result => {
                console.log(result, 'User logged in');
                form.reset();

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Welcome, ${result.user.email}!`,
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate(from, { replace: true });
                });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                    confirmButtonText: 'Try Again'
                });
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log('Google login success:', result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Google Login Successful',
                    text: `Welcome, ${result.user.displayName}!`,
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate(from, { replace: true });
                });
            })
            .catch(error => {
                console.error('Google login error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Google Login Failed',
                    text: error.message,
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie style={{ width: '200px' }} loop={true} animationData={login} />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <h1 className="text-5xl font-bold text-center">Login</h1>
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4 bg-primary border-0">Login</button>
                                    <p className="text-center">
                                        Don't have an account?{' '}
                                        <Link to="/register" className="text-primary font-bold">
                                            Register
                                        </Link>
                                    </p>
                                </fieldset>
                            </form>
                            <SocialLogin from={from} onGoogleLogin={handleGoogleLogin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
