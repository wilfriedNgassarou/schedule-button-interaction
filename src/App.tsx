import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Calendar3, ChevronDown, X } from "react-bootstrap-icons"
import { Credits } from "./components/credits"

function App() {
  const [state, setState] = useState<'collapsed' | 'extended'>('collapsed')

  return (
    <section className="w-full h-dvh flex flex-col items-center justify-center">
      <Credits />
      <div className="w-80 h-44 py-2 overflow-hidden flex flex-col justify-between bg-white relative z-10 rounded-3xl border-[1px] border-gray-500/40">
        <textarea
          className="px-4 pt-2 outline-none flex-grow resize-none placeholder:text-gray-400"
          placeholder="What's up"
        />
        <AnimatePresence mode="popLayout" initial={false}>
          {state == 'extended' && (
            <div
              className="px-2" 
              key="extended"
            >
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 60, opacity: 0 }}
                transition={{ type: 'spring', duration: .5, bounce: .2 }}
                className="mb-2 w-full rounded-full h-9 bg-gray-100 overflow-hidden p-1 flex items-center"
              >
                <div className="flex-grow flex gap-x-0.5 h-full rounded-full text-sm text-gray-500">
                  <div className="bg-white rounded-tl-full rounded-bl-full px-2 flex-grow flex justify-between items-center">
                    <span>08, Feb 2025</span>
                    <ChevronDown size={16} />
                  </div>
                  <div className="bg-white rounded-tr-full rounded-br-full px-2 flex-grow flex justify-between items-center">
                    <span>7: 30 AM</span>
                    <ChevronDown size={16} />
                  </div>
                </div>
                <X 
                  className="cursor-pointer fill-gray-700" 
                  onClick={() => setState('collapsed')}
                  size={24} 
                />
              </motion.div>
              <motion.button
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1, transition: { delay: .1 } }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ type: 'tween', duration: .2, ease: 'easeOut' }}
                className="w-full relative z-20 py-2 rounded-full bg-black text-white font-medium"
              >
                Schedule
              </motion.button>
            </div>
          )}
          
          {state == 'collapsed' && (
            <div 
              key="collapsed" 
              className="px-2 flex items-center justify-end gap-3"
            >
              <motion.span 
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 60, opacity: 0 }}
                transition={{ type: 'spring', duration: .6, bounce: .2 }}
                onClick={() => setState('extended')}
                className="cursor-pointer bg-gray-200 relative z-30 h-full aspect-square rounded-full flex justify-center items-center"
              >
                <Calendar3 size={20} className="fill-gray-700" />
              </motion.span>
              <motion.button
                key="test"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: .4, ease: 'easeOut' }}
                className="px-12 py-2 rounded-full bg-black text-white font-medium"
              >
                Post
              </motion.button>
            </div>
          )}
        </AnimatePresence>
      </div>
      <motion.div 
        initial={{ y: -40 }}
        animate={{ y: state == 'collapsed' ? -40 : 0 }}
        className="relative flex items-center justify-center -top-10 w-80 h-20 rounded-3xl bg-gray-100 border-[1px] border-gray-500/40"
        transition={{ type: 'spring', duration: .6, bounce: .3 }}
      >
        <p className="relative top-5 text-sm text-gray-700">
          Will be posted on 08 Feb, 7:30 AM
        </p>
      </motion.div>
    </section>
  )
}

export default App
