"use client";

import { motion } from "framer-motion";

export default function About() {
  return (

<section
id="about"
className="section bg-white"
>

<div className="container-custom">

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.7}}

>

<h2 className="text-5xl font-bold text-center mb-16">

About Me

</h2>

<div className="grid lg:grid-cols-2 gap-12 items-center">

<div>

<img

src="/images/profile.jpg"

className="rounded-3xl shadow-soft"

alt="Profile"

/>

</div>

<div>

<p className="text-lg leading-9 text-gray-700">

I am <strong>Dr. Rajesh Akula</strong>,
Assistant Professor in the Department of Mechanical Engineering,
Indian Institute of Engineering Science and Technology (IIEST),
Shibpur.

</p>

<br/>

<p className="text-lg leading-9 text-gray-700">

My research interests include Battery Thermal Management,
Artificial Intelligence, Machine Learning,
Electrochemical Energy Storage,
Thermal Engineering,
Inverse Heat Transfer,
and Sustainable Energy Systems.

</p>

<br/>

<p className="text-lg leading-9 text-gray-700">

Previously I worked as a Postdoctoral Fellow
at the University of Toronto and IIT Bombay,
after completing my PhD from IIT Madras.

</p>

</div>

</div>

</motion.div>

</div>

</section>

  );
}
