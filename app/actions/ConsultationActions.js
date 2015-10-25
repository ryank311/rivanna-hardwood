import alt from 'altInstance';

class ConsultationActions {
  constructor() {
    this.generateActions('registerEmail', 'registerEmailSuccess', 'registerEmailFailure', 'requestConsultation', 'registerConsultationSuccess', 'registerConsultationFailure');
  }
}

export default alt.createActions(ConsultationActions);
