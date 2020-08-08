import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;    
`;

export const Head = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  .brand {
    display: flex;
    flex-direction: column;
  }

  .brand h1 {
    font-size: 3rem;    
  }
`;

export const Description = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.6rem;
`;

export const GroupLinks = styled.section`
  width: 100%;
  margin: 2.4rem 0; 

  & > h2{
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--color-secundary);
  }  
`;

export const Card = styled.article`
  width: 100%; 
  margin-top: 12px;
  margin-bottom: 8px; 

  .link {    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-black-light);
    border-radius: 4px;
    padding: 1rem 0.8rem;
    border: 2px solid transparent;
  }

  .content p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }  

  .link svg {
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
  }

  .link {
    transition: 0.4s ease-in all;
  }

  .link:hover {
    border-color: var(--color-secundary);
  }
`;