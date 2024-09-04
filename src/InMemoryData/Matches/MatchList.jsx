const matches = [
    { 
        receiver: 1,
        sender: 2,
        messages: [
            { message: 'Hey', source: 0 },
            { message: 'Yo, you wanna room', source: 1 },
            { message: 'Yuh', source: 0 },
            { message: 'Baller', source: 1 },
            { message: 'How much you tryna pay?', source: 1 }
        ],
    },
    {
        receiver: 2,
        sender: 1,
        messages: [
            { message: 'Hey', source: 1 },
            { message: 'Yo, you wanna room', source: 0 },
            { message: 'Yuh', source: 1 },
            { message: 'Baller', source: 0 },
        ],
    }
]

export default matches;