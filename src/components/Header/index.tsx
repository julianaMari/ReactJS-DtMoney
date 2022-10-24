import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransacttionModal: () => void;

}

export function Header({onOpenNewTransacttionModal}: HeaderProps) {
    
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransacttionModal}>
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}