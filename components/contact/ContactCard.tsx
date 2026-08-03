"use client";

import { motion } from "framer-motion";

const stats=[
{
number:"25+",
title:"Publications"
},
{
number:"3+",
title:"Patents"
},
{
number:"500K",
title:"Industry Project"
},
{
number:"10+",
title:"Students Guided"
}
];

export default function Stats(){

return(

<section
className="section gradient text-white"
id="stats"
>

<div className="container-custom">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{stats.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.2}}

viewport={{once:true}}

className="glass rounded-3xl p-10 text-center"

>

<h2 className="text-5xl font-bold">

{item.number}

</h2>

<p className="mt-4 text-xl">

{item.title}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}
