import * as ActionTypes from '../action/action_type';

let intialState = {
  type: null,
  isLanguageChangeEnglish: false,
  islogin: false,
  isgooglelogin: false,
  isfacebooklogin: false,
  isnumbersignup: false,
  isshowlibrary: false,
  isgetsearch: false,
  userData: [],
};

export default function base(state = intialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_PENDING: {
      return {
        ...state,
        islogin: true
      };
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        type: action.type,
        islogin: false,
        loginData: action.payload
      };
    }
    case ActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        type: action.type,
        islogin: false,
        loginData: [],
      };
    }

    case ActionTypes.GOOGLE_LOGIN_PENDING: {
      return {
        ...state,
        isgooglelogin: true
      };
    }
    case ActionTypes.GOOGLE_LOGIN_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isgooglelogin: false,
        googleLoginData: action.payload
      };
    }
    case ActionTypes.GOOGLE_LOGIN_FAIL: {
      return {
        ...state,
        type: action.type,
        isgooglelogin: false,
        googleLoginData: [],
      };
    }

    case ActionTypes.FACEBOOK_LOGIN_PENDING: {
      return {
        ...state,
        isfacebooklogin: true
      };
    }
    case ActionTypes.FACEBOOK_LOGIN_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isfacebooklogin: false,
        facebookLoginData: action.payload
      };
    }
    case ActionTypes.FACEBOOK_LOGIN_FAIL: {
      return {
        ...state,
        type: action.type,
        isfacebooklogin: false,
        facebookLoginData: [],
      };
    }

    case ActionTypes.NUMBER_SIGNUP_PENDING: {
      return {
        ...state,
        isnumbersignup: true
      };
    }
    case ActionTypes.NUMBER_SIGNUP_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isnumbersignup: false,
        numberSignupData: action.payload
      };
    }
    case ActionTypes.NUMBER_SIGNUP_FAIL: {
      return {
        ...state,
        type: action.type,
        isnumbersignup: false,
        numberSignupData: [],
      };
    }

    case ActionTypes.SHOW_LIBRARY_PENDING: {
      return {
        ...state,
        isshowlibrary: true
      };
    }
    case ActionTypes.SHOW_LIBRARY_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshowlibrary: false,
        showLibraryData: action.payload
      };
    }
    case ActionTypes.SHOW_LIBRARY_FAIL: {
      return {
        ...state,
        type: action.type,
        isshowlibrary: false,
        showLibraryData: [],
      };
    }

    case ActionTypes.SHOW_LIBRARY_DETAILS_PENDING: {
      return {
        ...state,
        isshowlibraryDetails: true
      };
    }
    case ActionTypes.SHOW_LIBRARY_DETAILS_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshowlibraryDetails: false,
        showLibraryDetailsData: action.payload
      };
    }
    case ActionTypes.SHOW_LIBRARY_DETAILS_FAIL: {
      return {
        ...state,
        type: action.type,
        isshowlibraryDetails: false,
        showLibraryDetailsData: [],
      };
    }

    case ActionTypes.SHOW_ALL_LIBRARY_PENDING: {
      return {
        ...state,
        isshowalllibrary: true
      };
    }
    case ActionTypes.SHOW_ALL_LIBRARY_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshowalllibrary: false,
        showAllLibraryData: action.payload
      };
    }
    case ActionTypes.SHOW_ALL_LIBRARY_FAIL: {
      return {
        ...state,
        type: action.type,
        isshowalllibrary: false,
        showAllLibraryData: [],
      };
    }

    case ActionTypes.VERIFY_PAYMENT_PENDING: {
      return {
        ...state,
        isverifypayment: true
      };
    }
    case ActionTypes.VERIFY_PAYMENT_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isverifypayment: false,
        verifyPaymentData: action.payload
      };
    }
    case ActionTypes.VERIFY_PAYMENT_FAIL: {
      return {
        ...state,
        type: action.type,
        isverifypayment: false,
        verifyPaymentData: [],
      };
    }

    case ActionTypes.SHOW_ORDER_PENDING: {
      return {
        ...state,
        isshoworder: true
      };
    }
    case ActionTypes.SHOW_ORDER_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshoworder: false,
        showOrderData: action.payload
      };
    }
    case ActionTypes.SHOW_ORDER_FAIL: {
      return {
        ...state,
        type: action.type,
        isshoworder: false,
        showOrderData: [],
      };
    }

    case ActionTypes.RAZORPAY_ORDER_PENDING: {
      return {
        ...state,
        isshowrazorpayorder: true
      };
    }
    case ActionTypes.RAZORPAY_ORDER_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshowrazorpayorder: false,
        showRazorpayOrderData: action.payload
      };
    }
    case ActionTypes.RAZORPAY_ORDER_FAIL: {
      return {
        ...state,
        type: action.type,
        isshowrazorpayorder: false,
        showRazorpayOrderData: [],
      };
    }

    case ActionTypes.ADD_TO_CART_PENDING: {
      return {
        ...state,
        isaddtocart: true
      };
    }
    case ActionTypes.ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isaddtocart: false,
        addToCartData: action.payload
      };
    }
    case ActionTypes.ADD_TO_CART_FAIL: {
      return {
        ...state,
        type: action.type,
        isaddtocart: false,
        addToCartData: [],
      };
    }

    case ActionTypes.REMOVE_ITEM_PENDING: {
      return {
        ...state,
        isremoveitem: true
      };
    }
    case ActionTypes.REMOVE_ITEM_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isremoveitem: false,
        removeItemData: action.payload
      };
    }
    case ActionTypes.REMOVE_ITEM_FAIL: {
      return {
        ...state,
        type: action.type,
        isremoveitem: false,
        removeItemData: [],
      };
    }

    case ActionTypes.GET_CART_PENDING: {
      return {
        ...state,
        isgetitem: true
      };
    }
    case ActionTypes.GET_CART_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isgetitem: false,
        getItemData: action.payload
      };
    }
    case ActionTypes.GET_CART_FAIL: {
      return {
        ...state,
        type: action.type,
        isgetitem: false,
        getItemData: [],
      };
    }

    case ActionTypes.RAZORPAY_VERIFICATION_DONATION_PENDING: {
      return {
        ...state,
        israzorpaydonation: true
      };
    }
    case ActionTypes.RAZORPAY_VERIFICATION_DONATION_SUCCESS: {
      return {
        ...state,
        type: action.type,
        israzorpaydonation: false,
        razorpayDonationData: action.payload
      };
    }
    case ActionTypes.RAZORPAY_VERIFICATION_DONATION_FAIL: {
      return {
        ...state,
        type: action.type,
        israzorpaydonation: false,
        razorpayDonationData: [],
      };
    }

    case ActionTypes.DONATION_PAYMENT_PENDING: {
      return {
        ...state,
        isdonationpayment: true
      };
    }
    case ActionTypes.DONATION_PAYMENT_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isdonationpayment: false,
        donationPaymentData: action.payload
      };
    }
    case ActionTypes.DONATION_PAYMENT_FAIL: {
      return {
        ...state,
        type: action.type,
        isdonationpayment: false,
        donationPaymentData: [],
      };
    }

    case ActionTypes.GET_DONATION_PENDING: {
      return {
        ...state,
        isgetdonation: true
      };
    }
    case ActionTypes.GET_DONATION_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isgetdonation: false,
        getDonationData: action.payload
      };
    }
    case ActionTypes.GET_DONATION_FAIL: {
      return {
        ...state,
        type: action.type,
        isgetdonation: false,
        getDonationData: [],
      };
    }

    case ActionTypes.CONFIRM_DONATION_PENDING: {
      return {
        ...state,
        isconfirmdonation: true
      };
    }
    case ActionTypes.CONFIRM_DONATION_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isconfirmdonation: false,
        confirmDonationData: action.payload
      };
    }
    case ActionTypes.CONFIRM_DONATION_FAIL: {
      return {
        ...state,
        type: action.type,
        isconfirmdonation: false,
        confirmDonationData: [],
      };
    }

    case ActionTypes.SIGN_UP_PENDING: {
      return {
        ...state,
        issignup: true
      };
    }
    case ActionTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        type: action.type,
        issignup: false,
        signUpData: action.payload
      };
    }
    case ActionTypes.SIGN_UP_FAIL: {
      return {
        ...state,
        type: action.type,
        issignup: false,
        signUpData: [],
      };
    }

    case ActionTypes.SHOW_ALL_PRODUCTS_PENDING: {
      return {
        ...state,
        isshowallproducts: true
      };
    }
    case ActionTypes.SHOW_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshowallproducts: false,
        showAllProductsData: action.payload
      };
    }
    case ActionTypes.SHOW_ALL_PRODUCTS_FAIL: {
      return {
        ...state,
        type: action.type,
        isshowallproducts: false,
        showAllProductsData: [],
      };
    }

    case ActionTypes.SHOW_USER_PENDING: {
      return {
        ...state,
        isshowuser: true
      };
    }
    case ActionTypes.SHOW_USER_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshowuser: false,
        showUserData: action.payload
      };
    }
    case ActionTypes.SHOW_USER_FAIL: {
      return {
        ...state,
        type: action.type,
        isshowuser: false,
        showUserData: [],
      };
    }

    case ActionTypes.ADD_COMMENT_AND_RATING_PENDING: {
      return {
        ...state,
        isaddcommentandrating: true
      };
    }
    case ActionTypes.ADD_COMMENT_AND_RATING_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isaddcommentandrating: false,
        addCommentAndRatingData: action.payload
      };
    }
    case ActionTypes.ADD_COMMENT_AND_RATING_FAIL: {
      return {
        ...state,
        type: action.type,
        isaddcommentandrating: false,
        addCommentAndRatingData: [],
      };
    }

    case ActionTypes.GET_ONE_PRODUCT_PENDING: {
      return {
        ...state,
        isgetoneproduct: true
      };
    }
    case ActionTypes.GET_ONE_PRODUCT_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isgetoneproduct: false,
        getOneProductData: action.payload
      };
    }
    case ActionTypes.GET_ONE_PRODUCT_FAIL: {
      return {
        ...state,
        type: action.type,
        isgetoneproduct: false,
        getOneProductData: [],
      };
    }

    case ActionTypes.GET_ONE_ORDER_PENDING: {
      return {
        ...state,
        isgetoneorder: true
      };
    }
    case ActionTypes.GET_ONE_ORDER_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isgetoneorder: false,
        getOneOrderData: action.payload
      };
    }
    case ActionTypes.GET_ONE_ORDER_FAIL: {
      return {
        ...state,
        type: action.type,
        isgetoneorder: false,
        getOneOrderData: [],
      };
    }

    case ActionTypes.HOME_PENDING: {
      return {
        ...state,
        ishome: true
      };
    }
    case ActionTypes.HOME_SUCCESS: {
      return {
        ...state,
        type: action.type,
        ishome: false,
        homeData: action.payload
      };
    }
    case ActionTypes.HOME_FAIL: {
      return {
        ...state,
        type: action.type,
        ishome: false,
        homeData: [],
      };
    }

    case ActionTypes.SHIPPING_PENDING: {
      return {
        ...state,
        isshipping: true
      };
    }
    case ActionTypes.SHIPPING_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isshipping: false,
        shippingData: action.payload
      };
    }
    case ActionTypes.SHIPPING_FAIL: {
      return {
        ...state,
        type: action.type,
        isshipping: false,
        shippingData: [],
      };
    }

    case ActionTypes.CART_ITEMS_PENDING: {
      return {
        ...state,
        iscartitems: true
      };
    }
    case ActionTypes.CART_ITEMS_SUCCESS: {
      return {
        ...state,
        type: action.type,
        iscartitems: false,
        cartData: action.payload
      };
    }
    case ActionTypes.CART_ITEMS_FAIL: {
      return {
        ...state,
        type: action.type,
        iscartitems: false,
        cartData: [],
      };
    }

    case ActionTypes.GET_LIBRARY_PENDING: {
      return {
        ...state,
        isgetlibrary: true
      };
    }
    case ActionTypes.GET_LIBRARY_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isgetlibrary: false,
        getLibraryData: action.payload
      };
    }
    case ActionTypes.GET_LIBRARY_FAIL: {
      return {
        ...state,
        type: action.type,
        isgetlibrary: false,
        getLibraryData: [],
      };
    }

    case ActionTypes.OTP_PENDING: {
      return {
        ...state,
        isotp: true
      };
    }
    case ActionTypes.OTP_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isotp: false,
        otpData: action.payload
      };
    }
    case ActionTypes.OTP_FAIL: {
      return {
        ...state,
        type: action.type,
        isotp: false,
        otpData: [],
      };
    }

    case ActionTypes.VERIFY_OTP_PENDING: {
      return {
        ...state,
        isverifyotp: true
      };
    }
    case ActionTypes.VERIFY_OTP_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isverifyotp: false,
        loginData: action.payload
      };
    }
    case ActionTypes.VERIFY_OTP_FAIL: {
      return {
        ...state,
        type: action.type,
        isverifyotp: false,
        loginData: [],
      };
    }


    case ActionTypes.GET_SEARCH_LIBRARY_PENDING: {
      return {
        ...state,
        isgetsearch: true
      };
    }
    case ActionTypes.GET_SEARCH_LIBRARY_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isgetsearch: false,
        getSearchData: action.payload
      };
    }
    case ActionTypes.GET_SEARCH_LIBRARY_FAIL: {
      return {
        ...state,
        type: action.type,
        isgetsearch: false,
        getSearchData: [],
      };
    }


    case ActionTypes.CLEAR_AUTH_REDUCER_SUCCESS: {
      let data = action.payload;
      let stateData = {
        ...state,
      };
      Object.assign(stateData, data);
      console.log('Data', stateData);
      return stateData;
    }

    default:
      return state;
  }
}
