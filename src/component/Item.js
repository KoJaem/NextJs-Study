import styled from "@emotion/styled";

export default function Item({ item }) {
  const { image_link, name, price, description } = item;
  // console.log(item);
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <img src={image_link} alt={name} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{name}</Title>
          <Price>${price}</Price>
          <Button>구매하기</Button>
        </InfoWrapper>
      </Wrapper>
      <div>
        <p style={{fontWeight: 'bold', fontSize: 20}}>Description</p>
        {description}
      </div>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 40px 0;
  border-bottom: 1px solid #ccc;
`;
const ImageWrapper = styled.div`
  flex: 200px 0 0;
`;
const InfoWrapper = styled.div`
  flex: 1 0 0;
`;
const Title = styled.div`
  display: block;
  font-size: 24px;
  margin-top: 20px;
`;
const Price = styled.div`
  display: block;
  font-size: 34px;
  margin-top: 20px;
  color: #00bcd4;
`;

const Button = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  width: 150px;
  background-color: #f7cb92;
  font-size: 20px;
  padding: 10px;
`;
