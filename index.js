exports.handler = (event, context, callback) => {
    console.log("start handler");
    console.log("NODE_ENV is " + process.env.NODE_ENV);
    console.log("end handler");
};
