var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    ws = require("nodejs-websocket"),
    port = process.argv[2] || 7777,
    db = require("./db");

var wsserver = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
        console.log("Received " + str);
        var response = db.query('SELECT * from authors', function(err, rows, fields) {
            console.log(rows[0]);
            conn.sendText(JSON.stringify(rows[0]));
        });
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001);

http.createServer(function (request, response) {

    var uri = url.parse(request.url).pathname
        , filename = path.join(process.cwd(), uri);
    var uriData = uri.split('/');

    /**
     * Функция вырезает данные из переданных параметров
     * @param data
     * @returns {Object}
     */
    var getPostData = function (data) {
        var postData = {};
        data = data.toString();
        data = data.split('&');
        for (var i = 0; i < data.length; i++) {
            var _data = data[i].split("=");
            postData[_data[0]] = _data[1];
        }
        return postData;
    };

    /**
     * Проверяет залогинен ли пользователь и возвращает true, если нет
     * @returns {boolean}
     */
    var checkIsUnlogined = function () {
        if (!logined) {
            sendJSONResponce({error: "Authorization required"});
        }
        return !logined;
    };

    /**
     * Посылает ответ обратно в виде JSON строки
     * @param data
     */
    var sendJSONResponce = function (data) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(JSON.stringify(data));
        response.end();
    };

    path.exists(filename, function (exists) {
        if (!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) filename += '/index.html';

        fs.readFile(filename, "binary", function (err, file) {
            var path = filename.split('.');
            var ext = path[path.length - 1];
            if (err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }
            switch (ext) {
                case 'js':
                    response.writeHead(200, {"Content-Type": "application/javascript"});
                    break;
                case 'css':
                    response.writeHead(200, {"Content-Type": "text/css"});
                    break;
                default :
                    response.writeHead(200);
            }
            response.write(file, "binary");
            response.end();
        });
    });


}).listen(parseInt(port, 10));