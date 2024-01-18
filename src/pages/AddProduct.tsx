import {useForm} from "react-hook-form";
import "../assets/css/AddProduct.css";
import {Link} from "react-router-dom";
import {useMutation,useQuery} from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// import React from "react";


function AddProduct() {
    const { id_p } = useParams();
    const { data: dataById } = useQuery({
        queryKey: ['GETBYID'],
        queryFn() {
            return axios.get(`http://localhost:8082/item/getById/${id_p}`);
        },
        enabled: !!id_p,
    });

    const navigate = useNavigate();
    const apiCall=useMutation({
        mutationKey:["POST_ITEM"],
        mutationFn: async (formData) => {
            try {
                const response = await axios.post('http://localhost:8082/item/save', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                return response.data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        onError: (error) => {
            toast.error(`Error: ${error.message}`);
        },
    })
    const {register, handleSubmit} = useForm({
        defaultValues: id_p ? dataById?.data : {},
    });

    const onSubmit = (data,e) => {
        const formData = new FormData();
        formData.append('itemName', data.itemName);
        formData.append('itemDescription', data.itemDescription);
        formData.append('itemQuantity', data.itemQuantity);
        formData.append('itemPerPrice', data.itemPerPrice);
        formData.append('itemImage', data.itemImage[0]); // Assuming itemImage is a file input

        if (Object.values(data).some((value) => !value)) {
            toast.error('Please fill all the fields!');
        } else {
            apiCall.mutate(formData);
            toast.success('Product added successfully!');
            e.target.reset();

        }
    };
    return (
        <div className={"ap-container"}>
            <div className={"ap-buttons"}>
                <div className={"ap-top"}>
                    <a href="/admin/products">
                        <img src={"../images/Logo.png"}
                             width={100}
                             alt={"logo"}
                        />

                    </a>
                    <span>LugaHub</span>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={"ap-btn"}>
                    {/*<button className={"product"}><i className="fa-solid fa-clipboard"></i>Products</button>*/}
                    <div className="ap-dropdown">
                       <button className="ap-dropbtn"><i className="fa-solid fa-clipboard"></i>Products<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="ap-dropdown-content">
                            <a href="/admin/products">View Product</a>
                            <a href="/admin/addproduct">Add Product</a>

                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-list"></i>Categories</button>*/}
                    <div className="cgr-dropdown">
                        <button className="cgr-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cgr-dropdown-content">
                            <a href="/admin/viewcategory">View Category</a>
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-tag"></i>Brands</button>*/}
                    <div className="brd-dropdown">
                        <button className="brd-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brd-dropdown-content">
                            <a href="/admin/viewbrand">View Brand</a>
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>
                    <Link to={"/admin/totalorders"}><button className={"products"}><i className="fa-solid fa-cart-shopping"></i>Total Orders</button></Link>
                    <Link to={"/admin/users"}><button className={"products"}><i className="fa-solid fa-users"></i>Users</button></Link>
                    {/*<button className={"products"}><i className="fa-solid fa-user"></i>Profile</button>*/}
                    <div className="pr-dropdown">
                        <button className="pr-dropbtn"><i className="fa-solid fa-user"></i>Profile<i className="fa-solid fa-caret-down" style={{ marginLeft: '70px' }}></i></button>
                        <div className="pr-dropdown-content">
                            <a href="/admin/profile">View Profile</a>
                            <a href="/admin/editprofile">Edit Profile</a>
                            <a href="/admin/changepassword">Change Password</a>
                        </div>
                    </div>
                    <Link to={"/admin/aboutus"}><button className={"products"}><i className="fa-regular fa-address-card"></i>About Us</button></Link>
                    <Link to={"/admin/login"}><button className={"products"}><i className="fa-solid fa-arrow-right"></i>Log Out</button></Link>
                </div>
            </div>
            <div className={"ap-display"}>
                <div className={"ap-headers"}>
                    <h2>Add Product</h2>

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"ap-details"}>
                    <div className={"ap-firstrow"}>
                        <input type={"text"} placeholder={"Enter Product Name"} {...register("itemName")} />
                        <input  className={"product-description-input"} type={"text"} placeholder={"Enter Product Description"}  {...register("itemDescription")} />
                        <input type={"number"} placeholder={"Enter Product Price"} {...register("itemPerPrice")} />
                        <input type={"number"} placeholder={"Enter Product Quantity" } {...register("itemQuantity")} />
                        <select>
                            <option value="" disabled selected>Select Brand</option>
                            <option value="brand1">Nike</option>
                            <option value="brand2">Adidas</option>
                            <option value="brand3">Puma</option>
                        </select>
                    </div>
                    <div className={"ap-secondrow"}>
                        <select>
                            <option value="" disabled selected>Select Category</option>
                            <option value="tshirt">T-shirt</option>
                            <option value="shirt">Shirt</option>
                            <option value="pant">Pant</option>
                        </select>
                        <select>
                            <option value="" disabled selected>Select Cloth Size</option>
                            <option value="small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Extra Large">Extra Large</option>
                        </select>
                        <select>
                            <option value="" disabled selected>Select Cloth Type</option>
                            <option value="men">Men</option>
                            <option value="Women">Women</option>
                        </select>
                        <div>
                            <span>Select Product Image</span>
                            <input type="file" {...register("itemImage")} />
                        </div>
                    </div>
                </div>
                <div className={"ap-pr-btn"}>
                    <button type={"submit"}>Add Product</button>
                </div>
                </form>
                <ToastContainer autoClose={4000} />



            </div>
        </div>

    )
}

export default AddProduct;
