(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["OctoPrintClient"], factory);
    } else {
        factory(global.OctoPrintClient);
    }
})(this, function(OctoPrintClient) {
    var OctoPrintPiSupportClient = function(base) {
        this.base = base;
    };

    OctoPrintPiSupportClient.prototype.get = function(opts) {
        return this.base.get(this.base.getSimpleApiUrl("ngrok"));
    };

    OctoPrintClient.registerPluginComponent("ngrok", OctoPrintPiSupportClient);
    return OctoPrintPiSupportClient;
});

