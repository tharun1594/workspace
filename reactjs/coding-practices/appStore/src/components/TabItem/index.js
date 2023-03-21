import './index.css'

const TabItem = props => {
  const {eachTabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = eachTabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const addClassName = isActive ? 'select-style' : 'button'

  return (
    <li className="tab-item">
      <button className={addClassName} type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
      <hr className={addClassName} />
    </li>
  )
}

export default TabItem
