HucElements = {
    Modal: {
        _current: new ReactiveVar(),
        show    : function(template, options) {
            options = options || {};

            if (_.isObject(template)) {
                options = _.extend(options, template);
                this._current.set(options);
            } else if (_.isString(template)) {
                options.template = template;
                this._current.set(options);
            }
        },
        hide    : function() {
            this._current.set(false);
        },
        question: function(data, options) {
            HucElements.Modal.show({template: 'dapp_modal_question', data: data}, options);
        },
    },
};
