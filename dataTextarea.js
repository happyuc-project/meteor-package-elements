Template['dapp_dataTextarea'].onCreated(function() {
    TemplateVar.set('isValid', true);

    if (this.data && this.data.value) TemplateVar.set('value', this.data.value);
});

Template['dapp_dataTextarea'].onRendered(function() {
    if (this.data && this.data.value) this.$('textarea').trigger('change');
});

Template['dapp_dataTextarea'].helpers({
    additionalAttributes: function() {
        var attr = {};

        if (this.autofocus) attr.autofocus = true;
        if (this.disabled) attr.disabled = true;

        return attr;
    },
});

Template['dapp_dataTextarea'].events({
    'input textarea, change textarea': function(e, template) {
        var value = e.currentTarget.value.replace(/\s+/g, '');

        if (value.indexOf('\n') !== -1) {
            value = value.replace('\n', '');
            e.currentTarget.value = value;
        }

        if (value.length > 2 && value.indexOf('0x') === -1) {
            value = '0x' + value;
            e.currentTarget.value = value;
        }

        if (/^(0x)?[a-f0-9]*$/i.test(value) || _.isEmpty(value)) {
            TemplateVar.set('isValid', true);
            if (!_.isEmpty(value))
                TemplateVar.set('value', '0x' + value.replace('0x', ''));
            else TemplateVar.set('value', undefined);
        } else {
            TemplateVar.set('isValid', false);
            TemplateVar.set('value', undefined);
        }
    },
});
