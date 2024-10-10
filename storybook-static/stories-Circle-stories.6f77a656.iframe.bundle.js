"use strict";(self.webpackChunkstory_book_tutorial_yt=self.webpackChunkstory_book_tutorial_yt||[]).push([[479],{"./src/stories/Circle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BaseCircle:()=>BaseCircle,GreenCircle:()=>GreenCircle,GroupedCircle:()=>GroupedCircle,YellowCircle:()=>YellowCircle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Circle_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Circle=({variant})=>{let bgColor="";switch(variant){case"orange":bgColor="bg-orange-500";break;case"green":bgColor="bg-green-500";break;case"yellow":bgColor="bg-yellow-500"}return(0,jsx_runtime.jsx)("div",{className:`${bgColor} w-14 h-14 p-2 rounded-full`})},stories_Circle=Circle;Circle.__docgenInfo={description:"",methods:[],displayName:"Circle",props:{variant:{required:!0,tsType:{name:"union",raw:"'orange' | 'green' | 'yellow'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'green'"},{name:"literal",value:"'yellow'"}]},description:""}}};const Circle_stories={component:stories_Circle,title:"Circle",argTypes:{variant:{control:{type:"select",options:["orange","green","yellow"]},description:"プロジェクトで使用する円のUIコンポーネントです。<br /> `orange`, `green`, `yellow`",table:{type:{summary:null}}}},tags:["autodocs"],parameters:{docs:{description:{component:"プロジェクトで使用する円のUIコンポーネントです。"}}}},BaseCircle={args:{variant:"orange"},parameters:{docs:{description:{story:"オレンジ色の円です。"}}}},GreenCircle={args:{variant:"green"},parameters:{docs:{description:{story:"緑色の円です。"}}}},YellowCircle={args:{variant:"yellow"},parameters:{docs:{description:{story:"黄色の円です。"}}}},GroupedCircle={render:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:10},children:[(0,jsx_runtime.jsx)(stories_Circle,{variant:"orange"}),(0,jsx_runtime.jsx)(stories_Circle,{variant:"green"}),(0,jsx_runtime.jsx)(stories_Circle,{variant:"yellow"})]})},__namedExportsOrder=["BaseCircle","GreenCircle","YellowCircle","GroupedCircle"];BaseCircle.parameters={...BaseCircle.parameters,docs:{...BaseCircle.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'orange'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'オレンジ色の円です。'\n      }\n    }\n  }\n}",...BaseCircle.parameters?.docs?.source}}},GreenCircle.parameters={...GreenCircle.parameters,docs:{...GreenCircle.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: \"green\"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '緑色の円です。'\n      }\n    }\n  }\n}",...GreenCircle.parameters?.docs?.source}}},YellowCircle.parameters={...YellowCircle.parameters,docs:{...YellowCircle.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'yellow'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '黄色の円です。'\n      }\n    }\n  }\n}",...YellowCircle.parameters?.docs?.source}}},GroupedCircle.parameters={...GroupedCircle.parameters,docs:{...GroupedCircle.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem',\n    padding: 10\n  }}>\n      <Circle variant=\"orange\" />\n      <Circle variant=\"green\" />\n      <Circle variant=\"yellow\" />\n    </div>\n}",...GroupedCircle.parameters?.docs?.source}}}}}]);