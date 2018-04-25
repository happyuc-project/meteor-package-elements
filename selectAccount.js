Template['dapp_selectAccount'].onCreated(function() {
    if (this.data) {
        if (this.data.value) {
            TemplateVar.set('value', this.data.value);
        } else if (this.data.accounts && this.data.accounts[0]) {
            TemplateVar.set('value', this.data.accounts[0].address);
        }
    }
});

Template['dapp_selectAccount'].helpers({
    isAccount     : function() { return this.type === 'account' && Template.parentData(1).showAccountTypes; },
    selected      : function() { return TemplateVar.get('value') === this.address ? {selected: true} : {}; },
    isNotHucerUnit: function() { return HucTools.getUnit().toLowerCase() !== 'huc'; },
    isAddress     : function() { return webu.isAddress(TemplateVar.get('value')); },
});

Template['dapp_selectAccount'].events({
    'change select': function(e) { TemplateVar.set('value', e.currentTarget.value); },
});
