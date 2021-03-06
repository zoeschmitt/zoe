import React, { useState } from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Particles from 'react-particles-js'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <Particles
                    params={particlesOptions}
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Zoe Schmitt</HeroH1>
                <HeroP>Software Engineer
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='aboutme' smooth={true} duration={500} spy={true} exact='true'  onMouseEnter={onHover} onMouseLeave={onHover
                    } primary="true" dark="true"
                    >About Me {hover ? <ArrowForward style={{transform: `rotate(90deg)`}}/> : <ArrowRight style={{transform: `rotate(90deg)`}}/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

const particlesOptions =
{
    "background": {
        "color": {
            "value": "#fafafa"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    "fpsLimit": 60,
    "interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "onHover": {
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
            },
            "grab": {
                "distance": 400
            }
        }
    },
    "particles": {
        "color": {
            "value": "#48adf5",
            "animation": {
                "speed": 20,
                "sync": false
            }
        },
        "links": {
            "color": {
                "value": "#1b1b1b"
            },
            "distance": 150,
            "enable": true,
            "frequency": 0.5,
            "opacity": 0.22
        },
        "move": {
            "attract": {
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "enable": true,
            "gravity": {
                "maxSpeed": 4
            },
            "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "speed": 4
        },
        "number": {
            "density": {
                "enable": true
            },
            "value": 60
        },
        "opacity": {
            "value": 0.5,
            "animation": {
                "minimumValue": 0.1,
                "speed": 3
            }
        },
        "shape": {
            "options": {
                "polygon": {
                    "nb_sides": 5
                },
            },
            "type": "polygon"
        },
        "size": {
            "random": {
                "enable": true
            },
            "value": 2,
            "animation": {
                "minimumValue": 0.1,
                "speed": 20
            }
        }
    }
}
