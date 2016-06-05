module.exports=function(e){function n(l){if(i[l])return i[l].exports;var a=i[l]={exports:{},id:l,loaded:!1};return e[l].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var i={};return n.m=e,n.c=i,n.p="",n(0)}({0:function(e,n,i){e.exports=i(71)},71:function(e,n,i){"use strict";var l=i(72);e.exports={template:l,data:{radioModel:"opt1",checkboxModel:!1,toggleModel:!1,rangeModel:4}}},72:function(e,n){e.exports='<div class="screen-bar shadow-1 fixed-top">Quasar List with Form Components</div>\n\n<h5>List with Radios</h5>\n\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Option 1</div>\n      <radio :model.sync="radioModel" value="opt1"></radio>\n    </div>\n  </label>\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Option 2</div>\n      <radio :model.sync="radioModel" value="opt2"></radio>\n    </div>\n  </label>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <radio :model.sync="radioModel" value="opt1"></radio>\n    <div class="item-content">\n      Option 1\n    </div>\n  </label>\n  <label class="item">\n    <radio :model.sync="radioModel" value="opt2"></radio>\n    <div class="item-content">\n      Option 2\n    </div>\n  </label>\n</div>\n\n<h5>List with Checkboxes</h5>\n\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Quasar Framework</div>\n      <checkbox :model.sync="checkboxModel"></checkbox>\n    </div>\n  </label>\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Quasar Framework</div>\n      <checkbox :model.sync="checkboxModel"></checkbox>\n    </div>\n  </label>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <checkbox :model.sync="checkboxModel"></checkbox>\n    <div class="item-content">\n      Quasar Framework\n    </div>\n  </label>\n  <label class="item">\n    <checkbox :model.sync="checkboxModel"></checkbox>\n    <div class="item-content">\n      Quasar Framework\n    </div>\n  </label>\n</div>\n\n<h5>List with Toggles</h5>\n\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Quasar Framework</div>\n      <toggle :model.sync="toggleModel"></toggle>\n    </div>\n  </label>\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Quasar Framework</div>\n      <toggle :model.sync="toggleModel"></toggle>\n    </div>\n  </label>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <toggle :model.sync="toggleModel"></toggle>\n    <div class="item-content">\n      Quasar Framework\n    </div>\n  </label>\n  <label class="item">\n    <toggle :model.sync="toggleModel"></toggle>\n    <div class="item-content">\n      Quasar Framework\n    </div>\n  </label>\n</div>\n\n<h5>List with Ranges</h5>\n\n<div class="list item-delimiter bordered">\n  <div class="item">\n    <i>volume_up</i>\n    <div class="item-content">\n      <span class="item-value item-right-margin">1</span>\n      <range :model.sync="rangeModel" :min="1" :max="10"></range>\n      <span class="item-value item-left-margin">10</span>\n      <div class="item-left-margin" style="font-weight: bold">{{rangeModel}}</div>\n    </div>\n  </div>\n  <div class="item">\n    <i class="item-right-margin">volume_down</i>\n    <range :model.sync="rangeModel" :min="1" :max="10"></range>\n    <i class="item-left-margin">volume_up</i>\n  </div>\n</div>\n'}});