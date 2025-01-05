import { useState } from 'react';
import Values from 'values.js';
import DisplayColors from './components/DisplayColor';
import FormColor from './components/FormColor';
import { ModeToggle } from './components/shared/mode-toggle';

function App() {
  const [list, setList] = useState(new Values('#802FDE').all(5));
  return (
    <div className='relative flex flex-col items-center py-8 w-full'>
      <div className='top-5 right-5 absolute flex flex-col gap-3'>
        <ModeToggle />
      </div>
      <div className='border-slate-200 dark:border-slate-500 p-4 border rounded-md w-full max-w-[1200px]'>
        <FormColor setList={setList} />
        <DisplayColors list={list} />
      </div>
    </div>
  )
}

export default App
