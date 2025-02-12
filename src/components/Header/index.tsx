import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTrasactionModal: () => void;
}

export function Header({ onOpenNewTrasactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="My Finances" />
        <button onClick={onOpenNewTrasactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
