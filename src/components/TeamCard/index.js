import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link className="list-item-link" to={`/team-matches/${id}`}>
      <li className="list-item-card">
        <img
          className="list-item-image"
          src={teamImageUrl}
          alt={`${name} ${teamImageUrl}`}
        />
        <div>
          <p className="list-item-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
