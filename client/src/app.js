import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText, Container,ListGroup,ListGroupItem , Badge} from 'reactstrap';
import * as actions from './actions/actionTeste';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component {

  componentWillMount() {
    this.props.getAll();
  }

  constructor(props){
    super(props);
    this.state = {
      titulo: '',
      descricao: ''
    };

    this.onChangeEvento = this.onChangeEvento.bind(this);
    this.onSubmitEvento = this.onSubmitEvento.bind(this);
    this.remover = this.remover.bind(this);
  };

  onChangeEvento(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmitEvento(e){
    e.preventDefault();
    const post = {
      title: this.state.titulo,
      description: this.state.descricao
    };
    this.props.createPost(post);
    this.setState({
      titulo:'',
      descricao:''
    });
  }
  remover(e){
      this.props.remover(e.target.getAttribute('data-key'));
      console.log(e.target.getAttribute('data-key'));
  }

  render() {
    const {
      clickButton,
      post
    } = this.props;

    const listaTasks = this.props.post.map((task,index) =>
      <ListGroupItem key = {task._id} >
          <h5><Badge pill>{index+1}</Badge><b>{"  " + task.title}</b></h5>
          <p>{task.description}</p>
          <Button key = {task._id} data-key = {task._id} onClick = {this.remover}>Apagar</Button>
      </ListGroupItem>
    );
    return (
     <Container>   
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Título</Label>
          <Input type="text" name="titulo" id="exampleEmail" placeholder="with a placeholder" value = {this.state.titulo} onChange = {this.onChangeEvento}/>
        </FormGroup>
        <FormGroup>
          <Label for="descricao">Descrição</Label>
          <Input type="textarea" name="descricao" id="descricao" value = {this.state.descricao} onChange = {this.onChangeEvento}/>          
        </FormGroup>
        <Button onClick = {this.onSubmitEvento}>Submit</Button>
      </Form>
      <br/>
      <br/>

      <ListGroup>
        {listaTasks}
      </ListGroup>
     </Container>

     
    );
  }
}

const mapStateToProps = store => ({
  post: store.teste.posts
});


export default connect(mapStateToProps, actions)(App);



  