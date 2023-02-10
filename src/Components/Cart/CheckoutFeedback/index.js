import {
  BorderDetailsCart,
  ContainerDetails,
  Text,
} from './style'
import { Checkout } from '../style'
import Check from "../../../icons/check.svg"

export function CheckoutFeedback({
  toggleFeedback
}) {

  return (
    <BorderDetailsCart>
      <ContainerDetails>
        <Text>Sua compra foi finalizada com sucesso.</Text>
        <Checkout onClick={toggleFeedback}>Ok</Checkout>
      </ContainerDetails>
    </BorderDetailsCart>
  )
}