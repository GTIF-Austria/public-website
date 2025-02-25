import{g as oe}from"./basedecoder-DHcBySSe.CHFwp5fA.js";const J=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),$=4017,B=799,Q=3406,W=2276,K=1567,N=3784,j=5793,Z=2896;function ne(F,a){let s=0;const u=[];let D=16;for(;D>0&&!F[D-1];)--D;u.push({children:[],index:0});let y=u[0],P;for(let t=0;t<D;t++){for(let f=0;f<F[t];f++){for(y=u.pop(),y.children[y.index]=a[s];y.index>0;)y=u.pop();for(y.index++,u.push(y);u.length<=t;)u.push(P={children:[],index:0}),y.children[y.index]=P.children,y=P;s++}t+1<D&&(u.push(P={children:[],index:0}),y.children[y.index]=P.children,y=P)}return u[0].children}function ce(F,a,s,u,D,y,P,t,f){const{mcusPerLine:m,progressive:o}=s,i=a;let k=a,c=0,b=0;function d(){if(b>0)return b--,c>>b&1;if(c=F[k++],c===255){const l=F[k++];if(l)throw new Error(`unexpected marker: ${(c<<8|l).toString(16)}`)}return b=7,c>>>7}function p(l){let h=l,w;for(;(w=d())!==null;){if(h=h[w],typeof h=="number")return h;if(typeof h!="object")throw new Error("invalid huffman sequence")}return null}function T(l){let h=l,w=0;for(;h>0;){const E=d();if(E===null)return;w=w<<1|E,--h}return w}function x(l){const h=T(l);return h>=1<<l-1?h:h+(-1<<l)+1}function g(l,h){const w=p(l.huffmanTableDC),E=w===0?0:x(w);l.pred+=E,h[0]=l.pred;let L=1;for(;L<64;){const v=p(l.huffmanTableAC),I=v&15,z=v>>4;if(I===0){if(z<15)break;L+=16}else{L+=z;const U=J[L];h[U]=x(I),L++}}}function A(l,h){const w=p(l.huffmanTableDC),E=w===0?0:x(w)<<f;l.pred+=E,h[0]=l.pred}function r(l,h){h[0]|=d()<<f}let n=0;function C(l,h){if(n>0){n--;return}let w=y;const E=P;for(;w<=E;){const L=p(l.huffmanTableAC),v=L&15,I=L>>4;if(v===0){if(I<15){n=T(I)+(1<<I)-1;break}w+=16}else{w+=I;const z=J[w];h[z]=x(v)*(1<<f),w++}}}let e=0,_;function te(l,h){let w=y;const E=P;let L=0;for(;w<=E;){const v=J[w],I=h[v]<0?-1:1;switch(e){case 0:{const z=p(l.huffmanTableAC),U=z&15;if(L=z>>4,U===0)L<15?(n=T(L)+(1<<L),e=4):(L=16,e=1);else{if(U!==1)throw new Error("invalid ACn encoding");_=x(U),e=L?2:3}continue}case 1:case 2:h[v]?h[v]+=(d()<<f)*I:(L--,L===0&&(e=e===2?3:0));break;case 3:h[v]?h[v]+=(d()<<f)*I:(h[v]=_<<f,e=0);break;case 4:h[v]&&(h[v]+=(d()<<f)*I);break}w++}e===4&&(n--,n===0&&(e=0))}function re(l,h,w,E,L){const v=w/m|0,I=w%m,z=v*l.v+E,U=I*l.h+L;h(l,l.blocks[z][U])}function se(l,h,w){const E=w/l.blocksPerLine|0,L=w%l.blocksPerLine;h(l,l.blocks[E][L])}const R=u.length;let q,O,V,X,M,G;o?y===0?G=t===0?A:r:G=t===0?C:te:G=g;let S=0,Y,H;R===1?H=u[0].blocksPerLine*u[0].blocksPerColumn:H=m*s.mcusPerColumn;const ee=D||H;for(;S<H;){for(O=0;O<R;O++)u[O].pred=0;if(n=0,R===1)for(q=u[0],M=0;M<ee;M++)se(q,G,S),S++;else for(M=0;M<ee;M++){for(O=0;O<R;O++){q=u[O];const{h:l,v:h}=q;for(V=0;V<h;V++)for(X=0;X<l;X++)re(q,G,S,V,X)}if(S++,S===H)break}if(b=0,Y=F[k]<<8|F[k+1],Y<65280)throw new Error("marker was not found");if(Y>=65488&&Y<=65495)k+=2;else break}return k-i}function ie(F,a){const s=[],{blocksPerLine:u,blocksPerColumn:D}=a,y=u<<3,P=new Int32Array(64),t=new Uint8Array(64);function f(m,o,i){const k=a.quantizationTable;let c,b,d,p,T,x,g,A,r;const n=i;let C;for(C=0;C<64;C++)n[C]=m[C]*k[C];for(C=0;C<8;++C){const e=8*C;if(n[1+e]===0&&n[2+e]===0&&n[3+e]===0&&n[4+e]===0&&n[5+e]===0&&n[6+e]===0&&n[7+e]===0){r=j*n[0+e]+512>>10,n[0+e]=r,n[1+e]=r,n[2+e]=r,n[3+e]=r,n[4+e]=r,n[5+e]=r,n[6+e]=r,n[7+e]=r;continue}c=j*n[0+e]+128>>8,b=j*n[4+e]+128>>8,d=n[2+e],p=n[6+e],T=Z*(n[1+e]-n[7+e])+128>>8,A=Z*(n[1+e]+n[7+e])+128>>8,x=n[3+e]<<4,g=n[5+e]<<4,r=c-b+1>>1,c=c+b+1>>1,b=r,r=d*N+p*K+128>>8,d=d*K-p*N+128>>8,p=r,r=T-g+1>>1,T=T+g+1>>1,g=r,r=A+x+1>>1,x=A-x+1>>1,A=r,r=c-p+1>>1,c=c+p+1>>1,p=r,r=b-d+1>>1,b=b+d+1>>1,d=r,r=T*W+A*Q+2048>>12,T=T*Q-A*W+2048>>12,A=r,r=x*B+g*$+2048>>12,x=x*$-g*B+2048>>12,g=r,n[0+e]=c+A,n[7+e]=c-A,n[1+e]=b+g,n[6+e]=b-g,n[2+e]=d+x,n[5+e]=d-x,n[3+e]=p+T,n[4+e]=p-T}for(C=0;C<8;++C){const e=C;if(n[1*8+e]===0&&n[2*8+e]===0&&n[3*8+e]===0&&n[4*8+e]===0&&n[5*8+e]===0&&n[6*8+e]===0&&n[7*8+e]===0){r=j*i[C+0]+8192>>14,n[0*8+e]=r,n[1*8+e]=r,n[2*8+e]=r,n[3*8+e]=r,n[4*8+e]=r,n[5*8+e]=r,n[6*8+e]=r,n[7*8+e]=r;continue}c=j*n[0*8+e]+2048>>12,b=j*n[4*8+e]+2048>>12,d=n[2*8+e],p=n[6*8+e],T=Z*(n[1*8+e]-n[7*8+e])+2048>>12,A=Z*(n[1*8+e]+n[7*8+e])+2048>>12,x=n[3*8+e],g=n[5*8+e],r=c-b+1>>1,c=c+b+1>>1,b=r,r=d*N+p*K+2048>>12,d=d*K-p*N+2048>>12,p=r,r=T-g+1>>1,T=T+g+1>>1,g=r,r=A+x+1>>1,x=A-x+1>>1,A=r,r=c-p+1>>1,c=c+p+1>>1,p=r,r=b-d+1>>1,b=b+d+1>>1,d=r,r=T*W+A*Q+2048>>12,T=T*Q-A*W+2048>>12,A=r,r=x*B+g*$+2048>>12,x=x*$-g*B+2048>>12,g=r,n[0*8+e]=c+A,n[7*8+e]=c-A,n[1*8+e]=b+g,n[6*8+e]=b-g,n[2*8+e]=d+x,n[5*8+e]=d-x,n[3*8+e]=p+T,n[4*8+e]=p-T}for(C=0;C<64;++C){const e=128+(n[C]+8>>4);e<0?o[C]=0:e>255?o[C]=255:o[C]=e}}for(let m=0;m<D;m++){const o=m<<3;for(let i=0;i<8;i++)s.push(new Uint8Array(y));for(let i=0;i<u;i++){f(a.blocks[m][i],t,P);let k=0;const c=i<<3;for(let b=0;b<8;b++){const d=s[o+b];for(let p=0;p<8;p++)d[c+p]=t[k++]}}}return s}class ae{constructor(){this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}resetFrames(){this.frames=[]}parse(a){let s=0;function u(){const t=a[s]<<8|a[s+1];return s+=2,t}function D(){const t=u(),f=a.subarray(s,s+t-2);return s+=f.length,f}function y(t){let f=0,m=0,o,i;for(i in t.components)t.components.hasOwnProperty(i)&&(o=t.components[i],f<o.h&&(f=o.h),m<o.v&&(m=o.v));const k=Math.ceil(t.samplesPerLine/8/f),c=Math.ceil(t.scanLines/8/m);for(i in t.components)if(t.components.hasOwnProperty(i)){o=t.components[i];const b=Math.ceil(Math.ceil(t.samplesPerLine/8)*o.h/f),d=Math.ceil(Math.ceil(t.scanLines/8)*o.v/m),p=k*o.h,T=c*o.v,x=[];for(let g=0;g<T;g++){const A=[];for(let r=0;r<p;r++)A.push(new Int32Array(64));x.push(A)}o.blocksPerLine=b,o.blocksPerColumn=d,o.blocks=x}t.maxH=f,t.maxV=m,t.mcusPerLine=k,t.mcusPerColumn=c}let P=u();if(P!==65496)throw new Error("SOI not found");for(P=u();P!==65497;){switch(P){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:{const t=D();P===65504&&t[0]===74&&t[1]===70&&t[2]===73&&t[3]===70&&t[4]===0&&(this.jfif={version:{major:t[5],minor:t[6]},densityUnits:t[7],xDensity:t[8]<<8|t[9],yDensity:t[10]<<8|t[11],thumbWidth:t[12],thumbHeight:t[13],thumbData:t.subarray(14,14+3*t[12]*t[13])}),P===65518&&t[0]===65&&t[1]===100&&t[2]===111&&t[3]===98&&t[4]===101&&t[5]===0&&(this.adobe={version:t[6],flags0:t[7]<<8|t[8],flags1:t[9]<<8|t[10],transformCode:t[11]});break}case 65499:{const t=u()+s-2;for(;s<t;){const f=a[s++],m=new Int32Array(64);if(f>>4)if(f>>4===1)for(let o=0;o<64;o++){const i=J[o];m[i]=u()}else throw new Error("DQT: invalid table spec");else for(let o=0;o<64;o++){const i=J[o];m[i]=a[s++]}this.quantizationTables[f&15]=m}break}case 65472:case 65473:case 65474:{u();const t={extended:P===65473,progressive:P===65474,precision:a[s++],scanLines:u(),samplesPerLine:u(),components:{},componentsOrder:[]},f=a[s++];let m;for(let o=0;o<f;o++){m=a[s];const i=a[s+1]>>4,k=a[s+1]&15,c=a[s+2];t.componentsOrder.push(m),t.components[m]={h:i,v:k,quantizationIdx:c},s+=3}y(t),this.frames.push(t);break}case 65476:{const t=u();for(let f=2;f<t;){const m=a[s++],o=new Uint8Array(16);let i=0;for(let c=0;c<16;c++,s++)o[c]=a[s],i+=o[c];const k=new Uint8Array(i);for(let c=0;c<i;c++,s++)k[c]=a[s];f+=17+i,m>>4?this.huffmanTablesAC[m&15]=ne(o,k):this.huffmanTablesDC[m&15]=ne(o,k)}break}case 65501:u(),this.resetInterval=u();break;case 65498:{u();const t=a[s++],f=[],m=this.frames[0];for(let b=0;b<t;b++){const d=m.components[a[s++]],p=a[s++];d.huffmanTableDC=this.huffmanTablesDC[p>>4],d.huffmanTableAC=this.huffmanTablesAC[p&15],f.push(d)}const o=a[s++],i=a[s++],k=a[s++],c=ce(a,s,m,f,this.resetInterval,o,i,k>>4,k&15);s+=c;break}case 65535:a[s]!==255&&s--;break;default:if(a[s-3]===255&&a[s-2]>=192&&a[s-2]<=254){s-=3;break}throw new Error(`unknown JPEG marker ${P.toString(16)}`)}P=u()}}getResult(){const{frames:a}=this;if(this.frames.length===0)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(let o=0;o<this.frames.length;o++){const i=this.frames[o].components;for(const k of Object.keys(i))i[k].quantizationTable=this.quantizationTables[i[k].quantizationIdx],delete i[k].quantizationIdx}const s=a[0],{components:u,componentsOrder:D}=s,y=[],P=s.samplesPerLine,t=s.scanLines;for(let o=0;o<D.length;o++){const i=u[D[o]];y.push({lines:ie(s,i),scaleX:i.h/s.maxH,scaleY:i.v/s.maxV})}const f=new Uint8Array(P*t*y.length);let m=0;for(let o=0;o<t;++o)for(let i=0;i<P;++i)for(let k=0;k<y.length;++k){const c=y[k];f[m]=c.lines[0|o*c.scaleY][0|i*c.scaleX],++m}return f}}class le extends oe{constructor(a){super(),this.reader=new ae,a.JPEGTables&&this.reader.parse(a.JPEGTables)}decodeBlock(a){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(a)),this.reader.getResult().buffer}}export{le as default};
