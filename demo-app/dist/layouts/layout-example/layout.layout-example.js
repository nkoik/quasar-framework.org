module.exports=function(n){function e(t){if(a[t])return a[t].exports;var r=a[t]={exports:{},id:t,loaded:!1};return n[t].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var a={};return e.m=n,e.c=a,e.p="",e(0)}([function(n,e,a){n.exports=a(3)},,,function(n,e,a){var t=a(4);n.exports={template:t,data:{pages:["layout-overview","layout-navigation","layout-drawer","layout-marginals"]}}},function(n,e){n.exports='<screen>\n\n  <screen-tabs slot="navigation"></screen-tabs>\n\n  <div slot="header" class="row items-center">\n    <button class="left-drawer-toggle"><i>menu</i></button>\n    <p>Quasar Layout Example</p>\n    <div class="group">\n      <button class="small" v-exit-app><i>power_settings_new</i></button>\n    </div>\n  </div>\n\n  <div slot="footer" class="row items-center">\n    <p>Quasar Framework</p>\n  </div>\n\n  <drawer>\n    <div class="list platform-delimiter">\n      <div class="list-header">\n        Menu\n      </div>\n      <drawer-link v-for="page in pages" :page="page"></drawer-link>\n    </div>\n  </drawer>\n\n  <page class="smart-container"></page>\n\n</screen>\n'}]);