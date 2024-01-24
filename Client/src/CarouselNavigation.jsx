import styled from 'styled-components'
import { StyledButton } from './Styles/ButtonStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
const StyledCarousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(${({theme}) => theme.index} * 1.5);
`
const StyledCarouselBtn = styled(StyledButton)`
    border-radius: ${({theme}) => theme.border.radius};
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.37);
    
`


export default function CarouselNavigation({onPrev, onNext}) {
    return (
        <StyledCarousel>
            <StyledCarouselBtn onClick={onPrev}><FontAwesomeIcon icon={faAngleLeft} /></StyledCarouselBtn>
            <StyledCarouselBtn onClick={onNext}><FontAwesomeIcon icon={faAngleRight} /></StyledCarouselBtn>
        </StyledCarousel>
    )
}