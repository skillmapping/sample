exports.handler = (event, context, callback) => {
    console.log("start handler version2.0");
    console.log("NODE_ENV is " + process.env.NODE_ENV);
    console.log("end handler");
};
