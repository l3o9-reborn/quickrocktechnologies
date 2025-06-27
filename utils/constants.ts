import anim1 from '@/public/Animation - 1750804866714 (1).json'
import anim2 from '@/public/Animation - 1750882713843.json'
import anim3 from '@/public/Animation - 1750882868030.json'
import anim4 from '@/public/Animation - 1750883315433.json'
import anim5 from '@/public/Animation - 1750884444644.json'
import anim6 from '@/public/Animation - 1750884925892.json'
import anim7 from '@/public/Animation - 1750885092081.json'
import anim8 from '@/public/Animation - 1750883845550.json'


import {Rocket, ChartNetwork, ServerCogIcon, Trophy } from 'lucide-react'



export const  serviceContents=[
    
    {
        id: 1,
        heading:`Custom Software <br/> Development`,
        paragraph:`QuickRock Technologies helps you create diverse and complex software solutions for your business needs. Listening to your ideas, we implement and create custom software solutions from scratch, designed especially for your business. With Enosis, you get quality software and perfect service every time.`,
        animationFile: anim8
    },
     {
        id: 2,
        heading:`Web Application <br/> Development`,
        paragraph:`QuickRock Technologies looks beyond conventional solutions to develop disruptive web products. Our skilled and dedicated web development team understands your needs and leverage the dynamism of modern web frameworks to create business valued web applications.`,
        animationFile: anim2
    },
     {
        id: 3,
        heading:`Mobile Application <br/> Development`,
        paragraph:`Our expertise in custom mobile app development gives our clients the opportunity to pack incredible functionality into their customer’s hands. We develop apps that perform across different mobile devices and operating systems. We are experts at Swift/Objective-C to build native iOS apps and Java/Kotlin for native Android app development. For cross-platform and hybrid development our expertise include, but are not limited to, Ionic, Xamarin, and React Native.`,
        animationFile: anim3
     },
     {
        id: 4,
        heading:`Quality Assurance & <br/> Testing`,
        paragraph:`Treading on Agile development methodologies and Rational Unified Process practices in testing, Enosis ensures highest quality of software solutions to you. Our software testing strategy ensures every component of your software are free of bugs and issues.`,
        animationFile: anim6
     }
]


export const whatWeOffer=[
        {
        id: 1,
        heading:`Qualified Engineers`,
        paragraph:`QuickRock Technologies  is a team of quality software experts. We continue to strive in being the best in the industry by hiring engineers from renowned universities. Having team members experienced in a wide range of technology stacks enables us to meet different customers needs.`,
        animationFile: anim7
    },
     {
        id: 2,
        heading:`Dedicated Team`,
        paragraph:`Our in-house team becomes an extension of yours. We ramp up quickly, align with your goals, and navigate risks together — ensuring transparent collaboration and reliable software development through a focused, agile, and communicative process built around your needs.`,
        animationFile: anim1
     },
     {
        id: 3,
        heading:`Collaborative Process`,
        paragraph:`We work as an extension of your team, not as a vendor. We help you to participate in a deeply collaborative process to develop the desired product. We will be in constant communication with your team every step of the way.`,
        animationFile: anim5
    },
     {
        id: 4,
        heading:`Continuous Supervision`,
        paragraph:`A project manager will be involved in the entire lifecycle of your project to plan, organize, control, and deploy key deliverables according to your desired milestones, including process improvement analysis and implementation.`,
        animationFile: anim4
    },
]

export const benefits=[
   {
      id:1,
      heading:'Kick Start',
      paragraph:'Our teams can be ramped up quickly and managed autonomously to implement and execute agreed plans.',
      staticFile: Rocket
   },
    {
      id:2,
      heading:'Top Quality Engineers',
      paragraph:'Our hiring process is constantly active to ensure your access to the best IT professionals in the market.',
      staticFile: Trophy
   },
    {
      id:3,
      heading:'End to End Management',
      paragraph:'We are responsible for your project completion and team management from start to end, guaranteeing quality product output.',
      staticFile: ChartNetwork
   },
    {
      id:4,
      heading:'Operational Efficiency',
      paragraph:'Our cost effective services help reduce your costs to remain competitive without compromising quality.',
      staticFile: ServerCogIcon
   }
]