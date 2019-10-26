export const GET_IMAGES_START = 'applications/GET_IMAGES_START';
const GET_IMAGES_SUCCESS = 'applications/GET_IMAGES_SUCCESS';
const GET_IMAGES_REJECT = 'applications/GET_IMAGES_REJECT';

export const getImagesStart = () => ({
  type: GET_IMAGES_START,
});

export const getImagesSuccess = (payload = {}) => ({
  type: GET_IMAGES_SUCCESS,
  payload,
});

export const getImagesReject = payload => ({
  type: GET_IMAGES_REJECT,
  payload,
});

export const initialState = {
  isLoading: true,
  error: null,
  data: {},
};

export const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMAGES_START:
      return { ...state, isLoading: true, error: null };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: null,
      };
    case GET_IMAGES_REJECT:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
