/*! Built with http://stenciljs.com */
StencilComponentsSpike.loadBundle("ebf5kqbb",["exports"],function(e){var t=window.StencilComponentsSpike.h,n=function(){function e(){}return e.prototype.setDisabled=function(e){this.intDisabled=e},e.prototype.setType=function(e){this.intType=e},e.prototype.componentWillLoad=function(){this.intType=this.csType||"button",this.intDisabled=this.csDisabled||!1},e.prototype.render=function(){return t("button",{type:this.intType,disabled:this.intDisabled},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"cs-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{csDisabled:{type:Boolean,attr:"cs-disabled",watchCallbacks:["setDisabled"]},csName:{type:String,attr:"cs-name"},csType:{type:String,attr:"cs-type",watchCallbacks:["setType"]},intDisabled:{state:!0},intType:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"cs-button{display:block}cs-button button{background-color:#f08080;padding:5px 15px;border-radius:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:48px;min-width:100px;border:0;outline:0;font-size:18px}cs-button button:hover{background-color:#f36e6e;cursor:pointer}cs-button button:active{background-color:#f15555}"},enumerable:!0,configurable:!0}),e}();e.CsButton=n,Object.defineProperty(e,"__esModule",{value:!0})});