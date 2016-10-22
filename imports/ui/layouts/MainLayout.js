// Llamado por /imports/startup/client/routes.js
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class MainLayout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="main-body">
				<div className="ui inverted top fixed menu">
					<div className="ui container">
						<div className="item">
							Boilerplate
						</div>
						<div className="right menu">
							<a className="item">
								Item
							</a>
							<a className="item">
								Item
							</a>
						</div>
					</div>
				</div>
				<div className="pusher">
					<div className="body">
						{this.props.main}
					</div>
					<div className="ui inverted vertical footer segment">
						<div className="ui container">
					    	<div className="ui stackable inverted divided equal height stackable one column grid">
					        	<div className="column">
									<h4 className="ui inverted header">Footer</h4>
									<p>This is a generic comment about the site. This footer is only an example</p>
					        	</div>
							</div>
					    </div>
					</div>
				</div>

			</div>
		);
	}
}

export default createContainer(props => {
	return {
		// user: Meteor.user(),
	};
}, MainLayout);
