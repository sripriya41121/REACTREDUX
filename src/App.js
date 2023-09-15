import react from 'react';
import { connect } from 'react-redux';
import { incplayerone } from './Actions';
import { decplayerone } from './Actions';
import { incplayeroneown } from './Actions';
import { incplayertwo } from './Actions';
import { decplayertwo } from './Actions';

const App = ({playerone, playertwo, incplayerone, decplayerone, incplayertwo, decplayertwo, incplayeroneown}) => {
return (
  <div>
    <center>
      <h3> Playerone Details </h3>
      <p>Name: {playerone.name}|{' '} Score:{playerone.score}</p><br/>
      <button onClick={()=>incplayerone()}>Increament</button>
      <button onClick={()=>decplayerone()}>Decreament</button>
      <button onClick={()=>incplayeroneown()}>Increament:4/6</button>
      <hr/>
      <h3> Playertwo Details </h3>
      <p>Name: {playertwo.name}|{' '} Score:{playertwo.score}</p><br/>
      <button onClick={()=>incplayertwo()}>Increament</button>
      <button onClick={()=>decplayertwo()}>Decreament</button>
    </center>
  </div>
)
}

const mapStateToProps=state=>({
  playerone:state.playerone,
  playertwo:state.playertwo
})

export default connect(mapStateToProps, {incplayerone,decplayerone,incplayeroneown,incplayertwo,decplayertwo})(App);