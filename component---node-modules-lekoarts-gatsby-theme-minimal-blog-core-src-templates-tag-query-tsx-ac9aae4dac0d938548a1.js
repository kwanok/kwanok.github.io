"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[825],{93704:function(t,n,a){a.r(n),a.d(n,{default:function(){return Z}});var e=a(67294),s=a(70977),r=a(14123),o=a(25444),i=a(69748),l=a(71299),u=a(58470),c=a(80126),g=a(54917),m=function(t){var n=t.posts,a=t.pageContext,e=(0,l.Z)(),m=e.tagsPath,Z=e.basePath;return(0,s.tZ)(i.Z,null,(0,s.tZ)(g.Z,{title:"Tag: "+a.name}),(0,s.tZ)(r.kC,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,s.tZ)(r.X6,{as:"h1",variant:"styles.h1",sx:{marginY:2}},a.name),(0,s.tZ)(r.rU,{as:o.Link,sx:{variant:"links.secondary",marginY:2},to:(0,c.Z)("/"+Z+"/"+m)},"View all tags")),(0,s.tZ)(u.Z,{posts:n,sx:{mt:[4,5]}}))};var Z=function(t){var n=Object.assign({},t),a=n.data.allPost;return e.createElement(m,Object.assign({posts:a.nodes},n))}},61930:function(t,n,a){var e=a(67294),s=a(14123),r=a(25444),o=a(71299),i=a(80126);n.Z=function(t){var n=t.tags,a=(0,o.Z)(),l=a.tagsPath,u=a.basePath;return e.createElement(e.Fragment,null,n.map((function(t,n){return e.createElement(e.Fragment,{key:t.slug},!!n&&", ",e.createElement(s.rU,{as:r.Link,to:(0,i.Z)("/"+u+"/"+l+"/"+t.slug)},t.name))})))}},58470:function(t,n,a){a.d(n,{Z:function(){return u}});var e=a(70977),s=a(67294),r=a(14123),o=a(25444),i=a(61930),l=function(t){var n=t.post,a=t.showTags,l=void 0===a||a;return(0,e.tZ)(r.xu,{mb:4},(0,e.tZ)(r.rU,{as:o.Link,to:n.slug,sx:{fontSize:[1,2,3],color:"text"}},n.title),(0,e.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,e.tZ)("time",null,n.date),n.tags&&l&&(0,e.tZ)(s.Fragment,null," — ",(0,e.tZ)(i.Z,{tags:n.tags}))))},u=function(t){var n=t.posts,a=t.className,s=void 0===a?"":a,r=t.showTags,o=void 0===r||r;return(0,e.tZ)("section",{sx:{mb:[5,6,7]},className:s},n.map((function(t){return(0,e.tZ)(l,{key:t.slug,post:t,showTags:o})})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-ac9aae4dac0d938548a1.js.map