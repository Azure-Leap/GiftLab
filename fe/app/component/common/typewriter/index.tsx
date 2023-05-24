import { useEffect, useState } from "react";

const Typewriter = ({text, duration, setStage, whatStage} : {text :string, duration : number, setStage : any, whatStage:number} ) => {

  const [typingText, setTypingText] = useState('')
  let curCharIndex = -1,
      arr = text.split('');

  useEffect(()=>{
    let a:any = setInterval(()=>{
        curCharIndex++;
        if(curCharIndex == text.length) {
          setStage(whatStage)
          return clearInterval(a);
        }
        return setTypingText(prev => prev + arr[curCharIndex])
    }, duration);
  },[])
  return (
    <p className="w-full break-words">{typingText}</p>
  )
}

export default Typewriter