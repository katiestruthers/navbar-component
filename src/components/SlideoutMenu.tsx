/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";

type SlideoutMenuProps = {
  open: boolean,
  titles: string[]
}

const StyledSlideoutMenu = styled.div<{ open: boolean; }>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
`;

export const SlideoutMenu = (props: SlideoutMenuProps) => {
  return (
  <StyledSlideoutMenu open={props.open}>
    This works!
  </StyledSlideoutMenu>
  );
};