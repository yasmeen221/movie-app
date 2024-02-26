import { useState } from "react";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [registerErrors, setRegisterErrors] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });

  const handleInputChange = (e) => {
    const field_name = e.target.name;
    const field_value = e.target.value;
    if (field_name === "name") {
      setRegister({
        ...register,
        name: field_value,
      });

      setRegisterErrors({
        ...registerErrors,
        name:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 3
            ? "Enter a valid Name"
            : null,
      });
    }
    if (field_name === "email") {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setRegister({
        ...register,
        email: field_value,
      });

      setRegisterErrors({
        ...registerErrors,
        email:
          field_value.length === 0
            ? "This field is required"
            : !pattern.test(field_value)
            ? "email not valid , email must have @ .com and numbers"
            : null,
      });
    }

    if (field_name === "username") {
      setRegister({
        ...register,
        userName: field_value,
      });

      setRegisterErrors({
        ...registerErrors,
        userName:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 3
            ? "Enter a valid userName"
            : null,
      });
    }

    if (field_name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#]).{8,}$/;
      setRegister({
        ...register,
        password: field_value,
      });

      setRegisterErrors({
        ...registerErrors,
        password:
          field_value.length === 0
            ? "This field is required"
            : !passwordRegex.test(field_value)
            ? "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
            : null,
      });
    }
    if (field_name === "confirmpassowrd") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#]).{8,}$/;
      setRegister({
        ...register,
        confirmPassword: field_value,
      });

      setRegisterErrors({
        ...registerErrors,
        confirmPassword:
          field_value.length === 0
            ? "This field is required"
            : !passwordRegex.test(field_value)
            ? "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
            : register.password !== field_value
            ? "Passwords do not match"
            : null,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(gameForm);
  };

  return (
    <>
      <h2>Register</h2>
      <hr />
      <div style={{width:"600px", border:"2px solid black", padding:"20px", margin:"auto", backgroundColor:"#ead24c", borderRadius:"20px"}}>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${
                registerErrors.name ? "border-danger" : ""
              }`}
              id="name"
              name="name"
              aria-describedby="name_help"
              value={register.name}
              onChange={handleInputChange}
            />
            {registerErrors.name && (
              <div id="name_help" className="form-text text-danger">
                {registerErrors.name}
              </div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${
                registerErrors.email ? "border-danger" : ""
              }`}
              id="email"
              name="email"
              aria-describedby="email_help"
              value={register.email}
              onChange={handleInputChange}
            />
            {registerErrors.email && (
              <div id="name_help" className="form-text text-danger">
                {registerErrors.email}
              </div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className={`form-control ${
                registerErrors.userName ? "border-danger" : ""
              }`}
              id="username"
              name="username"
              aria-describedby="username_help"
              value={register.userName}
              onChange={handleInputChange}
            />
            {registerErrors.userName && (
              <div id="username_help" className="form-text text-danger">
                {registerErrors.userName}
              </div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${
                registerErrors.password ? "border-danger" : ""
              }`}
              id="password"
              name="password"
              aria-describedby="password_help"
              value={register.password}
              onChange={handleInputChange}
            />
            {registerErrors.password && (
              <div id="password_help" className="form-text text-danger">
                {registerErrors.password}
              </div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              confirmPassword
            </label>
            <input
              type="password"
              className={`form-control ${
                registerErrors.confirmPassword ? "border-danger" : ""
              }`}
              id="confirmpassowrd"
              name="confirmpassowrd"
              aria-describedby="confirmpassowrd_help"
              value={register.confirmPassword}
              onChange={handleInputChange}
            />
            {registerErrors.confirmPassword && (
              <div id="confirmpassowrd_help" className="form-text text-danger">
                {registerErrors.confirmPassword}
              </div>
            )}
          </div>

          <button type="submit" className="btn " style={{backgroundColor:"black", color:"white"}}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
