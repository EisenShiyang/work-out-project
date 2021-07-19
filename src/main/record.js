import { React, Component } from 'react';
import classes from '../style/record.module.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

class Record extends Component {

    row_data = [
        [
            {
                'name':'arm',
                'title':'手臂'
            },
            {
                'name':'shoulder',
                'title':'肩膀'
            },
            {
                'name':'back',
                'title':'背肌'
            }
        ],
        [
            {
                'name':'breast',
                'title':'胸肌'
            },
            {
                'name':'core',
                'title':'核心肌群'
            },
            {
                'name':'leg',
                'title':'腿部'
            }
        ],
        [
            {
                name:'cardio',
                title:'有氧運動'
            }
        ]
    ]

    set_body_part (part){
        localStorage.setItem('chosen_part', part);
    }

    partVariant = {
        hovered:{
            scale: 1.2
        },
        transition:{
            type: 'spring',
            stiffness: 2000
        }
    }

    render(){
        localStorage.clear('chosen_part');
        return( 
        <div className={classes.record_page}>
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
            >
                <div className={classes.body_list}>
                    <motion.div>
                        <Container>
                            <Row>
                                <Col>
                                    <h1 style={{color: '#2c2721'}}>今日，將乳酸放置於:</h1>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        {
                                                this.row_data.map((row,index) => {
                                                    return(
                                                        <Row key={index} className={classes.body_row}>
                                                            {
                                                                row.map((btn,index) => {
                                                                    return(
                                                                        <Link 
                                                                            to={{
                                                                                pathname: "/facilities"
                                                                            }}
                                                                            key={index}
                                                                        >
                                                                            <motion.button 
                                                                                className={classes.body_btn}
                                                                                onClick={() => this.set_body_part(btn.name)}
                                                                                variants={this.partVariant}
                                                                                whileHover="hovered"
                                                                                transition="transition"
                                                                            >
                                                                                {btn.title}
                                                                            </motion.button>
                                                                        </Link>
                                                                    )
                                                                })
                                                            }
                                                        </Row>
                                                    )
                                                })
                                            }        
                                    </motion.div>
                                </Col>
                            </Row>
                        </Container>
                    </motion.div>
                </div>
            </motion.div>
        </div>
        );
    }
}

export default Record