(function($) {


    var methods = {
        init: function(options) {
             var $this = $(this)
            var obj = $(this).data('tooltip').obj


            if(obj.textList){
                $.each(obj.textList,function(index,value){
                    $this.append('<li>'+index+'</li>')
                })
            }


            if (obj.width) {
                $this.find('li').css('width', obj.width + 'px')
                $this.find('.sideline').css('width', obj.width + 'px')
            }

 if (obj.height) {
    $this.css('height', obj.height + 'px')
                $this.find('li').css('height', obj.height + 'px')
                $this.find('li').css('line-height', obj.height + 'px')
                $this.find('.sideline').css('height', obj.height + 'px')
            }


            if (obj.default) {
                $this.find('.sideline').css('left', obj.width ? (obj.default-1) * obj.width + 'px' : (obj.default-1) * 100 + 'px')
            }



        },
        fontUp: function() {
            // 由上往下拖动袭来
            var $this = $(this);
            $this.find('li').on('click', function() {
                $this.find('li').attr('class', '')
                $this.find('.sideline').hide()
                this.setAttribute('class', 'fontNav')
            }).on('hover', function() {
                $this.find('li').attr('class', '')
                $this.find('.sideline').hide()
                this.setAttribute('class', 'fontNav')
            })
        }
        
        
        
        

    };

    $.fn.tooltip = function(method) {
        if (methods[method]) {
            // 不传参数
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            //   传对象参数
            if (method.type) {
                var $this = $(this);
                // 存储参数
                $(this).data('tooltip', {
                    target: $this,
                    obj: method
                });
                //  执行初始方法
                methods.init.apply(this, arguments);
                methods[method.type].apply(this, Array.prototype.slice.call(arguments, 1));

                return method.success ? method.success(this): null
            } else {
                return methods.init.apply(this, arguments);
            }
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }
    };

})(jQuery);