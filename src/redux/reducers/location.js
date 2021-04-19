import {
    ADD_CITY,
    GET_CITY_LIST,
    GET_POINT_LIST,
    SET_COMPLETE_LOCATION,
    SET_INCOMPLETE_LOCATION,
    SET_SELECTED_CITY,
    SET_SELECTED_POINT,
} from "../types";

const initialState = {
    geolocation: "Ульяновск",
    selectedCity: "Ульяновск",
    selectedPoint: "",
    completed: false,

    //
    cityList: null,
    pointList: null,
};

export const location = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CITY:
            return { ...state, selectedCity: action.payload };
        case SET_SELECTED_POINT:
            return { ...state, selectedPoint: action.payload };
        case SET_COMPLETE_LOCATION:
            return { ...state, completed: true };
        case SET_INCOMPLETE_LOCATION:
            return { ...state, completed: false };
        //
        case GET_CITY_LIST:
            return { ...state, cityList: action.payload };
        case GET_POINT_LIST:
            return { ...state, pointList: action.payload };
        default:
            return state;
    }
};

// export const location = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_CITY:
//             return {...state, city:}

//         default:
//             break;
//     }
// };
