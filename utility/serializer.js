/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { urlFor } from '../sanity';

export function defaultSerializer(body) {
  const serializer = {
    list: (props) => {
      const { type } = props;
      const bullet = type === 'bullet';
      if (bullet) {
        return <BulletList>{props.children}</BulletList>;
      }
      return <ol>{props.children}</ol>;
    },
    listItem: (props) => <li>{props.children}</li>,
    types: {
      image(props) {
        return (
          <ImageContainer>
            <HeroImage src={urlFor(props.node.asset).url()} />
          </ImageContainer>
        );
      },
      block(props) {
        switch (props.node.style) {
          case 'h2':
            return <Title {...body}>{props.children}</Title>;
          case 'h3':
            return <SubTitle {...body}>{props.children}</SubTitle>;
          case 'label':
            return <SectionLabel {...body}>{props.children}</SectionLabel>;
          case 'normal':
            return <p {...body}>{props.children}</p>;
          default:
            return null;
        }
      },
    },
  };
  return serializer;
}
const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-top: 16px;
  margin-bottom: 10px;
`;
const SubTitle = styled.h3`
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 20px;
`;
const BulletList = styled.ul`
  li {
    display: list-item;
    margin-bottom: 1rem;
    list-style-type: square;
  }
`;
const SectionLabel = styled.span`
  display: block;
  font-size: 13px;
  background: #ebebeb;
  margin: 20px 0px 10px 0;
  padding: 5px 10px;
  border-radius: 3px;
  color: #757575;
`;
