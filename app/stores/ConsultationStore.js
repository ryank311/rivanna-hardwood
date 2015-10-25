import ConsultationActions from 'actions/ConsultationActions';
import alt from 'altInstance';
import { datasource } from 'alt/utils/decorators';
import ConsultationSource from '../sources/ConsultationSource';

@datasource(ConsultationSource)
class ConsultationStore {
  constructor() {
    this.state = {};
    this.bindActions(ConsultationActions);
    this.on('error', (error) => {
      console.log(error);
    });
  }

  onRegisterEmail(email) {
    this.setState({emailSentSuccess: false, emailSentFailure: false});
    this.getInstance().registerEmail({email: email});
  }

  onRegisterEmailSuccess(response) {
    this.setState({emailSentSuccess: true, emailSentFailure: false});
    console.log(response);
  }

  onRegisterEmailFailure(response) {
    this.setState({emailSentSuccess: false, emailSentFailure: true});
    console.log(response);
  }

  onRequestConsultation(message) {
    this.setState({emailSentSuccess: false, emailSentFailure: false});
    this.getInstance().requestConsultation(message);
  }

  onRequestConsultationSuccess(response) {
    this.setState({emailSentSuccess: true, emailSentFailure: false});
    console.log(response);
  }

  onRequestConsultationFailure(response) {
    this.setState({emailSentSuccess: false, emailSentFailure: true});
    console.log(response);
  }
  onResetStatus() {
    this.setState({emailSentSuccess: false, emailSentFailure: false});
  }
}

// Export our newly created Store
export default alt.createStore(ConsultationStore, 'ConsultationStore');
