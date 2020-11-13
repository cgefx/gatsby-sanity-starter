import { keyframes } from 'styled-components'

export const scroll = keyframes`
  0% {
    opacity: 0;
  }

  10% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(10px);
    opacity: 0;
  }
`

export const AnimatedShadow = keyframes`
			0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
			10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
			20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
			30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
			40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
			50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
			60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
			70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
			80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
			90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
			100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
	`

export const gradientAnimation = keyframes`
			0% {
				background-position: 15% 0%;
			}
			50% {
				background-position: 85% 100%;
			}
			100% {
				background-position: 15% 0%;
			}
		`

export const ErrorInputAnimation = keyframes`
			0% {
				border-bottom: 1px solid var(--bg-content-color);
			}
			100% {
				border-bottom: 1px solid var(--red);
			}
	`
export const ColorAnimation = keyframes`
	0%  {fill: #04e5e5;}
	10% {fill: #f37055;}
	20% {fill: #ef4e7b;}
	30% {fill: #a166ab;}
	40% {fill: #5073b8;}
	50% {fill: #04e5e5;}
	60% {fill: #07b39b;}
	70% {fill: #6fba82;}
	80% {fill: #5073b8;}
	90% {fill: #1098ad;}
	100% {fill: #f37055;}
`

export const Fade = keyframes`
0% {
	opacity: 0;
}
100% {
	opacity: 1;
}
`
