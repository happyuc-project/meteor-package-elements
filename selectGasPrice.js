var toPowerFactor = 2;

var calculateGasInWei = function(template, gas, gasPrice, returnGasPrice) {
    // Only defaults to 20 shannon if there's no default set
    gasPrice = gasPrice || 20000000000;

    if (!_.isObject(gasPrice)) gasPrice = new BigNumber(String(gasPrice), 10);

    if (_.isUndefined(gas)) {
        console.warn('No gas provided for {{> dapp_selectGasPrice}}');
        return new BigNumber(0);
    }

    var feeMultiplicator = Number(TemplateVar.get(template, 'feeMultiplicator'));

    // divide and multiply to round it to the nearest billion wei (1 shannon)
    var billion = new BigNumber(1000000000);
    gasPrice = gasPrice.times(new BigNumber(toPowerFactor).toPower(feeMultiplicator)).dividedBy(billion).round().times(billion);

    return returnGasPrice ? gasPrice : gasPrice.times(gas);
};

Template['dapp_selectGasPrice'].onCreated(function() {
    TemplateVar.set('gasInWei', '0');
    TemplateVar.set('gasPrice', '0');
    TemplateVar.set('feeMultiplicator', 0);
});

Template['dapp_selectGasPrice'].helpers({
    fee     : function() {
        if (
            _.isFinite(TemplateVar.get('feeMultiplicator')) &&
            _.isFinite(this.gas)
        ) {
            var template = Template.instance();

            // set the value
            TemplateVar.set('gasInWei', calculateGasInWei(template, this.gas, this.gasPrice).floor().toString(10));
            TemplateVar.set('gasPrice', calculateGasInWei(template, this.gas, this.gasPrice, true).floor().toString(10));

            // return the fee
            return HucTools.formatBalance(
                calculateGasInWei(template, this.gas, this.gasPrice).toString(10),
                '0,0.[000000000000000000]',
                this.unit);
        }
    },
    unit    : function() {
        var unit = this.unit || HucTools.getUnit();
        if (unit) return unit.toUpperCase();
    },
    i18nText: function(key) {
        if (typeof TAPi18n !== 'undefined' && TAPi18n.__('elements.selectGasPrice.' + key) !== 'elements.selectGasPrice.' + key) {
            return TAPi18n.__('elements.selectGasPrice.' + key);
        } else if (typeof this[key] !== 'undefined') {
            return this[key];
        } else {
            return key === 'high' ? '+' : '-';
        }
    },
});

Template['dapp_selectGasPrice'].events({
    'change input[name="fee"], input input[name="fee"]': function(e) {
        TemplateVar.set('feeMultiplicator', Number(e.currentTarget.value));
    },
});
