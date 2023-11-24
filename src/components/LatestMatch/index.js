import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <div className="latest-sub-card1">
        <h1 className="latest-match-sub-heading">{competingTeam}</h1>
        <p className="latest-match-date">{date}</p>
        <p className="latest-match-text">{venue}</p>
        <p className="latest-match-text">{result}</p>
      </div>
      <img
        className="latest-match-image"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="latest-sub-card2">
        <h1 className="match-sub-heading">First Innings</h1>
        <p className="latest-match-text">{firstInnings}</p>
        <h1 className="match-sub-heading">Second Innings</h1>
        <p className="latest-match-text">{secondInnings}</p>
        <h1 className="match-sub-heading">Man Of The Match</h1>
        <p className="latest-match-text">{manOfTheMatch}</p>
        <h1 className="match-sub-heading">Umpires</h1>
        <p className="latest-match-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
