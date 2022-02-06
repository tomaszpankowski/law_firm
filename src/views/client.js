import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ClientS1 from "../components/client-s1";
import ClientS2 from "../components/client-s2";
import ClientS3 from "../components/client-s3";
import ClientS4 from "../components/client-s4";

class Client extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ClientS1/>
                <ClientS2/>
                <ClientS3/>
                <ClientS4/>
            </Container>    
        );
    }
}

export default Client;