import QuoteMapping from "./QuoteMapping"
import {Container, Row} from "react-bootstrap"

let QuotesSection = (props) => {
    return(
        <Container>
            <Row>
                <QuoteMapping quotes={props.quotes}/>
            </Row>
        </Container>
    )
}

export default QuotesSection