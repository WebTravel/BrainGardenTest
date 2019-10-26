export const GET_IMAGE_START = 'applications/GET_IMAGE_START';
const GET_IMAGE_SUCCESS = 'applications/GET_IMAGE_SUCCESS';
const GET_IMAGE_REJECT = 'applications/GET_IMAGE_REJECT';

export const getImageStart = payload => ({
  type: GET_IMAGE_START,
  payload,
});

export const getImageSuccess = (payload = {}) => ({
  type: GET_IMAGE_SUCCESS,
  payload,
});

export const getImageReject = payload => ({
  type: GET_IMAGE_REJECT,
  payload,
});

export const initialState = {
  isLoading: true,
  error: null,
  data: {},
};

export const imageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMAGE_START:
      return { ...state, isLoading: true, error: null };
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: null,
      };
    case GET_IMAGE_REJECT:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
