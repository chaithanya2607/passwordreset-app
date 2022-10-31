import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const userValidationSchema = yup.object({
name: yup.string().required("Why not give your name?"),
email: yup.string().required("Why not give the email?"),
password: yup.string().required("password required"),
});

export default function Home() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
     password: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      //  console.log("onSubmit",newUser);
      createUser(newUser);
    },
  });

  const navigate = useNavigate();
  const createUser = (newUser) => {
    console.log("createUser", newUser);
    fetch("https://63234c53bb2321cba916eb6e.mockapi.io/passreset", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
  };

  return (
    <div className="add-user">
      <div className="container mt-5">
        <div className="w-50 mx-auto shadow p-5">
          <form onSubmit={formik.handleSubmit}>
            <input
              className="form-control form-control-lg"
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
            <br></br>

            <input
              className="form-control form-control-lg"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email address"
            />
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
            <br></br>
            <input
              className="form-control form-control-lg"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter a password"
            />
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
            <br></br>
            <div className="d-grid gap-2 col-6 mx-auto">
            <button
            style={{marginLeft:"20px"}}
                onClick={()=>navigate("/login")}
                className="btn btn-success mt-5"
                type="submit"
              >
                Login
              </button>
              <button
               style={{marginLeft:"20px"}}
                onClick={createUser}
                className="btn btn-success mt-5"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}