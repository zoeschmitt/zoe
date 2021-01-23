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
        <HeroContainer>
            <HeroBg>
                <Particles
                    params={particlesOptions}
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi! I'm Zoe and i'm a software engineer</HeroH1>
                <HeroP>I like bringing idea's to life and working on projects that
                have a positive impact.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover
                    } primary="true" dark="true"
                    >My Work {hover ? <ArrowForward /> : <ArrowRight />}</Button>
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
            "value": 55
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
