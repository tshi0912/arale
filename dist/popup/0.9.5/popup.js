define("#popup/0.9.5/popup",["#jquery/1.7.2/jquery","#overlay/0.9.7/overlay","#position/0.9.2/position","#iframe-shim/0.9.2/iframe-shim","#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser","#widget/0.9.16/auto-render"],function(a,b,c){var d=a("#jquery/1.7.2/jquery"),e=a("#overlay/0.9.7/overlay"),f=e.extend({attrs:{trigger:{value:null,getter:function(a){return d(a)}},triggerType:"hover",delay:100},setup:function(){f.superclass.setup.call(this),this._bindTrigger()},toggle:function(){this[this.get("visible")?"hide":"show"]()},_bindTrigger:function(){function g(){clearTimeout(d),f.get("visible")&&(e=setTimeout(function(){f.hide()},c))}var a=this.get("trigger"),b=this.get("triggerType"),c=this.get("delay"),d,e,f=this;b==="click"?a.on(b,function(a){a.preventDefault(),f.toggle()}):b==="focus"?a.on("focus blur",function(){f.toggle()}):(a.hover(function(){clearTimeout(e),f.get("visible")||(d=setTimeout(function(){f.show()},c))},g),this.element.hover(function(){clearTimeout(e)},g))}});c.exports=f});