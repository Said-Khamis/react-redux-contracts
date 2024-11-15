import Navbar from "../home/menu/Navbar";
import Sidebar from "../home/menu/Sidebar";
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <div className="d-flex flex-row">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;