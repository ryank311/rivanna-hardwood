import alt from '../altInstance';

class ConsultationActions {
  constructor() {
    this.generateActions('registerEmail',
        'registerEmailSuccess',
        'registerEmailFailure',
        'requestConsultation',
        'requestConsultationSuccess',
        'requestConsultationFailure',
        'resetStatus');
  }
}

export default alt.createActions(ConsultationActions);
