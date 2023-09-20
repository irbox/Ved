export const DEV_URL = 'https://api.fullstacks.expert/';
export const PRODUCTION_URL = '';
export const BASE_URL = DEV_URL;

const USER = 'user/'

export const REGISTER = USER + 'signup';
export const LOGIN = USER + 'number';
export const VERIFY_OTP = USER +'verify';
export const LOGOUT = USER + 'logout';
export const USER_PROFILE = USER + 'userProfile';
export const GET_DONATION_URL = USER + 'get_donation'

export const GET_LIBRARY_URL = USER + 'showLibrary'
export const GET_TOGETHER_URL = USER + 'get_together'
export const GET_LIBRARY_SEARCH_URL = USER + 'book_search?name='
export const HOME_URL = USER + 'home'
export const SHOW_LIB_BY_CAT_URL = USER + 'get_subcategory_library'
export const ADD_TO_CART_URL = USER + 'addToCart'
export const GET_CART_URL = USER + 'getCart'
export const GET_TAGS_URL = USER + 'get_tags'
export const GET_COURSE_URL = USER + 'get_cate_with_course'
export const GET_SINGLE_COURSE_URL = USER + 'single_course/'
export const CONFIRM_DONATION_URL = 'donation_confirm'
export const RAZORPAY_URL = 'rozarpay/order'
export const RAZORPAY_DONATION_URL = 'donation_payment'
export const RAZORPAY_DONATION_VERIFICATION_URL = 'rozarpay/verification/donation'

export const GET_SOCIAL_URL = USER + 'get_social'