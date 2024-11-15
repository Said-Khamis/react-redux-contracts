import { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useDispatch , useSelector } from "react-redux";
import { getContracts } from "../../../redux/actions/actionContracts";

const Contracts = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.contracts.loading);
    const list = useSelector(state => state.contracts.contracts);

    useEffect(() => {
       dispatch(getContracts());
    },[dispatch])

    return (
        <Layout>
            <div className="layout-content">
               <div className="px-2">
               <div className="mt-5 mb-2">
                    <h2>List of Contracts</h2>
                </div>
                { loading && <span>Loading....</span>}
                {/* { JSON.stringify(list.contracts) } */}
                {/* { typeof list.contracts  } */}
                <div className="table-table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Title</th>
                                <th>Contract Objectives</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { list && list?.contracts?.length > 0 && list?.contracts?.map(contract => (
                                <tr key={contract.id}>
                                    <td>{list.contracts.indexOf(contract) + 1}</td>
                                    <td>{contract.title}</td>
                                    <td>
                                        <ul style={{
                                             listStyleType: 'lower-roman'
                                          }}>
                                            {
                                                contract?.contract_objectives?.map( objective => (
                                                    <li key={objective.id}>{objective.details}</li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                    <td>
                                        <a href={'contracts/'+contract.id+'/show'} className="btn btn-primary btn-sm">
                                           View
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
               </div>
            </div>
        </Layout>
    );
};

export default Contracts;