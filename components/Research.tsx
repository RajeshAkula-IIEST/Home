"use client";

import { BatteryCharging,
Brain,
Flame,
Cpu } from "lucide-react";

const research=[

{

icon:<BatteryCharging size={45}/>,

title:"Battery Thermal Management",

text:"Advanced cooling techniques for lithium-ion batteries."

},

{

icon:<Brain size={45}/>,

title:"Artificial Intelligence",

text:"Deep learning models for battery diagnostics."

},

{

icon:<Cpu size={45}/>,

title:"Energy Storage",

text:"Lithium-ion batteries and electrochemical systems."

},

{

icon:<Flame size={45}/>,

title:"Heat Transfer",

text:"Thermal characterization and inverse heat transfer."

}

]

export default function Research(){

return(

<section

id="research"

className="section bg-slate-100"

>

<div className="container-custom">

<h2 className="text-center text-5xl font-bold mb-16">

Research Areas

</h2>

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

{research.map((item,index)=>(

<div

key={index}

className="bg-white rounded-3xl p-8 shadow-soft hover:-translate-y-3 transition duration-300"

>

<div className="text-primary mb-6">

{item.icon}

</div>

<h3 className="text-2xl font-semibold mb-4">

{item.title}

</h3>

<p className="text-gray-600">

{item.text}

</p>

</div>

))}

</div>

</div>

</section>

)

}
