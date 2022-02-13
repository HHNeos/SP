import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';


//import {Link} from 'react-router';
import {Switch, Route, Redirect} from 'react-router-dom';

//import '../css/'
import '../js/scripts';
import '../css/styles.css';

import routes from './routes.js';


const MasterLayout = () => {
	return(
		<div className="sb-nav-fixed">
			<Navbar />
			
			<div id="layoutSidenav">
            	<div id="layoutSidenav_nav">
					<Sidebar />
				</div>

				<div id="layoutSidenav_content">
					<main>
						<Switch>
							{routes.map((route, idx) => {
								return(
									route.component && (
										<Route 
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={(props) => (
												<route.component {...props} />
											)}
										/>
									)
								)
							})}
							<Redirect from="admin" to="/admin/dashboard" />
							
						</Switch>

					</main>
					<Footer />
				</div>

			</div>
			
			
		</div>
	)
}

export default MasterLayout;