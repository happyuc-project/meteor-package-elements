Template['dapp_modalPlaceholder'].onCreated(function() {});

Template['dapp_modalPlaceholder'].helpers({
    modalTemplate: function() { return HucElements.Modal._current.get() ? 'dapp_modal' : false; },
    modalData    : function() { return HucElements.Modal._current.get(); },
});

Template['dapp_modal'].onCreated(function() {
    $('body').addClass('disable-scroll blur');
});
Template['dapp_modal'].onDestroyed(function() {
    $('body').removeClass('disable-scroll blur');
});

Template['dapp_modal'].events({
    'click .dapp-modal-overlay': function(e, template) {
        // hide the modal
        if ($(e.target).hasClass('dapp-modal-overlay') && template.data.closeable !== false) {
            if (template.data.closePath && typeof Router !== 'undefined') {
                if (typeof Router !== 'undefined') Router.go(template.data.closePath);
                if (typeof FlowRouter !== 'undefined') FlowRouter.go(template.data.closePath);
            } else {
                HucElements.Modal.hide();
            }
        }
    },
});
