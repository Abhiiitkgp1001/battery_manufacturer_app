import { designSystemColor, mobileAppColor, todoColors, websiteRedesignColor, wireframesColor } from './config';
export const menuList = [
  {
    icon:'images/home.png',
    text:'Home'
  },
  {
    icon:'images/message.png',
    text:'Messages'
  },
  {
    icon:'images/task.png',
    text:'Tasks'
  },
  {
    icon:'images/member.png',
    text:'Members'
  },
  {
    icon:'images/setting.png',
    text:'Settings'
  },
];
export const projectList = [
  {
    text:'Mobile App',
    color:mobileAppColor
  },
  {
    text:'Website Redesign',
    color:websiteRedesignColor
  },
  {
    text:'Design System',
    color:designSystemColor
  },
  {
    text:'Wireframes',
    color:wireframesColor
  },
];
export const data1 = [
  {
    id:'1',
    priority:'Low',
    title:'Brainstorming',
    description:'Brainstorming brings team members\' diverse experience into play.',
    comments:'12',
    files:'0',
    images: null,
    avatar:'images/badge1.png',
    height: '24px',
    width:'64px',
  },
  {
    id:'2',
    priority:'High',
    title:'Research',
    description:'User research helps you to create an optimal product for users.',
    comments:'10',
    files:'3',
    images: null,
    avatar:'images/badge2.png',
    height: '24px',
    width:'44px',
  },
  {
    id:'3',
    priority:'High',
    title:'Wireframes',
    description:'Low fidelity wireframes include the most basic content and visuals.',
    comments:'15',
    files:'5',
    images: null,
    avatar:'images/badge1.png',
    height: '24px',
    width:'64px',
  },
  
];
export const data2 = [
  {
    id:'4',
    priority:'Low',
    title:'Onboarding Illustrations',
    comments:'14',
    images:'images/t1.png',
    files:'15',
    description: null,
    avatar:'images/badge1.png',
    height: '24px',
    width:'64px',
  },
  {
    id:'5',
    priority:'Low',
    title:'Moodboard',
    comments:'9',
    images:'images/t2.png',
    files:'10',
    description: null,
    avatar:'images/badge3.png',
    height: '24px',
    width:'24px',
  },
];
export const data3 = [
  {
    id:'6',
    priority:'Completed',
    title:'Mobile App Design',
    comments:'12',
    images:'images/t3.png',
    files:'15',
    description: null,
    avatar:'images/badge2.png',
    height: '24px',
    width:'44px',
  },
  {
    id:'7',
    priority:'Completed',
    title:'Design System',
    comments:'12',
    images:null,
    files:'15',
    description: 'It just needs to adapt the UI from what you did before',
    avatar:'images/badge1.png',
    height: '24px',
    width:'64px',
  },
];

export const todoData = {
  1: {
    title: 'To-do',
    items: data1,
    color: todoColors[0],

  },
  2: {
    title: 'In Progress',
    items: data2,
    color: todoColors[1],
  },
  3: {
    title: 'Done',
    items: data3,
    color: todoColors[2],
  },
};
