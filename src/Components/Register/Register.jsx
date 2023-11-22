
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { useContext, useState } from 'react';
import { AuthProvider } from '../AuthContributor/AuthContributor';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data)
    }
    const { createUser } = useContext(AuthProvider)
    // const registerNavi = useNavigate()

    // const [userError, setUserError] = useState();
    // const [userSuccess, setUserSuccess] = useState();
    // const handleLogin = e => {
    //     e.preventDefault();
    //     const form = e.target
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const name = form.name.value;
    //     console.log(email, password, name);

    //     setUserError(" ");
    //     setUserSuccess(" ");

    //     if (password.length < 6) {
    //         setUserError(" Password should be at least 6 characters ")
    //         return;
    //     } else if (!/[A-Z]/.test(password)) {
    //         setUserError('you should use one uppercase character.')
    //         return;
    //     } else if (!/[!@#$%^&*]/.test(password))
    //         setUserError('you should a special character')

    //     createUser(email, password)
    //         .then(result => {


    //             // updateUserDetails(result.user, name, photo)
    //             console.log(result);

    //             setUserSuccess("User Created successfully!")
    //             e.target.reset()
    //             registerNavi('/login');

    //             Swal.fire({
    //                 icon: "success",
    //                 title: "Register Successful",
    //                 text: "You have register successfully!",
    //             });

    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setUserError(error.message);
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Register Failed",
    //                 text: "An error occurred during sign in. Please try again.",
    //             });

    //         })

    //     e.target.reset()
    // }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Register </title>
            </Helmet>

            <div className="hero lg:h-[1000px] bg-[url('./src/assets/others/authentication.png')]" >
                <div className="hero-content lg:flex-row-reverse flex-col  bg-[url('./src/assets/others/authentication.png')] shadow-2xl lg:w-[1100px] lg:h-[900px] ">
                    <img className='lg:h-[400px] h-[200px]' src={img} alt="" />
                    <div className="card w-full max-w-sm ">
                        <form  onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name" , { required: true })} placeholder="name" className="input input-bordered lg:w-[400px]"  />
                                {errors.name&& <span className='text-red-800'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email" , { required: true }) } placeholder="email" className="input input-bordered lg:w-[400px]"  />
                                {errors.email && <span className='text-red-800'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password" , { required: true })} placeholder="password" className="input input-bordered lg:w-[400px]"  />
                                {errors.password && <span >This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="password" ref={captchaRef} name='captcha' placeholder="type the captcha" className="input input-bordered lg:w-[400px]" required />
                                <button onClick={handleCaptcha} className='btn btn-outline btn-xs my-3'>Validate</button>

                            </div> */}
                            <div>
                                <p className='text-center'>
                                    Already registered? Go to<Link to='/login'> <span className='hover:text-[#D1A054]'>Login</span></Link>
                                </p>
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="Register" className="btn text-white btn-outline bg-[#D1A054] lg:w-[400px]" />
                            </div>
                        </form>
                        {/* {
                            userError && <p className="mx-8 text-red-600">{userError}</p>
                        }
                        {
                            userSuccess && <p className="mx-8 text-green-600">{userSuccess}</p>
                        } */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;