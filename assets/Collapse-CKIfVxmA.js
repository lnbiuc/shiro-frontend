import{r as n,j as e}from"./index-N6YOaT_b.js";import{m as l}from"./spring-BiPrtYZ-.js";import{c as m}from"./helper-CaAdfMs7.js";import{A as c}from"./index-dwuk8SjK.js";import{m as p}from"./motion-minimal-CPg6mRFW.js";const j=({isOpened:t,className:r,children:s,withBackground:o=!1})=>{const i=n.useMemo(()=>{const a={open:{opacity:1,height:"auto",transition:l},collapsed:{opacity:0,height:0,overflow:"hidden"}};return o&&(a.open.background="oklch(var(--a) / 10%)",a.collapsed.background="oklch(var(--a) / 0%)"),a},[o]);return e.jsx(e.Fragment,{children:e.jsx(c,{initial:!1,children:t&&e.jsx(p.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:i,className:m(o&&"rounded-lg",r),children:o?e.jsx("div",{className:"p-4",children:s}):s},"content")})})};export{j as C};
