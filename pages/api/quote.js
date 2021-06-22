const { google } = require('googleapis');
const keys = require('/Credentials/keys.json');
const today = new Date();

export default async function handler(req, res) {


    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];


    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        SCOPES
    );

    //connecting the client to the google api
    client.authorize(function (err, tokens) {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Connected!');
            gsrun(client, req.body.Name, req.body.Email);
        }
    });

    async function gsrun(cl, Name, Email) {
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + '---' + time;


        const gsapi = google.sheets({ version: 'v4', auth: cl });

        //Data for spreadsheet information
        let inputArray = [[dateTime, Name, Email]];

        const updateOptions = {
            spreadsheetId: '1b1ZIA939iImXA2wjJsBIbhFR3OF3eaaQuZ8TQPxBDwA',
            range: 'Quote_Form!A3',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: { values: inputArray }
        };

        gsapi.spreadsheets.values.append(updateOptions);
    }
}

