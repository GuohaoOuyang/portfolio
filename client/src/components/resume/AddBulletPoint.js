import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './AddBulletPoint.css';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [into, setInto] = useState('qualification');
  const [font, setFont] = useState('normal');

  const { addBulletPoint } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newPoint = {
      // id: Math.floor(Math.random() * 100000000),
      text,
      into,
      font
    }
    addBulletPoint(newPoint);
    setText('');
  }

  return (
    <>

            <h3 className="sectionTitle">Add BulletPoint</h3>


      <form >
        <div className="form-control">
          <label htmlFor="text" className="attr">Text</label>
          <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="into" className="attr">Into<br />
          </label>
          <select className="into" value={into} onChange={(e) => setInto(e.target.value)}>
          <option value="qualification">qualification</option>
          <option value={"education"}>education</option>
          <option value={"project_experience"}>projectExperience</option>
          <option value={"volunteer_experience"}>volunteerExperience</option>
          <option value={"interests"}>interests</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="font" className="attr"
            >Font<br />
          </label>
          <select className="font" value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="normal">normal</option>
          <option value={"bold"}>bold</option>
          <option value={"italic"}>italic</option>
          </select>
        </div>
        <button className="btn" onClick = {onSubmit}>Add BulletPoint</button>
      </form>
    </>
  )
}
