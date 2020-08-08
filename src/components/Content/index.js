import React from 'react';
import { data } from '../../data/data.json';
import owl from '../../assets/owl.svg';
import { ExitToApp } from '@material-ui/icons';

import {
  Head,
  Container,
  Description,
  GroupLinks,
  Card
} from './styles';

export default function Content({ category }) {

  function renderLinks(categoryLink) {
    if(categoryLink === 'Tudo') {      
      return (
        data.map((dataItem, index) => {
          return (
            <GroupLinks key={ dataItem.category}>
              <h2>{ dataItem.category }</h2>
              {
                dataItem.links.map((links, index) => {
                  return (
                    <Card key={ index } >
                      <a href={ links.url } alt={ links.title } target="_blank" rel="noopener noreferrer" className="link">
                        <div className="content">
                          <h3>{ links.title }</h3>
                          <p>{ links.description }</p>
                        </div>
                        <ExitToApp />
                      </a>
                    </Card>
                  );
                })
              }
            </GroupLinks>
          );
        })
      );
    }

    else {
      let position;

      data.forEach((element, index) => {
        if(element.category === category) {
          position = index;
          return;
        }
      });

      return (
        <GroupLinks>
          <h2>{ data[position].category }</h2>
          {
            data[position].links.map((item, index) => {
              return (
                <Card key={ index } >
                  <a href={ item.url } alt={ item.title } target="_blank" rel="noopener noreferrer" className="link">
                    <div className="content">
                      <h3>{ item.title }</h3>
                      <p>{ item.description }</p>
                    </div>
                    <ExitToApp />
                  </a>
                </Card>
              );
            })
          }
        </GroupLinks>
      );
    }
  }

  return (
    <Container>
      <Head>
        <img src={ owl } alt="Coruja" />
        <div className="brand">
          <h1>Atena</h1>
          <p>Compilado de ferramentas para desenvolvedores e designers.</p>
        </div>
      </Head>

      <Description>
        Constantemente estamos em busca de ferramentas para agilizar nosso trabalho ou recursos de design para construirmos nossas melhores interfaces web ou mobile, e para isso que Atena existe, agregar conhecimento à aqueles que o buscam. Este projeto está hospedado no github e para contribuir basta enviar uma pull request conforme o padrão que constará no README do repositório.
        Faça bom proveito do material aqui presente. : )
      </Description>

      {
        renderLinks(category)
      }
     
    </Container>
  );
}