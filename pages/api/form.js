const { google } = require('googleapis');
const keys = require('/Credentials/keys.json');
const today = new Date();




export default function handler(req, res) {
    console.log("Getting to the start of the API function");

    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']; //Check

    console.log("Scope has been set up")

    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        keys.private_key_id,
        SCOPES
    );

    // const client = new google.auth.OAuth2(
    //     keys.client_id,
    //     null,
    //     'token',
    //     SCOPES
    // );
    //shoudl check the OAuth2 to see if the parameters are right

    console.log("The client prameters:", client)



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
        console.log("authorization of the JWT has started");

        if (err) {
            console.log("Authentication has failed");
            console.log(err);
            return;
        } else {
            console.log("Token:", token);
            console.log("Connected!")
            gsrun(client, req.body.Name, req.body.Email, req.body.Project, req.body.Message);
            console.log("GSrun has completed.")
        }
    });


    console.log("Ended the api call to google now")


    function gsrun(cl, Name, Email, Project, Message) {
        console.log("GSrun is working")
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + '---' + time;

        console.log("DateTime Input:", dateTime)


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
        console.log("UpdateOptions have been set!")


        gsapi.spreadsheets.values.append(updateOptions)
            .then((res) => {
                console.log("Information has been sent out:")
                console.log("UpdateOptions:", updateOptions)
                console.log("UpdateOptions:", updateOptions.resource)
                console.log("The response:", res);
            })
            .catch((err) => {
                console.log("The information has not been sent out")
                console.log("UpdateOptions:", updateOptions.resource)
                console.error("The following error has occured", err)
            });



    }


}

