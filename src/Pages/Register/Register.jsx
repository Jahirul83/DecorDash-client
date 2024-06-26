import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        const passwordRegex = /[A-Z]/;

        if (password.length < 6) {
            setRegError('Password should be at least 6 characters');
            return;
        }
        else if (!passwordRegex.test(password)) {
            setRegError("don't have a special character");
            return;
        }

        setRegError('');

        //  create user with email and password
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Registration successful",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error);
                setRegError(error.message);
                Swal(`${error.message}`, "You clicked the button!", "error");
            })


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-400">
                        <h1 className="text-3xl text-center py-4 font-bold">Please Register</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url (optional)</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account please <Link className="text-blue-500 font-bold" to='/login'>Login</Link></p>
                            {
                                regError && <p className="text-red-600">
                                    {regError}
                                </p>
                            }
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;