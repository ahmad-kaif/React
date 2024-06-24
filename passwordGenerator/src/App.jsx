import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  //useState hook
  const [length, setlength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)


  //useCallback hook in react -> useCallback( (function),[dependencies] )(memoization)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNum) str += "0123456789";
    else if (allowChar) str += "!@#$%^&*()~{}+_-=";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, allowChar, allowNum, setPassword]); //setPassword is optional

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //eseEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, allowChar, allowNum, passwordGenerator]);

  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref = {passwordRef}
          />
          <button 
          onClick={copyPassToClip}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowNum}
              id="numberInput"
              onChange={() => {
                setAllowNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={allowChar}
              id="charInput"
              onChange={() => {
                setAllowChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Speacial chars</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
