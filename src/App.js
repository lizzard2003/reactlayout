
import './App.css';

import {Header} from "./Header";

import {Leftside} from "./Leftside";
import {Right} from "./RightSide";
import {Footer} from "./Footer";
import ButtonWithClickCount from './Button';
import CurrentTime from './Timer';

function App() {

  return (
      <table>
          <thead>
          <tr>
              <th colSpan="2"><Header/><ButtonWithClickCount /></th>

          </tr>

          </thead>
          <tbody>
          <tr>
              <td className="leftbox" ><Leftside/></td>

              <td className="rightbox"><Right/></td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
              <td colSpan="2"><CurrentTime /> {/* render CurrentTime component */}<Footer/></td>
          </tr>
          </tfoot>
      </table>
  );
}

export default App;
