import { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-date-picker'
import "react-datepicker/dist/react-datepicker.css"

const CreateExercise = () => {
  const [username, setUsername] = useState('test user')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState(['test user'])

  // constructor(props) {
  //   super(props);
  //   this.onChangeUsername = this.onChangeUsername.bind(this);
  //   this.onChangeDescription = this.onChangeDescription.bind(this);
  //   this.onChangeDuration = this.onChangeDuration.bind(this);
  //   this.onChangeDate = this.onChangeDate.bind(this);
  //   this.onSubmite = this.onSubmite.bind(this);

  //   this.state = {
  //     username: '',
  //     description: '',
  //     duration: 0,
  //     date: new Date(),
  //     users: []
  //   }
  // }

  // componentDidMount() {
  //   this.setState({
  //     users: ['test user'],
  //     username: 'test user'
  //   })
  // }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }
  // onChangeDescription(e) {
  //   this.setState({
  //     description: e.target.value
  //   });
  // }
  // onChangeDuration(e) {
  //   this.setState({
  //     duration: e.target.value
  //   });
  // }
  // onChangeDate(date) {
  //   this.setState({
  //     date: date
  //   });
  // }
  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }
    console.log(exercise);
    window.location = '/';
  }
  
  const selectRef = useRef()

  
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref={selectRef}
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}>
              {
                users.map(function (user) {
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                value={date}
                onChange={(date) => setDate(date)}
              />
            </div>
           
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  
}

export default CreateExercise;

