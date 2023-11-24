import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({
      matchDetails: updatedData,
      isLoading: false,
    })
  }

  getUpdatedRecentMatch = recentMatch => {
    const updatedRecentMatch = recentMatch.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))
    return updatedRecentMatch
  }

  getUpdatedMatchDetails = matchDetails => {
    const updateLatestMatchDetails = {
      umpires: matchDetails.umpires,
      result: matchDetails.result,
      manOfTheMatch: matchDetails.man_of_the_match,
      id: matchDetails.id,
      date: matchDetails.date,
      venue: matchDetails.venue,
      competingTeam: matchDetails.competing_team,
      competingTeamLogo: matchDetails.competing_team_logo,
      firstInnings: matchDetails.first_innings,
      secondInnings: matchDetails.second_innings,
      matchStatus: matchDetails.match_status,
    }
    return updateLatestMatchDetails
  }

  renderMatchDetails = () => {
    const {matchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails
    const updateLatestMatchDetails = this.getUpdatedMatchDetails(
      latestMatchDetails,
    )
    const updatedRecentMatch = this.getUpdatedRecentMatch(recentMatches)

    return (
      <div className="team-matches-container">
        <img className="team-banner-image" src={teamBannerUrl} alt="" />
        <h1 className="team-matches-title">Latest Matches</h1>
        <LatestMatch latestMatch={updateLatestMatchDetails} />
        <ul>
          {updatedRecentMatch.map(eachItem => (
            <MatchCard key={eachItem.id} matchCard={eachItem} />
          ))}
        </ul>
        <MatchCard />
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="match-bg-container">
        {isLoading ? this.renderLoader() : this.renderMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
