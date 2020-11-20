import { React, Component } from "react";
import Cookies from "js-cookie";
import { Modal, Button } from "react-materialize";

export class CovidModal extends Component {
    constructor() {
        super();
        this.state = {
          spanish: false
        };
      }

    setCookie = () => {
            Cookies.set('closeModal', 'true', { expires: 1 });
          }

          handleToggle = (e) => {
            e.preventDefault();
        
            this.setState({
              spanish: !this.state.spanish,
            });
          };     

    render() {
        let open = this.props.open

        return (
            <div>
                <Modal
          actions={[
            <div style={{ float: "right" }} id="modal-close">
              <Button modal="close" node="button" waves="teal"
              onClick={this.setCookie}>
              {this.state.spanish === false ? "Agree" : "De Acuerdo"}
              </Button>
            </div>,
            <div style={{ float: "left" }}>
              <Button node="button" onClick={this.handleToggle}>
                {this.state.spanish === false ? "Español" : "English"}
              </Button>
            </div>,
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header={this.state.spanish === false ? "Prevent the Spread" : "Prevenir la Propagación"}
          id="Covid-19"
          open={open}
          options={{
            dismissible: true,
            endingTop: "15%",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: false,
            startingTop: "4%",
          }}
        >
          <p className={this.state.spanish === false ? "show-english" : "hide-english"}>
            We are committed to keeping ourselves and our loved ones safe. To help support the
            health and safety of everyone, we would like to remind you of the following:</p>

            <br/>
            <ul className={this.state.spanish === false ? "show-english" : "hide-english"}>
              <li>- Wash your hands frequently</li>
              <li>- Cover your cough or sneeze using your elbow</li>
              <li>- Wear a mask!</li>
              <li>
                - Avoid close contact with others, such as shaking hands, touching, hugging, or
                kissing.
              </li>
              <li>
                - Please do not come if you experience fever, cough, or shortness of breath within
                14 days of December 12th.
              </li>
              <li>
                - Please do not come if you have had close contact with anyone infected with
                Covid-19, including individuals exhibiting Covid-19 symptoms, within 14 days of
                December 12th.
              </li>
            </ul>
            <br/>

          <p className={this.state.spanish === false ? "show-english" : "hide-english"}>
            Thank you for your continued efforts in helping curb the spread of Covid-19.
          </p>

          <p className={this.state.spanish === true ? "show-spanish" : "hide-spanish"}>
          Estamos comprometidos a nuestros seres queridos y a nosotros mismos. Para mantener
          la salud y seguridad de todos, nos gustaría recordarle de lo siguiente:</p>

          <br/>
            <ul className={this.state.spanish === true ? "show-spanish" : "hide-spanish"}>
              <li>- Lávese las manos con frecuencia</li>
              <li>- Cúbrase al toser o estornudar con el codo</li>
              <li>- ¡Usar una máscara!</li>
              <li>
                - Evite el contacto cercano con otras personas, como dar la mano, tocar, abrazar o besar.
              </li>
              <li>
                - Por favor no venga si tiene fiebre, tos o dificultades respirando dentro de 14 días posteriores al 12 de Diciembre.
              </li>
              <li>
                - Por favor no venga si ha tenido contacto cercano con alguien infectado con Covid-19, incluidas personas que presenten 
                síntomas de Covid-19, dentro de 14 días posteriores al 12 de Diciembre.
              </li>
            </ul>
            <br/>
          
          <p className={this.state.spanish === true ? "show-spanish" : "hide-spanish"}>
          Gracias por sus continuos esfuerzos en frenar la propagación del Covid-19.
          </p>
        </Modal>
            </div>
        )
    }
}

export default CovidModal;