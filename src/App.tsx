import { Name } from './components/Name'
import './styles/global.css'

function App() {
  return (
    <div className="container">
      <h1>Register your resume</h1>
      <form>
        <Name name="firstName" title="First Name" />
        <Name name="lastName" title="Last Name" />
        <div className="teste">
          <label htmlFor="title">
            Position/Title
            <select name="title" id="title">
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
            </select>
          </label>
          <label htmlFor="departament">
            Departament
            <select name="departament" id="departament">
              <option value="Computer Science">Computer Science</option>
              <option value="Math">Math</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
            </select>
          </label>
        </div>
        <div className="teste">
          <label htmlFor="graduation">
            Graduation
            <select name="graduation" id="graduation">
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </label>
          <label htmlFor="university">
            University
            <select name="university" id="university">
              <option value="UCLA">UCLA</option>
              <option value="UCSD">UCSD</option>
              <option value="UC Berkeley">UC Berkeley</option>
            </select>
          </label>
        </div>
        <label htmlFor="experience">
          Experience
          <div className="experience">
            <textarea
              name="experience"
              id="experience"
              placeholder="Your experiences at  previous jobs, college projects, life experiences that you think were important to this position"
            ></textarea>
            <p>Max: 1000 words</p>
          </div>
        </label>
      </form>
    </div>
  )
}

export default App
