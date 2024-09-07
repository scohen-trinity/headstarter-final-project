import matches from "./MatchList"

export const getMatches = (userId) => {
    let chats = [];

    matches.forEach(match => {
        if (match.receiver === userId) {
            chats = match.messages;
        }
    })

    return chats;
}

export const addMessage = (userId, message) => {
    matches.forEach(match => {
        if (match.receiver === userId) {
            match.messages.push({
                receiver: userId,
                sender: userId,
                message: message
            })
        }
    })
}
