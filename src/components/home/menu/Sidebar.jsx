import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-layout">
               <div className="sidebar-header">
                  <img width={60} height={60} src="../../../../public/vite.svg" /> 
               </div>
                <div>
                    <ul>
                        <Link to='/home'>
                            <div className="d-flex flex-row justify-content-center shadow-sm rounded-1 p-2">
                               Dashboard
                            </div>
                        </Link>
                        <Link to={"/contracts"}>
                            <div className="d-flex flex-row justify-content-center shadow-sm rounded-1 p-2">
                                 Contracts
                            </div>
                        </Link>
                        <li>
                            <div className="d-flex flex-row justify-content-center shadow-sm rounded-1 p-2">
                               Settings
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;