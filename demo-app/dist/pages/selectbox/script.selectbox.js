module.exports=function(e){function l(t){if(i[t])return i[t].exports;var n=i[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,l),n.loaded=!0,n.exports}var i={};return l.m=e,l.c=i,l.p="",l(0)}({0:function(e,l,i){e.exports=i(100)},100:function(e,l,i){"use strict";var t=i(101);e.exports={template:t,data:{select:"fb",multipleSelect:["goog","twtr"],selectOptions:[{label:"Google",value:"goog"},{label:"Facebook",value:"fb"},{label:"Twitter",value:"twtr"},{label:"Apple Inc.",value:"appl"},{label:"Oracle",value:"ora"}]}}},101:function(e,l){e.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Selectbox</div>\n\n<h5>Standalone</h5>\n<choice :model.sync="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company"></choice>\n\n<h5>Inside of a List</h5>\n<div class="list item-delimiter bordered">\n  <div class="list-header">Single Selection: <em>{{select}}</em></div>\n  <div class="item">\n    <div class="item-content">\n      <div class="item-label">Company</div>\n      <choice :model.sync="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company"></choice>\n    </div>\n  </div>\n  <div class="item">\n    <div class="item-content">\n      <div class="item-label">Company</div>\n      <choice :model.sync="select" :options="selectOptions" ok-label="Pick"></choice>\n    </div>\n  </div>\n  <div class="list-header">Multiple Selection: <em>{{multipleSelect}}</em></div>\n  <div class="item">\n    <div class="item-content">\n      <div class="item-label">Companies</div>\n      <choice multiple :model.sync="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies"></choice>\n    </div>\n  </div>\n  <div class="item">\n    <div class="item-content">\n      <div class="item-label">Companies</div>\n      <choice multiple :model.sync="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies"></choice>\n    </div>\n  </div>\n</div>\n'}});