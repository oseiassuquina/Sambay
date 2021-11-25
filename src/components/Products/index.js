import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from "./style";
import caneca from '../../assets/caneca.png';

Modal.setAppElement('#root');

export function Products () {
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
                <img src={caneca} style={{paddingTop:'3rem'}} alt="Caneca"/>

            </Modal>
            <h3>Produtos em Promoção</h3>
            <div className="flex-container">
                <div className="card" onClick={handleOpenNewCardModal}>
                    <div className="card-head">
                        <img src={caneca} alt="Caneca"/>
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
                        <img src={caneca} alt="Caneca"/>
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
                        <img src={caneca} alt="Caneca"/>
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
                        <img src={caneca} alt="Caneca"/>
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
                        <img src={caneca} alt="Caneca"/>
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