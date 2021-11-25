import logoImg from '../../assets/logo.svg'
import { Container, Content, SearchBox } from './styles'
import { AiOutlineBell } from 'react-icons/ai'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'

export function Header (){
    return(
        <Container>
            <Content>
            <img style={{height:'3rem'}} src={logoImg} alt="Sambay Express" />
                <SearchBox>
                    <AiOutlineSearch style={{marginRight:'0.5rem'}}/>
                    <input type="text" placeholder="Busque aqui seu produto"></input>
                </SearchBox>
                <div className='icons'>
                    <AiOutlineBell  style={{color:'#fff'}}/>             
                    <MdOutlineShoppingCart style={{color:'#fff'}}/>
                    <AiOutlineUser style={{color:'#fff'}}/>
                </div>
            </Content>
        </Container>
    )
}