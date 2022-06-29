import styled, {keyframes} from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top: 5px solid burlywood;
    animation: ${spin} 0.5s linear infinite;
    margin: 20px auto;
`;
