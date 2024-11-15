import Layout from "../../Layout/Layout";
import { useParams  } from "react-router-dom";
const ContractDetails = () => {
   const param = useParams();

    return (
       <Layout>
           <div>
             { param["contractId"] }
           </div>
       </Layout>
    );
};

export default ContractDetails;