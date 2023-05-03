// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="main-bg">
      <h1 className="heading">
        MY JOURNEY OF
        <br />
        <span className="ccbp-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
