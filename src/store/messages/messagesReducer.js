export const ADD_MESSAGE = 'ADD_MESSAGE';

export const initialState = {
    messages: [
        // {
        //     'id': 1,
        //     'arrayChatsId': 111,
        //     'text': 'много слов о музыке',
        //     'author': 'Степан',
        // },
        // {
        //     'id': 2,
        //     'arrayChatsId': 111,
        //     'text': 'ещё много слов о музыке',
        //     'author': 'Николай',
        // },
        // {
        //     'id': 3,
        //     'arrayChatsId': 111,
        //     'text': 'и снова слова о музыке',
        //     'author': 'Иван',
        // },
        // {
        //     'id': 4,
        //     'arrayChatsId': 111,
        //     'text': 'просто песня',
        //     'author': 'Степан',
        // },
        // {
        //     'id': 5,
        //     'arrayChatsId': 112,
        //     'text': 'Семья',
        //     'author': 'Николай',
        // },
        // {
        //     'id': 6,
        //     'arrayChatsId': 112,
        //     'text': 'Снова семья',
        //     'author': 'Иван',
        // },
        // {
        //     'id': 7,
        //     'arrayChatsId': 112,
        //     'text': 'Конечно семья',
        //     'author': 'Степан',
        // },
        // {
        //     'id': 8,
        //     'arrayChatsId': 114,
        //     'text': 'Побежали за здоровьем',
        //     'author': 'Николай',
        // },
        // {
        //     'id': 9,
        //     'arrayChatsId': 114,
        //     'text': 'побежали',
        //     'author': 'Иван',
        // },
        // {
        //     'id': 10,
        //     'arrayChatsId': 114,
        //     'text': 'С песней',
        //     'author': 'Степан',
        // },
        // {
        //     'id': 11,
        //     'arrayChatsId': 114,
        //     'text': 'И семьёй',
        //     'author': 'Николай',
        // },
        // {
        //     'id': 12,
        //     'arrayChatsId': 114,
        //     'text': 'Вперед',
        //     'author': 'Иван',
        // },

    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
}

export const addMessagesAction = (payload) => ({type: ADD_MESSAGE, payload});