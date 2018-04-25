var cache = {};

Template['dapp_identicon'].helpers({
    identity          : function(identity) {
        return _.isString(this.identity)
            ? this.identity.toLowerCase()
            : this.identity;
    },
    identiconData     : function(identity) {
        // remove items if the cache is larger than 50 entries
        if (_.size(cache) > 100) delete cache[Object.keys(cache)[0]];

        var cacheId = cache['ID_' + identity];
        return cacheId
            ? cacheId
            : cache['ID_' + identity] = hqx(hqx(blockies.create({seed: identity, size: 8, scale: 1}), 4), 4).toDataURL();
    },
    identiconDataPixel: function(identity) {
        var cacheIdp = cache['IDP_' + identity];
        return cacheIdp ? cacheIdp : cache['IDP_' + identity] = blockies.create({seed: identity, size: 8, scale: 8}).toDataURL();
    },
    i18nTextIcon      : function() {
        return typeof TAPi18n === 'undefined' || TAPi18n.__('elements.identiconHelper') === 'elements.identiconHelper'
            ? 'This is a security icon, if there\'s any change on the address the resulting icon should be a completelly different one'
            : TAPi18n.__('elements.identiconHelper');
    },
});
