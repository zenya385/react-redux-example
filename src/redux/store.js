import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStoreHook } from "react-redux";
import { rootReducer } from "./reducer";

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
