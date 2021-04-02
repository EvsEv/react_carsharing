import { combineReducers } from "redux";

import { language } from "./language";
import { location } from "./location";
import { model } from "./model";
import { stage } from "./stage";

export const rootReducer = combineReducers({
    language,
    location,
    model,
    stage,
});
