const initialState={
    name:'John',
    score:80
}

export default function PlayeroneReducer(state=initialState,action){
    const{type,payload}=action;
    switch(type){
        case 'INC_PLAYERONE_SCORE':
            return{...state,score:state.score+1}
        case 'DEC_PLAYERONE_SCORE':
            return{...state,score:state.score-1}
        case 'INC_PLAYERONE_OWNSCORE':
            return{...state,score:state.score+payload}
        default:
            return state;
    }
}