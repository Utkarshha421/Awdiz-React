import styled from "styled-components";

const MyAnotherFontElement = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: green;
`;
function StyledComponents() {
  return (
    <div>
      <p>StyledComponents</p>
      <MyAnotherFontElement>StyledComponents</MyAnotherFontElement>
    </div>
  );
}

export default StyledComponents;