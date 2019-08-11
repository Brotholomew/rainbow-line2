export type message = {
    content: string,
    senderID: string,
    recipientsID: string[],
    conversationID: string,
    ID: string,
};

export type conversation = {
    conversationID: string,
    initiatiorID: string,
    recipientsID: string[],
    messagesID: string[],
    anonimity: boolean,
};

export type user = {
    ID: string,
    type: string,
    conversationsID: string[],
};