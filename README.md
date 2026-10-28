# 🚗 Fleet Manager

Web app (React + Express) that reads vehicle fleet data **in real time** 
from Microsoft Dynamics 365 Business Central via its OData REST API.

## Architecture
- **React 18** front-end (table with live data, badges, loading/error states)
- **Express proxy** (`server.js`): keeps the OAuth2 Bearer token server-side (never exposed to the browser)
- **Business Central**: custom AL extension exposing the `Veicolo` table 
  as an API page (`PageType = API`)

## Stack
React 18 • Express • OAuth2 (Microsoft Entra ID) • OData v4 • AL

## Related repository
AL extension (ERP side): github.com/STjava05/business-central-veicoli

## Run
1. Paste a valid OAuth2 access token in `server.js` (`BC_TOKEN`)
2. `npm install`
3. `node server.js`
4. Open http://localhost:3000
