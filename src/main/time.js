import { React, Component } from 'react';
import classes from '../style/time.module.css';
import { motion, useAnimation } from "framer-motion";
import { Link } from 'react-router-dom';
import { Container, Col, Row, Form} from 'react-bootstrap';

class Time extends Component {

    date = new Date();
    year = this.date.getFullYear();
    month = this.date.getMonth()+1;
    day = this.date.getDate();
    

    constructor(props){
        super(props);
        this.state = {
            kg: 0,
            time: 0,
            date: ''
        };
        /* IMPORTANT!!!! */
        this.set_kg = this.set_kg.bind(this);
        this.set_time = this.set_time.bind(this);
        this.set_date = this.set_date.bind(this);
        this.pass_check = this.pass_check.bind(this);
        this.store_data = this.store_data.bind(this);
    }

    set_kg(event){
        this.setState({kg: event.target.value},() => { console.log(this.state); });
    }

    set_time(event){
        this.setState({time: event.target.value},() => { console.log(this.state); });
    }

    set_date(event){
        this.setState({date: event.target.value},() => { console.log(this.state); });
    }

    pass_check(){
        if (this.state.kg > 0 && this.state.time > 0 && this.state.date !== ''){
            return true;
        }else{
            return false;
        }
    }

    store_data(){
        localStorage.setItem('kg', this.state.kg);
        localStorage.setItem('time', this.state.time);
        localStorage.setItem('date', this.state.date);
    }

    render(){
        return(
            <div className={classes.time_page}>
                <motion.div 
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type:'spring'}}
                >
                    <Container>
                        <div style={{paddingTop: '50px', textAlign: 'center'}}>
                            <h1 style={{color: '#2c2721'}}>做了多少重量及次數呢?</h1>
                        </div>
                    </Container>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <Container>
                        <Row>
                            <div className={classes.time_row}>
                                <input type="number" min="0" step="0.1" placeholder="公斤數" className={classes.input_box} onChange={this.set_kg}/>
                            </div>   
                        </Row>
                        <Row>
                            <div className={classes.time_row}>
                                <input type="number" min="0" step="1" placeholder="次數" className={classes.input_box} onChange={this.set_time}/>
                            </div>
                        </Row>
                        <Row>
                            <div className={classes.time_row}>
                                <input type="date" className={classes.input_date} onChange={this.set_date}/>
                            </div>
                        </Row>
                        <Row>
                            <Link 
                                to={{
                                    pathname: "/complete"
                                }}
                                className={classes.time_row}
                            >
                                <motion.div>
                                    <button disabled={this.pass_check()? false:true} className={classes.complete_btn} onClick={this.store_data}>完成紀錄!</button>
                                </motion.div>
                            </Link>
                        </Row>  
                    </Container>
                </motion.div>
            </div>
        );
    }
}

export default Time;