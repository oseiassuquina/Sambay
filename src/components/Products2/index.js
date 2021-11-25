import { useState } from 'react';
import { Container } from "./style";
import caneca2 from '../../assets/caneca2.jpeg'
import Modal from 'react-modal';

Modal.setAppElement('#root');


export function Products2() {
    const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);

    function handleOpenNewCardModal() {
     setIsNewCardModalOpen(true);
    }
 
    function handleCloseNewCardModal() {
     setIsNewCardModalOpen(false);
    }

    return(
        <Container>
            <Modal style={{width:'6rem'}}
                isOpen={isNewCardModalOpen} 
                onRequestClose={handleCloseNewCardModal}
            >
                <h2> Caneca do Zequinha</h2>
                <img src={caneca2}  alt="Caneca"/>

            </Modal>
            <h3>Produtos em Promoção</h3>
            <div className="flex-container">
                <div className="card" onClick={handleOpenNewCardModal}>
                    <div className="card-head">
                        <img src={caneca2} alt="Caneca"/>
                    </div>
                    <div className="card-body">
                        <span>Caneca nº 169 - Zequinha no Carrinho de rolemã</span>
                        <strong>R$7,50</strong>
                        <p>Em até 2x</p>
                    </div>
                    <div className="card-footer">
                        <p>Promoção</p>
                    </div>
                </div>
                <div className="card" onClick={handleOpenNewCardModal}>
                    <div className="card-head">
                        <img src={caneca2} alt="Caneca"/>
                    </div>
                    <div className="card-body">
                        <span>Caneca nº 169 - Zequinha no Carrinho de rolemã</span>
                        <strong>R$7,50</strong>
                        <p>Em até 2x</p>
                    </div>
                    <div className="card-footer">
                        <p>Promoção</p>
                    </div>
                </div>
                <div className="card" onClick={handleOpenNewCardModal}>
                    <div className="card-head">
                        <img src={caneca2} alt="Caneca"/>
                    </div>
                    <div className="card-body">
                        <span>Caneca nº 169 - Zequinha no Carrinho de rolemã</span>
                        <strong>R$7,50</strong>
                        <p>Em até 2x</p>
                    </div>
                    <div className="card-footer">
                        <p>Promoção</p>
                    </div>
                </div>
                <div className="card" onClick={handleOpenNewCardModal}>
                    <div className="card-head">
                        <img src={caneca2} alt="Caneca"/>
                    </div>
                    <div className="card-body">
                        <span>Caneca nº 169 - Zequinha no Carrinho de rolemã</span>
                        <strong>R$7,50</strong>
                        <p>Em até 2x</p>
                    </div>
                    <div className="card-footer">
                        <p>Promoção</p>
                    </div>
                </div>
                <div className="card" onClick={handleOpenNewCardModal}>
                    <div className="card-head">
                        <img src={caneca2} alt="Caneca"/>
                    </div>
                    <div className="card-body">
                        <span>Caneca nº 169 - Zequinha no Carrinho de rolemã</span>
                        <strong>R$7,50</strong>
                        <p>Em até 2x</p>
                    </div>
                    <div className="card-footer">
                        <p>Promoção</p>
                    </div>
                </div>
            </div>
            
        </Container>
    )
}