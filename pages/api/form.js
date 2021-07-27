const { google } = require('googleapis');
const keys = require('/Credentials/keys.json');
const today = new Date();



export default async function handler(req, res) {
    console.log("Getting to the start of the API function");

    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

    console.log("Set the scope");
    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        SCOPES
    );

    console.log("right before authentication")



    //connecting the client to the google api
    client.authorize(function (err, tokens) {


        console.log("authenticated the google sheets api");
        console.log(req.body.Name);

        if (err) {
            res.json({ FormSucess: false });
            console.log(err);
            return;
        } else {
            res.json({ FormSucess: true });
            gsrun(client, req.body.Name, req.body.Email, req.body.Project, req.body.Message);
            console.log("1: Connected");
        }
    });

    async function gsrun(cl, Name, Email, Project, Message) {
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + '---' + time;


        const gsapi = google.sheets({ version: 'v4', auth: cl });

        //Data for spreadsheet information
        let inputArray = [[dateTime, Name, Email, Project, Message]];

        console.log("The datasheet input:", inputArray);

        const updateOptions = {
            spreadsheetId: '1b1ZIA939iImXA2wjJsBIbhFR3OF3eaaQuZ8TQPxBDwA',
            range: 'Pre_Reg_Form!A2',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: { values: inputArray }
        };

        console.log("Update Parameters:", updateOptions);


        let res = await gsapi.spreadsheets.values.append(updateOptions);
        let jres = await res.json();

        console.log(jres);

    }



}

