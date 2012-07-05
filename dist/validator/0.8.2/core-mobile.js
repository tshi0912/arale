define("#validator/0.8.2/core-mobile",["#zepto/0.8.0/zepto","#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser","#widget/0.9.16/auto-render","#validator/0.8.2/async","#validator/0.8.2/utils","#validator/0.8.2/rule","#validator/0.8.2/item"],function(e,t,n){function h(e){var t=e.element.attr(c);return t||(t=e.cid,e.element.attr(c,t)),t}var r=e("#zepto/0.8.0/zepto"),i=e("#validator/0.8.2/async"),s=e("#widget/0.9.16/widget"),o=e("#validator/0.8.2/utils"),u=e("#validator/0.8.2/item"),a=[],f={value:function(){},setter:function(e){return typeof e!="function"?o.helper(e):e}},l=s.extend({attrs:{triggerType:"blur",checkOnSubmit:!0,stopOnError:!1,autoSubmit:!0,checkNull:!0,onItemValidate:f,onItemValidated:f,onFormValidate:f,onFormValidated:f,showMessage:f,hideMessage:f},setup:function(){this.element.attr("novalidate","novalidate"),this.items=[];var e=this;this.get("checkOnSubmit")&&this.element.submit(function(t){t.preventDefault(),e.execute(function(t){t||e.get("autoSubmit")&&e.element.get(0).submit()})}),this.on("formValidate",function(){var e=this;r.each(this.items,function(t,n){e.query(n.element).get("hideMessage").call(e,null,n.element)})}),this.on("itemValidated",function(e,t,n){e?this.query(n).get("showMessage").call(this,t,n):this.query(n).get("hideMessage").call(this,t,n)}),a.push(this)},Statics:r.extend({helper:o.helper},e("#validator/0.8.2/rule"),{autoRender:function(e){var t=new this(e);r("input, textarea, select",t.element).each(function(e,n){n=r(n);var i=n.attr("type");if(i=="button"||i=="submit"||i=="reset")return!0;var s={};i=="radio"||i=="checkbox"?s.element=r("[type="+i+"][name="+n.attr("name")+"]",t.element):s.element=n;if(!t.query(s.element)){var u=o.parseDom(n);if(!u.rule)return!0;r.extend(s,u),t.addItem(s)}})},query:function(e){var t=r(e),n=null;return r.each(a,function(e,r){if(t.get(0)==r.element.get(0))return n=r,!1;var i=r.query(t);if(i)return n=i,!1}),n},validate:function(e){var t=r(e.element),n=new l({element:t.parents("form")});n.addItem(e),n.query(t).execute(),n.destroy()}}),addItem:function(e){var t=new u(r.extend({triggerType:this.get("triggerType"),checkNull:this.get("checkNull"),showMessage:this.get("showMessage"),hideMessage:this.get("hideMessage")},e));return this.items.push(t),t.set("_handler",function(){if(!t.get("checkNull")&&!t.element.val())return;t.execute()}),this.element.on(t.get("triggerType"),"["+c+"="+h(t)+"]",t.get("_handler")),t.on("all",function(e){this.trigger.apply(this,[].slice.call(arguments))},this),this},removeItem:function(e){var t=e instanceof u?e.element:r(e),n=this.items,i=this,s;return r.each(this.items,function(e,n){if(t.get(0)==n.element.get(0))return s=e,i.element.off(n.get("triggerType"),"["+c+"="+h(n)+"]",n.get("_handler")),n.destroy(),!1}),s!==undefined&&this.items.splice(s,1),this},execute:function(e){var t=this;this.trigger("formValidate",this.element);var n=function(n){t.trigger("formValidated",t.element,Boolean(n)),e&&e(Boolean(n))};if(this.get("stopOnError")){var s={};r.each(this.items,function(e,t){s[e]=function(e){t.execute(e)}}),i.series(s,n)}else i.forEach(this.items,function(e,t){e.execute(t)},n);return this},destroy:function(){this.element.unbind("submit");var e=this;r.each(this.items,function(t,n){e.removeItem(n)});var t;r.each(a,function(e,n){if(n==this)return t=e,!1}),a.splice(t,1),l.superclass.destroy.call(this)},query:function(e){var t=r(e);if(t.length==0||r(t,this.element).length==0)return null;var n=null;return r.each(this.items,function(e,r){if(t.get(0)==r.element.get(0))return n=r,!1}),n}}),c="data-validator-set";n.exports=l});