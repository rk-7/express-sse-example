var EventEmitter = require("events");
const someEvent = new EventEmitter();
function worker() {
        setInterval(() => {
          someEvent.emit("hello", { mydata: "hello!!" });
        }, 1000);
}
module.exports = { someEvent, worker };
