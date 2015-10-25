import ConsultationActions from 'actions/ConsultationActions';
import alt from 'altInstance';
import { datasource } from 'alt/utils/decorators';
import ConsultationSource from '../sources/ConsultationSource';

@datasource(ConsultationSource)
class ConsultationStore {

    constructor() {
      this.bindActions(ConsultationActions);
    }

    onRegisterEmail(email) {
      this.getInstance().registerEmail({email: email});
    }

    onRegisterEmailSuccess(response) {
      console.log(response);
    }

    onRegisterEmailFailure(response) {
      console.log(response);
    }

    onRequestConsultation(message) {
      this.getInstance().requestConsultation(message);
    }

    onRequestConsultationSuccess(response) {
      console.log(response);
    }

    onRequestConsultationFailure(response) {
      console.log(response);
    }
}

// Export our newly created Store
export default alt.createStore(ConsultationStore, 'ConsultationStore');
