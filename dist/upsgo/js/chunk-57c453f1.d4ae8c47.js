(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57c453f1"],{2647:function(t,s,e){},2679:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"upload"},[e("div",{staticClass:"jumbotron"},[e("h1",{staticClass:"display-3"},[t._v("Hello, UpsGo!")]),e("p",{staticClass:"lead"},[t._v("Upyun Storage Management Application.")]),e("hr",{staticClass:"my-4"}),e("b-container",{attrs:{fluid:"lg"}},[e("b-row",[e("b-col",{attrs:{lg:"8",md:"8",xl:"8",offset:"2"}},[e("vue-dropzone",{ref:"upload",attrs:{options:t.dropzoneOptions,useCustomSlot:!0,id:"upload"},on:{"vdropzone-complete":t.completeUpload,"vdropzone-sending":t.sendingEvent}},[e("div",{staticClass:"dropzone-custom-content"},[e("h3",{staticClass:"dropzone-custom-title"},[t._v("Drag and drop to upload!")]),e("div",{staticClass:"subtitle"},[t._v("...or click to select a file from your computer")])])])],1),t.success?e("b-col",{staticClass:"mt-4",attrs:{lg:"8",md:"8",xl:"8",offset:"2"}},[e("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e("strong",[t._v("URL:")]),t._v(" "+t._s(t.message)+" ")])]):t._e()],1)],1),e("p",{staticClass:"lead mt-4"},[e("b-button",{staticClass:"btn btn-danger mr-4",attrs:{role:"button"},on:{click:t.reset}},[t._v("重置")]),e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"Home"}}},[t._v("首页")])],1)],1)])},o=[],n=(e("b0c0"),e("92c3")),r=e.n(n),l=(e("1e3f"),{name:"upload",components:{vueDropzone:r.a},data:function(){return{success:!1,message:"",dropzoneOptions:{url:this.server+"?operate=upload",thumbnailWidth:200,addRemoveLinks:!0,renameFile:function(t){for(var s=["v","P","h","7","z","Z","w","A","2","L","y","U","4","b","G","q","5","t","c","V","f","I","M","x","J","i","6","X","a","S","o","K","9","C","N","p","0","O","W","l","j","Y","T","H","Q","8","R","E","n","m","u","3","1","B","r","d","g","e","D","k","F","s"],e=function(t){return Math.log(t)/Math.log(10)},a=(new Date).getTime(),o="",n=Math.floor(e(a)/e(62));n>=0;n--){var r=Math.floor(a/Math.pow(62,n));o+=s[r],a-=r*Math.pow(62,n)}return o+"_"+t.name}}}},methods:{reset:function(){this.$refs.upload.removeAllFiles(),this.success=!1},sendingEvent:function(t,s,e){e.append("path","/images/")},completeUpload:function(t){if("success"===t.status){this.success=!0;var s=JSON.parse(t.xhr.response);this.message=s.data}else alert(t.status)}}}),i=l,c=(e("5c3d"),e("2877")),u=Object(c["a"])(i,a,o,!1,null,null,null);s["default"]=u.exports},"5c3d":function(t,s,e){"use strict";var a=e("2647"),o=e.n(a);o.a},b0c0:function(t,s,e){var a=e("83ab"),o=e("9bf2").f,n=Function.prototype,r=n.toString,l=/^\s*function ([^ (]*)/,i="name";a&&!(i in n)&&o(n,i,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(t){return""}}})}}]);