import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import google from '../../assets/google.jpg';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, profile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    user: result.user?.displayName
                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                window.location.href = '/';
            })
            .catch((error) => console.log(error))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        if (password.length < 6) {
            return Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Password must be at least 6 characters !',
                showConfirmButton: false,
                timer: 2000
            });
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Password must contain capital letters !',
                showConfirmButton: false,
                timer: 2000
            });
        }

        if (!/[^A-Za-z0-9]/.test(password)) {
            return Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Password must contain special characters !',
                showConfirmButton: false,
                timer: 2000
            });
        }

        createUser(email, password)
            .then(res => {
                console.log(res);
                profile(name, photo)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/user', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: 'You have successfully registered !',
                                        showConfirmButton: false,
                                        timer: 2000
                                    });
                                    navigate(location?.state ? location.state : '/')
                                        .catch(error => console.log(error))
                                }
                            })

                    })
            })

            .catch(error => console.log(error));
    };
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center py-16">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Photo URL</label>
                            <input type="photo" id="photo" name="photo" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter your photo url" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full bg-green-300 py-2 px-4 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 font-medium">Register</button>
                        </div>
                        <div className="mb-6 flex justify-center items-center">
                            <img onClick={googleLogin} className='w-16 h-16 rounded-full cursor-pointer' src={google} alt="" />
                        </div>
                    </form>
                    <p className="text-gray-600 text-sm text-center">Already have an account? <a href="/login" className="text-green-400">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;