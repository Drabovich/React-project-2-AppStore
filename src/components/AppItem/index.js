import './index.css'

const AppItem = props => {
  const {eachAppItems} = props
  const {appName, imageUrl} = eachAppItems
  return (
    <div className="app-item ">
      <img src={imageUrl} alt="" className="app-image" />
      <p className="app-name">{appName}</p>
    </div>
  )
}
export default AppItem
