// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div>
      <div className="row-c">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration-time">{duration}</p>
        </div>
      </div>

      <p className="course-description">{description}</p>
      <ul className="course-ul">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="course-li">
            <p className="course-p">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard