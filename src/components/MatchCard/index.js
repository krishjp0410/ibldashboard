import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchCard

  const statusColor = matchStatus === 'Lost' ? 'red-color' : 'green-color'

  return (
    <li className="list-item-card">
      <img
        className="match-card-image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="match-card-heading">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <p className={`match-status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
