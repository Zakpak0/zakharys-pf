    externals: [
        function (context, request, callback) {
            if (/grpc/.test(request)) {
            return callback(null, 'commonjs ' + request);
            }

            callback();
        }]