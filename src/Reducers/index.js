import {combineReducers} from "redux";
import PlayeroneReducer from "./playerone";
import Playertworeducer from "./playertwo";

const reducer=combineReducers({
    playerone:PlayeroneReducer,
    playertwo:Playertworeducer
})

export default reducer;