import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid lightgray;
    width: 100%;
    border-radius: 20px;
    height: 100%;


    Button {
        border-radius: 0 0 20px 20px;
        padding: 15px;
        font-family: cascadia code;
        font-size: 1.1rem;
    }
    Button:hover {
        background-color: #3f50b5;
        color: whitesmoke;
    }

    img {
        max-height: 250px;
        object-fit: contain;
        border-radius: 20px 20px 0 0;
    }

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1rem;
        font-family: cascadia code;
        font-size: 0.9rem;
        /* background-color: whitesmoke; */
        min-height: 150px;
    }
    div h3 {
        text-align: center;
    }
    div p {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


`