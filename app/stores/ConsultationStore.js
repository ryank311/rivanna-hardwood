import ConsultationActions from 'actions/ConsultationActions';
import alt from 'altInstance';
import { datasource } from 'alt/utils/decorators';
import ConsultationSource from '../sources/ConsultationSource';

@datasource(ConsultationSource)
class ConsultationStore {
  constructor() {
    this.state = {};
    this.bindActions(ConsultationActions);
  }

  onRegisterEmail(email) {
    this.setState({emailSentSuccess: false, emailSentFailure: false});
    this.getInstance().registerEmail({email: email});
  }

  onRegisterEmailSuccess() {
    this.setState({emailSentSuccess: true, emailSentFailure: false});
  }

  onRegisterEmailFailure() {
    this.setState({emailSentSuccess: false, emailSentFailure: true});
  }

  onRequestConsultation(message) {
    this.setState({emailSentSuccess: false, emailSentFailure: false});
    this.getInstance().requestConsultation(message);
  }

  onRequestConsultationSuccess() {
    this.setState({emailSentSuccess: true, emailSentFailure: false});
  }

  onRequestConsultationFailure() {
    this.setState({emailSentSuccess: false, emailSentFailure: true});
  }
}

// Export our newly created Store
export default alt.createStore(ConsultationStore, 'ConsultationStore');
