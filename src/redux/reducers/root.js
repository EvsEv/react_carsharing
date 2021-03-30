import { combineReducers } from "redux";

import { language } from "./language";
import { location } from "./location";
import { order } from "./order";

export const rootReducer = combineReducers({ language, location, order });
