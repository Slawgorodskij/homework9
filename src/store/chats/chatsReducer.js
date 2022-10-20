const ADD_CHAT = 'ADD_CHAT'
const DELETE_CHAT = 'DELETE_CHAT'

const initialState = {
    nameChat: [
        {
            'id': 111,
            'name': 'О музыке',
        },
        {
            'id': 112,
            'name': 'О семье',
        },
        {
            'id': 113,
            'name': 'О работе',
        },
        {
            'id': 114,
            'name': 'О здоровье',
        },
        {
            'id': 115,
            'name': 'О любви',
        },

    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                nameChat: [...state.nameChat, action.payload]
            }
        case DELETE_CHAT:
            return {
                ...state,
                nameChat: state.nameChat.filter(obj => obj.id !== action.payload)
            }
        default:
            return state;
    }
}

export const addChatsAction = (payload) => ({type: ADD_CHAT, payload});
export const deleteChatsAction = (payload) => ({type: DELETE_CHAT, payload});