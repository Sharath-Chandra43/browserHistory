import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <div className="container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
          <button
            data-testId="delete"
            type="button"
            className="delete-button"
            onClick={onDeleteItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
