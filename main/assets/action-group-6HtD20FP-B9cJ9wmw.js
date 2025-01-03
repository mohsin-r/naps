import{oT as d,oU as p,oX as t}from"./main-C9wvg2yZ.js";import{i as h,s as g}from"./conditionalSlot-pse7h7E5-DTyxsHaZ.js";import{m as f,r as v,i as b}from"./loadable-CnW_ULGP-Dzog3YYB.js";import{K as x,q as y}from"./locale-Dj-q8Iw4-DxNxkwnw.js";import{l as M,d as k,M as O,h as C}from"./t9n-B7zlVVF4-CjxZ0xpL.js";import{_ as i,K as P,O as E}from"./action-menu-CYeA0ZLA-D1u92QIo.js";import{G as L}from"./dom-N58V0tYi-DBU3jlah.js";import{f as A}from"./action-kkDlSAU7-8FCvIM_9.js";import{m as w}from"./icon-Dh3ZJmTl-BzLq2oZ6.js";import{v as z}from"./loader-HhR8XX0c-Dc3U6OVr.js";const s={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},_={menu:"ellipsis"},F={container:"container"},H=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}',$=H,S=d(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=L(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.menuFlipPlacements=void 0,this.menuPlacement=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){M(this,this.effectiveLocale)}async setFocus(){await f(this),this.el.focus()}connectedCallback(){x(this),k(this),h(this)}disconnectedCallback(){y(this),O(this),g(this)}async componentWillLoad(){v(this),await C(this)}componentDidLoad(){b(this)}renderMenu(){const{expanded:e,menuOpen:c,scale:o,layout:a,messages:n,overlayPositioning:l,hasMenuActions:r,menuFlipPlacements:u,menuPlacement:m}=this;return t("calcite-action-menu",{expanded:e,flipPlacements:u??(a==="horizontal"?["top","bottom"]:["left","right"]),hidden:!r,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:c,overlayPositioning:l,placement:m??(a==="horizontal"?"bottom-start":"leading-start"),scale:o},t("calcite-action",{icon:_.menu,scale:o,slot:i.trigger,text:n.more,textEnabled:e}),t("slot",{name:s.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),t("slot",{name:s.menuTooltip,slot:i.tooltip}))}render(){return t("div",{key:"8143606c5745053f15140f34ff5ea375a683325f","aria-label":this.label,class:F.container,role:"group"},t("slot",{key:"e8c2821b9ce2e9d0293478989fc31d24f043f9c3"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return $}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],menuFlipPlacements:[16],menuPlacement:[513,"menu-placement"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function T(){typeof customElements>"u"||["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||A();break;case"calcite-action-menu":customElements.get(e)||E();break;case"calcite-icon":customElements.get(e)||w();break;case"calcite-loader":customElements.get(e)||z();break;case"calcite-popover":customElements.get(e)||P();break}})}T();export{S as c,T as l,s as o};