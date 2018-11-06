import * as actionTypes from '../actions/actionTypes'

const initState={
    services: null,
    title:'',
    serviceProperties: [{ title: '', code: ''}]
    
}

const reducer = (state = initState,action)=>{
    
    switch(action.type)
    {
        case actionTypes.SERVICE_FIELD_CHANGE:
            return { ...state, [action.field]: action.value }
            
        case actionTypes.SERVICE_LOAD_SERVICE:
            return { ...state, services: action.services }

        case actionTypes.SERVICE_ADD_NEW_PROPERTIES:
            return {...state,serviceProperties: [...state.serviceProperties].concat({title:'',code:''})}

        case actionTypes.SERVICE_DELETE_NEW_PROPERTIES:
            return {...state,serviceProperties:[...state.serviceProperties].filter((x,index)=> index!=action.index)}

        case actionTypes.SERVICE_PROPERTY_TITLE_CHANGED:
            const titleServiceProperties = [...state.serviceProperties];
            titleServiceProperties.splice(action.index, 1, { title: action.value, code: titleServiceProperties[action.index].code})
            return { ...state, serviceProperties: titleServiceProperties }

        case actionTypes.SERVICE_PROPERTY_CODE_CHANGED:
            const codeServiceProperties = [...state.serviceProperties];
            codeServiceProperties.splice(action.index, 1, { code: action.value, title: codeServiceProperties[action.index].title })
            return { ...state, serviceProperties: codeServiceProperties }
        
        case actionTypes.SERVICE_CLEAR_FORMS:
            //return { ...state, title: '', serviceProperties: [{ title: '', code: '' }]}
            return initState;
        
        default:
            return state; 
    }

}

export default reducer;