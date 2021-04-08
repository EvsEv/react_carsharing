import {
    FILTER_MODELS,
    SET_COMPLETE_MODEL,
    SET_INCOMPLETE_MODEL,
} from "../types";

import testImage from "../../assets/images/testCar.jpg";

const initialState = {
    allModels: [
        {
            id: 1,
            priceMax: 12000,
            priceMin: 25000,
            name: "ELANTRA",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
            img: testImage,
        },
        {
            id: 2,
            priceMax: 10000,
            priceMin: 32000,
            name: "i30 N",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
            img: testImage,
        },
        {
            id: 3,
            priceMax: 12000,
            priceMin: 25000,
            name: "Test",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
            img: testImage,
        },
        {
            id: 4,
            priceMax: 12000,
            priceMin: 25000,
            name: "abc",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
            img: testImage,
        },
        {
            id: 5,
            priceMax: 10000,
            priceMin: 32000,
            name: "ssss",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
            img: testImage,
        },
        {
            id: 6,
            priceMax: 12000,
            priceMin: 25000,
            name: "n1",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
            img: testImage,
        },
        {
            id: 7,
            priceMax: 12000,
            priceMin: 25000,
            name: "v3",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
            img: testImage,
        },
        {
            id: 8,
            priceMax: 10000,
            priceMin: 32000,
            name: "Test01",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
            img: testImage,
        },
        {
            id: 9,
            priceMax: 12000,
            priceMin: 25000,
            name: "testing",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
            img: testImage,
        },
    ],
    choosingFilter: "All",
    filteredModels: [],
    completed: false,
};

export const model = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_MODELS:
            return { ...state, filteredModels: action.payload };
        case SET_COMPLETE_MODEL:
            return { ...state, completed: true };
        case SET_INCOMPLETE_MODEL:
            return { ...state, completed: false };
        default:
            return state;
    }
};
