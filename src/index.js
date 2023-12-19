const express = require('express');
const app = express();

const accountSid = process.env.ACCOUNT_ID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


app.use(express.json());
app.post('/send-sms', (req, res) => {

    // sendSMS(req.body.phone, req.body.message);
    const participants = drawSecret(participantsList);

    console.log(participants);

    participants.forEach(participant => {
        //sendSMS(participant.phone, `Olá ${participant.name}, você tirou ${participant.friend} no amigo secreto!`);
        console.log(participant.phone, `Olá ${participant.name}, você tirou ${participant.friend} no amigo secreto!`);
    });

    res.json({
        'result': 'ok',
    });
});

app.listen(8888, () => console.log('Server is running on port 8888'));

function sendSMS(phone, message) {
    client.messages
        .create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone
        })
        .then(message => console.log(message.sid))
        .catch(error => console.error(error));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawSecret(participants) {
    let participantsCopy = [...participants];
    shuffle(participantsCopy);

    let result = participants.map((participant, index) => {
        const friendName = participantsCopy[(index + 1) % participants.length].name;
        return {
            name: participant.name,
            phone: participant.phone,
            friend: friendName
        };
    });

    //verifica se alguém sorteou a si mesmo
    let selfDrawn = result.some(participant => participant.name === participant.friend);

    // Se alguém sorteou a si mesmo, embaralhe e sorteie novamente
    while (selfDrawn) {
        participantsCopy = [...participants];
        shuffle(participantsCopy);

        result = participants.map((participant, index) => {
            const friendName = participantsCopy[(index + 1) % participants.length].name;
            return {
                name: participant.name,
                phone: participant.phone,
                friend: friendName
            };
        });

        selfDrawn = result.some(participant => participant.name === participant.friend);
    }

    return result;
}

const participantsList = [
    {
        'name': 'Alexandre',
        'phone': '+5551982166650',
        'friend': ''
    },
    {
        'name': 'Andrelisi',
        'phone': '+5551982166650',
        'friend': ''
    },
    {
        'name': 'Nini',
        'phone': '+5551982166650',
        'friend': ''
    },
    {
        'name': 'Alexandri',
        'phone': '+5551982166650',
        'friend': ''
    },
    {
        'name': 'Meg',
        'phone': '+5551982166650',
        'friend': ''
    },
]