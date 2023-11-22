import { Helmet } from 'react-helmet-async';
import img from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../AuthContributor/AuthContributor';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser } = useContext(AuthProvider)
    const [signError, setSignError] = useState();
    const [signSuccess, setSignSuccess] = useState();
    const registerNavi = useNavigate()

    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setSignError(" ");
        setSignSuccess(" ");

        if (password.length < 6) {
            setSignError(" Password should be at least 6 characters ")
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSignError('you should use one uppercase character.')
            return;
        } else if (!/[!@#$%^&*]/.test(password))
            setSignError('you should a special character')

        loginUser(email, password)
            .then(result => {
                console.log(result);
                setSignSuccess("User Created successfully!")
                e.target.reset()
                registerNavi('/');
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })
            .catch(error => {
                console.error(error);
                setSignError(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Sign In Failed",
                    text: "An error occurred during sign in. Please try again.",
                });

            })

    

    }

    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }

    }
    return (

        <div style={{ backgroundImage: '' }} >
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero lg:h-[1000px] bg-[url('./src/assets/others/authentication.png')]" >
                <div className="hero-content lg:flex-row flex-col  bg-[url('./src/assets/others/authentication.png')] shadow-2xl lg:w-[1100px] lg:h-[900px] ">
                    <img className='lg:h-[400px] h-[200px]' src={img} alt="" />
                    <div className="card w-full max-w-sm ">
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered lg:w-[400px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered lg:w-[400px]" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="password" ref={captchaRef} name='captcha' placeholder="type the captcha" className="input input-bordered lg:w-[400px]" required />
                                <button onClick={handleCaptcha} className='btn btn-outline btn-xs my-3'>Validate</button>

                            </div>
                            <div>
                                <p className='text-center'>
                                    New Here? Please <Link to='/register'> <span className='hover:text-[#D1A054]'>Register</span></Link>
                                </p>
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" disabled={disable} value="Login" className="btn text-white btn-outline bg-[#D1A054] lg:w-[400px]" />
                            </div>
                        </form>
                        {
                            signError && <p className="mx-8 text-red-600">{signError}</p>
                        }
                        {
                            signSuccess && <p className="mx-8 text-green-600">{signSuccess}</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;