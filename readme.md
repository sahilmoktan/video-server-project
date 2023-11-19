#video server project

[Model Link] (https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)


steps notes =>
npm init
folder structure created
setup env, ignore, prettier
Data base ko name contant ho so constant.js ma name lai export gareu
first approch connect to db form directly index.js : code commented
second : db/config.js ma connection conde and import it in index.js (connectDB)

we need to set env
require way is oldschool and don't seem to be consistancy
doing import way but we have to add (-r dotenv/config --experimental-json-modules) code in dev: of package.json
and lastly config it below but before connectDB

don't forget to write (.js) extenson name while importing before ===>(npm run dev)

In app.js brought power of express and imported in index.js
after connection.DB added .then to listen port and .catch to show error, if error occor
at this point server is running smoothly 

ofcourse data req auuxa, res janxa, 
(req.params, body, cookies, ips , method etc hunxan, : till this note, body parser in not needed, directly included in express) but we use
cors cross origin data share lai handel garna, cookie-parser for storing data securely, both middleware use garxau

install 
npm i cookie-parser cors & import in app.js
app.use(cors())