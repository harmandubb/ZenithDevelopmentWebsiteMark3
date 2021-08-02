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
    await client.authorize(async function (err, token) {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected!");
            await gsrun(client, req.body.Name, req.body.Email)
                .then((google_res) => {
                    const temp = google_res;
                    res.json({response:temp})
                }
                ).catch((err) => {
                    console.log("An error has occured at the google response", err);
                });

        }
    }
    );

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

        return await new Promise((resolve, reject) => {
            gsapi.spreadsheets.values.append(updateOptions)
                .then((google_res) => {
                    //console.log("in the promise resolve and this is the response:", google_res);
                    resolve(google_res);
                })
                .catch(err => {
                    //console.log("in the promise error section");
                    reject(err);
                })
        })
    }
}

