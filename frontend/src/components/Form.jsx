import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./form.css";
import { addProduct } from "../store/productSlice";

const initialFormData = {
  productname: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  description: "",
};

function Form() {
  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch();

  function handleOnchnage(e) {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleOnSubmit(e) {
    console.log("hey");
    e.preventDefault();
    dispatch(addProduct(formData)).then((data)=>console.log(data));

    setFormData(initialFormData)
  }

  

  return (
    <form onSubmit={(e) => handleOnSubmit(e)} action="">
      <div className="formdiv">
        <label htmlFor="">Prodcut name</label>
        <input
          name="productname"
          onChange={handleOnchnage}
          type="text"
          placeholder="Enter your Product name"
        />
      </div>
      <div className="formdiv">
        <label htmlFor="">Description</label>
        <textarea name="description" onChange={handleOnchnage} id=""></textarea>
      </div>
      <div className="formdiv">
        <label htmlFor="category">Select Category</label>
        <select onChange={handleOnchnage} name="category">
          <option disabled hidden selected>
            Select category
          </option>
          <option value="H&M">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div className="formdiv">
        <label htmlFor="">Select Brand</label>
        <select onChange={handleOnchnage} name="brand">
          <option hidden disabled selected>
            Select brand
          </option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
          <option value="Zara">Zara</option>
          <option value="H&M">H&M</option>
        </select>
      </div>

      <div className="formdiv">
        <label htmlFor="">Price</label>
        <input name="price" onChange={handleOnchnage} type="number" />
      </div>
      <div className="formdiv">
        <label htmlFor="">Sale Price</label>
        <input name="salePrice" onChange={handleOnchnage} type="number" />
      </div>

      <input className="btn" type="submit" value="Add" />
    </form>
  );
}

export default Form;
