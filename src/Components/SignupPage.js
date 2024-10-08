import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiHeart, BiHome, BiSolidCameraMovie, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {

  const backendUrl = process.env.REACT_APP_BACKEND_URL;


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    agreeTerms: false
  });

    
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }
      
    try {
      const response = await fetch(`${backendUrl}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      alert('User registered successfully');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
    };
    

    return (
    <>
        {/* Header */}
        
             <div className='bg-warning p-3 d-flex justify-content-between align-items-center'>
            <h1 className="d-flex align-items-center">
                <BiSolidCameraMovie size={60} className='me-2' /> CineSearch
            </h1>
            <div className='d-flex align-items-center'>
                <div
                    className='d-flex align-items-center me-3'
                    style={{ cursor: 'pointer' }}
                >
                    <BiHome size={30} className='me-2' />
                    <span>Home</span>
                </div>
                <div
                    className='d-flex align-items-center me-3'
                    style={{ cursor: 'pointer' }}
                >
                    <BiHeart size={30} className='me-2' />
                    <span>Favorites</span>
                </div>
                <div
                    className='d-flex align-items-center'
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                >
                    <BiUser size={30} className='me-2' />
                    <span>Sign In</span>
                </div>
            </div>
        </div>
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            name="repeatPassword"
                            value={formData.repeatPassword}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">
                            Confirm password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-warning btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://pmsaposse.sp.gov.br/wp-content/uploads/2018/09/cinemapontosmis.jpg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
            
  );
};



export default SignupPage;
