var a=Object.defineProperty;var o=(r,n)=>a(r,"name",{value:n,configurable:!0});import{a as d,j as e}from"./jsx-runtime.c4bbeae3.js";function t({tokens:r,hasRemvalue:n=!1}){return d("table",{className:"tokens-grid",children:[e("thead",{children:d("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("td",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([s,i])=>d("tr",{children:[e("td",{children:s}),e("td",{children:i}),n&&d("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},s))})]})}o(t,"TokensGrid");try{t.displayName="TokensGrid",t.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemvalue:{defaultValue:{value:"false"},description:"",name:"hasRemvalue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:t.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{t as T};
//# sourceMappingURL=TokensGrid.bb4d73e9.js.map
