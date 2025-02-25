import{g as R}from"./commonjsHelpers.BosuxZz1.js";function j(m,x){for(var o=0;o<x.length;o++){const a=x[o];if(typeof a!="string"&&!Array.isArray(a)){for(const d in a)if(d!=="default"&&!(d in m)){const c=Object.getOwnPropertyDescriptor(a,d);c&&Object.defineProperty(m,d,c.get?c:{enumerable:!0,get:()=>a[d]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}};(function(m,x){ace.define("ace/mode/hjson_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,a,d){var c=o("../lib/oop"),p=o("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={start:[{include:"#comments"},{include:"#rootObject"},{include:"#value"}],"#array":[{token:"paren.lparen",regex:/\[/,push:[{token:"paren.rparen",regex:/\]/,next:"pop"},{include:"#value"},{include:"#comments"},{token:"text",regex:/,|$/},{token:"invalid.illegal",regex:/[^\s\]]/},{defaultToken:"array"}]}],"#comments":[{token:["comment.punctuation","comment.line"],regex:/(#)(.*$)/},{token:"comment.punctuation",regex:/\/\*/,push:[{token:"comment.punctuation",regex:/\*\//,next:"pop"},{defaultToken:"comment.block"}]},{token:["comment.punctuation","comment.line"],regex:/(\/\/)(.*$)/}],"#constant":[{token:"constant",regex:/\b(?:true|false|null)\b/}],"#keyname":[{token:"keyword",regex:/(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*(?=:)/}],"#mstring":[{token:"string",regex:/'''/,push:[{token:"string",regex:/'''/,next:"pop"},{defaultToken:"string"}]}],"#number":[{token:"constant.numeric",regex:/-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/,comment:"handles integer and decimal numbers"}],"#object":[{token:"paren.lparen",regex:/\{/,push:[{token:"paren.rparen",regex:/\}/,next:"pop"},{include:"#keyname"},{include:"#value"},{token:"text",regex:/:/},{token:"text",regex:/,/},{defaultToken:"paren"}]}],"#rootObject":[{token:"paren",regex:/(?=\s*(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*:)/,push:[{token:"paren.rparen",regex:/---none---/,next:"pop"},{include:"#keyname"},{include:"#value"},{token:"text",regex:/:/},{token:"text",regex:/,/},{defaultToken:"paren"}]}],"#string":[{token:"string",regex:/"/,push:[{token:"string",regex:/"/,next:"pop"},{token:"constant.language.escape",regex:/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/},{token:"invalid.illegal",regex:/\\./},{defaultToken:"string"}]}],"#ustring":[{token:"string",regex:/\b[^:,0-9\-\{\[\}\]\s].*$/}],"#value":[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"},{include:"#mstring"},{include:"#ustring"}]},this.normalizeRules()};u.metaData={fileTypes:["hjson"],foldingStartMarker:`(?x:     # turn on extended mode
              ^    # a line beginning with
              \\s*    # some optional space
              [{\\[]  # the start of an object or array
              (?!    # but not followed by
              .*   # whatever
              [}\\]]  # and the close of an object or array
              ,?   # an optional comma
              \\s*  # some optional space
              $    # at the end of the line
              )
              |    # ...or...
              [{\\[]  # the start of an object or array
              \\s*    # some optional space
              $    # at the end of the line
            )`,foldingStopMarker:`(?x:   # turn on extended mode
             ^    # a line beginning with
             \\s*  # some optional space
             [}\\]]  # and the close of an object or array
             )`,keyEquivalent:"^~J",name:"Hjson",scopeName:"source.hjson"},c.inherits(u,p),a.HjsonHighlightRules=u}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,a,d){var c=o("../../lib/oop"),p=o("../../range").Range,u=o("./fold_mode").FoldMode,k=a.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};c.inherits(k,u),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var l=e.getLine(n);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(l)?"start":i},this.getFoldWidgetRange=function(e,t,n,l){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var r=i.match(this.foldingStartMarker);if(r){var g=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,g);var s=e.getCommentFoldRange(n,g+r[0].length,1);return s&&!s.isMultiLine()&&(l?s=this.getSectionRange(e,n):t!="all"&&(s=null)),s}if(t!=="markbegin"){var r=i.match(this.foldingStopMarker);if(r){var g=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,g):e.getCommentFoldRange(n,g,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),l=n.search(/\S/),i=t,g=n.length;t=t+1;for(var s=t,r=e.getLength();++t<r;){n=e.getLine(t);var f=n.search(/\S/);if(f!==-1){if(l>f)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=i)break;if(h.isMultiLine())t=h.end.row;else if(l==f)break}s=t}}return new p(i,g,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var l=t.search(/\s*$/),i=e.getLength(),g=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++n<i;){t=e.getLine(n);var f=s.exec(t);if(f&&(f[1]?r--:r++,!r))break}var h=n;if(h>g)return new p(g,l,h,t.length)}}).call(k.prototype)}),ace.define("ace/mode/hjson",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/hjson_highlight_rules","ace/mode/folding/cstyle"],function(o,a,d){var c=o("../lib/oop"),p=o("./text").Mode,u=o("./hjson_highlight_rules").HjsonHighlightRules,k=o("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=u,this.foldingRules=new k};c.inherits(e,p),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/hjson"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/hjson"],function(o){m&&(m.exports=o)})}()})(v);var b=v.exports;const y=R(b),_=j({__proto__:null,default:y},[b]);export{_ as m};
