import Profile from './Profile';
import Dashboard from './Dashboard';
import Passenger from './Passenger';
import Transport from './Transport';
import AdminSignup from '../../AdminSignup';
//import AdminSignup from '../../../admin/AdminSignup';
import Detail from '../../Detail';
import TransDetail from '../Transport/TransDetail';

const routes = [
    {path: '/admin', exact: true, name: 'Admin' },
    {path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    {path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
    {path: '/admin/passenger', exact: true, name: 'Passenger', component: Passenger },
    {path: '/admin/transport', exact: true, name: 'Transport', component: Transport },
    {path: '/admin/details', exact: true, name: 'Transport Details', component: TransDetail },

    {path: '/admin/adsignup', exact: true, name: 'AdminSignup', component: AdminSignup },
    {path: '/admin/adlist', exact: true, name: 'Detail', component: Detail },
];
    
export default routes;