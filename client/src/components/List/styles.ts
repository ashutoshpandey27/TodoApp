import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 2rem;

  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  margin: 3rem 0;

  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 0.6rem 1rem;

  border: 2px solid transparent;
  border-radius: 6px;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

  transition: 0.2s all ease;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid #0f0;

    &::placeholder {
      color: #000;
    }
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;

  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  background: #33b078;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

  transition: 0.2s all ease;

  &:hover {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const Item = styled.section<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 1rem;
  margin: 1rem 0;
  width: 60vw;

  transition: 0.2s all ease;

  border-radius: 10px;
  background-color: ${props => (props.checked ? '#33b078' : '#fff')};
  color: ${props => (props.checked ? '#fff' : '#000')};
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

export const Name = styled.p`
  font-weight: 500;
  word-break: break-word;
  text-transform: uppercase;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 1.3rem;

  margin-right: 0.7rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const Author = styled.p`
  margin-top: 2rem;

  font-style: italic;
`;

export const AuthorLink = styled.a`
  text-decoration: none;
  color: #0000aa;

  &:hover {
    text-decoration: underline;
  }
`;
