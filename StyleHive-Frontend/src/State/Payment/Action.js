// import { API_BASE_URL } from '../../../config/api';
import {api} from '../../config/apiConfig'
import {
    CREATE_PAYMENT_REQUEST,
    // CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_FAILURE,
    // UPDATE_PAYMENT_SUCCESS,
    // UPDATE_PAYMENT_FAILURE,
  } from './ActionType';
  
//   import axios from 'axios';
  
  export const createPayment = (orderId) => async (dispatch) => {
    // console.log("create payment reqData ",reqData)
    dispatch({
        type: CREATE_PAYMENT_REQUEST,
      });
    try {

    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${reqData.jwt}`,
    //     },
    //   };
  
      const { data } = await api.post(`/api/payments/${orderId}`,{});
//   console.log("datta",data)
  if(data.payment_link_url){
    window.location.href=data.payment_link_url;
  }
    //   dispatch({
    //     type: CREATE_PAYMENT_SUCCESS,
    //     payload: data,
    //   });
    } catch (error) {
      dispatch({
        type: CREATE_PAYMENT_FAILURE,
        payload: error.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };
  



  export const updatePayment = (reqData) => async (dispatch) => {
    //   console.log("update payment reqData ",reqData)
      dispatch({type: UPDATE_PAYMENT_REQUEST});
      try {
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${reqData.jwt}`,
        //   },
        // };
        const {data} = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        // console.log("updated data ---- ",response.data)
        // dispatch(updatePaymentSuccess(response.data));
      } catch (error) {
        dispatch({type: CREATE_PAYMENT_FAILURE, payload: error.message});
        // console.log("catch error ",error)
      }
    //};
  };

// export const updatePaymentRequest = () => {
//   return {
//     type: UPDATE_PAYMENT_REQUEST,
//   };
// };

// export const updatePaymentSuccess = (payment) => {
//   return {
//     type: UPDATE_PAYMENT_SUCCESS,
//     payload: payment,
//   };
// };

// export const updatePaymentFailure = (error) => {
//   return {
//     type: UPDATE_PAYMENT_FAILURE,
//     payload: error,
//   };
// };

 
  