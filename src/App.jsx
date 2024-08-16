import 'remixicon/fonts/remixicon.css'
import { useState ,useRef} from "react"
const App = ()=>{
  const el = useRef(null)
  const [copy ,setCopy] = useState(false)
  const [value,setValue]=useState(8)
  const [newPassword ,setNewPassword] =useState(null)

  const generatePassword = (e)=>{
    e.preventDefault()
    let password = ''
    const pattern ="Xq%kD!j@U*G#rZ~&-H/L_b4$e^w(A+{o}9[5]p=;?1|~F,Cx)N7Q8:Zh3o%tR|`I+0J[]g}K-W?^`<L7y&M8~A$#"
      for(let i=0 ;i<value; i++)
      {
    const index =Math.floor(Math.random() * pattern.length)
    password=password  + pattern[index]
      }
      setNewPassword(password)

  }
  const copyPassword = ()=>{
  const input = el.current
  input.select()
  navigator.clipboard.writeText(input.value)
  setCopy(true)

  setTimeout(()=>{
    setCopy(false)
    window.getSelection().removeAllRanges()
  },3000)
  }
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
       <h1 className="text-5xl font-bold">Coding <span className="text-violet-600">Ott</span></h1>
       <p className="text-base text-center mt-3 mb-12">Random Password Generator</p>
       <form className="flex flex-col gap-4" onSubmit={generatePassword}>
        <input
        type="number"
        className="border p-3 border-gray-300 rounded"
        placeholder="Enter password length"
        value={value}
        onChange={()=>setValue(e.target.value)}
        /> 
        <button className="bg-violet-600 p-3 text-white rounded">Generate</button>

       </form>
       {
        newPassword &&
       <div className="mt-6 bg-rose-200 p-3 rounded-lg flex justify-between">
        <input
        ref={e}
        value={newPassword}
        className="bg-transparent focus:outline-none"
        readOnly
        />
        <button onClick={copyPassword}>
          {
            copy ?
        <i className='ri-check-double-line'></i>
        :

        <i className="ri-file-copy-line"></i>
          }
        </button>

       </div>
}
{
  copy && 
  <p className='text-center mt-2 font-medium text-indigo-600 text-lg'>Copied !</p>
}

      </div>
    </div>
  )
}
export default App