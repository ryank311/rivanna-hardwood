import { datasource } from 'alt-utils/lib/decorators';
import alt from '../altInstance';
import ConsultationSource from '../sources/ConsultationSource';
import ConsultationActions from '../actions/ConsultationActions';

@datasource(ConsultationSource)
class ConsultationStore {
  constructor() {
    this.state = {};
    this.bindActions(ConsultationActions);
  }

  onRegisterEmail(email) {
    this.setState({ emailSentSuccess: false, emailSentFailure: false });
    this.getInstance().registerEmail({ email });
  }

  onRegisterEmailSuccess() {
    this.setState({ emailSentSuccess: true, emailSentFailure: false });
  }

  onRegisterEmailFailure() {
    this.setState({ emailSentSuccess: false, emailSentFailure: true });
  }

  onRequestConsultation(message) {
    this.setState({ emailSentSuccess: false, emailSentFailure: false });
    this.getInstance().requestConsultation(message);
  }

  onRequestConsultationSuccess() {
    this.setState({ emailSentSuccess: true, emailSentFailure: false });
  }

  onRequestConsultationFailure() {
    this.setState({ emailSentSuccess: false, emailSentFailure: true });
  }
  onResetStatus() {
    this.setState({ emailSentSuccess: false, emailSentFailure: false });
  }
}

// Export our newly created Store
export default alt.createStore(ConsultationStore, 'ConsultationStore');
