import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schema/schema";

const initialValues = {
  Name: "",
  Email: "",
  PhoneNumber: "",
  date: "",
  City: "",
  District: "",
  Province: "Province 1",
  Countries: "Nepal",
};

const provinces = [
  { key: "Province 1" },
  { key: "Province 2" },
  { key: "Province 3" },
  { key: "Province 4" },
  { key: "Province 5" },
  { key: "Province 6" },
  { key: "Province 7" },
];

function Form(props) {
  const {
    data,
    setData,
    toggleSubmit,
    setTogglesubmit,
    edited,
    setEditvalue,
    compare,
  } = props;
  const [countries, setCountries] = useState([]);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (value) => {
        console.log(toggleSubmit);
        if (!toggleSubmit) {
          console.log(edited);
          setData(
            data.map((element) => {
              if (element.id === edited) {
                Object.assign(element, value);
                setTogglesubmit(true);
                setEditvalue({});
              }
              return element;
            })
          );
        } else {
          const allInputData = {
            id: new Date().getTime().toString(),
            ...value,
          };
          setData([...data, allInputData]);
        }
      },
    });
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      });
  }, []);

  countries.sort((a, b) => compare(a.name.common, b.name.common));

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div className="formClass">
          <label htmlFor="Name">Name*</label>
          <input
            className="fields"
            type="text"
            id="fname"
            name="Name"
            placeholder="Your name.."
            value={values.Name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Name && touched.Name ? (
            <p className="errors">{errors.Name}</p>
          ) : null}
        </div>

        <div className="formClass">
          <label htmlFor="Email">Email*</label>
          <input
            className="fields"
            type="email"
            id="lname"
            name="Email"
            placeholder="Your email.."
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Email && touched.Email ? (
            <p className="errors">{errors.Email}</p>
          ) : null}
        </div>
        <div className="formClass">
          <label htmlFor="PhoneNumber">Phone Number*</label>
          <input
            className="fields"
            type="Number"
            id="lname"
            name="PhoneNumber"
            placeholder="Phone Number"
            value={values.PhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.PhoneNumber && touched.PhoneNumber ? (
            <p className="errors">{errors.PhoneNumber}</p>
          ) : null}
        </div>
        <div className="formClass">
          <label htmlFor="Date">Your date of birth</label>
          <input
            className="fields"
            type="Date"
            id="lname"
            name="date"
            onChange={handleChange}
            placeholder="Date of birth"
          />
        </div>
        <label htmlFor="Address" id="specialLabel">
          Address
        </label>
        <div className="formClass address">
          <input
            className="fields "
            type="Text"
            id="lname"
            name="City"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            className="fields "
            type="Text"
            id="lname"
            name="District"
            placeholder="District"
            onChange={handleChange}
          />
        </div>
        <div className="formClass">
          <label htmlFor="Province">Province</label>
          <select name="Province" id="" onChange={handleChange}>
            {provinces.map((province) => {
              return <option>{province.key} </option>;
            })}
          </select>
        </div>

        <div className="formClass">
          <label htmlFor="Countries">Countries</label>
          <select onChange={handleChange} name="Countries" id="">
            <option style={{ display: "None" }}>Nepal</option>
            {countries.map((Country) => {
              return <option>{Country.name.common} </option>;
            })}
          </select>
          <div className="btnContainer">
            {toggleSubmit ? (
              <button className="btnForm" type="submit">
                Add to do
              </button>
            ) : (
              <button className="btnForm" type="submit">
                Edit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
