import { React} from 'react';
import { motion } from "framer-motion";
import classes from '../style/fac.module.css';
import { Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Facilities = () => {

    /* Declare body part and its related facilities */
    const body_part = [
        {
            'name':'arm',
            'fac': ['啞鈴', '槓鈴']
        },
        {
            'name':'shoulder',
            'fac': ['肩部推舉', '啞鈴前平舉', '啞鈴側平舉']
        },
        {
            'name':'back',
            'fac': ['高位拉背', '低位拉背', '羅馬椅']
        },
        {
            'name':'breast',
            'fac': ['平胸握推', '上胸握推', '機械胸推','固定式飛鳥', 'Cable飛鳥']
        },
        {
            'name':'core',
            'fac': ['棒式', '腹捲機', '雙槓曲膝', '羅馬椅']
        },
        {
            'name':'leg',
            'fac': ['史密斯', '倒蹬機', '深蹲架', '坐姿腿伸屈', '俯臥腿部彎舉', '大腿內收']
        },
        {
            'name':'cardio',
            'fac': ['跑步機', '划步機', '踏步機']
        }
    ];

    /* Fetch chosen part from the record page */
    const chosen_part = localStorage.getItem('chosen_part');
    
    /* Framer Motion variant */
    /* btn animation */
    const partVariant = {
        hovered:{
            scale: 1.2
        },
        transition:{
            type: 'spring',
            stiffness: 1000
        }
    }

    const store_data = (fac) => {
        localStorage.setItem('facility', fac);
    }

    /* Function which generates facility buttons based on selected body part */
    const show_body_fac = (part) => {
        switch(part) {
            case 'arm':
                return(
                    <div>
                        {
                            body_part[0].fac.map((name,index) => {
                                return(
                                    <Row key={index} className={classes.btn_row}>
                                        <div className={classes.fac_div}>
                                        <Link 
                                                 to={{
                                                    pathname: "/time"
                                                }}
                                            >
                                                <motion.button 
                                                    className={classes.fac_btn}
                                                    variants={partVariant}
                                                    whileHover="hovered"
                                                    transition="transition"
                                                    onClick={() => store_data(name)}
                                                >
                                                    {name}
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )
            case 'shoulder':
                return(
                    <div>
                        {
                            body_part[1].fac.map((name,index) => {
                                return(
                                    <Row key={index} className={classes.btn_row}>
                                        <div className={classes.fac_div}>
                                            <Link 
                                                 to={{
                                                    pathname: "/time"
                                                }}
                                            >
                                                <motion.button 
                                                    className={classes.fac_btn}
                                                    variants={partVariant}
                                                    whileHover="hovered"
                                                    transition="transition"
                                                    onClick={() => store_data(name)}
                                                >
                                                    {name}
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )
            case 'back':
                return(
                    <div>
                        {
                            body_part[2].fac.map((name,index) => {
                                return(
                                    <Row key={index} className={classes.btn_row}>
                                        <div className={classes.fac_div}>
                                            <Link 
                                                 to={{
                                                    pathname: "/time"
                                                }}
                                            >
                                                <motion.button 
                                                    className={classes.fac_btn}
                                                    variants={partVariant}
                                                    whileHover="hovered"
                                                    transition="transition"
                                                    onClick={() => store_data(name)}
                                                >
                                                    {name}
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )
            case 'breast':
                return(
                    <div>
                        {
                            body_part[3].fac.map((name,index) => {
                                return(
                                    <Row key={index} className={classes.btn_row}>
                                        <div className={classes.fac_div}>
                                            <Link 
                                                 to={{
                                                    pathname: "/time"
                                                }}
                                            >
                                                <motion.button 
                                                    className={classes.fac_btn}
                                                    variants={partVariant}
                                                    whileHover="hovered"
                                                    transition="transition"
                                                    onClick={() => store_data(name)}
                                                >
                                                    {name}
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )
            case 'core':
                return(
                    <div>
                        {
                            body_part[4].fac.map((name,index) => {
                                return(
                                    <Row key={index} className={classes.btn_row}>
                                        <div className={classes.fac_div}>
                                            <Link 
                                                 to={{
                                                    pathname: "/time"
                                                }}
                                            >
                                                <motion.button 
                                                    className={classes.fac_btn}
                                                    variants={partVariant}
                                                    whileHover="hovered"
                                                    transition="transition"
                                                    onClick={() => store_data(name)}
                                                >
                                                    {name}
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )
            case 'leg':
                return(
                    <div>
                        {
                            body_part[5].fac.map((name,index) => {
                                return(
                                    <Row key={index} className={classes.btn_row}>
                                        <div className={classes.fac_div}>
                                            <Link 
                                                 to={{
                                                    pathname: "/time"
                                                }}
                                            >
                                                <motion.button 
                                                    className={classes.fac_btn}
                                                    variants={partVariant}
                                                    whileHover="hovered"
                                                    transition="transition"
                                                    onClick={() => store_data(name)}
                                                >
                                                    {name}
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )
            case 'cardio':
                return(
                    <div>
                        {
                            body_part[6].fac.map((name,index) => {
                                return(
                                    <Row key={index} className={classes.btn_row}>
                                        <div className={classes.fac_div}>
                                            <Link 
                                                 to={{
                                                    pathname: "/time"
                                                }}
                                            >
                                                <motion.button 
                                                    className={classes.fac_btn}
                                                    variants={partVariant}
                                                    whileHover="hovered"
                                                    transition="transition"
                                                    onClick={() => store_data(name)}
                                                >
                                                    {name}
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )        
            default:
                return(
                    <div>
                        ERROR!!
                    </div>
                )
        }
    }

    return(
        <div className={classes.fac_page}>
            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type:'spring' }}
            >
                <motion.div style={{paddingTop: '25px'}}>
                    <Container>
                        { show_body_fac(chosen_part) }
                    </Container>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Facilities;