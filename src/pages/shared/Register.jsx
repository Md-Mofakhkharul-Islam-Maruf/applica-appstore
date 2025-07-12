import Swal from 'sweetalert2';
import register from '../../assets/register.json';
import { Link, useLocation, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config'; // 🔄 adjust path based on your project structure

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasUppercase) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must have at least one uppercase letter.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!hasLowercase) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must have at least one lowercase letter.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!hasMinLength) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must be at least 6 characters long.',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Create user
        createUser(email, password)
            .then(result => {
                const currentUser = auth.currentUser;
                console.log('User created:', result.user);

                // Update profile with name and photo
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        form.reset();
                        // Logout after updating profile
                        logOut()
                            .then(() => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Registration Successful',
                                    text: 'Profile updated. Please log in.',
                                    confirmButtonText: 'OK'
                                }).then(() => {
                                    navigate('/login');
                                });
                            })
                            .catch(logoutError => {
                                console.error('Logout failed:', logoutError);
                                navigate('/login');
                            });
                    })
                    .catch(profileError => {
                        console.error('Profile update failed:', profileError);
                        Swal.fire({
                            icon: 'warning',
                            title: 'Registration Successful',
                            text: 'Could not update profile name/photo.',
                            confirmButtonText: 'OK'
                        });
                        navigate('/login');
                    });
            })
            .catch(error => {
                console.error('Registration failed:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
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
                        <Lottie style={{ width: '400px' }} loop={true} animationData={register} />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <h1 className="text-5xl font-bold text-center">Register</h1>
                                    <label className="label">Name</label>
                                    <input type="text" name="name" className="input" placeholder="Name" required />
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" required />
                                    <label className="label">Photo</label>
                                    <input type="url" name="photo" className="input" placeholder="Photo URL" />
                                    <button className="btn btn-neutral mt-4 bg-primary border-0">Register</button>
                                    <p className="text-center text-shadow-md pt-2">
                                        Have an account?{' '}
                                        <Link to={'/login'} className="text-primary font-bold">
                                            Login
                                        </Link>
                                    </p>
                                </fieldset>
                            </form>
                            <SocialLogin from={from} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
