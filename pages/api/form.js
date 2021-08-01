const { google } = require('googleapis');
const keys = require('/Credentials/keys.json');
const today = new Date();




export default function handler(req, res) {

    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']; //Check

    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        SCOPES
    );

    //connecting the client to the google api
    // client.authorize(function (err, tokens) {
    //     console.log("authorization has started")

    //     if (err) {
    //         console.log("Authenitization of the client has failed")
    //         console.log(err);
    //         return;
    //     } else {
    //         res.json({ FormSucess: true });
    //         console.log("1: Pre-Connected");
    //         gsrun(client, req.body.Name, req.body.Email, req.body.Project, req.body.Message);
    //         console.log("2: Connected");
    //     }
    // });

    client.authorize(function (err, token) {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Connected!")
            let gsRes = gsrun(client, req.body.Name, req.body.Email, req.body.Project, req.body.Message);
            console.log("Response from GSRUN", gsRes);
            return gsRes;
        }
    });

    function gsrun(cl, Name, Email, Project, Message) {

        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + '---' + time;

        const gsapi = google.sheets({ version: 'v4', auth: cl });

        //Data for spreadsheet information
        let inputArray = [[dateTime, Name, Email, Project, Message]];

        const updateOptions = {
            spreadsheetId: '1b1ZIA939iImXA2wjJsBIbhFR3OF3eaaQuZ8TQPxBDwA',
            range: 'Pre_Reg_Form!A2',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: { values: inputArray }
        };

        gsapi.spreadsheets.values.append(updateOptions)
            .then((res) => {
                console.log("Information has been sent out:");
                console.log("The response:", res);
                return res;
            })
            .catch((err) => {
                console.log("The information has not been sent out");
                console.error("The following error has occured", err);
                return err;
            });

    }
}