import styled from "styled-components";

export const Container = styled.div`
    .flex-container{
        display: flex;
        flex-wrap: wrap;
        gap: 45px;
        flex-flow: row;
        margin-top: 20px;
    }

    h2{
        color: black;
        font-family: Poppins;
        font-weight: bold;
        font-size: 10px;
        transition: all 0.3s ease 0s;
        margin-bottom: 3px;
    }
    
    .card{
        height: auto;
        background: 0% 0% no-repeat padding-box padding-box rgb(255, 255, 255);
        box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
        border-radius: 0px 0px 13px 13px;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }
    }

    .card-head>img{
        width: 100%;
        height: 139px;
        object-fit: cover;
    }

    .card-body{
        padding: 12px;
    }

    .card-body>span{
        display: block;
        font-size: 10px;
        color: black;
        font-family: Poppins;
        font-weight: bold;
        margin-bottom: 3px;
    }

    .card-body>strong{
        font-family: Poppins, semi-bold;
        color: rgb(107, 152, 166);
        font-size: 16px;
        margin: 0px;
    }

    .card-body>p{
        font-size: 12px;
    }

    .card-footer{
        background-color: rgb(96, 133, 219);
        border-radius: 0px 0px 13px 13px;
        padding: 5px 10px;
    }

    .card-footer>p{
        position: relative;
        font-size: 8px;
    }
`;

