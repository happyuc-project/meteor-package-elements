Template['dapp_modal_question'].helpers({
    hasOk           : function() { return this.ok; },
    hasCancel       : function() { return this.cancel; },
    okButtonText    : function() { return this.modalQuestionOkButtonText || TAPi18n.__('buttons.ok') || 'OK'; },
    cancelButtonText: function() { return this.modalQuestionCancelButtonText || TAPi18n.__('buttons.cancel') || 'Cancel'; },
});

Template['dapp_modal_question'].events({
    'click .dapp-modal-buttons button.ok'    : function(e) {
        HucElements.Modal.hide();
        if (_.isFunction(this.ok)) this.ok();
    },
    'click .dapp-modal-buttons button.cancel': function(e) {
        HucElements.Modal.hide();
        if (_.isFunction(this.cancel)) this.cancel();
    },
});
