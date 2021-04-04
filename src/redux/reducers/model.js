import { CHANGE_CHOOSING_FILTER, FILTER_MODELS, SELECT_MODEL } from "../types";

const initialState = {
    allModels: [
        {
            id: 1,
            priceMax: 120000,
            priceMin: 250000,
            name: "ELANTRA",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
        },
        {
            id: 2,
            priceMax: 100000,
            priceMin: 320000,
            name: "i30 N",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
        },
        {
            id: 3,
            priceMax: 120000,
            priceMin: 250000,
            name: "Test",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
        },
        {
            id: 4,
            priceMax: 120000,
            priceMin: 250000,
            name: "abc",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
        },
        {
            id: 5,
            priceMax: 100000,
            priceMin: 320000,
            name: "ssss",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
        },
        {
            id: 6,
            priceMax: 120000,
            priceMin: 250000,
            name: "n1",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["red"],
        },
        {
            id: 7,
            priceMax: 120000,
            priceMin: 250000,
            name: "v3",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Econom" },
            colors: ["blue"],
        },
        {
            id: 8,
            priceMax: 100000,
            priceMin: 320000,
            name: "Test01",
            thumbnail: {},
            description: "string",
            categoryId: { name: "Premium" },
            colors: ["blue", "yellow", "red"],
        },
        {
            id: 9,
            priceMax: 120000,
            priceMin: 250000,
            name: "testing",
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
