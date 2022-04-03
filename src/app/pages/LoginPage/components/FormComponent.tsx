import styled from 'styled-components/macro';

export const FormCenter = styled.div`
  margin: 100px;
`;

export const FormField = styled.div`
  margin: 100px;
`;

export const FormFieldLabel = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 0.9em;
  color: white;
`;

export const FormFieldInput = styled.input`
  width: 85%;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;

  ::placeholder {
    color: #616e7f;
  }
`;

export const FormFieldButton = styled.button`
  background-color: #6b5b95;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
`;

export const FormFieldLink = styled.link`
  color: #66707d;
  text-decoration: none;
  display: inline-block;
  border-bottom: 1.5px solid #6b5b95;
  padding-bottom: 5px;
`;
