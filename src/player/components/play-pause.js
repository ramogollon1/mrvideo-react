import React from 'react';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import './play-pause.css';

const PlayPause = (props) => {
	return (
		<div className="PlayPause">
			{
				props.pause ? //condicion ternaria SI
					<button 
						onClick={props.handleClick}
					>
						<Play size={25} color="white" />
					</button>
				: // SINO
					<button 
						onClick={props.handleClick}
					>
						<Pause size={25} color="white" />
					</button>
			}
		</div>
	)
}

export default PlayPause