import * as ActionTypes from './action_type';
import { CommonActionNoServiceCall, CommonAction, ClearReducerAction } from './helper/CommonAction';
import {Login, GoogleLogin, FacebookLogin, NumberSignup, ShowLibrary, ShowLibraryDetails, ShowAllLibrary, VerifyPayment, ShowOrder, RazorpayOrder, AddtoCart, RemoveItem, GetCart, RazorPayVerification, Donation, GetDonation, ConfirmDonation, SignUp, ShowAllProducts, ShowUser, AddCommentAndRating, GetOneProduct, GetOneOrder, Home, Shipping, CartItems, GetLibrary, Otp, VerifyOtp, GetSearch} from '../service/auth.service';

export const login = (url, params) => {
  console.log('Get action', url, params);
  const actions = {
    pending: ActionTypes.LOGIN_PENDING,
    success: ActionTypes.LOGIN_SUCCESS,
    fail: ActionTypes.LOGIN_FAIL,
  };
  return CommonAction(url, params, actions, Login);
};

export const googleLogin = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.GOOGLE_LOGIN_PENDING,
      success: ActionTypes.GOOGLE_LOGIN_SUCCESS,
      fail: ActionTypes.GOOGLE_LOGIN_FAIL,
    };
    return CommonAction(url, params, actions, GoogleLogin);
  };

  export const facebookLogin = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.FACEBOOK_LOGIN_PENDING,
      success: ActionTypes.FACEBOOK_LOGIN_SUCCESS,
      fail: ActionTypes.FACEBOOK_LOGIN_FAIL,
    };
    return CommonAction(url, params, actions, FacebookLogin);
  };

  export const numberSignup = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.NUMBER_SIGNUP_PENDING,
      success: ActionTypes.NUMBER_SIGNUP_SUCCESS,
      fail: ActionTypes.NUMBER_SIGNUP_FAIL,
    };
    return CommonAction(url, params, actions, NumberSignup);
  };

  export const showLibrary = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SHOW_LIBRARY_PENDING,
      success: ActionTypes.SHOW_LIBRARY_SUCCESS,
      fail: ActionTypes.SHOW_LIBRARY_FAIL,
    };
    return CommonAction(url, params, actions, ShowLibrary);
  };

  export const showLibraryDetails = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SHOW_LIBRARY_DETAILS_PENDING,
      success: ActionTypes.SHOW_LIBRARY_DETAILS_SUCCESS,
      fail: ActionTypes.SHOW_LIBRARY_DETAILS_FAIL,
    };
    return CommonAction(url, params, actions, ShowLibraryDetails);
  };

  export const showAllLibrary = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SHOW_ALL_LIBRARY_PENDING,
      success: ActionTypes.SHOW_ALL_LIBRARY_SUCCESS,
      fail: ActionTypes.SHOW_ALL_LIBRARY_FAIL,
    };
    return CommonAction(url, params, actions, ShowAllLibrary);
  };

  export const verifyPayment = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.VERIFY_PAYMENT_PENDING,
      success: ActionTypes.VERIFY_PAYMENT_SUCCESS,
      fail: ActionTypes.VERIFY_PAYMENT_FAIL,
    };
    return CommonAction(url, params, actions, VerifyPayment);
  };

  export const showOrder = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SHOW_ORDER_PENDING,
      success: ActionTypes.SHOW_ORDER_SUCCESS,
      fail: ActionTypes.SHOW_ORDER_FAIL,
    };
    return CommonAction(url, params, actions, ShowOrder);
  };

  export const razorpayOrder = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.RAZORPAY_ORDER_PENDING,
      success: ActionTypes.RAZORPAY_ORDER_SUCCESS,
      fail: ActionTypes.RAZORPAY_ORDER_FAIL,
    };
    return CommonAction(url, params, actions, RazorpayOrder);
  };

  export const addtoCart = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.ADD_TO_CART_PENDING,
      success: ActionTypes.ADD_TO_CART_SUCCESS,
      fail: ActionTypes.ADD_TO_CART_FAIL,
    };
    return CommonAction(url, params, actions, AddtoCart);
  };

  export const removeItem = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.REMOVE_ITEM_PENDING,
      success: ActionTypes.REMOVE_ITEM_SUCCESS,
      fail: ActionTypes.REMOVE_ITEM_FAIL,
    };
    return CommonAction(url, params, actions, RemoveItem);
  };

  export const getCart = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.GET_CART_PENDING,
      success: ActionTypes.GET_CART_SUCCESS,
      fail: ActionTypes.GET_CART_FAIL,
    };
    return CommonAction(url, params, actions, GetCart);
  };

  export const razorPayVerification = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.RAZORPAY_VERIFICATION_DONATION_PENDING,
      success: ActionTypes.RAZORPAY_VERIFICATION_DONATION_SUCCESS,
      fail: ActionTypes.RAZORPAY_VERIFICATION_DONATION_FAIL,
    };
    return CommonAction(url, params, actions, RazorPayVerification);
  };

  export const donation = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.DONATION_PAYMENT_PENDING,
      success: ActionTypes.DONATION_PAYMENT_SUCCESS,
      fail: ActionTypes.DONATION_PAYMENT_FAIL,
    };
    return CommonAction(url, params, actions, Donation);
  };

  export const getDonation = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.GET_DONATION_PENDING,
      success: ActionTypes.GET_DONATION_SUCCESS,
      fail: ActionTypes.GET_DONATION_FAIL,
    };
    return CommonAction(url, params, actions, GetDonation);
  };

  export const confirmDonation = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.CONFIRM_DONATION_PENDING,
      success: ActionTypes.CONFIRM_DONATION_SUCCESS,
      fail: ActionTypes.CONFIRM_DONATION_FAIL,
    };
    return CommonAction(url, params, actions, ConfirmDonation);
  };

  export const signUp = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SIGN_UP_PENDING,
      success: ActionTypes.SIGN_UP_SUCCESS,
      fail: ActionTypes.SIGN_UP_FAIL,
    };
    return CommonAction(url, params, actions, SignUp);
  };

  export const showAllProducts = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SHOW_ALL_PRODUCTS_PENDING,
      success: ActionTypes.SHOW_ALL_PRODUCTS_SUCCESS,
      fail: ActionTypes.SHOW_ALL_PRODUCTS_FAIL,
    };
    return CommonAction(url, params, actions, ShowAllProducts);
  };

  export const showUser = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SHOW_USER_PENDING,
      success: ActionTypes.SHOW_USER_SUCCESS,
      fail: ActionTypes.SHOW_USER_FAIL,
    };
    return CommonAction(url, params, actions, ShowUser);
  };

  export const addCommentAndRating = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.ADD_COMMENT_AND_RATING_PENDING,
      success: ActionTypes.ADD_COMMENT_AND_RATING_SUCCESS,
      fail: ActionTypes.ADD_COMMENT_AND_RATING_FAIL,
    };
    return CommonAction(url, params, actions, AddCommentAndRating);
  };

  export const getOneProduct = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.GET_ONE_PRODUCT_PENDING,
      success: ActionTypes.GET_ONE_PRODUCT_SUCCESS,
      fail: ActionTypes.GET_ONE_PRODUCT_FAIL,
    };
    return CommonAction(url, params, actions, GetOneProduct);
  };

  export const getOneOrder = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.GET_ONE_ORDER_PENDING,
      success: ActionTypes.GET_ONE_ORDER_SUCCESS,
      fail: ActionTypes.GET_ONE_ORDER_FAIL,
    };
    return CommonAction(url, params, actions, GetOneOrder);
  };

  export const home = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.HOME_PENDING,
      success: ActionTypes.HOME_SUCCESS,
      fail: ActionTypes.HOME_FAIL,
    };
    return CommonAction(url, params, actions, Home);
  };

  export const shipping = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.SHIPPING_PENDING,
      success: ActionTypes.SHIPPING_SUCCESS,
      fail: ActionTypes.SHIPPING_FAIL,
    };
    return CommonAction(url, params, actions, Shipping);
  };

  export const cartItems = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.CART_ITEMS_PENDING,
      success: ActionTypes.CART_ITEMS_SUCCESS,
      fail: ActionTypes.CART_ITEMS_FAIL,
    };
    return CommonAction(url, params, actions, CartItems);
  };

  export const getLibrary = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.GET_LIBRARY_PENDING,
      success: ActionTypes.GET_LIBRARY_SUCCESS,
      fail: ActionTypes.GET_LIBRARY_FAIL,
    };
    return CommonAction(url, params, actions, GetLibrary);
  };

  export const otp = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.OTP_PENDING,
      success: ActionTypes.OTP_SUCCESS,
      fail: ActionTypes.OTP_FAIL,
    };
    return CommonAction(url, params, actions, Otp);
  };

  export const verifyOtp = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.VERIFY_OTP_PENDING,
      success: ActionTypes.VERIFY_OTP_SUCCESS,
      fail: ActionTypes.VERIFY_OTP_FAIL,
    };
    return CommonAction(url, params, actions, VerifyOtp);
  };

  export const getSearch = (url, params) => {
    console.log('Get action', url, params);
    const actions = {
      pending: ActionTypes.GET_SEARCH_LIBRARY_PENDING,
      success: ActionTypes.GET_SEARCH_LIBRARY_SUCCESS,
      fail: ActionTypes.GET_SEARCH_LIBRARY_FAIL,
    };
    return CommonAction(url, params, actions, GetSearch);
  };

export const clearAuthReducer = params => {
  console.log('clearAuthReducer', params);
  const actions = {
    success: params.action,
  };
  delete params['action'];
  return ClearReducerAction(params, actions);
};

