import React from "react";
import { Badge, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { store } from "../../../State/Store";
import { createPayment } from "../../../State/Payment/Action";

// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";

// import { createPayment } from "../../../Redux/Customers/Payment/Action";

const OrderSummary = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
    const {order}=useSelector(store=>store)
//   const dispatch=useDispatch();
//     const jwt=localStorage.getItem("jwt");

  
//   console.log("orderId ", order)
  
  useEffect(()=>{
    
    dispatch(getOrderById(orderId))
  },[orderId])
  
  const handleCreatePayment=()=>{
    // const data={orderId:order.order?._id}
    dispatch(createPayment(orderId))
  }
    
  
    return (
      <div className="space-y-5">
          <div className="p-5 shadow-lg rounded-md border ">
              <AddressCard address={order.order?.shippingAddress} />
          </div>
        <div className="lg:grid grid-cols-3 relative justify-between">
          <div className="lg:col-span-2 ">
            <div className=" space-y-3">
             
                <>
                {order.order?.orderItems.map((item)=> <CartItem item={item}/>)}
                </>
             
            </div>
          </div>
          <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />
  
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price</span>
                  <span>${order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-${order.order?.discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">${order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
  
              <Button
                onClick={handleCreatePayment}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default OrderSummary