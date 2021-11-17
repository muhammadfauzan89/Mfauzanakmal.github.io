// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/DashboardTheme/widgets/Header/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/DashboardTheme/widgets/Header/Widget.html":'\x3cdiv data-a11y-label-by\x3d"dashboard_header_label dashboard_header_title dashboard_header_subtitle"\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cdiv class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode"\x3e\r\n      \x3ca data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n        \x3cimg data-dojo-attach-point\x3d"logoIconNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n      \x3c/a\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"screen-readers-only" data-a11y-label-id\x3d"dashboard_header_label"\x3e${label}\x3c/div\x3e\r\n      \x3ch1 class\x3d"jimu-title" data-dojo-attach-point\x3d"titleNode" data-a11y-label-id\x3d"dashboard_header_title"\x3e\x3c/h1\x3e\r\n      \x3ch2 class\x3d"jimu-subtitle" data-dojo-attach-point\x3d"subtitleNode" data-a11y-label-id\x3d"dashboard_header_subtitle"\x3e\x3c/h2\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/DashboardTheme/widgets/Header/css/style.css":".jimu-widget-dnd-header{width: 100%; height: 80px; display: block; outline-offset: -2px !important;}.jimu-ismobile .jimu-widget-dnd-header{display: none;}.jimu-widget-dnd-header .header-section{height: 100%; width: 100%; overflow: hidden;}.jimu-widget-dnd-header .logo{cursor: pointer; height: 40px; margin: 20px 0 20px 20px; border-right: 1px solid rgba(0, 0, 0, 0.2); padding-right: 20px;}.jimu-widget-dnd-header .logo img{max-height: 40px;}.jimu-rtl .jimu-widget-dnd-header .logo{margin: 20px 20px 20px 0; border-left: 1px solid rgba(0, 0, 0, 0.2); border-right: none; padding-left: 20px; padding-right: auto;}.jimu-widget-dnd-header .hidden{display: none !important;}.jimu-widget-dnd-header .titles{height: 100%; overflow: hidden;}.jimu-widget-dnd-header .jimu-title{height: 55%; display: flex; justify-content: flex-start; align-items: flex-end; font-size: 24px; margin: 0;}.jimu-widget-dnd-header .jimu-subtitle{height: 40%; display: flex; justify-content: flex-start; align-items: flex-start; padding-top: 5px; margin: 0;}.jimu-widget-dnd-header .links{height: 100%; overflow: hidden;}.jimu-widget-dnd-header .dynamic-section,.jimu-widget-dnd-header .signin-section{height: 100%;}.jimu-widget-dnd-header .links .jimu-link{height: 100%; outline-offset: -2px !important;}.jimu-widget-dnd-header .signin-section .jimu-link{color: #d9dde0;}",
"*now":function(k){k(['dojo/i18n!*preload*themes/DashboardTheme/widgets/Header/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/Color dojo/query dojo/on dojo/keys dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message".split(" "),function(k,e,l,a,v,h,m,w,x,r,y,z,n,t,u,f,A){return k([z],{baseClass:"jimu-widget-dnd-header",switchableElements:{},height:80,moveTopOnActive:!1,postMixInProperties:function(){this.inherited(arguments);this.isRenderIdForAttrs=
!0},postCreate:function(){this.inherited(arguments);this.switchableElements.title=this.titleNode;this.switchableElements.links=this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this.position&&this.position.height&&(this.height=this.position.height);this._handleTitleColorAndLogoLink(this.appConfig);a.setStyle(this.signInSectionNode,"display","none");if(this.config&&"custom"===this.config.mode&&this.config.color){var b=new v(this.config.color);a.setStyle(this.domNode,"background",b.toHex())}else this.config&&
"org"===this.config.mode?t.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(e.hitch(this,function(c){c&&c.portalProperties&&c.portalProperties.sharedTheme&&c.portalProperties.sharedTheme.header&&a.setStyle(this.domNode,"background",c.portalProperties.sharedTheme.header.background)}),e.hitch(this,function(c){console.error(c)})):this.config&&"theme"===this.config.mode?a.setStyle(this.domNode,"background",null):(b=e.getObject("theme.customStyles.mainBackgroundColor",!1,this.appConfig))&&a.setStyle(this.domNode,
"background",b);this.appConfig&&this.appConfig.logo?(this.logoIconNode.src=this.appConfig.logo,a.removeClass(this.logoNode,"hidden")):(this.logoIconNode.src="",a.addClass(this.logoNode,"hidden"));this.switchableElements.title.innerHTML=f.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");this.switchableElements.subtitle.innerHTML=f.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:"");this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(m(this.domNode,
x.enter,e.hitch(this,function(){var c="",d=u.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");u.isArcGIScom(d)&&(d="ArcGIS.com");d&&(c=this.nls.signInTo+" "+d);this.signinLinkNode.title=c})))},startup:function(){this.inherited(arguments);this.resize()},onAction:function(b,c){"highLight"===b&&c&&(c=h('div[settingid\x3d"'+c.widgetId+'"]',this.domNode)[0],this._highLight(c));"removeHighLight"===b&&this._removeHighLight()},onSignIn:function(b){this.inherited(arguments);a.setStyle(this.signinLinkNode,
"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=b.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,"display",""),h("a",this.popupUserNameNode).html(b.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));
this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);t.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(e.hitch(this,function(b){this._onSignOut(this.nls.signInTo+" "+b.name)}),e.hitch(this,function(b){console.error(b)}))},_onSignOut:function(b){a.setStyle(this.signinLinkNode,"display","");a.setAttr(this.signinLinkNode,"innerHTML",b);a.setStyle(this.userNameLinkNode,"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML=
"";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",b),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),h("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){var b=a.getStyle(this.headerNode,"float"),c=a.getStyle(this.logoNode,"float"),d=a.getStyle(this.titlesNode,"float"),g=a.getStyle(this.linksNode,"float");b&&"none"!==b&&c&&"none"!==c&&d&&"none"!==d&&g&&"none"!==
g?this._resize():setTimeout(e.hitch(this,this.resize),200)},_resize:function(){this._showSwitchableElements(["title","links","subtitle"])},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.inherited(arguments)},onAppConfigChanged:function(b,c,d){switch(c){case "attributeChange":this._onAttributeChange(b,d);break;default:return}this.appConfig=b;this.resize()},_onLogoLoad:function(){this.resize()},_highLight:function(b){this.hlDiv&&this._removeHighLight();
if(b){var c=y.getMarginBox(b);this.hlDiv=r.create("div",{style:{position:"absolute",left:c.l+"px",top:c.t+"px",width:c.w+"px",height:c.h+"px"},"class":"icon-highlight"},b,"before")}},_removeHighLight:function(){this.hlDiv&&(r.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(b,c){"title"in c&&c.title!==this.appConfig.title&&(this.titleNode.innerHTML=f.sanitizeHTML(c.title));"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=f.sanitizeHTML(c.subtitle));
"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(a.setAttr(this.logoIconNode,"src",c.logo),a.removeClass(this.logoNode,"hidden")):(a.removeAttr(this.logoIconNode,"src"),a.addClass(this.logoNode,"hidden")));"links"in c&&this._createDynamicLinks(c.links);this._handleTitleColorAndLogoLink(b)},_handleTitleColorAndLogoLink:function(b){b.titleColor?a.setStyle(this.titleNode,"color",b.titleColor):a.setStyle(this.titleNode,"color","");f.themesHeaderLogoA11y(b,this.tabIndex,{link:this.logoLinkNode,logo:this.logoNode,
icon:this.logoIconNode})},_setElementsSize:function(){h(".jimu-link",this.domNode).style({lineHeight:this.height+"px"})},_createDynamicLinks:function(b){if(window.isRTL){var c=[];l.forEach(b,function(d){c.unshift(d)});b=c}a.empty(this.dynamicLinksNode);l.forEach(b,function(d){a.create("a",{href:d.url,role:"link",tabindex:this.tabIndex,target:"_blank",rel:"noopener noreferrer",innerHTML:f.sanitizeHTML(d.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+
"px"}},this.dynamicLinksNode)},this)},_showSwitchableElements:function(b){this.logoClickHandle&&this.logoClickHandle.remove();this.logoKeydownHandle&&this.logoKeydownHandle.remove();0>b.indexOf("links")?(this.logoClickHandle=m(this.logoNode,"click",e.hitch(this,this._onLogoClick)),this.logoKeydownHandle=m(this.logoLinkNode,"keydown",e.hitch(this,this._onLogoKeydown))):a.setStyle(this.logoNode,{cursor:"default"})},_switchSignin:function(){var b=n.getPortalCredential(this.appConfig.portalUrl);if(b)this.onSignIn(b);
else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},_onLogoKeydown:function(b){b.keyCode===w.ENTER&&this._onLogoClick()},_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,
"display","");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"});this.popupLinksVisible=!0},_createPopupLinkNode:function(){a.getContentBox(jimuConfig.mainPageId);var b=a.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(b,{right:0,left:"50px"}):a.setStyle(b,{left:0,
right:"50px"});var c=a.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},b);var d=a.create("img",{"class":"logo jimu-float-leading jimu-leading-margin1",src:this.appConfig.logo?this.appConfig.logo:this.folderUrl+"images/app-logo.png",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},c),g=a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1 jimu-ellipsis",innerHTML:f.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+
"px"}},c),p="auto";try{p=a.getMarginBox(c).w-a.getMarginBox(d).w-a.getMarginExtents(g).w+"px"}catch(q){console.error(q),p="auto"}a.setStyle(g,"width",p);l.forEach(this.appConfig.links,function(q){this._createLinkNode(b,q,!1)},this);this._createLinkNode(b,{label:"",url:"#"},!1);return b},_createLinkNode:function(b,c,d){b=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',b);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',b);d=a.place('\x3cdiv class\x3d"'+(d?"link-section signin":"link-section")+
'"\x3e\x3c/div\x3e',b);a.create("a",{href:c.url,"class":"jimu-ellipsis",target:"_blank",rel:"noopener noreferrer",innerHTML:f.sanitizeHTML(c.label),title:c.label,style:{lineHeight:"66px"}},d);return b},_onSigninClick:function(){n.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new A({message:this.nls.cantSignOutTip}):n.signOutAll()},_onUserNameClick:function(){}})});