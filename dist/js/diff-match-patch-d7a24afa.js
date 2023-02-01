var R={exports:{}};(function(d){var f=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},p=-1,M=1,c=0;f.Diff=function(r,n){return[r,n]},f.prototype.diff_main=function(r,n,e,s){typeof s>"u"&&(this.Diff_Timeout<=0?s=Number.MAX_VALUE:s=new Date().getTime()+this.Diff_Timeout*1e3);var a=s;if(r==null||n==null)throw new Error("Null input. (diff_main)");if(r==n)return r?[new f.Diff(c,r)]:[];typeof e>"u"&&(e=!0);var i=e,t=this.diff_commonPrefix(r,n),h=r.substring(0,t);r=r.substring(t),n=n.substring(t),t=this.diff_commonSuffix(r,n);var l=r.substring(r.length-t);r=r.substring(0,r.length-t),n=n.substring(0,n.length-t);var g=this.diff_compute_(r,n,i,a);return h&&g.unshift(new f.Diff(c,h)),l&&g.push(new f.Diff(c,l)),this.diff_cleanupMerge(g),g},f.prototype.diff_compute_=function(r,n,e,s){var a;if(!r)return[new f.Diff(M,n)];if(!n)return[new f.Diff(p,r)];var i=r.length>n.length?r:n,t=r.length>n.length?n:r,h=i.indexOf(t);if(h!=-1)return a=[new f.Diff(M,i.substring(0,h)),new f.Diff(c,t),new f.Diff(M,i.substring(h+t.length))],r.length>n.length&&(a[0][0]=a[2][0]=p),a;if(t.length==1)return[new f.Diff(p,r),new f.Diff(M,n)];var l=this.diff_halfMatch_(r,n);if(l){var g=l[0],v=l[1],u=l[2],o=l[3],_=l[4],b=this.diff_main(g,u,e,s),w=this.diff_main(v,o,e,s);return b.concat([new f.Diff(c,_)],w)}return e&&r.length>100&&n.length>100?this.diff_lineMode_(r,n,s):this.diff_bisect_(r,n,s)},f.prototype.diff_lineMode_=function(r,n,e){var s=this.diff_linesToChars_(r,n);r=s.chars1,n=s.chars2;var a=s.lineArray,i=this.diff_main(r,n,!1,e);this.diff_charsToLines_(i,a),this.diff_cleanupSemantic(i),i.push(new f.Diff(c,""));for(var t=0,h=0,l=0,g="",v="";t<i.length;){switch(i[t][0]){case M:l++,v+=i[t][1];break;case p:h++,g+=i[t][1];break;case c:if(h>=1&&l>=1){i.splice(t-h-l,h+l),t=t-h-l;for(var u=this.diff_main(g,v,!1,e),o=u.length-1;o>=0;o--)i.splice(t,0,u[o]);t=t+u.length}l=0,h=0,g="",v="";break}t++}return i.pop(),i},f.prototype.diff_bisect_=function(r,n,e){for(var s=r.length,a=n.length,i=Math.ceil((s+a)/2),t=i,h=2*i,l=new Array(h),g=new Array(h),v=0;v<h;v++)l[v]=-1,g[v]=-1;l[t+1]=0,g[t+1]=0;for(var u=s-a,o=u%2!=0,_=0,b=0,w=0,I=0,m=0;m<i&&!(new Date().getTime()>e);m++){for(var D=-m+_;D<=m-b;D+=2){var A=t+D,k;D==-m||D!=m&&l[A-1]<l[A+1]?k=l[A+1]:k=l[A-1]+1;for(var S=k-D;k<s&&S<a&&r.charAt(k)==n.charAt(S);)k++,S++;if(l[A]=k,k>s)b+=2;else if(S>a)_+=2;else if(o){var E=t+u-D;if(E>=0&&E<h&&g[E]!=-1){var P=s-g[E];if(k>=P)return this.diff_bisectSplit_(r,n,k,S,e)}}}for(var y=-m+w;y<=m-I;y+=2){var E=t+y,P;y==-m||y!=m&&g[E-1]<g[E+1]?P=g[E+1]:P=g[E-1]+1;for(var T=P-y;P<s&&T<a&&r.charAt(s-P-1)==n.charAt(a-T-1);)P++,T++;if(g[E]=P,P>s)I+=2;else if(T>a)w+=2;else if(!o){var A=t+u-y;if(A>=0&&A<h&&l[A]!=-1){var k=l[A],S=t+k-A;if(P=s-P,k>=P)return this.diff_bisectSplit_(r,n,k,S,e)}}}}return[new f.Diff(p,r),new f.Diff(M,n)]},f.prototype.diff_bisectSplit_=function(r,n,e,s,a){var i=r.substring(0,e),t=n.substring(0,s),h=r.substring(e),l=n.substring(s),g=this.diff_main(i,t,!1,a),v=this.diff_main(h,l,!1,a);return g.concat(v)},f.prototype.diff_linesToChars_=function(r,n){var e=[],s={};e[0]="";function a(l){for(var g="",v=0,u=-1,o=e.length;u<l.length-1;){u=l.indexOf(`
`,v),u==-1&&(u=l.length-1);var _=l.substring(v,u+1);(s.hasOwnProperty?s.hasOwnProperty(_):s[_]!==void 0)?g+=String.fromCharCode(s[_]):(o==i&&(_=l.substring(v),u=l.length),g+=String.fromCharCode(o),s[_]=o,e[o++]=_),v=u+1}return g}var i=4e4,t=a(r);i=65535;var h=a(n);return{chars1:t,chars2:h,lineArray:e}},f.prototype.diff_charsToLines_=function(r,n){for(var e=0;e<r.length;e++){for(var s=r[e][1],a=[],i=0;i<s.length;i++)a[i]=n[s.charCodeAt(i)];r[e][1]=a.join("")}},f.prototype.diff_commonPrefix=function(r,n){if(!r||!n||r.charAt(0)!=n.charAt(0))return 0;for(var e=0,s=Math.min(r.length,n.length),a=s,i=0;e<a;)r.substring(i,a)==n.substring(i,a)?(e=a,i=e):s=a,a=Math.floor((s-e)/2+e);return a},f.prototype.diff_commonSuffix=function(r,n){if(!r||!n||r.charAt(r.length-1)!=n.charAt(n.length-1))return 0;for(var e=0,s=Math.min(r.length,n.length),a=s,i=0;e<a;)r.substring(r.length-a,r.length-i)==n.substring(n.length-a,n.length-i)?(e=a,i=e):s=a,a=Math.floor((s-e)/2+e);return a},f.prototype.diff_commonOverlap_=function(r,n){var e=r.length,s=n.length;if(e==0||s==0)return 0;e>s?r=r.substring(e-s):e<s&&(n=n.substring(0,e));var a=Math.min(e,s);if(r==n)return a;for(var i=0,t=1;;){var h=r.substring(a-t),l=n.indexOf(h);if(l==-1)return i;t+=l,(l==0||r.substring(a-t)==n.substring(0,t))&&(i=t,t++)}},f.prototype.diff_halfMatch_=function(r,n){if(this.Diff_Timeout<=0)return null;var e=r.length>n.length?r:n,s=r.length>n.length?n:r;if(e.length<4||s.length*2<e.length)return null;var a=this;function i(b,w,I){for(var m=b.substring(I,I+Math.floor(b.length/4)),D=-1,A="",k,S,E,P;(D=w.indexOf(m,D+1))!=-1;){var y=a.diff_commonPrefix(b.substring(I),w.substring(D)),T=a.diff_commonSuffix(b.substring(0,I),w.substring(0,D));A.length<T+y&&(A=w.substring(D-T,D)+w.substring(D,D+y),k=b.substring(0,I-T),S=b.substring(I+y),E=w.substring(0,D-T),P=w.substring(D+y))}return A.length*2>=b.length?[k,S,E,P,A]:null}var t=i(e,s,Math.ceil(e.length/4)),h=i(e,s,Math.ceil(e.length/2)),l;if(!t&&!h)return null;h?t?l=t[4].length>h[4].length?t:h:l=h:l=t;var g,v,u,o;r.length>n.length?(g=l[0],v=l[1],u=l[2],o=l[3]):(u=l[0],o=l[1],g=l[2],v=l[3]);var _=l[4];return[g,v,u,o,_]},f.prototype.diff_cleanupSemantic=function(r){for(var n=!1,e=[],s=0,a=null,i=0,t=0,h=0,l=0,g=0;i<r.length;)r[i][0]==c?(e[s++]=i,t=l,h=g,l=0,g=0,a=r[i][1]):(r[i][0]==M?l+=r[i][1].length:g+=r[i][1].length,a&&a.length<=Math.max(t,h)&&a.length<=Math.max(l,g)&&(r.splice(e[s-1],0,new f.Diff(p,a)),r[e[s-1]+1][0]=M,s--,s--,i=s>0?e[s-1]:-1,t=0,h=0,l=0,g=0,a=null,n=!0)),i++;for(n&&this.diff_cleanupMerge(r),this.diff_cleanupSemanticLossless(r),i=1;i<r.length;){if(r[i-1][0]==p&&r[i][0]==M){var v=r[i-1][1],u=r[i][1],o=this.diff_commonOverlap_(v,u),_=this.diff_commonOverlap_(u,v);o>=_?(o>=v.length/2||o>=u.length/2)&&(r.splice(i,0,new f.Diff(c,u.substring(0,o))),r[i-1][1]=v.substring(0,v.length-o),r[i+1][1]=u.substring(o),i++):(_>=v.length/2||_>=u.length/2)&&(r.splice(i,0,new f.Diff(c,v.substring(0,_))),r[i-1][0]=M,r[i-1][1]=u.substring(0,u.length-_),r[i+1][0]=p,r[i+1][1]=v.substring(_),i++),i++}i++}},f.prototype.diff_cleanupSemanticLossless=function(r){function n(_,b){if(!_||!b)return 6;var w=_.charAt(_.length-1),I=b.charAt(0),m=w.match(f.nonAlphaNumericRegex_),D=I.match(f.nonAlphaNumericRegex_),A=m&&w.match(f.whitespaceRegex_),k=D&&I.match(f.whitespaceRegex_),S=A&&w.match(f.linebreakRegex_),E=k&&I.match(f.linebreakRegex_),P=S&&_.match(f.blanklineEndRegex_),y=E&&b.match(f.blanklineStartRegex_);return P||y?5:S||E?4:m&&!A&&k?3:A||k?2:m||D?1:0}for(var e=1;e<r.length-1;){if(r[e-1][0]==c&&r[e+1][0]==c){var s=r[e-1][1],a=r[e][1],i=r[e+1][1],t=this.diff_commonSuffix(s,a);if(t){var h=a.substring(a.length-t);s=s.substring(0,s.length-t),a=h+a.substring(0,a.length-t),i=h+i}for(var l=s,g=a,v=i,u=n(s,a)+n(a,i);a.charAt(0)===i.charAt(0);){s+=a.charAt(0),a=a.substring(1)+i.charAt(0),i=i.substring(1);var o=n(s,a)+n(a,i);o>=u&&(u=o,l=s,g=a,v=i)}r[e-1][1]!=l&&(l?r[e-1][1]=l:(r.splice(e-1,1),e--),r[e][1]=g,v?r[e+1][1]=v:(r.splice(e+1,1),e--))}e++}},f.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,f.whitespaceRegex_=/\s/,f.linebreakRegex_=/[\r\n]/,f.blanklineEndRegex_=/\n\r?\n$/,f.blanklineStartRegex_=/^\r?\n\r?\n/,f.prototype.diff_cleanupEfficiency=function(r){for(var n=!1,e=[],s=0,a=null,i=0,t=!1,h=!1,l=!1,g=!1;i<r.length;)r[i][0]==c?(r[i][1].length<this.Diff_EditCost&&(l||g)?(e[s++]=i,t=l,h=g,a=r[i][1]):(s=0,a=null),l=g=!1):(r[i][0]==p?g=!0:l=!0,a&&(t&&h&&l&&g||a.length<this.Diff_EditCost/2&&t+h+l+g==3)&&(r.splice(e[s-1],0,new f.Diff(p,a)),r[e[s-1]+1][0]=M,s--,a=null,t&&h?(l=g=!0,s=0):(s--,i=s>0?e[s-1]:-1,l=g=!1),n=!0)),i++;n&&this.diff_cleanupMerge(r)},f.prototype.diff_cleanupMerge=function(r){r.push(new f.Diff(c,""));for(var n=0,e=0,s=0,a="",i="",t;n<r.length;)switch(r[n][0]){case M:s++,i+=r[n][1],n++;break;case p:e++,a+=r[n][1],n++;break;case c:e+s>1?(e!==0&&s!==0&&(t=this.diff_commonPrefix(i,a),t!==0&&(n-e-s>0&&r[n-e-s-1][0]==c?r[n-e-s-1][1]+=i.substring(0,t):(r.splice(0,0,new f.Diff(c,i.substring(0,t))),n++),i=i.substring(t),a=a.substring(t)),t=this.diff_commonSuffix(i,a),t!==0&&(r[n][1]=i.substring(i.length-t)+r[n][1],i=i.substring(0,i.length-t),a=a.substring(0,a.length-t))),n-=e+s,r.splice(n,e+s),a.length&&(r.splice(n,0,new f.Diff(p,a)),n++),i.length&&(r.splice(n,0,new f.Diff(M,i)),n++),n++):n!==0&&r[n-1][0]==c?(r[n-1][1]+=r[n][1],r.splice(n,1)):n++,s=0,e=0,a="",i="";break}r[r.length-1][1]===""&&r.pop();var h=!1;for(n=1;n<r.length-1;)r[n-1][0]==c&&r[n+1][0]==c&&(r[n][1].substring(r[n][1].length-r[n-1][1].length)==r[n-1][1]?(r[n][1]=r[n-1][1]+r[n][1].substring(0,r[n][1].length-r[n-1][1].length),r[n+1][1]=r[n-1][1]+r[n+1][1],r.splice(n-1,1),h=!0):r[n][1].substring(0,r[n+1][1].length)==r[n+1][1]&&(r[n-1][1]+=r[n+1][1],r[n][1]=r[n][1].substring(r[n+1][1].length)+r[n+1][1],r.splice(n+1,1),h=!0)),n++;h&&this.diff_cleanupMerge(r)},f.prototype.diff_xIndex=function(r,n){var e=0,s=0,a=0,i=0,t;for(t=0;t<r.length&&(r[t][0]!==M&&(e+=r[t][1].length),r[t][0]!==p&&(s+=r[t][1].length),!(e>n));t++)a=e,i=s;return r.length!=t&&r[t][0]===p?i:i+(n-a)},f.prototype.diff_prettyHtml=function(r){for(var n=[],e=/&/g,s=/</g,a=/>/g,i=/\n/g,t=0;t<r.length;t++){var h=r[t][0],l=r[t][1],g=l.replace(e,"&amp;").replace(s,"&lt;").replace(a,"&gt;").replace(i,"&para;<br>");switch(h){case M:n[t]='<ins style="background:#e6ffe6;">'+g+"</ins>";break;case p:n[t]='<del style="background:#ffe6e6;">'+g+"</del>";break;case c:n[t]="<span>"+g+"</span>";break}}return n.join("")},f.prototype.diff_text1=function(r){for(var n=[],e=0;e<r.length;e++)r[e][0]!==M&&(n[e]=r[e][1]);return n.join("")},f.prototype.diff_text2=function(r){for(var n=[],e=0;e<r.length;e++)r[e][0]!==p&&(n[e]=r[e][1]);return n.join("")},f.prototype.diff_levenshtein=function(r){for(var n=0,e=0,s=0,a=0;a<r.length;a++){var i=r[a][0],t=r[a][1];switch(i){case M:e+=t.length;break;case p:s+=t.length;break;case c:n+=Math.max(e,s),e=0,s=0;break}}return n+=Math.max(e,s),n},f.prototype.diff_toDelta=function(r){for(var n=[],e=0;e<r.length;e++)switch(r[e][0]){case M:n[e]="+"+encodeURI(r[e][1]);break;case p:n[e]="-"+r[e][1].length;break;case c:n[e]="="+r[e][1].length;break}return n.join("	").replace(/%20/g," ")},f.prototype.diff_fromDelta=function(r,n){for(var e=[],s=0,a=0,i=n.split(/\t/g),t=0;t<i.length;t++){var h=i[t].substring(1);switch(i[t].charAt(0)){case"+":try{e[s++]=new f.Diff(M,decodeURI(h))}catch{throw new Error("Illegal escape in diff_fromDelta: "+h)}break;case"-":case"=":var l=parseInt(h,10);if(isNaN(l)||l<0)throw new Error("Invalid number in diff_fromDelta: "+h);var g=r.substring(a,a+=l);i[t].charAt(0)=="="?e[s++]=new f.Diff(c,g):e[s++]=new f.Diff(p,g);break;default:if(i[t])throw new Error("Invalid diff operation in diff_fromDelta: "+i[t])}}if(a!=r.length)throw new Error("Delta length ("+a+") does not equal source text length ("+r.length+").");return e},f.prototype.match_main=function(r,n,e){if(r==null||n==null||e==null)throw new Error("Null input. (match_main)");return e=Math.max(0,Math.min(e,r.length)),r==n?0:r.length?r.substring(e,e+n.length)==n?e:this.match_bitap_(r,n,e):-1},f.prototype.match_bitap_=function(r,n,e){if(n.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var s=this.match_alphabet_(n),a=this;function i(k,S){var E=k/n.length,P=Math.abs(e-S);return a.Match_Distance?E+P/a.Match_Distance:P?1:E}var t=this.Match_Threshold,h=r.indexOf(n,e);h!=-1&&(t=Math.min(i(0,h),t),h=r.lastIndexOf(n,e+n.length),h!=-1&&(t=Math.min(i(0,h),t)));var l=1<<n.length-1;h=-1;for(var g,v,u=n.length+r.length,o,_=0;_<n.length;_++){for(g=0,v=u;g<v;)i(_,e+v)<=t?g=v:u=v,v=Math.floor((u-g)/2+g);u=v;var b=Math.max(1,e-v+1),w=Math.min(e+v,r.length)+n.length,I=Array(w+2);I[w+1]=(1<<_)-1;for(var m=w;m>=b;m--){var D=s[r.charAt(m-1)];if(_===0?I[m]=(I[m+1]<<1|1)&D:I[m]=(I[m+1]<<1|1)&D|((o[m+1]|o[m])<<1|1)|o[m+1],I[m]&l){var A=i(_,m-1);if(A<=t)if(t=A,h=m-1,h>e)b=Math.max(1,2*e-h);else break}}if(i(_+1,e)>t)break;o=I}return h},f.prototype.match_alphabet_=function(r){for(var n={},e=0;e<r.length;e++)n[r.charAt(e)]=0;for(var e=0;e<r.length;e++)n[r.charAt(e)]|=1<<r.length-e-1;return n},f.prototype.patch_addContext_=function(r,n){if(n.length!=0){if(r.start2===null)throw Error("patch not initialized");for(var e=n.substring(r.start2,r.start2+r.length1),s=0;n.indexOf(e)!=n.lastIndexOf(e)&&e.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)s+=this.Patch_Margin,e=n.substring(r.start2-s,r.start2+r.length1+s);s+=this.Patch_Margin;var a=n.substring(r.start2-s,r.start2);a&&r.diffs.unshift(new f.Diff(c,a));var i=n.substring(r.start2+r.length1,r.start2+r.length1+s);i&&r.diffs.push(new f.Diff(c,i)),r.start1-=a.length,r.start2-=a.length,r.length1+=a.length+i.length,r.length2+=a.length+i.length}},f.prototype.patch_make=function(r,n,e){var s,a;if(typeof r=="string"&&typeof n=="string"&&typeof e>"u")s=r,a=this.diff_main(s,n,!0),a.length>2&&(this.diff_cleanupSemantic(a),this.diff_cleanupEfficiency(a));else if(r&&typeof r=="object"&&typeof n>"u"&&typeof e>"u")a=r,s=this.diff_text1(a);else if(typeof r=="string"&&n&&typeof n=="object"&&typeof e>"u")s=r,a=n;else if(typeof r=="string"&&typeof n=="string"&&e&&typeof e=="object")s=r,a=e;else throw new Error("Unknown call format to patch_make.");if(a.length===0)return[];for(var i=[],t=new f.patch_obj,h=0,l=0,g=0,v=s,u=s,o=0;o<a.length;o++){var _=a[o][0],b=a[o][1];switch(!h&&_!==c&&(t.start1=l,t.start2=g),_){case M:t.diffs[h++]=a[o],t.length2+=b.length,u=u.substring(0,g)+b+u.substring(g);break;case p:t.length1+=b.length,t.diffs[h++]=a[o],u=u.substring(0,g)+u.substring(g+b.length);break;case c:b.length<=2*this.Patch_Margin&&h&&a.length!=o+1?(t.diffs[h++]=a[o],t.length1+=b.length,t.length2+=b.length):b.length>=2*this.Patch_Margin&&h&&(this.patch_addContext_(t,v),i.push(t),t=new f.patch_obj,h=0,v=u,l=g);break}_!==M&&(l+=b.length),_!==p&&(g+=b.length)}return h&&(this.patch_addContext_(t,v),i.push(t)),i},f.prototype.patch_deepCopy=function(r){for(var n=[],e=0;e<r.length;e++){var s=r[e],a=new f.patch_obj;a.diffs=[];for(var i=0;i<s.diffs.length;i++)a.diffs[i]=new f.Diff(s.diffs[i][0],s.diffs[i][1]);a.start1=s.start1,a.start2=s.start2,a.length1=s.length1,a.length2=s.length2,n[e]=a}return n},f.prototype.patch_apply=function(r,n){if(r.length==0)return[n,[]];r=this.patch_deepCopy(r);var e=this.patch_addPadding(r);n=e+n+e,this.patch_splitMax(r);for(var s=0,a=[],i=0;i<r.length;i++){var t=r[i].start2+s,h=this.diff_text1(r[i].diffs),l,g=-1;if(h.length>this.Match_MaxBits?(l=this.match_main(n,h.substring(0,this.Match_MaxBits),t),l!=-1&&(g=this.match_main(n,h.substring(h.length-this.Match_MaxBits),t+h.length-this.Match_MaxBits),(g==-1||l>=g)&&(l=-1))):l=this.match_main(n,h,t),l==-1)a[i]=!1,s-=r[i].length2-r[i].length1;else{a[i]=!0,s=l-t;var v;if(g==-1?v=n.substring(l,l+h.length):v=n.substring(l,g+this.Match_MaxBits),h==v)n=n.substring(0,l)+this.diff_text2(r[i].diffs)+n.substring(l+h.length);else{var u=this.diff_main(h,v,!1);if(h.length>this.Match_MaxBits&&this.diff_levenshtein(u)/h.length>this.Patch_DeleteThreshold)a[i]=!1;else{this.diff_cleanupSemanticLossless(u);for(var o=0,_,b=0;b<r[i].diffs.length;b++){var w=r[i].diffs[b];w[0]!==c&&(_=this.diff_xIndex(u,o)),w[0]===M?n=n.substring(0,l+_)+w[1]+n.substring(l+_):w[0]===p&&(n=n.substring(0,l+_)+n.substring(l+this.diff_xIndex(u,o+w[1].length))),w[0]!==p&&(o+=w[1].length)}}}}}return n=n.substring(e.length,n.length-e.length),[n,a]},f.prototype.patch_addPadding=function(r){for(var n=this.Patch_Margin,e="",s=1;s<=n;s++)e+=String.fromCharCode(s);for(var s=0;s<r.length;s++)r[s].start1+=n,r[s].start2+=n;var a=r[0],i=a.diffs;if(i.length==0||i[0][0]!=c)i.unshift(new f.Diff(c,e)),a.start1-=n,a.start2-=n,a.length1+=n,a.length2+=n;else if(n>i[0][1].length){var t=n-i[0][1].length;i[0][1]=e.substring(i[0][1].length)+i[0][1],a.start1-=t,a.start2-=t,a.length1+=t,a.length2+=t}if(a=r[r.length-1],i=a.diffs,i.length==0||i[i.length-1][0]!=c)i.push(new f.Diff(c,e)),a.length1+=n,a.length2+=n;else if(n>i[i.length-1][1].length){var t=n-i[i.length-1][1].length;i[i.length-1][1]+=e.substring(0,t),a.length1+=t,a.length2+=t}return e},f.prototype.patch_splitMax=function(r){for(var n=this.Match_MaxBits,e=0;e<r.length;e++)if(!(r[e].length1<=n)){var s=r[e];r.splice(e--,1);for(var a=s.start1,i=s.start2,t="";s.diffs.length!==0;){var h=new f.patch_obj,l=!0;for(h.start1=a-t.length,h.start2=i-t.length,t!==""&&(h.length1=h.length2=t.length,h.diffs.push(new f.Diff(c,t)));s.diffs.length!==0&&h.length1<n-this.Patch_Margin;){var g=s.diffs[0][0],v=s.diffs[0][1];g===M?(h.length2+=v.length,i+=v.length,h.diffs.push(s.diffs.shift()),l=!1):g===p&&h.diffs.length==1&&h.diffs[0][0]==c&&v.length>2*n?(h.length1+=v.length,a+=v.length,l=!1,h.diffs.push(new f.Diff(g,v)),s.diffs.shift()):(v=v.substring(0,n-h.length1-this.Patch_Margin),h.length1+=v.length,a+=v.length,g===c?(h.length2+=v.length,i+=v.length):l=!1,h.diffs.push(new f.Diff(g,v)),v==s.diffs[0][1]?s.diffs.shift():s.diffs[0][1]=s.diffs[0][1].substring(v.length))}t=this.diff_text2(h.diffs),t=t.substring(t.length-this.Patch_Margin);var u=this.diff_text1(s.diffs).substring(0,this.Patch_Margin);u!==""&&(h.length1+=u.length,h.length2+=u.length,h.diffs.length!==0&&h.diffs[h.diffs.length-1][0]===c?h.diffs[h.diffs.length-1][1]+=u:h.diffs.push(new f.Diff(c,u))),l||r.splice(++e,0,h)}}},f.prototype.patch_toText=function(r){for(var n=[],e=0;e<r.length;e++)n[e]=r[e];return n.join("")},f.prototype.patch_fromText=function(r){var n=[];if(!r)return n;for(var e=r.split(`
`),s=0,a=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;s<e.length;){var i=e[s].match(a);if(!i)throw new Error("Invalid patch string: "+e[s]);var t=new f.patch_obj;for(n.push(t),t.start1=parseInt(i[1],10),i[2]===""?(t.start1--,t.length1=1):i[2]=="0"?t.length1=0:(t.start1--,t.length1=parseInt(i[2],10)),t.start2=parseInt(i[3],10),i[4]===""?(t.start2--,t.length2=1):i[4]=="0"?t.length2=0:(t.start2--,t.length2=parseInt(i[4],10)),s++;s<e.length;){var h=e[s].charAt(0);try{var l=decodeURI(e[s].substring(1))}catch{throw new Error("Illegal escape in patch_fromText: "+l)}if(h=="-")t.diffs.push(new f.Diff(p,l));else if(h=="+")t.diffs.push(new f.Diff(M,l));else if(h==" ")t.diffs.push(new f.Diff(c,l));else{if(h=="@")break;if(h!=="")throw new Error('Invalid patch mode "'+h+'" in: '+l)}s++}}return n},f.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},f.patch_obj.prototype.toString=function(){var r,n;this.length1===0?r=this.start1+",0":this.length1==1?r=this.start1+1:r=this.start1+1+","+this.length1,this.length2===0?n=this.start2+",0":this.length2==1?n=this.start2+1:n=this.start2+1+","+this.length2;for(var e=["@@ -"+r+" +"+n+` @@
`],s,a=0;a<this.diffs.length;a++){switch(this.diffs[a][0]){case M:s="+";break;case p:s="-";break;case c:s=" ";break}e[a+1]=s+encodeURI(this.diffs[a][1])+`
`}return e.join("").replace(/%20/g," ")},d.exports=f,d.exports.diff_match_patch=f,d.exports.DIFF_DELETE=p,d.exports.DIFF_INSERT=M,d.exports.DIFF_EQUAL=c})(R);const C=R.exports;export{C as D};
