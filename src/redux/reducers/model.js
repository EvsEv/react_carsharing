import { CHANGE_CHOOSING_FILTER, FILTER_MODELS, SELECT_MODEL } from "../types";

const initialState = {
    allModels: [
        {
            priceMax: 120000,
            priceMin: 250000,
            name: "ELANTRA",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
        },
        {
            priceMax: 100000,
            priceMin: 320000,
            name: "i30 N",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
        },
        {
            priceMax: 120000,
            priceMin: 250000,
            name: "Elantra",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
        },
        {
            priceMax: 120000,
            priceMin: 250000,
            name: "ELANTRA",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
        },
        {
            priceMax: 100000,
            priceMin: 320000,
            name: "i30 N",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
        },
        {
            priceMax: 120000,
            priceMin: 250000,
            name: "Elantra",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
        },
        {
            priceMax: 120000,
            priceMin: 250000,
            name: "ELANTRA",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
        },
        {
            priceMax: 100000,
            priceMin: 320000,
            name: "i30 N",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
        },
        {
            priceMax: 120000,
            priceMin: 250000,
            name: "Elantra",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
        },
    ],
    choosingFilter: "All",
    filteredModels: [],
    choosingModel: {},
};

export const model = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_MODELS:
            return { ...state, filteredModels: action.payload };
        case SELECT_MODEL:
            return { ...state, choosingModel: action.payload };
        default:
            return state;
    }
};
