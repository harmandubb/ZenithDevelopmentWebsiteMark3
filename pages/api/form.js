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
        } else {
            console.log("Connected!");
            console.log("Return of gsrun", gsrun(client, req.body.Name, req.body.Email, req.body.Project, req.body.Message));

        }
    }
    );

    function gsrun(cl, Name, Email, Project, Message) {
        console.log("Gsrun is starting at this point")

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


        var output;

        console.log("Output value when it is initialized:", output);

        gsapi.spreadsheets.values.append(updateOptions)
            .then((res) => {
                output = res;
                console.log("Information has been sent out:");
                console.log("The response:", output);
                console.log("Output in the then/catch block", output);
            })
            .catch((err) => {
                console.log("The information has not been sent out");
                console.error("The following error has occured", err);
                ouput = err;
            });

        console.log("output variable:", output);

        return output;

    }
}