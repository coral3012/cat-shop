(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f454f080"],{"193b":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"descMusic"},[e("van-nav-bar",{staticClass:"top",attrs:{title:"歌曲详情","left-arrow":""},on:{"click-left":t.onClickLeft}}),t.show?e("ul",{staticClass:"cen music_content"},[e("li",{staticClass:"pic"},[e("img",{attrs:{src:t._f("pics")(t.list.picUrl),alt:""}}),e("p",[t._v(t._s(t.$route.query.gname))])]),e("li",{staticClass:"description"},[t._v(" "+t._s(t.$route.query.cname)+" ")])]):e("ul",{staticClass:"cen"},[t._v(" 这首歌暂无版权 ")]),e("div",{staticClass:"player"},[e("audio",{staticClass:"btn-audio",attrs:{controls:"controls",loop:"loop",muted:"",preload:"auto",autoplay:"autoplay",src:t.musciUrl,volume:"volume"}})])],1)},a=[],c={name:"Splay",components:{},data:function(){return{id1:1,musciUrl:[],show:!0,list:[]}},computed:{},watch:{},methods:{onClickLeft:function(){this.$router.go(-1),this.$eventBus.$emit("maile1")}},created:function(){var t=this;this.$eventBus.$emit("maile"),this.id1=this.$route.query.id,this.$axios.get("http://81.69.58.73:3000/song/url?id=".concat(this.id1)).then((function(i){console.log(i),t.musciUrl=i.data.data[0].url,null==t.musciUrl&&(t.show=!1)}))},filters:{pics:function(t){return t||"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604470784317&di=d6a1d5ce6ada96c3ff8ba4fae87da818&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201111%2F12%2F20111112151919_Whjz4.gif"}},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},n=c,o=(e("956b"),e("2877")),u=Object(o["a"])(n,s,a,!1,null,"00c4c05e",null);i["default"]=u.exports},9340:function(t,i,e){},"956b":function(t,i,e){"use strict";e("9340")}}]);
//# sourceMappingURL=chunk-f454f080.a9cce491.js.map