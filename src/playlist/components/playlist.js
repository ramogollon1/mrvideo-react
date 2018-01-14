// import React, { Component } from 'react';
// Componentes
import React from 'react';
import Media from './media';
// import Play from '../../icons/components/play';
// import Pause from '../../icons/components/pause';
// import Volume from '../../icons/components/volume';
// import FullScreen from '../../icons/components/full-screen';
// Styles
import './playlist.css';

// <Play size={25} color="black" />
// <Pause size={25}color="red"/>
// <Volume size={25}color="green" />
// <FullScreen size={25} color="blue" />
// 
// { props.playlist.map(function(element){
// 		return(
// 			<div key={element.id}>
// 				<h3>{element.title}</h3>
// 				<p>{element.description}</p>
// 				<div className={"Playlist Playlist"+element.id}>
// 					{
// 						element.playlist.map((item) => {
// 							return <Media {...item} key={item.id} />
// 						})
// 					}
// 				</div>
// 			</div>
// 		)
// 	})
// }

//No tiene ciclo de vida 
function Playlist(props) {
	// const playlist = props.data.categories;
	// console.log(props.data.categories);
	return (
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
				})
			}
		</div>
	)
}

export default Playlist;