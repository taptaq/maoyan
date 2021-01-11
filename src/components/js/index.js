import Vue from 'vue';
import messagebox from './messagebox';

export var Messagebox = (function () {
    var defaults = { //默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };

    var mycomponent = Vue.extend(messagebox);  //创建组件

    return function (opts) { //opts为配置参数
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }

        var vm = new mycomponent({   //新建组件
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        })

        document.body.appendChild(vm.$el);
    }
})();