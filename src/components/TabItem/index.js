import './index.css'

const TabItem = props => {
  const {tabsListItem, categoryItem} = props
  const {displayText, tabId} = tabsListItem

  const categoryItemSelect = () => {
    categoryItem(tabId)
  }
  return (
    <li className="tab-item">
      <button className="tab-button" type="button" onClick={categoryItemSelect}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
