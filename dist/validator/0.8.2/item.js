define("#validator/0.8.2/item",["#jquery/1.7.2/jquery","#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser","#widget/0.9.16/auto-render","#validator/0.8.2/utils","#validator/0.8.2/rule","#validator/0.8.2/async"],function(e,t,n){function l(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}function c(e,t,n,s,a){if(!t){var f=!1,l=e.attr("type");switch(l){case"checkbox":case"radio":var c=!1;e.each(function(e,t){if(r(t).prop("checked"))return c=!0,!1}),f=c;break;default:f=Boolean(e.val())}if(!f){a&&a(null,null);return}}if(!r.isArray(n))throw new Error("No validation rule specified or not specified as an array.");var h=[];r.each(n,function(t,n){var o=i.parseRule(n),a=o.name,f=o.param,l=u.getOperator(a);if(!l)throw new Error('Validation rule with name "'+a+'" cannot be found.');var c=r.extend({},f,{element:e,display:f&&f.display||s||r(e).attr("name"),rule:a});h.push(function(e){l(c,e)})}),o.series(h,function(e,t){a&&a(e,t[t.length-1])})}var r=e("#jquery/1.7.2/jquery"),i=e("#validator/0.8.2/utils"),s=e("#widget/0.9.16/widget"),o=e("#validator/0.8.2/async"),u=e("#validator/0.8.2/rule"),a={value:function(){},setter:function(e){return typeof e!="function"?i.helper(e):e}},f=s.extend({attrs:{rule:"",display:null,triggerType:{setter:function(e){var t=r(this.get("element")),n=t.attr("type"),i=t.get(0).tagName.toLowerCase().indexOf("select")>-1||n=="radio"||n=="checkbox";return i&&(e.indexOf("blur")>-1||e.indexOf("key")>-1)?"change":e}},required:!1,checkNull:!0,errormessage:null,onItemValidate:a,onItemValidated:a,showMessage:a,hideMessage:a},setup:function(){this.get("required")&&(!this.get("rule")||this.get("rule").indexOf("required")<0)&&this.set("rule","required "+this.get("rule"))},execute:function(e){this.trigger("itemValidate",this.element);var t=i.parseRules(this.get("rule")),n=this;return t?(c(this.element,this.get("required"),t,this.get("display"),function(t,r){if(t)var i=n.get("errormessage")||n.get("errormessage"+l(t))||r;else var i=r;n.trigger("itemValidated",t,i,n.element),e&&e(t,i,n.element)}),this):(e&&e(null,"",this.element),this)}});n.exports=f});