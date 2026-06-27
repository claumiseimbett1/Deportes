const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outPath = path.join(root, 'config.js');
const apiKey = process.env.GOOGLE_API_KEY || '';

if (!apiKey && fs.existsSync(outPath)) {
    console.log('config.js ya existe; no se sobrescribe sin GOOGLE_API_KEY.');
    process.exit(0);
}

const content = `window.APP_CONFIG = {\n    API_KEY: ${JSON.stringify(apiKey)}\n};\n`;
fs.writeFileSync(outPath, content, 'utf8');
console.log(apiKey ? 'config.js generado con GOOGLE_API_KEY.' : 'config.js generado sin clave (usa gviz/CSV público).');
