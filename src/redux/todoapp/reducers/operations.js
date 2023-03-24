 import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";
 
 
 const initialState = [
    {id:1,todo:'Buy pineapple',completed:false},
    {id:2,todo:'Deposit money',completed:true},
 ];
 
 export const operationsReducer= (state = initialState,action)=>{
    switch(action.type){
        
            case ADD_TODO:
                return [...state,action.payload];
            case DELETE_ALL:
                return [];
            case REMOVE_TODO:
                const filteredtodo = state.filter((item)=>item.id !== action.payload);
                return filteredtodo;
            case UPDATE_TODO:
                let data = action.payload;
                const updatedarray = [];
                state.map((item)=>{
                    if(item.id ===data.id){
                        item.id =data.id;
                        item.todo =data.todo;
                        item.completed = data.completed
                    }
                    updatedarray.push(item)
                });
            case UPDATE_CHECKBOX:
                let todoArray = [];
                state.map((item)=>{
                    if(item.id===action.payload){
                        item.completed=!item.completed;
                    }
                    todoArray.push(item)

                })
                return todoArray
                return updatedarray;
                default: return state;

    }


}