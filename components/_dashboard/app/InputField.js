import React,{useState} from 'react'

const InputField = () => {
    const [enteredData, setEnteredData] = useState("")
    const [storedItems, setStoredItems] = useState([])
    const addItem = () => {
        if (!enteredData) {
          alert("Plz fill something to it");
        }
         else {
          const itemsWithId = {
            id: new Date().getTime().toString(),
            name: enteredData
          }
          setStoredItems([...storedItems, itemsWithId]);
          setEnteredData("")
        }
      };

    return (
        <>
            <input
              type="text"
              placeholder="Add a task here"
              value={enteredData}
              onChange={(e) => setEnteredData(e.target.value)}
            />
            <button  onClick={addItem}>
              <span> ADD </span>
            </button>
        </>
    )
}

export default InputField