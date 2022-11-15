import React, { useState } from 'react'

const Distcription = () => {
  const [click, setClick] = useState(1);
  const handleclick = (index) => {
    setClick(index)
  }
  return (
    <>
    <div className="main bg-slate-200 py-14">
      <div className="in w-3/4 m-auto mobile:w-full mobile:px-2">
      <div className="btn flex justify-center items-center bg-white py-6 space-x-8">
        <button onClick={()=>{handleclick(1)}} className={click===1?'text-2xl font-semibold border-b-2 border-green-600 py-1 mobile::text-xl':'border-none text-2xl font-semibold mobile:text-xl'}>Description</button>
        <button onClick={()=>{handleclick(2)}} className={click===2?'text-2xl font-semibold border-b-2 border-green-600 py-1 mobile:text-xl':'border-none text-2xl font-semibold mobile:text-xl'}>Review [0]</button>
      </div>
      <div className="content border relative shadow-lg py-14 px-3 mobile:py-5 " >
        <div className={click===1?'leading-6 tracking-wide block top-8 ':'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam similique, deleniti libero
           animi, excepturi dignissimos labore at quam
            amet nam nulla soluta esse possimus beatae, consectetur cupiditate enim voluptate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa praesentium ipsum inventore aperiam aliquid harum! Sunt maiores minima nam rem ipsam iure voluptatibus quo, consectetur saepe dolor atque vitae.
            Odit odio ullam quam rem error! Ipsa quae repellendus, architecto voluptatem deleniti pariatur unde laudantium, expedita error illum vitae molestiae quis soluta delectus vel quisquam explicabo, eligendi quos accusantium exercitationem.
            Illo aliquam voluptatum nobis maiores repellat minus quia ab enim ducimus similique earum vero rem atque odio ratione recusandae hic eligendi repudiandae quas qui, porro ex accusamus quisquam! Blanditiis, quos.
          </div>
          <div className={click===2?'top-8 leading-6 tracking-wide block':'hidden'}>
            Lorem ipsum dolor sit, ame 7475757t consectetur adipisicing elit. Cupiditate tempora 
            ipsam eligendi magnam provident delectus mollitia maiores excepturi similique ullam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis aliquid? Repellendus voluptatibus pariatur, eligendi aut veniam assumenda. Mollitia velit possimus repellat officia. Repellat voluptatem aliquam quaerat fugiat unde quasi?
            Libero, recusandae numquam dolore earum ex saepe explicabo iure necessitatibus accusantium neque, cupiditate optio adipisci minima, quia aperiam voluptatibus! Eum at qui voluptatem molestias mollitia quam aliquam veniam quidem libero.
          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Distcription