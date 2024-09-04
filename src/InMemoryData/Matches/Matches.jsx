import matches from "./MatchList"

const getMatches = (userId) => {
    let chats = [];

    matches.forEach(match => {
        if (match.receiver === userId) {
            chats = match.messages;
        }
    })

    return chats;
}

export default getMatches;
