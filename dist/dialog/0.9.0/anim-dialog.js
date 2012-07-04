define("#dialog/0.9.0/anim-dialog",["#jquery/1.7.2/jquery","#overlay/0.9.7/overlay","#position/0.9.2/position","#iframe-shim/0.9.2/iframe-shim","#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser","#widget/0.9.16/auto-render","#easing/0.9.3/easing","#dialog/0.9.0/base-dialog","#overlay/0.9.7/mask"],function(e,t,n){function a(e){this._layer||(this._layer=new i({width:e.outerWidth(!0),height:e.outerHeight(!0),zIndex:100,visible:!0,style:{overflow:"hidden"},align:{baseElement:e[0]}})),this._layer.set("align",this._layer.get("align")).show()}var r=e("#jquery/1.7.2/jquery"),i=e("#overlay/0.9.7/overlay"),s=e("#easing/0.9.3/easing"),o=e("#dialog/0.9.0/base-dialog"),u=o.extend({attrs:{effect:{type:"fade",duration:400,easing:"easeOut",from:"up"},showEffect:{},hideEffect:{}},show:function(){this._rendered||this.render();var e=this.element,t=this,n=this.get("showEffect");n=r.extend(null,this.get("effect"),n),n.type==null&&(n={type:"none"});if(n.type==="none")e.show();else if(n.type==="fade")e.hide().fadeIn(n.duration,n.easing);else if(n.type==="slide"){var i=/left|right/i.test(n.from)?{width:"toggle"}:{height:"toggle"};e.hide().animate(i,{duration:n.duration,easing:n.easing})}else if(n.type==="move"){e.removeAttr("tabindex"),e.css({display:"block"}),a.call(this,e);var s=this._layer.get("width"),o=this._layer.get("height"),i;e.appendTo(this._layer.element).css({top:0,left:0,display:"block"}),n.from==="left"?(e.css("left",0-s),i={left:"+="+s}):n.from==="right"?(e.css("left",s),i={left:"-="+s}):n.from==="up"?(e.css("top",0-o),i={top:"+="+o}):n.from==="down"&&(e.css("top",o),i={top:"-="+o}),e.animate(i,{duration:n.duration,easing:n.easing,complete:function(){t.element.appendTo(document.body),t.set("align",t.get("align")),t.set("visible","true"),t._layer.hide(),e.attr("tabindex","-1"),e.focus()}})}return this},hide:function(){var e=this.element,t=this,n=this.get("hideEffect");n=r.extend(null,this.get("effect"),n),n.type==null&&(n={type:"none"});if(!n||n.type==="none")e.hide();else if(n.type==="fade")e.fadeOut(n.duration,n.easing);else if(n.type==="slide"){var i=/left|right/i.test(n.from)?{width:"toggle"}:{height:"toggle"};e.animate(i,{duration:n.duration,easing:n.easing})}else if(n.type==="move"){if(e.css("display")==="none")return;a.call(this,e);var s=this._layer.get("width"),o=this._layer.get("height"),i;e.appendTo(this._layer.element).css({top:0,left:0,display:"block"}),n.from==="left"?i={left:"-="+s}:n.from==="right"?i={left:"+="+s}:n.from==="up"?i={top:"-="+o}:n.from==="down"&&(i={top:"+="+o}),e.animate(i,{duration:n.duration,easing:n.easing,complete:function(){e.appendTo(document.body),t.set("align",t.get("align")),e.hide(),t.set("visible",!1),t._layer.hide()}})}return this}});n.exports=u});