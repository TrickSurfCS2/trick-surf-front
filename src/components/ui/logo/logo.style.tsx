export const LogoStyled = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Montserrat);
  overflow: hidden;
  width: 500px;
  
  > svg {
    display: block;
    font: 10.5em 'Montserrat';
    height: 200px;
    margin: 0 auto;

    width: 100%;
    height: 100%;
  }

  .text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
  }

  .text-copy:nth-child(1) {
    stroke: #612996;
    animation-delay: -1;
  }

  .text-copy:nth-child(2) {
    stroke: #3e0084;
    animation-delay: -2s;
  }

  .text-copy:nth-child(3) {
    stroke: #004cbd;
    animation-delay: -3s;
  }

  .text-copy:nth-child(4) {
    stroke: #0091bd;
    animation-delay: -4s;
  }

  .text-copy:nth-child(5) {
    stroke: #6db6ff;
    animation-delay: -5s;
  }

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
`
