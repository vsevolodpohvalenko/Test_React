


const ADD_TO_DO_LIST = 'ADD_TO_DO_LIST'
const COMPLETED_TASK = 'COMPLETED-TASK'
let Initialstate = {
    items: [
        {id :  1, completed: false ,text: 'make homework'},
        {id : 2, completed: false, text: 'Wash dish'}
    ]
}
export const ToDoReducer = (state = Initialstate, action) =>{
    switch(action.type){
        
        case ADD_TO_DO_LIST :
            let newTask = {
               id: action.id,
               text: action.text}
            return {items : [...state.items, newTask]}
        case COMPLETED_TASK :
            debugger
            return {...state, items: state.items.map(c=>{
                if(c.id === action.id) {
                    return{...c, completed: !c.completed}
                }
                return c;
            })}
        default:
            return state
    }
}

export const addTask = (id, text) => ({type: ADD_TO_DO_LIST, id, text})
const CompletedSuccess = (id) => ({type: COMPLETED_TASK, id})

export const Completed = (id) => (dispatch) => {
            dispatch(CompletedSuccess(id));
          }