import { ApiHandler } from "sst/node/api";
import { GoogleSpreadsheet } from "google-spreadsheet"

import { Time } from "@google-sheets-form/core/time";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

async function appendData(values: Record<string, string>) {
  const doc = new GoogleSpreadsheet('1jZkEk4c77roQN8cdfnrQalpmEKJ2DG2eRd2QWwlEwVE');

  // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    // env var values are copied from service account credentials generated by google
    // see "Authentication" section in docs for more info
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!,
  });

  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  // const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });

  const larryRow = await sheet.addRow(values);

}

export const handler: APIGatewayProxyHandlerV2 = async (_evt) => {
  console.log(_evt.body)
  const {
    name,
    email,
    phone,
    message
  } = JSON.parse(_evt.body || '')

  // The keys in "fields" are case-sensitive, and
  // should exactly match the field names you set up
  // in your Airtable table, such as "First Name".
  const reqBody = {
    fields: {
      "Name": name,
      "Email": email,
      "Phone": phone,
      "Message": message,
      "Timestamp": Time.now()
    }
  }

  await appendData(reqBody.fields)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'OK',
      timestamp: Time.now()

    })
  }
}